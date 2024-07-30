import React, { useState, useEffect } from "react";
import Image from "next/image";

const GoTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="back-top-button"
        onClick={scrollTop}
        style={{
          display: showScroll ? "block" : "none", right: "-100px", width: "300px", border: "3px" , padding: "60px", 
        }}
      >
        <Image
          src="/images/icon.donat.png"
          alt="Blog Post Image"
          width={100}
          height={500}
          style={{ width: "50%", height: "50%" }}
        />{" "}
      </div>
    </>
  );
};

export default GoTop;
