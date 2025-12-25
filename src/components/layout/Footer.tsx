export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center bg-portfolio-black border-t border-portfolio-border py-10 mt-[60px] relative z-[1]">
      <div className="max-w-xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-0">
        <div className="text-portfolio-gray text-[0.9em] lowercase">
          © {currentYear} Eunsong Koh. all rights reserved.
        </div>
      </div>
    </footer>
  );
}
