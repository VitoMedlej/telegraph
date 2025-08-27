import React from 'react';

type UcImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * Base Uploadcare CDN URL, may include existing transformations.
   * Examples:
   * https://ucarecdn.com/<uuid>/
   * https://ucarecdn.com/<uuid>/-/resize/600x/
   */
  src: string;
  /** Desired display width in CSS pixels (container width). */
  widthHint?: number; // If not provided we rely on CSS responsive width
  /** Max width to upscale to (prevent requesting too large images). */
  maxWidth?: number;
  /** Quality preset or number (Uploadcare supports smart, smart_retina, normal, better, lighter, lightest, and numbers like 80) */
  quality?: string | number;
};

// Breakpoints to generate responsive srcset widths
const DEFAULT_WIDTHS = [160, 240, 320, 400, 480, 560, 640, 768, 896, 1024];

function normalizeUrl(url: string) {
  // Ensure URL ends with a slash after UUID before adding transforms if none present
  // Keep existing transforms if already there.
  return url;
}

function appendTransform(base: string, transform: string) {
  if (base.includes('/-/')) {
    // Insert before trailing slash (if any) else append
    const parts = base.split('/-/');
    const head = parts[0];
    const rest = parts.slice(1).join('/-/');
    // If rest already ends with '/', keep consistent
    return `${head}/-/${transform}/${rest}`;
  }
  // No existing transforms
  const trimmed = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${trimmed}/-/${transform}/`;
}

function ensureResize(url: string, targetWidth: number) {
  // If resize already exists we won't duplicate; simplest: always append new resize last (Uploadcare uses last?)
  return appendTransform(url, `resize/${targetWidth}x`);
}

function ensureQuality(url: string, quality: string | number) {
  return appendTransform(url, `quality/${quality}`);
}

export const UcImage: React.FC<UcImageProps> = ({ src , widthHint, maxWidth = 1024, quality = 'lightest', alt = '', ...rest } : any) => {
  if (!src) return null;
  let base = normalizeUrl(src);

  const widths = DEFAULT_WIDTHS.filter(w => w <= maxWidth);
  const srcSet = widths.map(w => {
    let u = ensureResize(base, w);
    u = ensureQuality(u, quality);
    return `${u} ${w}w`;
  }).join(', ');

  const sizes = widthHint ? `(max-width: ${widthHint}px) 100vw, ${widthHint}px` : '100vw';

  // Choose a default (mid) width as fallback
  const fallbackWidth = widthHint ? Math.min(widthHint, maxWidth) : 640;
  let fallback = ensureResize(base, fallbackWidth);
  fallback = ensureQuality(fallback, quality);

  return <img loading="lazy" decoding="async" src={fallback} srcSet={srcSet} sizes={sizes} alt={alt} {...rest} />;
};

export default UcImage;
