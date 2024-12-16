import Navigation from "@components/Navigation";
import {
  Pondering,
  Reflecting,
  MeelaPantalones,
  Pacheco,
  PolkaPup,
} from "@assets";

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
        <div className="space-y-8">
          {/* Project Info */}
          <section className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-zinc-200/50">
            <div className="flex items-center space-x-2 mb-5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <h2 className="text-sm font-medium text-zinc-900">About ScientificDevs</h2>
            </div>
            <div className="space-y-4 text-sm">
              <p className="font-mono text-zinc-600 leading-relaxed">
                <span className="text-blue-500">❯</span> A curated collection of tools and resources for scientific developers, researchers, and tech enthusiasts.
              </p>
              <p className="font-mono text-zinc-600 leading-relaxed">
                <span className="text-blue-500">❯</span> Our mission is to streamline the development workflow by providing a carefully selected set of resources that enhance productivity and innovation.
              </p>
              <p className="font-mono text-zinc-600 leading-relaxed">
                <span className="text-blue-500">❯</span> Built with modern web technologies and designed with simplicity in mind, focusing on performance and user experience.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-zinc-200/50">
            <div className="flex items-center space-x-2 mb-5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <h2 className="text-sm font-medium text-zinc-900">Technology Stack</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xs font-medium text-zinc-500 mb-2">Frontend</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-green-500 font-mono">$</span>
                    <span className="text-zinc-600 font-mono">react: ^18.2.0</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-green-500 font-mono">$</span>
                    <span className="text-zinc-600 font-mono">tailwind: ^3.4.16</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-green-500 font-mono">$</span>
                    <span className="text-zinc-600 font-mono">redux-toolkit: ^2.0.1</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium text-zinc-500 mb-2">Development</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-green-500 font-mono">$</span>
                    <span className="text-zinc-600 font-mono">vite: ^5.0.8</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-green-500 font-mono">$</span>
                    <span className="text-zinc-600 font-mono">router: ^6.21.1</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-green-500 font-mono">$</span>
                    <span className="text-zinc-600 font-mono">eslint: ^8.56.0</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-zinc-200/50">
            <div className="flex items-center space-x-2 mb-5">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <h2 className="text-sm font-medium text-zinc-900">The Team</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Yamu's Info */}
              <div className="space-y-3 p-4 rounded-lg bg-zinc-50/50">
                <div className="space-y-1">
                  <p className="font-mono text-xs text-zinc-600">
                    <span className="text-purple-500">~</span> name: Yamu
                  </p>
                  <p className="font-mono text-xs text-zinc-600">
                    <span className="text-purple-500">~</span> role: Scientific Developer
                  </p>
                  <p className="font-mono text-xs text-zinc-600">
                    <span className="text-purple-500">~</span> focus: Frontend Development
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-3 border-t border-zinc-200/50">
                  <a
                    href="https://github.com/Yamure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors font-mono flex items-center space-x-1"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yamukelwa-msimango-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors font-mono flex items-center space-x-1"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>linkedin</span>
                  </a>
                </div>
              </div>

              {/* Guy's Info */}
              <div className="space-y-3 p-4 rounded-lg bg-zinc-50/50">
                <div className="space-y-1">
                  <p className="font-mono text-xs text-zinc-600">
                    <span className="text-purple-500">~</span> name: Guy McKechnie
                  </p>
                  <p className="font-mono text-xs text-zinc-600">
                    <span className="text-purple-500">~</span> role: Scientific Developer
                  </p>
                  <p className="font-mono text-xs text-zinc-600">
                    <span className="text-purple-500">~</span> focus: Backend Architecture
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-3 border-t border-zinc-200/50">
                  <a
                    href="https://github.com/GuyMcKechnie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors font-mono flex items-center space-x-1"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guy-mckechnie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors font-mono flex items-center space-x-1"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>linkedin</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
