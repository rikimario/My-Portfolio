import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { toast } = useToast();
  const contactRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.VITE_ACCESS_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      toast({
        variant: "success",
        title: "Your message has been sent.",
      });
    } else {
      console.log("Error", data);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      contactRef.current,
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
          trigger: contactRef.current,
        },
      }
    );
  });
  return (
    <div
      ref={contactRef}
      id="contact"
      className="text-[#fff] flex flex-col gap-4 py-12 pb-4 px-10 md:px-16 lg:px-24 xl:px-44 md:py-10"
    >
      <div className="pb-6 text-center">
        <h1 className="pb-6 text-3xl text-center lg:text-4xl">
          Contact <span className="text-[#0080FF]">Me</span>
        </h1>
        <p className="text-gray-300">
          What's next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:px-36">
          <Input
            className="rounded-xl placeholder:text-gray-500"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <Input
            className="rounded-xl placeholder:text-gray-500"
            type="text"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="py-4 lg:px-36">
          <Textarea
            className="placeholder:text-gray-500 rounded-xl"
            name="message"
            placeholder="Message"
            required
          />
        </div>

        <div className="flex justify-center">
          <Button
            className="bg-[#000] rounded-2xl hover:shadow-sm shadow hover:shadow-[#0080FF] hover:bg-[#0080FF] text-[#fff]"
            size="lg"
            variant="secondary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
      <Toaster className="px-10 py-10" />
    </div>
  );
}
