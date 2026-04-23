import { Link, NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-[#7A1CAC]/25 text-white shadow-sm"
      : "text-slate-200 hover:text-white hover:bg-white/10",
  ].join(" ");

const Navbar = () => (
  <header className="bg-black text-white shadow-sm sticky top-0 w-full z-10">
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
      <Link
        to="/"
        className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent text-xl font-semibold tracking-tight"
      >
        M3JT1
      </Link>
      <nav className="flex items-center gap-2">
        {NAV_ITEMS.map(({ to, label }) => (
          <NavLink key={to} to={to} className={navLinkClass}>
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default Navbar;
