import React, { useState } from 'react';

interface DishGalleryProps {
  images: string[];
  title: string;
}

export const DishGallery: React.FC<DishGalleryProps> = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-[416px] shrink-0 max-[1000px]:w-[340px] max-[768px]:w-full">
      <img src={images[activeIndex]} alt={title} className="aspect-[416/317] w-full object-cover" />
      <div className="mt-6 grid grid-cols-3 gap-6 max-[480px]:gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Фото ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          >
            <img src={image} alt="" className="aspect-[122/93] w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
