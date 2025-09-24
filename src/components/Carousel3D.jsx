import React, { useState, useMemo } from "react";
import "./Carousel3D.css";

/**
 * Carousel3D
 * Usage: <Carousel3D images={["/rotate/image.jpg", "/rotate/image2.jpg"]} />
 * If no images are provided, it will use all available images from the /rotate/ folder
 */
const DEFAULT_IMAGES = [
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.25_0c8a24cd.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.25_b8b3a08b.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.25_ea7f41f6.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.26_38f36622.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.26_87497fd0.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.26_c6da1277.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.27_3caa1b60.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.27_6b0c4ebf.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.28_59eff185.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.28_77326cec.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.28_f823d387.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.29_920a2f3b.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.30_10cff048.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.30_869913f9.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.31_5ad01bea.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.31_8300b5cb.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.31_acfac83f.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.32_063c1990.jpg",
  "/rotate/WhatsApp Image 2025-09-23 at 14.13.32_85f35943.jpg",
];

// Shuffle function to randomize image order
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Fallback placeholder for broken images
const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='300' viewBox='0 0 220 300'%3E%3Crect width='220' height='300' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23D1D5DB' font-family='Arial, sans-serif' font-size='14'%3ECultural Heritage%3C/text%3E%3C/svg%3E";

const Carousel3D = ({ images = DEFAULT_IMAGES }) => {
  const safeImages = Array.isArray(images) && images.length > 1 ? images : DEFAULT_IMAGES;

  // Shuffle images on component mount for random order
  const shuffledImages = useMemo(() => shuffleArray(safeImages), []);

  const [loadedImages, setLoadedImages] = useState(new Set());
  const [errorImages, setErrorImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const handleImageError = (index) => {
    setErrorImages(prev => new Set([...prev, index]));
  };

  return (
    <div className="carousel3d-root">
      <div className="carousel">
        <div className="carousel-rotation-direction">
          <ul
            className="carousel-item-wrapper"
            style={{ "--_num-elements": shuffledImages.length }}
          >
            {shuffledImages.map((src, i) => (
              <li
                key={i}
                className="carousel-item"
                style={{ "--_index": i + 1 }}
                aria-label={`Slide ${i + 1}`}
              >
                <img
                  src={errorImages.has(i) ? FALLBACK_IMAGE : src}
                  alt={`Cultural heritage image ${i + 1}`}
                  className="carousel-image"
                  onLoad={() => handleImageLoad(i)}
                  onError={() => handleImageError(i)}
                  loading="lazy"
                />
                <div className="carousel-overlay"></div>
              </li>
            ))}

            <li className="carousel-ground" aria-hidden="true"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
