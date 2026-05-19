import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.98 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, y: -40, filter: "blur(10px)", scale: 1.02 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

          <div className="space-y-4 pt-4">
            <a href="mailto:contact@mati.dev" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <div className="bg-purple-500/20 p-3 rounded-xl"><Mail className="text-purple-400" /></div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-slate-400">contact@mati.dev</p>
              </div>
            </a>
            
            <a href="https://github.com/yungm3jt1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <div className="bg-purple-500/20 p-3 rounded-xl"><FaGithub className="text-purple-400 text-xl" /></div>
              <div>
                <h3 className="font-medium text-lg">GitHub</h3>
                <p className="text-slate-400">github.com/yungm3jt1</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/mateusz-tasiemski-2a1a662a4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <div className="bg-purple-500/20 p-3 rounded-xl"><FaLinkedin className="text-purple-400 text-xl" /></div>
              <div>
                <h3 className="font-medium text-lg">LinkedIn</h3>
                <p className="text-slate-400">LinkedIn Profile</p>
              </div>
            </a>
          </div>
        </div>

        <form className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-6 shadow-[0_0_50px_rgba(168,85,247,0.05)]" onSubmit={(e) => e.preventDefault()}>
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