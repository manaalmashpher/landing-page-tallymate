import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = ts.transpileModule(
  readFileSync(new URL("../src/components/page-motion.tsx", import.meta.url), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } },
).outputText;

function mount(reduced = false) {
  const operations = [];
  const observers = [];
  const listeners = new Map();
  const preference = {
    matches: reduced,
    addEventListener: (name, callback) => listeners.set(`preference:${name}`, callback),
    removeEventListener: name => listeners.delete(`preference:${name}`),
  };
  class FakeNode {}
  const sections = [{}, {}];
  const targets = [0, 0, 1].map((section, index) => {
    const target = new FakeNode();
    Object.assign(target, {
      dataset: new Proxy({}, { set(object, key, value) {
        operations.push(`write:${index}`);
        object[key] = value;
        return true;
      } }),
      closest: () => sections[section],
      contains: node => target === node,
      getBoundingClientRect: () => { operations.push(`read:${index}`); return { bottom: 400 }; },
      removeAttribute: () => { delete target.dataset.motion; },
    });
    return target;
  });
  class Observer {
    observed = new Set();
    disconnected = false;
    constructor(callback, options) { this.callback = callback; this.options = options; observers.push(this); }
    observe = target => this.observed.add(target);
    unobserve = target => this.observed.delete(target);
    disconnect = () => { this.disconnected = true; this.observed.clear(); };
    enter = target => this.callback([{ target, isIntersecting: true }]);
  }
  const root = {
    querySelectorAll: () => targets,
    addEventListener: (name, callback) => listeners.set(name, callback),
    removeEventListener: name => listeners.delete(name),
  };
  const document = { getElementById: () => root, activeElement: null };
  let cleanup;
  const exports = {};
  vm.runInNewContext(source, {
    exports,
    require: () => ({ useEffect: callback => { cleanup = callback(); } }),
    document,
    window: { IntersectionObserver: Observer, matchMedia: () => preference },
    IntersectionObserver: Observer,
    Node: FakeNode,
  });
  exports.PageMotion();
  return { operations, observers, targets, sections, preference, listeners, cleanup, document };
}

test("offscreen sections do not cause eager layout; nearby reads precede all writes", () => {
  const app = mount();
  assert.deepEqual(app.operations, []);
  app.observers[1].enter(app.sections[0]);
  assert.deepEqual(app.operations, ["read:0", "read:1", "write:0", "write:1"]);
  assert.equal(app.targets[2].dataset.motion, undefined);
  app.observers[0].enter(app.targets[0]);
  assert.equal(app.targets[0].dataset.motion, "visible");
  assert.equal(app.observers[0].observed.has(app.targets[0]), false);
  app.cleanup();
  assert.ok(app.observers.every(observer => observer.disconnected));
  assert.equal(app.listeners.size, 0);
});

test("reduced motion performs no layout reads and resets pending animation state", () => {
  const reduced = mount(true);
  assert.equal(reduced.observers.length, 0);
  assert.deepEqual(reduced.operations, []);
  reduced.cleanup();
  const app = mount();
  app.observers[1].enter(app.sections[0]);
  app.preference.matches = true;
  app.listeners.get("preference:change")();
  assert.ok(app.targets.every(target => target.dataset.motion === undefined));
  assert.ok(app.observers.every(observer => observer.disconnected));
  app.cleanup();
});

test("keyboard focus keeps content visible before and after observer initialization", () => {
  const app = mount();
  app.document.activeElement = app.targets[0];
  app.observers[1].enter(app.sections[0]);
  assert.equal(app.targets[0].dataset.motion, undefined);
  assert.equal(app.targets[1].dataset.motion, "pending");
  app.listeners.get("focusin")({ target: app.targets[1] });
  assert.equal(app.targets[1].dataset.motion, "visible");
  app.cleanup();
});
