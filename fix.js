const fs = require('fs');

const aboutContent = `import { Code, Server, Smartphone, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-black text-white px-6 md:px-12 py-20 pb-32"
    >
      <div className="max-w-4xl mx-auto space-y-16">
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
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <Code className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Frontend Development</h3>
              <p className="text-slate-400 text-sm">React, TypeScript, Next.js, Tailwind CSS, GSAP, Framer Motion.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <Server className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Backend Development</h3>
              <p className="text-slate-400 text-sm">Node.js, Express, Firebase, PostgreSQL, MongoDB.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <Smartphone className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Mobile & Tools</h3>
              <p className="text-slate-400 text-sm">React Native, Git, Docker, Figma, Vercel.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
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
`;

const contactContent = `import { Mail, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-[calc(100vh-80px)] bg-black text-white px-6 md:px-12 py-20 pb-32 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent mb-4">
              Get in Touch
            </h1>
            <p className="text-slate-300 text-lg">
              Have a question or want to work together? Feel free to reach out through the form or my social channels!
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:contact@mati.dev" className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
              <span>contact@mati.dev</span>
            </a>
            <a href="https://github.com/yungm3jt1" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
              <span>github.com/yungm3jt1</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        <form className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
            <input type="text" id="name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" placeholder="John Doe" />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
            <input type="email" id="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" placeholder="john@example.com" />
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
            <textarea id="message" rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none" placeholder="How can I help you?"></textarea>
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-colors mt-2">
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}
`;

const projectsContent = `import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "CodEdu",
    description: "A platform for learning programming through interactive coding challenges.",
    image: "/codedu.png",
    github: "https://github.com/codedu/codedu",
    website: "https://codedu.pl",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    title: "IntervYou",
    description: "TechniCodeCamp Hackathon Winner - 1st Place. IntervYou was built in just 24 hours during TechniCodeCamp Hackathon.",
    image: "/intervyou.png",
    github: "https://github.com/yungm3jt1/CodeReactJS",
    tags: ["React", "Hackathon", "Winner"]
  },
  {
    title: "memory-leak-crisis",
    description: "Interactive web-based system simulation built with React and Firebase, featuring real-time health monitoring and a Proof-of-Work–based attack mechanic.",
    image: "/memoryleak.png",
    github: "https://github.com/yungm3jt1/memory-leak-crisis",
    tags: ["React", "Firebase", "Simulation", "Security"]
  }
];

export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-[calc(100vh-80px)] bg-black text-white px-6 md:px-12 py-20 pb-32"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent inline-block">
            My Projects
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of things I've built, ranging from hackathon winning tools to interactive simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:bg-white/10 transition-all group flex flex-col">
              <div className="h-48 bg-white/10 relative overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <span className="text-slate-500">No Image</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-slate-400 text-sm flex-grow line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-white/10 gap-4 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
`;

fs.writeFileSync('src/pages/About.tsx', aboutContent);
fs.writeFileSync('src/pages/Contact.tsx', contactContent);
fs.writeFileSync('src/pages/Projects.tsx', projectsContent);
