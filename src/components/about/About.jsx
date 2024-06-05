import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef();

  useGSAP(() => {
    gsap.from(aboutRef.current, {
      duration: 5,
      y: 100,
      opacity: 0,
      ease: "power4.out",
    });
  });
  return (
    <div className="text-[#fff] bg-[#25282A] pt-12 pb-12 px-10 md:px-16 lg:px-24 xl:px-44 md:pt-10">
      <div ref={aboutRef}>
        <h1 className="pb-6 text-3xl text-center lg:text-4xl">
          About <span className="text-[#0080FF]">Me</span>
        </h1>
        <p>
          I'm a passionate, self-proclaimed web developer who specializes in web
          development with React. I am very enthusiastic about new technologies
          and eager to learn more. User experience, prefect design, and writing
          clear, readable, highly performant code matters to me.{" "}
        </p>
        <p className="pt-4">
          At the end of 2022 I decided to change my career and peruse a career
          as a developer. I've continued to grow and evolve as a developer,
          taking on new challenges and learning the latest technologies along
          the way. I'm building web applications using modern technologies such
          as React, Next.js, Tailwind and much more.
        </p>
        <p className="pt-4">
          I am very much a progressive thinker and enjoy working on products end
          to end, from idea all the way to development.
        </p>
      </div>
    </div>
  );
}
