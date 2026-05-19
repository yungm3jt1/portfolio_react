import TypingText from "../components/typingText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import ProjectBox from "../components/projectBox";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const proofsRef = useRef<HTMLDivElement>(null);
  const proofs2Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // CTA Card Tilt Animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const bgPosX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const bgPosY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
  const gradientPosition = useMotionTemplate`${bgPosX}% ${bgPosY}%`;

  const gradientX = useTransform(mouseXSpring, [-0.5, 0.5], [60, -60]);
  const gradientY = useTransform(mouseYSpring, [-0.5, 0.5], [60, -60]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useGSAP(() => {
    // Check if the refs are assigned
    if (!aboutRef.current || !proofRef.current || !proofsRef.current || !proofs2Ref.current || !ctaRef.current || !titleRef.current) return;

    // Use initial fromTo instead of .set and .to to prevent immediate flash
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3500",
        scrub: true,
      },
    });

    // Make elements invisible immediately via styles to avoid layout shift,
    // but GSAP will take over using fromTo
    gsap.set([aboutRef.current, proofRef.current, proofsRef.current, proofs2Ref.current], { autoAlpha: 0, x: 100 });
    gsap.set(ctaRef.current, { autoAlpha: 0, y: 50 });

    tl.to(scrollIndicatorRef.current, {
      opacity: 0,
      duration: 0.1,
    });

    tl.to(titleRef.current, {
      x: 300,
      autoAlpha: 0,
    });

    tl.to(
      aboutRef.current,
      {
        autoAlpha: 1,
        x: 0,
      },
      "+=0.2",
    );
    tl.to(
      aboutRef.current,
      {
        autoAlpha: 0,
        x: -100,
      },
      "+=1",
    );
    tl.to(
      proofRef.current,
      {
        autoAlpha: 1,
        x: 0,
      },
      "+=1",
    );
    tl.to(
      proofRef.current,
      {
        autoAlpha: 0,
        x: -100,
      },
      "+=1",
    );
    tl.to(
      proofsRef.current,
      {
        autoAlpha: 1,
        x: 0,
      },
      "+=1",
    );
    tl.to(
      proofsRef.current,
      {
        autoAlpha: 0,
        x: -200,
      },
      "+=1",
    );
    tl.to(
      proofs2Ref.current,
      {
        autoAlpha: 1,
        x: 0,
      },
      ">",
    );
    tl.to(
      proofs2Ref.current,
      {
        autoAlpha: 0,
        x: -200,
      },
      "+=1",
    );
    tl.to(
      ctaRef.current,
      {
        autoAlpha: 1,
        y: 0,
      },
      "+=1",
    );

    return () => tl.revert();
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      <ReactLenis root>
        <div
          ref={sectionRef}
          className="relative justify-center items-center h-[500vh] bg-black"
        >
        <div
          ref={boxRef}
          className="fixed inset-0 z-10 flex h-screen w-full items-center justify-center flex-col"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10 pointer-events-none" />
          
          <motion.div 
            ref={scrollIndicatorRef}
            className="absolute bottom-10 flex flex-col items-center justify-center gap-2 text-slate-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-sm tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>

          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold absolute bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
            <TypingText />
          </h1>
          <div ref={aboutRef} className="absolute justify-center">
            <p className="text-slate-100 text-center mt-4 max-w-lg text-xl md:text-2xl font-light">
              I'm <span className="font-semibold text-purple-400">Mati</span>, a passionate software developer <br/> with a knack for creating
              innovative solutions.
            </p>
          </div>
          <div ref={proofRef} className="absolute justify-center">
            <p className="text-slate-100 text-center mt-4 max-w-lg text-xl md:text-2xl font-light">
              And here's <span className="font-semibold text-purple-400">proof</span> of that!
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
            description="TechniCodeCamp Hackathon Winner - 1st Place. IntervYou was built in just 24 hours during TechniCodeCamp Hackathon. "
            images={[
              "/intervyou.png"
            ]}
            github="https://github.com/yungm3jt1/CodeReactJS"
            className="absolute"
          />


          <div ref={ctaRef} className="absolute flex flex-col items-center justify-center w-full max-w-3xl p-6 perspective-[1000px]">
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full rounded-[2.5rem] overflow-hidden bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-12 md:p-20 shadow-[0_0_50px_rgba(168,85,247,0.15)] group"
            >
              {/* Dynamic ambient gradient background tied to mouse */}
              <motion.div 
                className="absolute inset-0 opacity-20 -z-10"
                style={{ 
                  background: "radial-gradient(circle at center, rgb(168 85 247 / 0.8) 0%, transparent 60%)",
                  backgroundSize: "200% 200%",
                  backgroundPosition: gradientPosition 
                }} 
              />
              
              {/* Subtle top border glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Diffused background gradients for modern glass effect */}
              <motion.div 
                style={{ translateZ: -50, x: gradientX, y: gradientY }}
                className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" 
              />
              <motion.div 
                style={{ translateZ: -50, x: gradientX, y: gradientY }}
                className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" 
              />
              
              <div className="relative z-10 flex flex-col items-center text-center transition-transform duration-200" style={{ transform: "translateZ(50px)" }}>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
                  Ready to <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-500 bg-[length:250%_250%]"
                    style={{ backgroundPosition: gradientPosition }}
                  >collaborate?</motion.span>
                </h2>
                <p className="text-slate-300 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed drop-shadow">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <Link 
                  to="/contact" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-lg font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  <span className="flex items-center gap-2">
                    Let's talk
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </ReactLenis>
    </div>
  );
}
