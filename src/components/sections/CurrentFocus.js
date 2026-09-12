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
        <h1>{focus.title}</h1>
        <p className="lede">{focus.description}</p>
        <div className="tags">{focus.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="text-link" href="#projects">Explore my projects <span aria-hidden="true">↘</span></a>
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
      </div>}
    </div>
    <div className="intro-note"><span className="tiny-label">A LITTLE CONTEXT</span><p>{data.bio}</p></div>
  </section>;
}
