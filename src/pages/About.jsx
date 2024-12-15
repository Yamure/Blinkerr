import { Link } from "react-router-dom";
import {
  Pondering,
  Reflecting,
  MeelaPantalones,
  Pacheco,
  PolkaPup,
} from "@assets";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-50 relative">
      {/* Header */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-sm font-medium hover:text-zinc-900 transition-colors no-underline"
              >
                <span className="text-zinc-900">ScientificDevs</span>
                <span className="text-blue-500">/F</span>
              </Link>
              <div className="h-4 mx-4 w-px bg-zinc-200" />
              <span className="text-zinc-500">About</span>
            </div>
            <Link
              to="/collections"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors no-underline"
            >
              Collections
            </Link>
          </div>
        </div>
      </nav>

      {/* Decorative SVGs */}
      <img
        src={MeelaPantalones}
        alt="Meela illustration"
        className="absolute top-28 right-16 w-20 h-20 opacity-30 pointer-events-none"
      />
      <img
        src={PolkaPup}
        alt="Polka Pup illustration"
        className="absolute top-40 left-12 w-16 h-16 opacity-30 pointer-events-none"
      />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Project Info */}
          <section className="bg-white rounded-lg p-6 border border-zinc-200">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <h2 className="text-sm font-medium text-zinc-900">Project</h2>
            </div>
            <div className="space-y-4 text-sm text-zinc-600">
              <p className="font-mono">
                <span className="text-blue-500">$</span> A minimal collection of
                tools and resources
              </p>
              <p className="font-mono">
                <span className="text-blue-500">$</span> Built with React +
                Tailwind
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="bg-white rounded-lg p-6 border border-zinc-200">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <h2 className="text-sm font-medium text-zinc-900">Stack</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-zinc-400 font-mono">>_</span>
                <span className="text-zinc-600">React 18</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-zinc-400 font-mono">>_</span>
                <span className="text-zinc-600">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-zinc-400 font-mono">>_</span>
                <span className="text-zinc-600">React Router</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-zinc-400 font-mono">>_</span>
                <span className="text-zinc-600">Vite</span>
              </div>
            </div>
          </section>

          {/* Creator */}
          <section className="bg-white rounded-lg p-6 border border-zinc-200">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <h2 className="text-sm font-medium text-zinc-900">Creator</h2>
            </div>
            <div className="text-sm text-zinc-600">
              <p className="font-mono">
                <span className="text-purple-500">~</span> Built by Yamu
              </p>
              <p className="font-mono mt-2">
                <span className="text-purple-500">~</span> Scientific Developer
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Corner and Middle Illustrations */}
      <img
        src={Pondering}
        alt="Pondering illustration"
        className="fixed bottom-8 right-8 w-24 h-24 opacity-50 pointer-events-none"
      />
      <img
        src={Reflecting}
        alt="Reflecting illustration"
        className="fixed bottom-8 left-8 w-24 h-24 opacity-50 pointer-events-none"
      />
      <img
        src={Pacheco}
        alt="Pacheco illustration"
        className="fixed top-1/2 right-16 w-20 h-20 opacity-30 pointer-events-none"
      />
    </div>
  );
};

export default About;
