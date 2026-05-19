import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
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
      initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.98 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, y: -40, filter: "blur(10px)", scale: 1.02 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[calc(100vh-80px)] bg-black text-white px-6 md:px-12 py-20 pb-32"
    >
      <div className="max-w-6xl mx-auto space-y-12 mt-15">
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
            <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:bg-white/[0.07] transition-all duration-300 group flex flex-col">
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
                      <FaGithub className="w-4 h-4" /> Code
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