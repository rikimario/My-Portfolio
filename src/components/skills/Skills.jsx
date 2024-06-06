import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillsRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      skillsRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        duration: 3,
        opacity: 1,
        ease: "power4.out",
        x: 0,
        scrollTrigger: {
          trigger: skillsRef.current,
        },
      }
    );
  });

  return (
    <div
      id="skills"
      className="text-[#fff] py-12 pb-4 px-10 md:px-16 lg:px-24 xl:px-44 md:py-10"
    >
      <div ref={skillsRef}>
        <div className="pb-6 text-center">
          <h1 className="pb-6 text-3xl text-center lg:text-4xl">
            My <span className="text-[#0080FF]">Skills</span>
          </h1>
          <p className="text-center text-gray-300">
            The skills, tools and technologies I am familiar with:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 lg:grid-cols-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/javascript.svg"
              alt="JavaScript"
            />
            <p className="py-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-16 h-16" src="src/assets/react.svg" alt="React" />
            <p className="py-2">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/Nextjs.svg"
              alt="Nextjs"
            />
            <p className="py-2">Nextjs</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/typescript.svg"
              alt="TypeScript"
            />
            <p className="py-2">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-16 h-16" src="src/assets/html5.svg" alt="HTML5" />
            <p className="py-2">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-16 h-16" src="src/assets/css3.svg" alt="CSS" />
            <p className="py-2">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/TailwindCSS.svg"
              alt="TailwindCSS"
            />
            <p className="py-2">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/bootstrap.svg"
              alt="Bootstrap"
            />
            <p className="py-2">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/MaterialUI.svg"
              alt="MaterialUI"
            />
            <p className="py-2">MaterialUI</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-16 h-16" src="src/assets/Figma.svg" alt="Figma" />
            <p className="py-2">Figma</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-16 h-16" src="src/assets/Git.svg" alt="Git" />
            <p className="py-2">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/GitHub.svg"
              alt="GitHub"
            />
            <p className="py-2">GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/Postman.svg"
              alt="Postman"
            />
            <p className="py-2">Postman</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/nodejs.svg"
              alt="NodeJS"
            />
            <p className="py-2">NodeJS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="src/assets/mongodb.svg"
              alt="MongoDB"
            />
            <p className="py-2">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-16 h-16" src="src/assets/mocha.svg" alt="Mocha" />
            <p className="py-2">Mocha</p>
          </div>
        </div>
      </div>
    </div>
  );
}
