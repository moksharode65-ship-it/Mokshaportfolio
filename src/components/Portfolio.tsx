import { useState } from "react";
import { Play, Menu, X, ExternalLink } from "lucide-react";
import Logo from "./Logo";
import AmbientBackground from "./AmbientBackground";

const GITHUB_URL = "https://github.com/moksharode65-ship-it";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: GITHUB_URL },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "mailto:moksharode65@gmail.com" },
];

const FEATURED_PROJECTS = [
  { name: "Azad Zindagi Foundation", url: "https://azadzindagifoundation.org" },
  { name: "Sahaara Sangati", url: "https://sahaara-sangati.vercel.app" },
  { name: "ZENCHI", url: "https://zenchi-nu.vercel.app" },
  { name: "StandardsAI", url: "https://frontend-silk-delta-80.vercel.app" },
  { name: "Phantom SOS", url: "https://phantom-kohl-kappa.vercel.app" },
];

const SERVICES = [
  "Java & C++ Development",
  "Web Development (React / Node.js)",
  "UI/UX & Web Design",
  "API Integration",
  "Database Design (SQL / MongoDB)",
  "Debugging & QA",
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoNotice, setVideoNotice] = useState(false);
  const currentYear = new Date().getFullYear();

  const handlePlayIntro = () => {
    if (import.meta.env.VITE_INTRO_VIDEO_URL) {
      window.open(import.meta.env.VITE_INTRO_VIDEO_URL, "_blank", "noopener,noreferrer");
    } else {
      setVideoNotice(true);
      window.setTimeout(() => setVideoNotice(false), 2500);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <AmbientBackground />

      <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between py-6">
          <Logo />
          <div className="hidden items-center gap-8 text-sm tracking-wide md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="relative hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:text-primary nav-link"
              >
                {label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:text-primary"
              aria-label="GitHub profile"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          <button
            type="button"
            className="p-2 transition-opacity hover:opacity-70 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
        <div
          className={`fixed inset-0 z-50 bg-black/95 px-5 py-6 backdrop-blur transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          aria-hidden={!menuOpen}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="p-2 transition-opacity hover:opacity-70"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mt-12 flex flex-col gap-6 text-sm tracking-wide">
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={`mobile-${label}`}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* META GRID */}
        <div id="about" className="mt-4 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          <div id="skills">
            <h2 className="text-lg leading-tight tracking-wide md:text-xl">
              <span className="block font-normal">MOKSHA</span>
              <span className="font-pixel block text-2xl md:text-3xl">RODE</span>
            </h2>
            <p className="mt-3 text-[10px] text-white/50">*</p>
            <p className="font-pixel mt-1 text-xs leading-relaxed text-white/60">
              This is my personal
              <br />
              site — where coursework
              <br />
              turns into working code
              <br />
              and clean interfaces
            </p>
          </div>

          <div className="text-right lg:text-left">
            <h2 className="text-lg leading-tight tracking-wide md:text-xl">
              <span className="block font-normal">SOFTWARE &</span>
              <span className="font-pixel block text-2xl md:text-3xl">ENGINEERING</span>
            </h2>
          </div>

          <div id="experience">
            <p className="font-pixel mb-3 text-base uppercase tracking-widest text-white/50">
              What I Do
            </p>
            <p className="max-w-[220px] text-sm leading-relaxed text-white/90">
              I build reliable software and clean interfaces — for real users, not just
              assignments
            </p>
          </div>

          <div id="education" className="text-right lg:text-left">
            <p className="font-pixel mb-3 text-base uppercase tracking-widest text-white/50">
              Services
            </p>
            <ul className="space-y-0.5 text-sm leading-relaxed text-white/90">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1" />

        {/* BOTTOM SECTION */}
        <div className="pb-4">
          <div className="grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-2">
            <div>
              <h1
                className="text-3xl font-normal uppercase tracking-wide sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
                style={{ lineHeight: 0.72 }}
              >
                I TURN THE
                <br />
                <span className="font-pixel inline-block text-[1.25em] font-normal leading-none align-baseline">
                  CURIOUS
                </span>{" "}
                INTO
                <br />
                WORKING CODE &
                <br />
                <span className="font-pixel inline-block text-[1.25em] font-normal leading-none align-baseline">
                  PRODUCTS
                </span>
              </h1>
            </div>

            <div className="flex flex-col justify-end gap-4 sm:gap-6">
              <button
                type="button"
                onClick={handlePlayIntro}
                className="flex items-center gap-3 self-start border border-white/30 bg-white/5 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/10 btn-ripple"
              >
                <Play size={14} fill="white" />
                <span className="text-sm tracking-wider">PLAY INTRO</span>
              </button>
              {videoNotice && (
                <p className="text-xs text-white/50">
                  Add your intro video link to VITE_INTRO_VIDEO_URL in .env to enable this.
                </p>
              )}

              <div className="flex flex-wrap items-stretch gap-2 self-start text-sm text-white/80 sm:gap-3 lg:self-end">
                <div className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 sm:px-4">
                  <span className="text-sm font-bold tracking-tight sm:text-base">CGPA</span>
                  <span className="text-xs text-white/50">7.4/10</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 sm:px-4">
                  <span className="text-lg font-bold sm:text-xl">STACK</span>
                  <span className="text-xs text-white/50">x9</span>
                </div>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 transition-colors hover:bg-[#161616] sm:px-4"
                >
                  <span className="text-[10px] font-bold tracking-tight sm:text-xs">REPOS</span>
                  <span className="text-xs text-white/50">x9</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 border-t border-white/10 pt-4 sm:mt-5 sm:grid-cols-2 sm:gap-4">
            <p className="text-xs text-white/60">
              Open to internships, freelance or entry-level roles.
              <a href="mailto:moksharode65@gmail.com" className="text-red-500 transition-colors hover:text-red-400"> Get in touch</a>
            </p>
            <p className="text-xs text-white/60 sm:text-right">
              B.Tech IT '28 &bull; A. C. Patil College of Engineering &bull; Mumbai, India
              <span className="italic text-white/40 ml-2">{currentYear}</span>
            </p>
          </div>

          <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-white/50">
            <span>Recent builds:</span>
            {FEATURED_PROJECTS.map((project, i) => {
              // Estimate read time: ~200 words/minute, assuming ~80 words per project
              const readTime = Math.ceil(80 / 200) === 1 ? "1 min read" : `${Math.ceil(80 / 200)} min read`;
              return (
                <span key={project.name}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white"
                  >
                    {project.name}
                  </a>
                  {i < FEATURED_PROJECTS.length - 1 && ","}
                  <span className="text-xs text-white/50 ml-2">
                    {readTime}
                  </span>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}