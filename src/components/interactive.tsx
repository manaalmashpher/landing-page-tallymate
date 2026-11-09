"use client";

import { useState } from "react";
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon, ChatCircleDotsIcon, CircleNotchIcon, ListIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-menu" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); event.currentTarget.querySelector('button')?.focus(); } }}><button className="icon-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-links" onClick={() => setOpen(!open)}>{open ? <XIcon size={24} /> : <ListIcon size={24} />}</button>{open && <nav id="mobile-links" aria-label="Mobile navigation"><a href="#what-you-see" onClick={() => setOpen(false)}>What you’ll see</a><a href="#how-it-works" onClick={() => setOpen(false)}>How it works</a><a href="#questions" onClick={() => setOpen(false)}>Try an example</a><a href="#faq" onClick={() => setOpen(false)}>FAQs</a><a href="#book-demo" className="button button-primary" onClick={() => setOpen(false)}>Book a demo <ArrowUpRightIcon size={17} /></a></nav>}</div>;
}

const examples = [
  { question: "Who should I follow up with first?", category: "Customer payments", title: "Start with these overdue payments.", intro: "Three customers owe ₹2,14,300. Here’s who to call first, ordered by the oldest unpaid bill.", headers: ["Customer", "Amount due", "Overdue"], rows: [["Harbour Stores", "₹96,400", "62 days"], ["Palm Retail", "₹74,500", "47 days"], ["Hillview Supplies", "₹43,400", "31 days"]], takeaway: "Check the bills and any recent payments before following up." },
  { question: "Which stock has been sitting too long?", category: "Unsold stock", title: "These items are tying up your cash.", intro: "₹2,76,400 of stock has been held for over 90 days. These are the largest amounts to review.", headers: ["Item", "Stock value", "Held for"], rows: [["Premium mixer units", "₹1,24,800", "126 days"], ["Ceiling fan kits", "₹92,400", "108 days"], ["Water filter sets", "₹59,200", "94 days"]], takeaway: "Review demand before buying more of the same items." },
  { question: "What do I need to pay this week?", category: "Supplier payments", title: "Plan for ₹3,18,200 in supplier bills.", intro: "These three supplier bills fall due this week. Check expected customer collections alongside them.", headers: ["Supplier", "Amount due", "Due"], rows: [["Coastal Distributors", "₹1,56,800", "Monday"], ["Western Electricals", "₹98,600", "Wednesday"], ["Greenway Wholesale", "₹62,800", "Friday"]], takeaway: "An expected collection is not money in the bank. Confirm what has actually arrived." },
];

export function QuestionDemo() {
  const [selected, setSelected] = useState(0);
  const example = examples[selected];
  return <div data-reveal="" className="question-demo"><div className="question-choices"><div role="group" aria-label="Choose an example question">{examples.map((item, index) => <button type="button" key={item.category} aria-pressed={selected === index} onClick={() => setSelected(index)}><span>{item.question}</span><ArrowUpRightIcon size={19} /></button>)}</div><p>Or ask in English, Hindi, Malayalam, Tamil, Hinglish, or Manglish.</p></div>
    <div className="answer-window"><div className="answer-header"><span><ChatCircleDotsIcon size={19} /> Ask your books</span><span className="sample-label">Interactive example</span></div><div key={example.category} className="question-bubble">{example.question}</div><div className="demo-answer" aria-live="polite" aria-atomic="true"><div key={example.category} className="answer-transition"><span className="answer-mark">TallyMate</span><h3>{example.title}</h3><p>{example.intro}</p><div className="answer-table-wrap"><table><caption className="sr-only">{example.category}, fictional example data</caption><thead><tr>{example.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{example.rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div><div className="answer-takeaway"><CheckIcon size={16} /><p>{example.takeaway}</p></div><span className="fiction-note">Fictional names and figures. This example does not query your books.</span></div></div></div>
  </div>;
}

export function DemoRequest() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [setup, setSetup] = useState("TallyPrime on a PC or server");
  const [prepared, setPrepared] = useState(false);
  const body = `Hello ITNET AI,\n\nI would like to book a TallyMate demo.\n\nName: ${name}\nCompany: ${company}\nTally setup: ${setup}\n\nPlease let me know the available times.\n\nThank you.`;
  const href = `mailto:info@itnetai.com?subject=${encodeURIComponent("TallyMate demo enquiry")}&body=${encodeURIComponent(body)}`;
  return <form className="demo-form" onSubmit={event => { event.preventDefault(); setPrepared(true); }}>
    <div className="form-topline"><span>Let’s talk about your business</span><span><CircleNotchIcon size={17} /> Demo enquiry</span></div>
    <div className="form-fields"><div><label htmlFor="demo-name">Your name</label><input id="demo-name" name="name" autoComplete="name" placeholder="Full name" value={name} onChange={event => { setName(event.target.value); setPrepared(false); }} required maxLength={100} /></div><div><label htmlFor="demo-company">Company</label><input id="demo-company" name="company" autoComplete="organization" placeholder="Company name" value={company} onChange={event => { setCompany(event.target.value); setPrepared(false); }} required maxLength={160} /></div></div>
    <label htmlFor="demo-setup">Where do you use Tally?</label><select id="demo-setup" value={setup} onChange={event => { setSetup(event.target.value); setPrepared(false); }}><option>TallyPrime on a PC or server</option><option>Tally Cloud Access</option><option>I’m not sure yet</option></select>
    {prepared ? <div className="enquiry-ready" role="status"><strong>Your email draft is ready.</strong><p>Open it in your email app, review it, and send it to request a demo. Nothing has been sent yet.</p><a className="button button-primary" href={href}>Open email draft <ArrowUpRightIcon size={18} /></a></div> : <button className="button button-primary" type="submit">Prepare demo enquiry <ArrowRightIcon size={18} /></button>}
    <p className="form-note">Opens your email app. Prefer to write directly? <a href="mailto:info@itnetai.com?subject=TallyMate%20demo%20enquiry">info@itnetai.com</a></p>
  </form>;
}
