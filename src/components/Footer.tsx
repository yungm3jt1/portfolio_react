import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-black border-t border-white/10 text-slate-300">
    <div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row items-center justify-between px-4 md:px-6 py-6 md:py-8">
      <div className="flex flex-col items-center md:items-start gap-2 mb-4 md:mb-0">
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} M3JT1. All rights reserved.
        </p>
        <p className="text-xs text-slate-500">
          Built with React, Tailwind CSS & GSAP.
        </p>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <a
          href="https://github.com/yungm3jt1"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-400 transition-colors"
        >
          <FaGithub className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mateusz-tasiemski-2a1a662a4/"
          className="hover:text-purple-400 transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="mailto:contact@m3jt1.pl"
          className="hover:text-purple-400 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
