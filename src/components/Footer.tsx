const Footer = () => (
  <footer className="mt-auto bg-slate-950/95 text-slate-100">
    <div className="mx-auto flex w-full max-w-5xl justify-between px-6 py-6 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Moje portfolio. Wszystkie prawa
        zastrzeżone.
      </p>
      <p className="opacity-70">Zbudowano w&nbsp;React i Tailwind CSS</p>
    </div>
  </footer>
);

export default Footer;
