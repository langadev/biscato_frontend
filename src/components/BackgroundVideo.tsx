import React from 'react';

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/videos/hero-background1.mp4" type="video/mp4" />
     
      Your browser does not support the video tag.
    </video>
  );
}