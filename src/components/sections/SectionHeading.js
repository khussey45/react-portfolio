import React from 'react';
export default function SectionHeading({ number, title }) {
  return <div className="section-label"><span>{number}</span><h2>{title}</h2></div>;
}
