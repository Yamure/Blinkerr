import { useState, useEffect } from "react";
import { Experiments, LookingAhead, Rogue, NewBeginnings, Whoa } from "@assets";

const illustrations = [
  { src: Rogue, alt: "Rogue illustration" },
  { src: Whoa, alt: "Whoa illustration" },
  { src: Experiments, alt: "Experiments illustration" },
  { src: LookingAhead, alt: "Looking Ahead illustration" },
  { src: NewBeginnings, alt: "New Beginnings illustration" },
];

const CollectionsMobileIllustration = () => {
  const [currentImage, setCurrentImage] = useState(() => {
    const hour = new Date().getHours();
    return illustrations[hour % illustrations.length];
  });

  useEffect(() => {
    const updateImage = () => {
      const hour = new Date().getHours();
      setCurrentImage(illustrations[hour % illustrations.length]);
    };

    const interval = setInterval(updateImage, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:hidden fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-24 h-24 opacity-50"
        />
      </div>
    </div>
  );
};

export default CollectionsMobileIllustration;
