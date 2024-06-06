import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const firstProjectRef = useRef();
  const secondProjectRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      firstProjectRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        duration: 3,
        opacity: 1,
        ease: "power4.out",
        x: 0,
        scrollTrigger: {
          trigger: firstProjectRef.current,
        },
      }
    );
    gsap.fromTo(
      secondProjectRef.current,
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
          trigger: secondProjectRef.current,
        },
      }
    );
  });

  return (
    <div
      id="projects"
      className="text-[#fff] flex flex-col gap-4 bg-[#25282A] py-12 pb-4 px-10 md:px-16 lg:px-24 xl:px-44 md:py-10"
    >
      <div className="pb-6 text-center">
        <h1 className="pb-6 text-3xl text-center lg:text-4xl">
          My <span className="text-[#0080FF]">Projects</span>
        </h1>
      </div>
      {/* First Project */}
      <div
        ref={firstProjectRef}
        className="pb-12 lg:flex bg-[#1c2226] rounded-3xl"
      >
        <div className="lg:min-w-[450px] p-4">
          <img
            src="src/assets/cinemania-hub.png"
            alt="cinemania-hub"
            className="w-full"
          />
        </div>

        <div className="p-4 lg:pl-16 bg-[#1c2226] rounded-3xl">
          <h1 className="pb-6 text-xl md:text-2xl">Cinemania Hub</h1>
          <p className="pb-6 text-sm text-gray-300">
            Cinemania Hub is a smaller version of the popular website IMDb,
            built specifically for movie enthusiasts. It allows users to
            discover and explore movies, view ratings and reviews from other
            users, and even create their own account.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              React
            </span>
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              Tailwind
            </span>
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              MongoDB
            </span>
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              Express
            </span>
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              Shadcn/Ui
            </span>
          </div>
        </div>
      </div>

      {/* Second Project */}
      <div
        ref={secondProjectRef}
        className="pb-12 flex-col-reverse flex lg:flex lg:flex-row bg-[#1c2226] rounded-3xl"
      >
        <div className="p-4 lg:pl-16 bg-[#1c2226] rounded-3xl">
          <h1 className="pb-6 text-xl md:text-2xl">Cinemania Hub</h1>
          <p className="pb-6 text-sm text-gray-300">
            Cinemania Hub is a smaller version of the popular website IMDb,
            built specifically for movie enthusiasts. It allows users to
            discover and explore movies, view ratings and reviews from other
            users, and even create their own account.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              React
            </span>
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              Tailwind
            </span>
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              MongoDB
            </span>
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              Express
            </span>
            <span className="rounded-full p-2 bg-[#374151] text-gray-300">
              Shadcn/Ui
            </span>
          </div>
        </div>
        <div className="lg:pb-12 lg:flex bg-[#1c2226] rounded-3xl">
          <div className="lg:min-w-[450px] p-4">
            <img
              src="src/assets/cinemania-hub.png"
              alt="cinemania-hub"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
