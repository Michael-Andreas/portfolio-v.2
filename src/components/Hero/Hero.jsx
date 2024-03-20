import "./hero.css";
import Portrait from "../../assets/Portrait.png";
import Stroke from "../../assets/stroke.png";
import GitHub from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";

import { useMemo, useSyncExternalStore, useRef } from "react";

function subscribe(callback) {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
}

function useDimensions(ref) {
  const dimensions = useSyncExternalStore(subscribe, () =>
    JSON.stringify({
      width: ref.current?.offsetWidth ?? 0, // 0 is default width
      height: ref.current?.offsetHeight ?? 0, // 0 is default height
    })
  );
  return useMemo(() => JSON.parse(dimensions), [dimensions]);
}

export default function Hero() {
  const ref = useRef(null);
  const { width, height } = useDimensions(ref);
  const imgHeight = height / 1.01;
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 flex-1 p-8 max-w-6xl mx-auto gap-10 mt-auto">
      <div className="lg:place-self-center">
        <h1 className="lg:text-2xl md:my-auto text-center md:text-left">
          <span className="my-[2%] block">Hi, i'm Michael 👋🏻</span>
          <span className="md:text-5xl text-4xl lg:text-7xl block">
            <span className="text-[#940068]">Front</span>end
          </span>
          <span className="md:text-5xl text-4xl lg:text-7xl block">
            Web Developer
          </span>
        </h1>
        <h2 className="lg:text-2xl font-Poppins leading-none my-[4%] text-center md:text-left max-w-96 lg:max-w-none">
          Based in Bad Reichenhall, i help you build beautiful websites your
          users will love.
        </h2>
        <div className="flex justify-center items-center mt-4 md:mt-10 w-full gap-6">
          <a
            className="cursor-pointer"
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer">
            <img
              src={GitHub}
              className="icon p-1 md:p-2 rounded-lg bg-[black] w-10 md:w-16"
            />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/michaelxandreas/"
            target="_blank"
            rel="noreferrer">
            <img
              src={LinkedIn}
              className="icon p-1 md:p-2 rounded-lg bg-[black] w-10 md:w-16"
            />
          </a>
        </div>
      </div>
      <figure className="relative w-60 h-60 md:w-auto md:h-auto mx-auto md:mx-0">
        <div className="relative min-h-full min-w-full top-0 inline-block w-fit inset-0">
          <img
            ref={ref}
            src={Portrait}
            className="portrait max-h-full w-full object-contain absolute mx-auto"
          />
          {/* <img
            src={Stroke}
            className="left-0 right-0 absolute"
            width={width}
            style={{ top: `${imgHeight}px` }}
          /> */}
        </div>
      </figure>
    </div>
  );
}
