import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./Nav";

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
      "span",
      {
        x: -1300,
        color: "#3B82F6",
      },
      {
        color: "#007DBE",
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
      animation: gsap.to(".scrollbox", {
        scale: 0,
        opacity: 0,
      }),
    });
    ScrollTrigger.create({
      trigger: "section>div>div>button",
      start: "top 57%",
      end: "top 32%",
      //markers: true,
      scrub: 2,
      animation: gsap.fromTo(
        ".featureWrapper",
        {
          scale: 0,
          y: 0,
          opacity: 0,
        },
        {
          scale: 1,
          y: -175,
          opacity: 1,
        }
      ),
    });
  }, []);

  return (
    <div className="w-full wrapper relative bg-sky-50">
      <Nav />
      <section className="main1 flex flex-col w-full justify-center items-center text-7xl font-bold font-sans">
        <div className="flex flex-col items-center gap-3 scrollbox">
          <h1>Empowering Young Minds</h1>
          <h1>
            with <span>Legal Wisdom</span>
          </h1>
          <div className="flex mt-10 text-2xl gap-14">
            <button className="light px-3 py-2 text-white font-normal">
              REGISTER NOW
            </button>
            <button className="border-black border-2 px-3 py-2">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section className="featureWrapper flex items-center justify-center flex-col">
        <h1 className="mb-10 text-5xl">OUR FEATURES</h1>
        <div className="features flex gap-5 mt-5">
          <article className=" w-56 h-56 rounded-2xl bg-white border border-gray-300">
            <img
              src="/Images/Authentication.png"
              className="h-4/5 m-auto py-3 px-6"
            />
            <h1 className="text-lg w-full text-center">
              Secure Authentication
            </h1>
          </article>
          <article className=" w-56 h-56 rounded-2xl bg-white border border-gray-300">
            <img src="/Images/Forum.png" className="h-4/5 m-auto py-3 px-6" />
            <h1 className="text-lg w-full text-center">Public Forum</h1>
          </article>
          <article className=" w-56 h-56 rounded-2xl bg-white border border-gray-300">
            <img
              src="/Images/Glossary.png"
              className="h-4/5 m-auto py-3 px-6"
            />
            <h1 className="text-lg w-full text-center">Extensive Glossary</h1>
          </article>
          <article className=" w-56 h-56 rounded-2xl bg-white border border-gray-300">
            <img src="/Images/Learn.png" className="h-4/5 m-auto py-3 px-6" />
            <h1 className="text-lg w-full text-center">Interactive Learning</h1>
          </article>
        </div>
      </section>
      <footer className="absolute w-full bottom-0 h-16 border-t border-gray-400 flex justify-center items-center text-gray-600 font-light text-sm">
        By NexTech
      </footer>
    </div>
  );
};

export default Ordinary;
