import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const content = (
    <>
      <div className="absolute z-20 h-screen left-0 right-0 block w-full transition md:hidden top-16 bg bg-[#1c2226]">
        <ul className="p-20 text-xl text-center text-[#fff]">
          <li className="py-4 my-4 border-b border-slate-700">
            <a href="#home">Home</a>
          </li>
          <li className="py-4 my-4 border-b border-slate-700">
            <a href="#about">About</a>
          </li>
          <li className="py-4 my-4 border-b border-slate-700">
            <a href="#skills">Skills</a>
          </li>
          <li className="py-4 my-4 border-b border-slate-700">
            <a href="#projects">Projects</a>
          </li>
          <li className="py-4 my-4 border-b border-slate-700">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="flex items-center justify-between text-[#fff] pt-5 px-10 md:px-16 lg:px-24 xl:px-44 md:pt-10">
        <div className="flex-1 text-xl font-semibold md:text-3xl">M V</div>
        <div className="lg:flex md:flex items-center justify-between text-[#fff] hidden">
          <ul className="flex lg:gap-20 lg:text-lg md:gap-10">
            <li className="hover:text-[#0080FF]">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-[#0080FF]">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[#0080FF]">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-[#0080FF]">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-[#0080FF]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>{isOpen && content}</div>

        <button className="block transition sm:hidden" onClick={handleClick}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
