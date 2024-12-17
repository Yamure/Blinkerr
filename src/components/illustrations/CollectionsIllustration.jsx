import { useState, useEffect } from "react";
import { Experiments, LookingAhead, Rogue, NewBeginnings, Whoa } from "@assets";

const illustrations = [
  { src: Rogue, alt: "Rogue illustration" },
  { src: Whoa, alt: "Whoa illustration" },
  { src: Experiments, alt: "Experiments illustration" },
  { src: LookingAhead, alt: "Looking Ahead illustration" },
  { src: NewBeginnings, alt: "New Beginnings illustration" },
];

const CollectionsIllustration = () => {
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
    <div className="hidden md:block fixed bottom-8 left-8 pointer-events-none">
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        className="w-24 h-24 opacity-50"
      />
    </div>
  );
};

export default CollectionsIllustration;
