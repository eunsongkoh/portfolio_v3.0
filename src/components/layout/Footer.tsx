export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-7 font-mono text-xs text-muted">
        © {currentYear} Eunsong Koh
      </div>
    </footer>
  );
}
