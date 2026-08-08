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
    <section id="contact" className="contact-section py-32 px-6 border-t border-ink-800">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16">
      <div>
        <SectionHeading number="05" title="Contact" />
        <p className="contact-lede text-fog-100 font-bold tracking-[-0.045em] leading-[1.05]">
          Have a useful problem?<br /><a className="text-accent hover:text-fog-100 transition-colors" href={`mailto:${contact.email}`}>Let’s build through it.</a>
        </p>
      </div>
      <div className="font-mono text-sm border-t border-ink-700 pt-4">
        {rows.map((row) => (
          <p key={row.label} className="flex flex-col sm:flex-row gap-2 sm:gap-5 py-4 border-b border-ink-800">
            <span className="text-fog-500 sm:w-20 uppercase text-[10px] tracking-widest">{row.label}</span>
            {row.href ? (
              <a
                href={row.href}
                target={row.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-fog-100 hover:text-accent transition-colors break-all"
              >
                {row.value}
              </a>
            ) : (
              <span className="text-fog-300">{row.value}</span>
            )}
          </p>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Contact;
