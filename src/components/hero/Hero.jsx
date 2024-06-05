import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { Button } from "../ui/button";

export default function Hero() {
  const heroTextRef = useRef();
  const heroImageRef = useRef();

  useGSAP(() => {
    gsap.from(heroTextRef.current, {
      duration: 3,
      x: -100,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.from(heroImageRef.current, {
      duration: 3,
      x: 100,
      opacity: 0,
      ease: "power4.out",
    });
  });

  return (
    <>
      <div className="flex flex-col px-10 md:pt-20 lg:flex-row md:px-16 lg:px-24 xl:px-44">
        <div
          ref={heroTextRef}
          className="text-[#fff] flex flex-col gap-4 mt-20 items-center lg:items-start"
        >
          <h2 className="text-xl lg:text-2xl ">Hello, it's me</h2>
          <h1 className="text-3xl lg:text-4xl">Mario Valentinov</h1>
          <h2 className="text-xl lg:text-2xl ">
            And I'm a <span className="text-[#0080FF]">Web Developer</span>
          </h2>
          <p className="text-xs md:w-2/3 lg:text-sm text-pretty">
            A passionate web developer with a strong interest in crafting robust
            and user-friendly web applications. Always on the lookout for
            exciting opportunities to contribute to innovative projects and
            enhance my skills.
          </p>
          <div className="text-[#0080FF] flex gap-4 pt-2">
            <a className="hover:scale-110 hover:cursor-pointer">
              <ion-icon size="large" name="logo-linkedin"></ion-icon>
            </a>
            <a className="hover:scale-110 hover:cursor-pointer">
              <ion-icon size="large" name="logo-github"></ion-icon>
            </a>
          </div>
          <div className="py-4">
            <Button
              className="bg-[#000] rounded-2xl hover:shadow-sm shadow hover:shadow-[#0080FF] hover:bg-[#0080FF] text-[#fff]"
              size="lg"
              variant="secondary"
            >
              Download CV
            </Button>
          </div>
        </div>
        <div
          ref={heroImageRef}
          className="flex items-center justify-center flex-grow pb-4 lg:justify-end"
        >
          <img
            className="w-[10rem] md:w-[15rem] lg:w-[30rem] rounded-full"
            src="src/assets/Tommys3.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
