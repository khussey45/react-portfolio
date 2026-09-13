import React from 'react';
import data from '../../data/portfolio';

export default function Research() {
  const studies = data.studies;
  return <section id="research" className="research-page">
    <a className="text-link" href="/">← {studies.backLabel}</a>
    <p className="eyebrow">{studies.title}</p>
    <h1>{studies.heading}</h1>
    <p className="lede">{studies.description}</p>
    <div className="research-topics">
      {studies.topics.map((topic, index) => <a className="research-topic" href={`/research/${topic.slug}`} key={topic.slug}>
        <span className="tiny-label" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <h2>{topic.title}</h2>
      </a>)}
    </div>
    {studies.entries.length > 0 && <div className="study-entries">
      {studies.entries.map(entry => <article className="study-entry" id={entry.id} key={entry.id}>
        <h2>{entry.title}</h2><p className="lede">{entry.summary}</p>
        {entry.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </article>)}
    </div>}
  </section>;
}
