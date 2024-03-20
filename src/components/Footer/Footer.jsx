import GitHub from "../../assets/github-footer.svg";
import Linkedin from "../../assets/linkedin-footer.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center p-4 md:p-5 bg-purple-500 text-xs md:text-base md:order-1">
      <p className="">Copyright ©2024 Michael Andreas</p>
      <div className="flex justify-center items-center gap-4 order-1 md:order-2">
        <img
          src={GitHub}
          alt="GitHub Logo"
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <img
          src={Linkedin}
          alt="Linkedin Logo"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      </div>
      <p className="md:order-3">Designed by Michael Andreas</p>
    </footer>
  );
}
