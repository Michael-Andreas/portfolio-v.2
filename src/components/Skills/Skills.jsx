import "./skills.css";
import HtmlIcon from "../../assets/Skills/html.svg?react";
import CssIcon from "../../assets/Skills/css.svg?react";
import TailwindIcon from "../../assets/Skills/tailwind.svg?react";
import JavascriptIcon from "../../assets/Skills/javascript.svg?react";
import ReactIcon from "../../assets/Skills/react.svg?react";
import NextIcon from "../../assets/Skills/next-js.svg?react";
import GitIcon from "../../assets/Skills/git.svg?react";
import FigmaIcon from "../../assets/Skills/figma.svg?react";

export default function Skills() {
  return (
    <section className="px-4 md:px-16 py-5 bg-slate-600 grid place-items-center">
      <h2 className="text-4xl mb-2">My Techstack</h2>
      <h3 className="text-lg md:text-2xl mt-2 mb-10">
        These are the technologies i use on a daily basis:
      </h3>
      <div className="max-w-6xl grid grid-cols-3 md:grid-cols-4 gap-6">
        <div className="flex flex-col justify-center items-center gap-1">
          <HtmlIcon className="fill-purple-300 w-16" />
          <span className="text-xl font-proteststrike tracking-[0.015em]">
            HTML
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <CssIcon className="fill-purple-300 w-16" />
          <span className="text-xl font-proteststrike tracking-[0.015em]">
            CSS
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <JavascriptIcon className="fill-purple-300 w-16" />
          <span className="text-xl font-proteststrike tracking-[0.015em]">
            Javascript
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <ReactIcon className="fill-purple-300 w-16" />
          <span className="text-xl font-proteststrike tracking-[0.015em]">
            React
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <NextIcon className="fill-purple-300 w-16" />
          <span className="text-xl font-proteststrike tracking-[0.015em]">
            Next.js
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <TailwindIcon className="fill-purple-300 w-16" />
          <span className="text-xl font-proteststrike tracking-[0.015em]">
            Tailwind
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <GitIcon className="fill-purple-300 w-16" />
          <span className="text-xl font-proteststrike tracking-[0.015em]">
            Git
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <FigmaIcon className="fill-purple-300 w-16" />
          <span className="text-xl font-proteststrike tracking-[0.015em]">
            Figma
          </span>
        </div>
      </div>
      {/* <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey 👋 I am <br className="block sm:hidden" />
                Jenny Carter
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
}
