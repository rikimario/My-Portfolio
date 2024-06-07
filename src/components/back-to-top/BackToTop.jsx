import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { Button } from "../ui/button";
import { CircleArrowUp, SquareArrowUp } from "lucide-react";

export default function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  });

  const options = {
    duration: 800,
    smooth: true,
  };
  const handleClick = () => {
    animateScroll.scrollToTop(options);
  };
  return (
    <div className="fixed bottom-2 right-2 lg:bottom-4 lg:right-4">
      {backToTop && (
        <Button className="text-gray-300" onClick={handleClick} variant="ghost">
          <SquareArrowUp className="w-8 h-8 md:w-10 md:h-10" />
        </Button>
      )}
    </div>
  );
}
