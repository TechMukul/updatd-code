import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import style from "./index.module.scss";
import Banner2 from "@/Components/banner2/";
import Footer from "@/Components/Footer";
import Image from "next/image";
import WELCOME from '@/public/WELCOME.png';

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
    <div style={{ backgroundColor: "#0b0f18" }}>
      <div className={style.container}>
        <Navbar />
        <div>
          <Image src={WELCOME} alt="welcome here" />
        </div>
        <div className={style.content}>
          <div className="ml-2 xl:ml-20 xl:w-2/3">
            <h1 className={`mt-4 w-full text-3xl xl:w-2/3 xl:text-5xl xl:mt-12  ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
              First initiative in the community 
            </h1>

            <p
              ref={ref}
              className={`mt-4 xl:w-1/2 xl:mt-4 xl:text-justify xl:mt-8 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
            >
              Bringing something unique with a vibrant club, creating
              unforgettable experiences and endless opportunities for growth and
              excitement in the community.
            </p>
            <button
              className="p-4 content-center mt-8 ml-24"
              style={{ backgroundColor: "#006739" }}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Index;
