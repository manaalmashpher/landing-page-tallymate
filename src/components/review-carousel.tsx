const placeholders = [
  { topic: "A clearer view of cash", detail: "Space for an approved owner review about understanding customer dues and upcoming bills." },
  { topic: "Answers without the wait", detail: "Space for an approved owner review about asking questions directly from their books." },
  { topic: "Knowing what needs attention", detail: "Space for an approved owner review about spotting unsold stock and business changes." },
];

export function ReviewCarousel() {
  return <div className="review-carousel" role="region" aria-label="Placeholder customer reviews">
    <p className="review-disclaimer">Three placeholders · No customer testimonials claimed</p>
    <div className="review-viewport" tabIndex={0} aria-label="Automatically scrolling placeholder reviews; focus to pause">
      <div className="review-belt">
        {[0, 1].map(copy => <div className="review-set" key={copy} aria-hidden={copy === 1 ? true : undefined} inert={copy === 1}>
          {placeholders.map((item, index) => <article className="review-card" key={item.topic}>
            <span className="placeholder-label">REVIEW PLACEHOLDER {index + 1}</span>
            <h3>{item.topic}</h3><p>{item.detail}</p>
            <div className="review-attribution"><strong>Customer name pending</strong><span>Role and company pending approval</span></div>
          </article>)}
        </div>)}
      </div>
    </div>
  </div>;
}
