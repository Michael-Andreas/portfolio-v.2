import { useState } from "react";

export default function Accordion() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div
      className="my-5 border-[1px] border-solid border-violet-400 rounded-md p-4 cursor-pointer"
      onClick={() => setAccordionOpen(!accordionOpen)}>
      <div className="flex justify-between">
        <p>My Journey</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${
            accordionOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-500 ease-in-out`}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div
        className={`text-base grid overflow-hidden transition-all duration-500 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pt-4"
            : "grid-rows-[0fr] opacity-50 pt-0"
        } `}>
        <p className="overflow-hidden">
          After i took my first Steps on Codecademy i decided to approach
          programming more serious and signed myself up for a coding bootcamp.
          These were some of the most challenging 15 weeks of my life. But i
          managed to stick to it and all the little accomplishements every day
          and week kept me going.<br></br> I finished the bootcamp with an
          awesome final project which you can check out at the{" "}
          <a>Projects Section</a>. It was so much fun working on that big
          project with 3 other awesome students from the course. The last 3
          weeks of the online bootcamp were held on site at the coding campus in
          Berlin. Most of the time we were coding, but were also exploring the
          city which just helped bonding together even more.<br></br>
          Read more about what exactly was part of the bootcamps curriculum
          right <a>here.</a>
        </p>
      </div>
    </div>
  );
}
