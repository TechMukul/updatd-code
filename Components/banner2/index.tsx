import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import banner2 from "@/public/banner2.png";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      {
        threshold: 0.1, // Adjust this to control when the animation starts
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.left}`}>
        <Image src={banner2} alt="pic" className="h-80" />
      </div>
      <div className={`${styles.right}`}>
        <h1
          ref={ref} // Attach ref to the header
          className={`xl:text-5xl xl:w-full text-3xl transition-opacity duration-1000 ${isVisible ? 'animate-slide-in opacity-100' : 'opacity-0'}`}
        >
          Earn From Referral
        </h1>
        <p
          className={`xl:w-4/5 xl:mt-4 xl:text-justify transition-opacity duration-1000 ${isVisible ? 'animate-slide-in opacity-100' : 'opacity-0'}`}
        >
          Share the joy of Sufficient Premium Club with friends! Earn rewards
          when they join our exclusive in-game services. From discounted packs
          to premium skins, discover more together. Start referring today and
          unlock new levels of gaming enjoyment!
        </p>
      </div>
    </div>
  );
};

export default Index;
