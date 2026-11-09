import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const reports = process.argv.slice(2);
if (!reports.length) {
  console.error("Usage: node scripts/summarize-lighthouse.mjs artifacts/report.json [...]");
  process.exitCode = 1;
} else {
  for (const reportPath of reports) {
    const report = JSON.parse(await readFile(reportPath, "utf8"));
    const summary = {
      url: report.finalDisplayedUrl,
      testedAt: report.fetchTime,
      lighthouseVersion: report.lighthouseVersion,
      formFactor: report.configSettings.formFactor,
      throttlingMethod: report.configSettings.throttlingMethod,
      scores: Object.fromEntries(
        Object.entries(report.categories).map(([name, category]) => [name, Math.round(category.score * 100)]),
      ),
      metrics: Object.fromEntries(
        ["first-contentful-paint", "largest-contentful-paint", "total-blocking-time", "cumulative-layout-shift"].map(
          name => [name, report.audits[name].displayValue],
        ),
      ),
    };
    console.log(JSON.stringify(summary, null, 2));
    const base = reportPath.replace(/\.report\.json$/, "");
    await writeFile(`${base}.summary.json`, `${JSON.stringify(summary, null, 2)}\n`);
    const screenshot = report.audits["final-screenshot"]?.details?.data;
    if (screenshot) {
      const match = screenshot.match(/^data:image\/(jpeg|png);base64,(.+)$/);
      if (match) {
        const imagePath = `${base}.${match[1] === "jpeg" ? "jpg" : "png"}`;
        await writeFile(imagePath, Buffer.from(match[2], "base64"));
        console.log(`Screenshot: ${path.resolve(imagePath)}`);
      }
    }
  }
}
