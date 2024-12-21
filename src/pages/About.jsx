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
        <div className="min-h-screen grainy bg-custom-bg relative">
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
                            <h2 className="text-base font-medium font-heading text-text-900">
                                about.md
                            </h2>
                        </div>
                        <div className="space-y-2 text-sm">
                            <p className="font-body text-text-600">
                                <span className="text-blue-500">❯</span> A
                                minimal collection of tools and resources,
                                curated for scientific developers.
                            </p>
                            <p className="font-body text-text-600">
                                <span className="text-blue-500">❯</span> Built
                                with modern web technologies. Designed with
                                simplicity in mind.
                            </p>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-zinc-200/50">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            <h2 className="text-base font-medium font-heading text-text-900">
                                stack.config
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-sm">
                                    <span className="text-green-400 font-body">
                                        $
                                    </span>
                                    <span className="text-text-600 font-body">
                                        react: ^18.2.0
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <span className="text-green-400 font-body">
                                        $
                                    </span>
                                    <span className="text-text-600 font-body">
                                        tailwind: ^3.4.16
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-sm">
                                    <span className="text-green-400 font-body">
                                        $
                                    </span>
                                    <span className="text-text-600 font-body">
                                        router: ^6.28.0
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <span className="text-green-400 font-body">
                                        $
                                    </span>
                                    <span className="text-text-600 font-body">
                                        vite: ^6.0.1
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Creator */}
                    <section className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-zinc-200/50">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                            <h2 className="text-base font-medium font-heading text-text-900">
                                user.config
                            </h2>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center lg:gap-16">
                            <div className="space-y-2">
                                <p className="font-body text-sm text-text-600">
                                    <span className="font-body text-purple-500">
                                        ~
                                    </span>{" "}
                                    name: Guy
                                </p>
                                <p className="font-body text-sm text-text-600">
                                    <span className="font-body text-purple-500">
                                        ~
                                    </span>{" "}
                                    role: A Cooler Developer
                                </p>
                                <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-zinc-200/50">
                                    <a
                                        href="https://github.com/GuyMcKechnie"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-text-500 hover:text-zinc-900 transition-colors font-heading uppercase"
                                    >
                                        github
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/guymckechnie/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-text-500 hover:text-text-900 transition-colors font-heading uppercase"
                                    >
                                        linkedin
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="font-body text-sm text-text-600">
                                    <span className="font-body text-purple-500">
                                        ~
                                    </span>{" "}
                                    name: Yamu
                                </p>
                                <p className="font-body text-sm text-text-600">
                                    <span className="font-body text-purple-500">
                                        ~
                                    </span>{" "}
                                    role: Scientific Developer
                                </p>
                                <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-zinc-200/50">
                                    <a
                                        href="https://github.com/Yamure"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-text-500 hover:text-zinc-900 transition-colors font-heading uppercase"
                                    >
                                        github
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/yamukelwa-msimango-/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-text-500 hover:text-text-900 transition-colors font-heading uppercase"
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
