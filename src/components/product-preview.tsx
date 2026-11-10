"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon, ChartBarIcon, ChatCircleDotsIcon, CheckIcon, CubeIcon, WalletIcon } from "@phosphor-icons/react/dist/ssr";

// Fictional sample books. These figures are not taken from the product references.
const views = {
  sales: {
    label: "Sales", icon: ChartBarIcon, title: "Sales this month", total: "₹28,42,600", totalNote: "before GST",
    metrics: [{ label: "Billed with GST", value: "₹33,54,268" }, { label: "Average bill", value: "₹32,302" }, { label: "Customers who bought", value: "74" }],
    note: "A view of what sold, and who bought it.",
    attention: [{ label: "Customers with overdue bills", value: "5 customers" }, { label: "Invoices awaiting collection", value: "₹4,18,500" }],
  },
  cash: {
    label: "Cash & bank", icon: WalletIcon, title: "Cash and bank", total: "₹8,26,450", totalNote: "in your books",
    metrics: [{ label: "Cash in hand", value: "₹48,250" }, { label: "In the bank", value: "₹7,78,200" }, { label: "Money in transit", value: "₹1,34,700" }],
    note: "Money in transit has not reached your bank yet.",
    attention: [{ label: "Supplier bills due this week", value: "₹2,18,600" }, { label: "Overdue customer payments", value: "₹3,42,900" }],
  },
  stock: {
    label: "Stock", icon: CubeIcon, title: "Stock on your shelves", total: "₹14,62,800", totalNote: "stock value",
    metrics: [{ label: "Items in stock", value: "96" }, { label: "Held over 90 days", value: "₹2,34,600" }, { label: "Items to reorder", value: "7" }],
    note: "See what is moving and what is tying up cash.",
    attention: [{ label: "Items with no sales in 90 days", value: "12 items" }, { label: "Fast-moving items running low", value: "7 items" }],
  },
};

type View = keyof typeof views;
const viewOrder = Object.keys(views) as View[];

export function ProductPreview() {
  const [view, setView] = useState<View>("sales");
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;

    function configure() {
      clearInterval(timer);
      // Keep hidden browser tabs quiet and honor reduced-motion preferences.
      if (preference.matches || document.hidden) return;
      timer = setInterval(() => {
        setView(current => viewOrder[(viewOrder.indexOf(current) + 1) % viewOrder.length]);
      }, 5000);
    }

    configure();
    preference.addEventListener("change", configure);
    document.addEventListener("visibilitychange", configure);
    return () => {
      clearInterval(timer);
      preference.removeEventListener("change", configure);
      document.removeEventListener("visibilitychange", configure);
    };
  }, [autoPlay]);

  return <div className="product-stage">
    <div className="product-window books-preview" aria-label="Interactive product illustration using fictional data">
      <div className="product-topbar">
        <span className="product-wordmark">tallymate<span>.</span></span>
        <span className="sample-label">Illustrative data</span>
        <span className="company-avatar" aria-label="Example company">MT</span>
      </div>
      <div className="books-company"><span>Malabar Trading Co.</span><span>Sample books</span></div>
      <div className="books-navigation" role="group" aria-label="Explore product views" onFocusCapture={() => setAutoPlay(false)} onPointerDownCapture={() => setAutoPlay(false)}>
        {viewOrder.map(key => {
          const Icon = views[key].icon;
          return <button type="button" key={key} aria-pressed={view === key} onClick={() => { setAutoPlay(false); setView(key); }}>
            <Icon size={16} weight={view === key ? "fill" : "regular"} /><span>{views[key].label}</span>
          </button>;
        })}
        <a href="#questions" onClick={() => setAutoPlay(false)}><ChatCircleDotsIcon size={16} /><span>Ask your books</span></a>
      </div>
      <div className="books-content" aria-live={autoPlay ? "off" : "polite"} aria-atomic="true">
        {viewOrder.map(key => {
          const data = views[key];
          return <div key={key} className={view === key ? "product-view-transition" : undefined} aria-hidden={view !== key} inert={view !== key}>
          <div className="books-summary">
            <div><span className="books-period">This month so far</span><h3>{data.title}</h3></div>
            <div className="books-total"><strong>{data.total}</strong><span>{data.totalNote}</span></div>
          </div>
          <div className="books-metrics">
            {data.metrics.map((metric, index) => <div key={metric.label} className={index === 0 ? "books-metric books-metric-primary" : "books-metric"}>
              <strong>{metric.value}</strong><span>{metric.label}</span>
            </div>)}
          </div>
          <p className="books-note">{data.note}</p>
          <div className="books-attention">
            <h4>Needs your attention</h4>
            {data.attention.map(item => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
            <a href="#questions">Ask about your books <ArrowRightIcon size={12} /></a>
          </div>
        </div>;
        })}
      </div>
      <div className="product-status"><span><CheckIcon size={12} /> Fictional figures</span><span>Read-only. No changes to Tally.</span></div>
    </div>
    <div className="product-caption">A clearer view, from the books you already keep.</div>
  </div>;
}
