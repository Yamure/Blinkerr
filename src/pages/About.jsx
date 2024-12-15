import Navigation from "@components/Navigation";
import { Pondering, Reflecting, MeelaPantalones, Pacheco, PolkaPup } from "@assets";

const About = () => {
  return (
    <div className="min-h-screen grainy bg-[#FAFAF9] relative">
      <Navigation currentPage="about" />

      {/* Decorative SVGs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img
          src={MeelaPantalones}
          alt="Meela illustration"
          className="absolute top-28 right-16 w-20 h-20 opacity-30"
        />
        <img
          src={PolkaPup}
          alt="Polka Pup illustration"
          className="absolute top-40 left-12 w-16 h-16 opacity-30"
        />
        <img
          src={Pondering}
          alt="Pondering illustration"
          className="absolute bottom-8 right-8 w-24 h-24 opacity-50"
        />
        <img
          src={Reflecting}
          alt="Reflecting illustration"
          className="absolute bottom-8 left-8 w-24 h-24 opacity-50"
        />
        <img
          src={Pacheco}
          alt="Pacheco illustration"
          className="absolute top-1/2 right-16 w-20 h-20 opacity-30"
        />
      </div>

      {/* Background overlay for small screens */}
      <div className="md:hidden fixed inset-0 bg-white/30 backdrop-blur-[2px] z-10" />

      <main className="relative z-20 max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {/* Project Info */}
          <section className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-zinc-200/50">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <h2 className="text-xs font-medium text-zinc-900">about.md</h2>
            </div>
            <div className="space-y-2 text-xs">
              <p className="font-mono text-zinc-600">
                <span className="text-blue-500">❯</span> A minimal collection of tools and resources,
                curated for scientific developers.
              </p>
              <p className="font-mono text-zinc-600">
                <span className="text-blue-500">❯</span> Built with modern web technologies.
                Designed with simplicity in mind.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-zinc-200/50">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <h2 className="text-xs font-medium text-zinc-900">stack.config</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-zinc-400 font-mono">$</span>
                  <span className="text-zinc-600 font-mono">react: ^18.2.0</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-zinc-400 font-mono">$</span>
                  <span className="text-zinc-600 font-mono">tailwind: ^3.4.16</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-zinc-400 font-mono">$</span>
                  <span className="text-zinc-600 font-mono">router: ^6.28.0</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-zinc-400 font-mono">$</span>
                  <span className="text-zinc-600 font-mono">vite: ^6.0.1</span>
                </div>
              </div>
            </div>
          </section>

          {/* Creator */}
          <section className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-zinc-200/50">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <h2 className="text-xs font-medium text-zinc-900">user.config</h2>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-xs text-zinc-600">
                <span className="text-purple-500">~</span> name: Yamu
              </p>
              <p className="font-mono text-xs text-zinc-600">
                <span className="text-purple-500">~</span> role: Scientific Developer
              </p>
              <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-zinc-200/50">
                <a
                  href="https://github.com/Yamure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
                >
                  github
                </a>
                <a
                  href="https://www.linkedin.com/in/yamukelwa-msimango-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors font-mono"
                >
                  linkden
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
