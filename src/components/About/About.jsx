import "./about.css";
import ProgrammerSvg from "../../assets/programmer.svg";
import { useRef } from "react";
import Accordion from "./Accordion";

export default function About() {
  const refAccordion = useRef();
  const refSVG = useRef();
  function handleClick() {
    refAccordion.current.style.display == "block"
      ? (refAccordion.current.style.display = "none")
      : (refAccordion.current.style.display = "block");
    refSVG.current.style.transform == "rotate(180deg)"
      ? (refSVG.current.style.transform = "rotate(0deg)")
      : (refSVG.current.style.transform = "rotate(180deg)");
  }
  return (
    <section className="relative bg-slate-600">
      <div aria-hidden="true" className="custom-shape-divider-top-1707964689">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"></path>
        </svg>
      </div>
      <div className="px-6 md:px-16 py-5">
        <h2 id="about" className="text-4xl mb-4 lg:mb-8">
          About me
        </h2>
        <div className="md:grid md:place-items-center grid-cols-2 gap-8">
          <img src={ProgrammerSvg} className="my-4 place-self-start" />
          <div className="md:max-w-[40ch] lg:text-lg mx-auto md:place-self-start">
            <h3 className="text-2xl mb-2 md:mb-4 leading-relaxed">
              Hey there! I{"'"}m a passionate web developer specializing in
              building interactive and dynamic user interfaces with{" "}
              <span className="text-[#077ea4]">React.</span>
            </h3>
            <p>
              My first steps into the world of web development began with basic
              HTML and CSS on{" "}
              <a
                className="text-[#11162f] underline"
                href="https://www.codecademy.com/catalog"
                target="_blank"
                rel="noreferrer">
                Codecademy.
              </a>
              <br></br>I{"'"}ve always had a fascination for digital experiences
              that engage and delight users.
            </p>
            <div className="my-5 border-[1px] border-solid border-violet-400 rounded-md p-4 transition-all ">
              <div
                className="flex justify-between cursor-pointer"
                onClick={handleClick}>
                <p>Besides Coding</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  ref={refSVG}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <p ref={refAccordion} className="hidden pt-6 text-base">
                Beyond coding, i'm also passionate about staying updated with
                the latest trends and best practices in web development and tech
                in general. I'm a firm believer in continuous learning and enjoy
                exploring new technologies and frameworks to enhance my skill
                set further. When I'm not coding, you can find me exploring the
                great outdoors, practicing various martial arts, or diving into
                a good book.
              </p>
            </div>
            <Accordion />
            <p>
              If you're looking for a dedicated web developer with a focus on
              React, feel free to reach out.<br></br>I{"'"}m also willing to
              learn new technologies, be it languages, frameworks or tools.
              <br></br> So let's work and grow together to bring your vision to
              life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
