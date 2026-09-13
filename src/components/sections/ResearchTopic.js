import React from 'react';
import data from '../../data/portfolio';

export default function ResearchTopic({ topic }) {
  const studies = data.studies;
  return <section className="research-page">
    <a className="text-link" href="/research">← {studies.backToResearchLabel}</a>
    <p className="eyebrow">{studies.title}</p>
    <h1>{topic.title}</h1>
    <div className="study-entry">
      <h2>{studies.emptyTitle}</h2>
      <p>{studies.emptyDescription}</p>
    </div>
  </section>;
}
