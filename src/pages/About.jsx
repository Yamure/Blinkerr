import { Link } from "react-router-dom";
import { Pondering, Reflecting } from "../assets";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-50 relative">
      {/* Header */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <Link
              to="/"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              ← Home
            </Link>
            <Link
              to="/collections"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Collections
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg p-8 border border-zinc-200">
          <h1 className="text-xl font-medium text-zinc-900 mb-6">About this project</h1>
          <div className="space-y-4 text-zinc-600">
            <p>
              I built this project to organize my favorite tools and resources in one place.
              As a developer, I often find myself sharing links with others, and having a
              centralized, minimal interface makes it easier to access and share these resources.
            </p>
            <p>
              The design focuses on simplicity while maintaining visual appeal through subtle
              animations and illustrations from Open Peeps, a hand-drawn illustration library.
            </p>
          </div>
        </div>
      </main>

      {/* Corner Illustrations */}
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
    </div>
  );
};

export default About;
