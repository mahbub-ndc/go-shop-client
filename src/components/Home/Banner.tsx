import Image from "next/image";
import React from "react";
import heroImage from "../../assets/images/slider-1.png";
import subTitle from "../../assets/images/subtitle.png";

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={heroImage} alt="image" />
          <div className="p-6">
            <Image src={subTitle} alt="image" />
            <h1 className="text-5xl font-bold">The Online Grocery Store</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-accent">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
