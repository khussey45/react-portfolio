import React, { useState } from 'react';
import data from '../../data/portfolio';
export default function CurrentFocus() {
  const focus = data.currentFocus;
  const [activeIndex, setActiveIndex] = useState(0);
  const images = focus.images;
  const activeImage = images[activeIndex];
  const changeImage = (direction) => {
    setActiveIndex(index => (index + direction + images.length) % images.length);
  };
  const handleGalleryKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      changeImage(event.key === 'ArrowLeft' ? -1 : 1);
    }
  };
  return <section id="focus" className="focus-section">
    <div className="intro-line"><span>{data.title}</span><span>{data.contact.location}</span></div>
    <div className="focus-grid">
      <div className="focus-copy">
        <p className="eyebrow"><span className="status-dot" /> CURRENTLY BUILDING</p>
        <h1><span className="hero-name">{data.name}</span><span className="hero-gradient">{focus.title}</span></h1>
        <p className="lede">{focus.description}</p>
        <div className="tags">{focus.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">View my work <span aria-hidden="true">→</span></a>
          <a className="button-outline" href="#contact">Get in touch</a>
        </div>
        <div className="hero-socials">
          <a href={data.contact.github.url} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={data.contact.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={`mailto:${data.contact.email}`}>Email ↗</a>
        </div>
      </div>
      {activeImage && <div className="project-gallery" role="region" aria-roledescription="carousel" aria-label="Robotic arm project images" onKeyDown={handleGalleryKeyDown}>
        <figure className="focus-figure">
          <div className="image-frame" id="current-project-image">
            <span className="image-label">ON THE WORKBENCH / {String(activeIndex + 1).padStart(2, '0')}</span>
            <img src={activeImage.src} alt={activeImage.alt} width="1536" height="1024" />
          </div>
          <figcaption className="gallery-footer">
            <span className="gallery-caption" aria-live="polite" aria-atomic="true">{activeImage.caption}</span>
            {images.length > 1 && <div className="gallery-controls">
              <button type="button" aria-label="Previous project image" aria-controls="current-project-image" onClick={() => changeImage(-1)}>←</button>
              <span className="gallery-counter" aria-live="polite" aria-atomic="true">{activeIndex + 1} / {images.length}</span>
              <button type="button" aria-label="Next project image" aria-controls="current-project-image" onClick={() => changeImage(1)}>→</button>
            </div>}
          </figcaption>
        </figure>
        {images.length > 1 && <div className="gallery-thumbnails" aria-label="Choose project image">
          {images.map((image, index) => <button key={image.src} type="button" aria-label={`Show project image ${index + 1}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)}>
            <img src={image.src} alt="" loading="lazy" width="120" height="80" />
            <span>0{index + 1}</span>
          </button>)}
        </div>}
      </div>}
    </div>
    <div className="intro-note"><span className="tiny-label">A LITTLE CONTEXT</span><p>{data.bio}</p></div>
  </section>;
}
