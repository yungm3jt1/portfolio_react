import { Code, Server, Smartphone, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.98 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, y: -40, filter: "blur(10px)", scale: 1.02 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-black text-white px-6 md:px-12 py-20 pb-32"
    >
      <div className="max-w-4xl mx-auto space-y-16 mt-15">
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Hi, I'm Mati! I'm a passionate software developer with a knack for creating
            innovative solutions. I love tackling complex problems and learning new technologies
            to build performant, user-centric applications. With a strong foundation in modern
            web development, I'm always eager to take on the next big challenge.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold border-b border-purple-500/30 pb-2">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <Code className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Frontend Development</h3>
              <p className="text-slate-400 text-sm">React, TypeScript, Next.js, Tailwind CSS, GSAP, Framer Motion.</p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <Server className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Backend Development</h3>
              <p className="text-slate-400 text-sm">Node.js, Express, Firebase, PostgreSQL, MongoDB, Python, Golang, MSSQL.</p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <Smartphone className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Mobile & Tools</h3>
              <p className="text-slate-400 text-sm">React Native, Git, Docker, Figma, Vercel.</p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Learning</h3>
              <p className="text-slate-400 text-sm">Always keeping up with the modern tech stack and architectures.</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
