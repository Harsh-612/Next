"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { gsap } from "gsap";

const forum = () => {
  const [query, setQuery] = useState("");
  const animation = () => {
    const form = document.querySelector("form");
    const formChildren = form.children;
    console.log(formChildren);
    for (let i = 0; i < formChildren.length - 1; i++) {
      gsap.to(formChildren[i], {
        opacity: 0,
        zIndex: -1,
        duration: 0.5,
      });
    }
    gsap.fromTo(
      "form",
      {
        background: "#fff",
      },
      {
        background: "#007DBE",
        duration: 0.5,
      }
    );
    gsap.fromTo(
      ".hiddencontent",
      {
        display: "none",
      },
      {
        display: "block",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".hiddencontent",
      {
        x: -500,
      },
      {
        x: 0,
        delay: 0.5,
        duration: 1,
      }
    );
  };
  const submit = async (e) => {
    e.preventDefault();
    animation();
  };
  useEffect(() => {
    gsap.fromTo(
      ".postbtn",
      {
        x: -150,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "input",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="w-full wrapper relative bg-sky-50">
      <Nav />
      <aside className="fixed border-r border-gray-400 sidebar top-20 left-0 w-1/6 flex flex-col bg-sky-50">
        <h1 className="pl-20 pt-8 pb-3 w-full hover:underline underline-offset-2 cursor-pointer font-semibold">
          Top phrases
        </h1>
        <div className="pl-20 text-sm py-2 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Intellectual theft
        </div>
        <div className="pl-20 text-sm py-2 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Child Labour
        </div>
        <div className="pl-20 text-sm py-2 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Arrest
        </div>
        <div className="pl-20 text-sm py-2 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Lorem
        </div>
        <div className="pl-20 text-sm py-2 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Ipsum
        </div>
      </aside>
      <aside className="fixed right top-20 bg-white up rounded-2xl border border-gray-500 flex flex-col items-center gap-2">
        <h1 className="py-3 w-5/6 text-center border-b border-gray-400 font-semibold">
          Related Posts
        </h1>
      </aside>
      <aside className="fixed right bottom-0 down bg-white rounded-2xl border border-gray-500 flex flex-col items-center gap-2">
        <h1 className="py-3 w-5/6 text-center border-b border-gray-400 font-semibold">
          Popular Users
        </h1>
      </aside>
      <section className="absolute top-20 left-1/6 left-1 flex flex-col items-center w-6/12 glossarySection bg-white border-r border-gray-400">
        <form
          className="flex justify-center py-6 w-full gap-6 border-b border-gray-300 items-center"
          onSubmit={submit}
          action="/submit"
        >
          <input
            type="text"
            placeholder="Your turn: share or ask!"
            className="hover:shadow-2xl border border-gray-500 bg-white text-base px-5 py-1 rounded-full w-3/4"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="light px-4 py-1 text-white font-normal rounded-2xl postbtn">
            Post
          </button>
          <div className="hiddencontent hidden absolute text-xl text-white">
            QUESTION POSTED ✈
          </div>
        </form>
      </section>
    </div>
  );
};

export default forum;
