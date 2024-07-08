"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BImage from "./background.png";

const Timer = ({ time, label }) => (
  <div className="timer w-12 md:w-24 p-3 bg-black bg-opacity-70 backdrop-blur-sm rounded-xl flex flex-col items-center">
    <h3 className="countdown-element font-manrope font-semibold text-xl md:text-2xl text-white text-center">
      {time}
    </h3>
    <p className="text-sm md:text-md uppercase font-normal text-white mt-1 text-center">
      {label}
    </p>
  </div>
);

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const dest = new Date("aug 7, 2024 10:00:00").getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const diff = dest - now;

      if (diff <= 0) {
        clearInterval(x);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : `${days}`,
        hours: hours < 10 ? `0${hours}` : `${hours}`,
        minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      });
    }, 1000);

    return () => clearInterval(x);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Image
        src={BImage}
        alt="waves"
        layout="fill"
        objectFit="cover"
        className="bg-opacity-60"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-4">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <Timer time={timeLeft.days} label="Days" />
          <Timer time={timeLeft.hours} label="Hours" />
          <Timer time={timeLeft.minutes} label="Mins" />
          <Timer time={timeLeft.seconds} label="Secs" />
        </div>
        <div className="inset-0 flex flex-col items-center justify-center  p-4">
          <p className="mt-10 text-6xl text-white font-medium ">TO</p>
          <h1 className="mt-10 mb-10 text-9xl font-medium tracking-tight text-pink-400">
            GAYLE's
          </h1>
          <h1 className="text-6xl font-medium tracking-tight text-white">
            BIRTHDAY
          </h1>
        </div>
      </div>
    </div>
  );
}
