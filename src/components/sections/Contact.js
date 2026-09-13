import React from 'react';
import data from '../../data/portfolio';
import SectionHeading from './SectionHeading';
export default function Contact() {
  return <section id="contact" className="section contact-section"><SectionHeading number="06" title="Contact" /><div className="contact-grid"><div><h3>Have something<br />in mind<span className="accent-text">?</span></h3><p>A project, an interesting idea, or just a hello.<br />Let’s start a conversation.</p><a className="email-link" href={`mailto:${data.contact.email}`}>{data.contact.email} <span aria-hidden="true">↗</span></a></div><div className="contact-links">{[data.contact.github, data.contact.linkedin].map((link, i) => <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>{i === 0 ? 'GitHub' : 'LinkedIn'}<span aria-hidden="true">↗</span></a>)}<p>{data.contact.location}</p></div></div></section>;
}
