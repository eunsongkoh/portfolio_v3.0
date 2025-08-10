interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({
  activeSection,
  scrollToSection,
}: NavigationProps) {
  const navItems = ["about", "experience", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-mono font-medium text-accent-gunmetal tracking-wider">
            song
          </div>
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-mono tracking-widest transition-all duration-300 hover:text-foreground ${
                  activeSection === item
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
