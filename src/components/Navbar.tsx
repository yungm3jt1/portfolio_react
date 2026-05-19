import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 bg-black/20 border-b border-white/5 backdrop-blur-sm transition-all duration-300">
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
      <Link
        to="/"
        className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] bg-clip-text text-transparent text-xl font-bold tracking-tight"
      >
        M3JT1
      </Link>
      <nav className="flex items-center gap-1 sm:gap-2 relative">
        {NAV_ITEMS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white text-slate-400 z-10 outline-none"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),_0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  >
                    <span className="absolute inset-x-0 top-2 h-3 bg-gradient-to-b from-white/40 to-transparent rounded-full blur-[2px] opacity-70" />
                  </motion.div>
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : ""}`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default Navbar;
