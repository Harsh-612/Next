import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const Ordinary = () => {
  useEffect(() => {
    gsap.fromTo(
      "nav",
      {
        y: -100,
      },
      {
        y: 0,
        duration: 1.5,
      }
    );
    gsap.fromTo(
      "nav>div",
      {
        y: -100,
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.5,
        delay: 1.5,
      }
    );
    gsap.fromTo(
      "section>div>h1",
      {
        x: -1300,
        color: "#3B82F6",
      },
      {
        color: "#333333",
        x: 0,
        duration: 2,
        delay: 3,
        ease: "ease-in",
      }
    );
    gsap.fromTo(
      "section>div>div>button",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 5,
      }
    );
  }, []);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "section>div>h1",
      start: "top 25%",
      //markers: true,
      scrub: 2,
      animation: gsap.to("section", {
        scale: 0,
        opacity: 0,
      }),
    });
  }, []);

  return (
    <div className="w-full wrapper relative bg-sky-50">
      <nav className="h-20 w-full border-b border-gray-400 flex px-10 py-8 items-center justify-between bg-white">
        <div className="part1 flex">
          <img
            src="/Images/logo.png"
            width={187}
            height={47}
            alt="Logo"
            className="logo1"
          />
        </div>
        <div className="part2 flex items-center gap-12 text-xl">
          <Link href="learn">
            <div>Learn</div>
          </Link>
          <Link href="glossary">
            <div>Glossary</div>
          </Link>
          <Link href="forum">
            <div>Forum</div>
          </Link>
          <Link href="account">
            <button className="light h-full py-1 px-2 rounded text-white">
              Account
            </button>
          </Link>
        </div>
      </nav>
      <section className="main1 flex w-full justify-center items-center text-7xl font-bold font-sans">
        <div className="flex flex-col items-center gap-3">
          <h1>Empowering Young Minds</h1>
          <h1>with <span>Legal</span> Wisdom</h1>
          <div className="flex mt-10 text-2xl gap-10">
            <button className="light px-2 py-1 text-white font-normal">
              REGISTER NOW
            </button>
            <button className="border-black border-2 px-2 py-1">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <footer className="absolute w-full bottom-0 h-16 border-t border-gray-400 flex justify-center items-center text-gray-300 font-light text-sm">
        By NexTech
      </footer>
    </div>
  );
};

export default Ordinary;
