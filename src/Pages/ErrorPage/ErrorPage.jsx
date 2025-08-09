import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/s1Kar1BL3I.json";
import { Link } from 'react-router';

export default function ErrorPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="text-center">

      <Lottie options={defaultOptions} height={400} width={800} />

 <Link to="/">
        <button className="btn btn-primary">Go To Home</button>
      </Link>
    </div>
  );
}
