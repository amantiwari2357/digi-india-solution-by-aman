"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// import "../style/animation.css";
// import "animate.css";
const AnimatedCross = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const calculateTranslation = () => {
    const scrollSpeed = 2;
    return scrollPosition * scrollSpeed;
  };
  const translationX = calculateTranslation();

  return (
    <div
      className="animated-cross"
      style={{
        position: "relative",
        width: "100%",
        height: "230px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Image
        src="/images/animation.png"
        alt="Animation"
        width={900}
        height={100}
        style={{
          position: "absolute",
          top: "0%",
          left: "-30%",
          transform: `translateX(${translationX}px) rotate(5deg)`,
          zIndex: "9999",
          height: "220px",
        }}
      />
      <Image
        src="/images/animation 1.png"
        alt="Animation 2"
        width={900}
        height={100}
        style={{
          position: "absolute",
          top: "0%",
          left: "30%",
          transform: `translateX(${-translationX}px) rotate(-5deg)`,
          height: "220px",
        }}
      />
    </div>
  );
};
// import "../style/animation.css";
const MyPage = () => {
  return (
    <div>
      <AnimatedCross />
      <div className="content-section">
        <h2>We Don't Just Design <span>We Innovate We Inspire</span></h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '80px', borderRadius: '50%',}}>{[
            { src: "/images/branding.png", alt: "Branding & Packaging", title: "Branding & Packaging" },
            { src: "/images/stationary.png", alt: "Stationary", title: "Stationary" },
            { src: "/images/outdoor.png", alt: "Outdoor Advertising", title: "Outdoor Advertising" },
            { src: "/images/illustration.png", alt: "Illustration", title: "Illustration" },
            { src: "/images/social.png", alt: "Social Media", title: "Social Media" },
            // { src: "/images/video.png", alt: "Video Editing", title: "Video Editing" },
            { src: "/images/uiux.png", alt: "UI/UX", title: "UI/UX" },
            // { src: "/images/uiux.png", alt: "Photography", title: "Photography" },
          ].map((item, index) => (
            <div
              key={index}
              className="service-box"
              style={{
                backgroundColor: 'black',
                padding: '20px',
                borderRadius: '25px',
                // boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                width: '220px',
                height: '120px',
                alignItems: 'center',
                // textAlign: 'center',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'column',
                // borderStyle: 'solid',
                // borderWidth: '1px 1px 1px 1px',
                // borderColor: '#4444',
                // paddingRight: '20px',
                // fontcolor: 'white',
                
              }}
            >
              <Image src={item.src} alt={item.alt} width={90} height={50} style={{ marginBottom: '10px' }} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
        <button
  onClick={() => (window.location.href = "/Contact")} // Moved onClick to attribute
  style={{
    backgroundColor: '#FFCC00',
    color: '#000000',
    padding: '14px 30px',
    borderRadius: '14px',
    marginTop: '20px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'sans-serif',
    fontSize: '18px',
    fontWeight: '700',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#3C3C3',
  }}
>
  LET'S GET CREATIVE! →
</button>

      </div>
    </div>
  );
};

export default MyPage;
