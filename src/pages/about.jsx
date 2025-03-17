import {
  MeelaPantalones,
  Pacheco,
  PolkaPup,
  Pondering,
  Reflecting,
} from '@assets';
import Navigation from '@components/Navigation';

const About = () => {
  return (
    <div className="grainy bg-custom-bg relative min-h-screen">
      <Navigation currentPage="about" />

      {/* Decorative SVGs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={MeelaPantalones}
          alt="Meela illustration"
          className="absolute top-28 right-16 h-20 w-20 opacity-30"
        />
        <img
          src={PolkaPup}
          alt="Polka Pup illustration"
          className="absolute top-40 left-12 h-16 w-16 opacity-30"
        />
        <img
          src={Pondering}
          alt="Pondering illustration"
          className="absolute right-8 bottom-8 h-24 w-24 opacity-50"
        />
        <img
          src={Reflecting}
          alt="Reflecting illustration"
          className="absolute bottom-8 left-8 h-24 w-24 opacity-50"
        />
        <img
          src={Pacheco}
          alt="Pacheco illustration"
          className="absolute top-1/2 right-16 h-20 w-20 opacity-30"
        />
      </div>

      {/* Background overlay for small screens */}
      <div className="fixed inset-0 z-10 bg-white/30 backdrop-blur-[2px] md:hidden" />

      <main className="relative z-20 mx-auto max-w-3xl px-6 py-12">
        <div className="space-y-6">
          {/* Project Info */}
          <section className="rounded-lg border border-zinc-200/50 bg-white/80 p-5 backdrop-blur-xs">
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <h2 className="font-heading text-text-900 text-base font-medium">
                about.md
              </h2>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-body text-text-600">
                <span className="text-blue-500">❯</span> A minimal collection of
                tools and resources, curated for scientific developers.
              </p>
              <p className="font-body text-text-600">
                <span className="text-blue-500">❯</span> Built with modern web
                technologies. Designed with simplicity in mind.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="rounded-lg border border-zinc-200/50 bg-white/80 p-5 backdrop-blur-xs">
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <h2 className="font-heading text-text-900 text-base font-medium">
                stack.config
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="font-body text-green-400">$</span>
                  <span className="text-text-600 font-body">
                    react: ^18.2.0
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="font-body text-green-400">$</span>
                  <span className="text-text-600 font-body">
                    tailwind: ^3.4.16
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="font-body text-green-400">$</span>
                  <span className="text-text-600 font-body">
                    router: ^6.28.0
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="font-body text-green-400">$</span>
                  <span className="text-text-600 font-body">vite: ^6.0.1</span>
                </div>
              </div>
            </div>
          </section>

          {/* Creator */}
          <section className="rounded-lg border border-zinc-200/50 bg-white/80 p-5 backdrop-blur-xs">
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <h2 className="font-heading text-text-900 text-base font-medium">
                user.config
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start lg:gap-16">
              <div className="space-y-2">
                <p className="font-body text-text-600 text-sm">
                  <span className="font-body text-purple-500">~</span> name: Guy
                </p>
                <p className="font-body text-text-600 text-sm">
                  <span className="font-body text-purple-500">~</span> role: A
                  Cooler Developer
                </p>
                <div className="mt-3 flex items-center space-x-3 border-t border-zinc-200/50 pt-3">
                  <a
                    href="https://github.com/GuyMcKechnie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-500 font-heading text-xs uppercase transition-colors hover:text-zinc-900"
                  >
                    github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guymckechnie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-500 hover:text-text-900 font-heading text-xs uppercase transition-colors"
                  >
                    linkedin
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-body text-text-600 text-sm">
                  <span className="font-body text-purple-500">~</span> name:
                  Yamu
                </p>
                <p className="font-body text-text-600 text-sm">
                  <span className="font-body text-purple-500">~</span> role:
                  Scientific Developer
                </p>
                <div className="mt-3 flex items-center space-x-3 border-t border-zinc-200/50 pt-3">
                  <a
                    href="https://github.com/Yamure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-500 font-heading text-xs uppercase transition-colors hover:text-zinc-900"
                  >
                    github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yamukelwa-msimango-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-500 hover:text-text-900 font-heading text-xs uppercase transition-colors"
                  >
                    linkedin
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
