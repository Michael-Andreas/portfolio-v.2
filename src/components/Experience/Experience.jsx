import "./experience.css";
import { useState } from "react";

export default function Experience() {
  const [currentTab, setCurrentTab] = useState([
    { id: "Job", active: true },
    { id: "Bootcamp", active: false },
    { id: "Education", active: false },
  ]);

  function handleTabs(currentId) {
    const newTab = currentTab.map((tab) => {
      if (tab.id === currentId.target.id) {
        return { ...tab, active: true };
      } else {
        return { ...tab, active: false };
      }
    });
    setCurrentTab(newTab);
  }
  console.log(currentTab[0].active);
  return (
    <section className="bg-slate-600  px-6 md:px-16 py-5">
      <h2 id="about" className="text-4xl mb-10 lg:mb-8">
        Experience
      </h2>
      {/* <div className="grid grid-cols-3">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl self-center mb-2 md:mb-4">Job</h3>
          <h4>12/2022 - 08/2023</h4>
          <h5>Full Stack Web Developer</h5>
          <h6>Lean Design GmbH</h6>
          <ul>
            <li>Developement of Full Stack Applications with Next.js</li>
            <li>We used DATO as our content management system</li>
            <li>mainly Tailwind for styling</li>
            <li>Animations with framer motion</li>
          </ul>
        </div>
        <div className="h-full w-1 bg-purple-500 place-self-center relative">
          <div className="absolute top-2/4 -translate-y-2/4 w-4 h-4 -left-[6px] rounded-full bg-slate-600 border-solid border-4 border-purple-500"></div>
        </div>
        <div className="flex flex-col w-full">
          <div className="mb-2 md:mb-4">
            <h3 className="text-2xl self-center mb-2 md:mb-4">Education</h3>
            <h4>09/2023 - present</h4>
            <h5>Self study and online courses</h5>
            <ul>
              <li>Developement of my new portfolio page</li>
              <li>working on personal projects</li>
              <li>CSS Course on www.designcourse.com</li>
              <li>Courses on scrimby</li>
            </ul>
          </div>
          <div className="mb-2 md:mb-4">
            <h3 className="text-2xl self-center mb-2 md:mb-4">Education</h3>
            <h4>09/2023 - present</h4>
            <h5>Self study and online courses</h5>
            <ul>
              <li>Developement of my new portfolio page</li>
              <li>working on personal projects</li>
              <li>CSS Course on www.designcourse.com</li>
              <li>Courses on scrimby</li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="flex gap-20">
        <div className="grid grid-rows-3 h-min">
          <div
            id="Job"
            onClick={(event) => handleTabs(event)}
            className={`flex items-center py-4 px-8 border-solid border-4 border-t-0 border-b-0 border-r-0 text-xl cursor-pointer transition-all duration-600 ease-in-out ${
              currentTab[0].active
                ? "border-l-indigo-500 "
                : "border-l-slate-500"
            }`}>
            Job
          </div>
          <div
            id="Bootcamp"
            onClick={(event) => handleTabs(event)}
            className={`flex items-center py-4 px-8 border-solid border-4 border-t-0 border-b-0 border-r-0 text-xl cursor-pointer transition-all duration-600 ease-in-out ${
              currentTab[1].active
                ? "border-l-indigo-500 "
                : "border-l-slate-500"
            }`}>
            Bootcamp
          </div>
          <div
            id="Education"
            onClick={(event) => handleTabs(event)}
            className={`flex items-center py-4 px-8 border-solid border-4 border-t-0 border-b-0 border-r-0 text-xl cursor-pointer transition-all duration-600 ease-in-out ${
              currentTab[2].active
                ? "border-l-indigo-500 "
                : "border-l-slate-500"
            }`}>
            Education
          </div>
        </div>
        <div
          id="Job"
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            currentTab[0].active
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity 50"
          }`}>
          <div className="overflow-hidden">
            <h4 className="text-2xl mb-1">
              Full Stack Developer <span className="text-purple-400">@</span>{" "}
              Lean Design
            </h4>
            <p className="text-xs mb-8">December 2022 - August 2023</p>
            <ul className="list text-lg space-y-3 max-w-4xl">
              <li>
                Development of Full Stack Web Aplications in cooperation with
                the design team
              </li>
              <li>
                We used Next.js for our Front- and Backend, with DATO as the CMS
                ,Tailwind for styling and Framer Motion for animations
              </li>
              <li>
                I solely developed a Web Application for Bugatti which could
                generate Wallpapers for Smarthphones, displaying a unique
                QR-Code, background and details about the employee. Scanning the
                QR-Code would add a new contact to your smartphone with all the
                infos from the employees, for customers at exhibitions.
              </li>
              <li>
                Helped on other projects were i developed search, filters, image
                generation and image download.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
