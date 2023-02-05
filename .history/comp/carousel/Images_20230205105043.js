import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageData } from "./ImageData";

export default function Images() {
  const [imgC, setImgC] = useState(0);
  const [imgT, setImgT] = useState("default");

  const prev = () => {
    setImgC(imgC === 0 ? ImageData.length - 1 : imgC - 1);
  };

  const next = () => {
    setImgC(imgC === ImageData.length - 1 ? 0 : imgC + 1);
  };

  const handleTxt = () => {
    if (imgC === 0) {
      setImgT("Achieve Excellence");
    } else if (imgC === 1) {
      setImgT("Embrace Innovation");
    } else if (imgC === 2) {
      setImgT("Champion Diversity");
    } else if (imgC === 3) {
      setImgT("Pursue Collaboration");
    } else if (imgC === 4) {
      setImgT("Engage With Respect");
    }
  };
  useEffect(() => {
    handleTxt();
  });

  return (
    <>
      <div className="full" id="carouselImage">
        <div className="btncont">
          <div className="flexbox">
            <Image
              src={"/icons/leftArrow.png"}
              width={35}
              height={30}
              onClick={prev}
              alt="left arrow"
            />
          </div>
          <div className="imgcontain">
            <span id="testOnImageHere">{imgT}</span>
          </div>
          <div className="flexbox">
            <Image
              src={"/icons/rightArrow.png"}
              width={30}
              height={30}
              onClick={next}
              alt="right arrow"
            />
          </div>
        </div>
        <div className="imagecar">
          <Image
            src={ImageData[imgC].src || null}
            width={400}
            height={200}
            alt="carousel image"
            className="imgmain"
          />
        </div>
      </div>
    </>
  );
}