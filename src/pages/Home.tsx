import TypingText from "../components/typingText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import ProjectBox from "../components/projectBox";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const proofsRef = useRef<HTMLDivElement>(null);
  const proofs2Ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2800",
        scrub: true,
      },
    });

    tl.to(titleRef.current, {
      x: 300,
      opacity: 0,
    });

    tl.from(
      aboutRef.current,
      {
        opacity: 0,
        x: 100,
      },
      "+=0,2",
    );
    tl.to(
      aboutRef.current,
      {
        opacity: 0,
        x: -100,
      },
      "+=1",
    );
    tl.from(
      proofRef.current,
      {
        opacity: 0,
        x: 100,
      },
      "+=1",
    );
    tl.to(
      proofRef.current,
      {
        opacity: 0,
        x: -100,
      },
      "+=1",
    );
    tl.from(
      proofsRef.current,
      {
        opacity: 0,
        x: 100,
      },
      "+=1",
    );
    tl.to(
      proofsRef.current,
      {
        opacity: 0,
        x: -200,
      },
      "+=1",
    );
    tl.from(
      proofs2Ref.current,
      {
        opacity: 0,
        x: 100,
      },
      ">",
    );
    tl.to(
      proofs2Ref.current,
      {
        opacity: 0,
        x: -200,
      },
      "+=1",
    );

    return () => tl.revert();
  }, []);

  return (
    <ReactLenis root>
      <div
        ref={sectionRef}
        className="relative justify-center items-center h-[1000vh] bg-black"
      >
        <div
          ref={boxRef}
          className="fixed inset-0 z-10 flex h-screen w-full items-center justify-center flex-col"
        >
          <h1 ref={titleRef} className="text-3xl font-bold  absolute">
            <TypingText />
          </h1>
          <div ref={aboutRef} className="absolute justify-center">
            <p className="text-slate-100 text-center mt-4 max-w-lg text-lg ">
              I'm a passionate software developer with a knack for creating
              innovative solutions.
            </p>
          </div>
          <div ref={proofRef} className="absolute justify-center">
            <p className="text-slate-100 text-center mt-4 max-w-lg text-lg ">
              And here's proof of that!
            </p>
          </div>
          <ProjectBox
            ref={proofsRef}
            title="CodEdu"
            description="A platform for learning programming through interactive coding challenges."
            images={[
              "/codedu.png",
              "/codedu2.png",
              "/codedu3.png",
              "/codedu4.png",
            ]}
            github="https://github.com/codedu/codedu"
            website="https://codedu.pl"
            className="absolute"
          />
          <ProjectBox
            ref={proofs2Ref}
            title="IntervYou"
            description="TechniCodeCamp Hackathon Winner - 1st Place. IntervYou was built in just 24 hours during TechniCodeCamp Hackathon. Our team of four developers worked non-stop to bring this idea to life:

Despite the time constraints and challenges, we successfully delivered a fully functional prototype that impressed the judges and secured us the 1st place prize."
            images={[
              "/codedu.png",
              "/codedu2.png",
              "/codedu3.png",
              "/codedu4.png",
            ]}
            github="https://github.com/yungm3jt1/CodeReactJS"
            className="absolute"
          />
        </div>
      </div>
    </ReactLenis>
  );
}
