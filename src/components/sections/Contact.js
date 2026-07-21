import React from 'react';
import portfolioData from '../../data/portfolio';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const { contact } = portfolioData;

  const rows = [
    { label: 'email', value: contact.email, href: `mailto:${contact.email}` },
    { label: 'github', value: contact.github.label, href: contact.github.url },
    { label: 'linkedin', value: contact.linkedin.label, href: contact.linkedin.url },
    { label: 'location', value: contact.location },
  ];

  return (
    <section id="contact" className="py-24 max-w-3xl mx-auto px-6">
      <SectionHeading number="05" title="Contact" />
      <p className="text-fog-300 mb-8 leading-relaxed">
        I'm open to new opportunities and interesting projects. The fastest way
        to reach me is email — I'll get back to you as soon as I can.
      </p>
      <div className="rounded-lg border border-ink-800 bg-ink-900 p-6 font-mono text-sm space-y-3">
        {rows.map((row) => (
          <p key={row.label} className="flex flex-wrap gap-x-3">
            <span className="text-fog-500 w-20">{row.label}:</span>
            {row.href ? (
              <a
                href={row.href}
                target={row.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-4 break-all"
              >
                {row.value}
              </a>
            ) : (
              <span className="text-fog-300">{row.value}</span>
            )}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Contact;
