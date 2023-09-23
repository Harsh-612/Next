import Link from "next/link";
import React from "react";
const account = () => {
  return (
    <div className="w-full wrapper relative bg-sky-50">
      <nav className="h-20 w-full border-b border-gray-400 flex px-10 py-8 items-center justify-between bg-white">
        <div className="part1 flex">
          <Link href="/">
            <img
            src="/Images/logo.png"
            width={187}
            height={47}
            alt="Logo"
            className="logo1"
          />
          </Link>    
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
    </div>
  );
};

export default account;
