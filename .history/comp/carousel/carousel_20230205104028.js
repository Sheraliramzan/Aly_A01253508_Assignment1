import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageData } from "./ImageData";

export default function Images() {
  const [current, setCurrent] = useState(0);
  const [imgT, setImgText] = useState("default");

  const prev = () => {
    setCurrent(current === 0 ? ImageData.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === ImageData.length - 1 ? 0 : current + 1);
  };

  const handleTxt = () => {
    if (current === 0) {
      setImgText("Achieve Excellence");
    } else if (current === 1) {
      setImgText("Embrace Innovation");
    } else if (current === 2) {
      setImgText("Champion Diversity");
    } else if (current === 3) {
      setImgText("Pursue Collaboration");
    } else if (current === 4) {
      setImgText("Engage With Respect");
    }
  };
  useEffect(() => {
    handleTxt();
  });

  return (
    <>
      <div className="parent-carousel" id="carouselImage">
        <div className="btns-carousel-container">
          <div className="flex">
            <Image
              src={"/icons/leftArrow.png"}
              width={35}
              height={30}
              onClick={prev}
              alt="left arrow"
            />
          </div>
          <div className="img-text-container">
            <span id="testOnImageHere">{imgText}</span>
          </div>
          <div className="flex">
            <Image
              src={"/icons/rightArrow.png"}
              width={35}
              height={30}
              onClick={next}
              alt="right arrow"
            />
          </div>
        </div>
        <div className="image-carousel">
          <Image
            src={ImageData[current].src || null}
            width={480}
            height={200}
            alt="carousel image"
            className="carousel-image-main"
          />
        </div>
      </div>
    </>
  );
}