import { v4 as uuidv4 } from "uuid";

export const collections = {
    Browsers: [
        {
            id: uuidv4(),
            title: "Arc",
            url: "https://arc.net",
            category: "Browser",
            description: "A browser built for a better internet.",
            dateAdded: "2024-01-15",
            useCase:
                "Great for organizing research and managing multiple workspaces. The split view is perfect for development.",
            comments:
                "The spaces feature helps me separate work and personal browsing. Command bar is incredibly intuitive.",
        },
    ],
    Productivity: [
        {
            id: uuidv4(),
            title: "Raycast",
            url: "https://raycast.com",
            category: "Productivity",
            description:
                "A productivity tool that helps you get things done. Great for managing tasks and projects.",
            dateAdded: "2024-01-15",
            useCase:
                "Streamlines daily workflows with quick commands, snippets, and window management. Extensions make it highly customizable.",
            comments:
                "The AI commands and clipboard history features are game-changers. Much faster than Spotlight.",
        },

        {
            id: uuidv4(),
            title: "Slack",
            url: "https://slack.com",
            category: "Productivity",
            description:
                "A team communication tool that helps you communicate with your team.",
            dateAdded: "2024-01-15",
            useCase:
                "Essential for team communication and collaboration. Integrations with other tools make it a central hub.",
            comments:
                "The threads feature and app integrations keep discussions organized. Huddles are great for quick team sync-ups.",
        },
        {
            id: uuidv4(),
            title: "Google Suite",
            url: "https://workspace.google.com/",
            category: "Productivity",
            description: "An essential suite of tools for remote productivity.",
            dateAdded: "2024-01-16",
            useCase:
                "Combining the G-Suite with Google's online storage is a game-changer for remote work.",
            comments:
                "It is superior to Microsoft's suite for cloud-based productivity and streamlined collaboration.",
        },
        {
            id: uuidv4(),
            title: "Notion",
            url: "https://notion.so",
            category: "Productivity",
            description:
                "All-in-one workspace for notes, docs, and project management. Great for building personal wikis and knowledge bases.",
            dateAdded: "2024-01-15",
            useCase:
                "Perfect for creating documentation, managing projects, and organizing personal knowledge. The blocks system makes it incredibly flexible.",
            comments:
                "I use this daily for project documentation and personal notes. The web clipper is especially useful for saving research materials.",
        },
    ],
    "Note Taking": [
        {
            id: uuidv4(),
            title: "Obsidian",
            url: "https://obsidian.md",
            category: "Note Taking",
            description:
                "A powerful knowledge base on your local computer. Great for building personal wikis and knowledge bases.",
            dateAdded: "2024-01-15",
            useCase:
                "Perfect for creating documentation, managing projects, and organizing personal knowledge. The blocks system makes it incredibly flexible.",
            comments:
                "I use this daily for project documentation and personal notes. The web clipper is especially useful for saving research materials.",
        },
        {
            id: uuidv4(),
            title: "Evernote",
            url: "https://evernote.com",
            category: "Note Taking",
            description:
                "A note-taking app that helps you remember everything. Great for building personal wikis and knowledge bases.",
            dateAdded: "2024-01-15",
            useCase:
                "Perfect for creating documentation, managing projects, and organizing personal knowledge. The blocks system makes it incredibly flexible.",
            comments:
                "I use this daily for project documentation and personal notes. The web clipper is especially useful for saving research materials.",
        },
    ],
    Development: [
        {
            id: uuidv4(),
            title: "GitHub",
            url: "https://github.com",
            category: "Development",
            description:
                "A web-based Git repository hosting service. Great for managing code repositories.",
            dateAdded: "2024-01-15",
            useCase:
                "Essential for code collaboration, version control, and open source contributions. The CI/CD integration makes deployment seamless.",
            comments:
                "The GitHub Copilot integration has been a game changer for productivity. Issues and Projects features are great for task management.",
        },
        {
            id: uuidv4(),
            title: "VS Code",
            url: "https://code.visualstudio.com",
            category: "Development",
            description:
                "A source code editor made by Microsoft for Windows, Linux, and macOS. Great for coding and debugging.",
            dateAdded: "2024-01-15",
            useCase:
                "Perfect for web development with great extension support and Git integration. The integrated terminal and debugger make it a powerful all-in-one development environment.",
            comments:
                "My go-to editor for web development. The Vim extension makes it even better for keyboard-driven development.",
        },
        {
            id: uuidv4(),
            title: "CodeSandbox",
            url: "https://codesandbox.io",
            category: "Development",
            description:
                "An online IDE for rapid development. Great for coding and debugging.",
            dateAdded: "2024-01-15",
            useCase:
                "Perfect for web development with great extension support and Git integration. The integrated terminal and debugger make it a powerful all-in-one development environment.",
            comments:
                "I use this daily for web development. The integrated terminal and debugger make it a powerful all-in-one development environment.",
        },
    ],
    Design: [
        {
            id: uuidv4(),
            title: "Figma",
            url: "https://figma.com",
            category: "Design",
            description:
                "A vector graphics editor and prototyping tool. Great for designing user interfaces and prototypes.",
            dateAdded: "2024-01-15",
            useCase:
                "Essential for UI/UX design, prototyping, and collaboration. Real-time collaboration features make it perfect for team projects.",
            comments:
                "The auto-layout and components system has revolutionized my design workflow. The plugins ecosystem is incredibly powerful.",
        },
        {
            id: uuidv4(),
            title: "Dribbble",
            url: "https://dribbble.com",
            category: "Inspiration",
            description:
                "A community for sharing design work. Great for finding design inspiration.",
            dateAdded: "2024-01-15",
            useCase:
                "Perfect for finding design inspiration and staying up-to-date with current design trends. Great for discovering new designers.",
            comments:
                "I check it daily for inspiration. The color palettes and animations are particularly inspiring for my projects.",
        },
        {
            id: uuidv4(),
            title: "Behance",
            url: "https://behance.net",
            category: "Inspiration",
            description:
                "A community for sharing design work. Great for finding design inspiration.",
            dateAdded: "2024-01-15",
            useCase:
                "Excellent for deep-diving into comprehensive design case studies and finding detailed project presentations.",
            comments:
                "The case studies here are more detailed than Dribbble. Great for understanding design thinking and process.",
        },
    ],
    Documentation: [
        {
            id: uuidv4(),
            title: "Tailwind CSS Docs",
            url: "https://tailwindcss.com/docs/",
            category: "Documentation",
            description:
                "A all-you-can-eat buffet of Tailwind CSS styling guidelines.",
            dateAdded: "2024-01-16",
            useCase:
                "Every tailwind beginner needs to have this in their resource list because of it's extensive documentation on how to use Tailwind effectively.",
            comments:
                "I sometimes use this as inspiration. I  use the docs to remind myself that I can have a rounded corner on the card component I'm creating.",
        },
        {
            id: uuidv4(),
            title: "Over API",
            url: "https://overapi.com",
            category: "Documentation",
            description: "The cheatsheet for everything.",
            dateAdded: "2024-01-16",
            useCase:
                "Got coders-block? This is the solution for you! It has every framework and language bundled up in a neat cheatsheet.",
            comments:
                "Your development times and standards will improve dramatically with this resource!",
        },
        {
            id: uuidv4(),
            title: "MDN",
            url: "https://developer.mozilla.org",
            category: "Documentation",
            description: "A comprehensive resource for web developers.",
            dateAdded: "2024-01-15",
            useCase:
                "The most reliable source for web development documentation. Perfect for both learning and reference.",
            comments:
                "The examples and browser compatibility tables are invaluable. My go-to resource for web development.",
        },
        {
            id: uuidv4(),
            title: "DevDocs",
            url: "https://devdocs.io",
            category: "Documentation",
            description: "A documentation browser for developers.",
            dateAdded: "2024-01-15",
            useCase:
                "Great for offline access to documentation. The unified search across multiple technologies is incredibly useful.",
            comments:
                "The dark mode and keyboard shortcuts make it perfect for quick reference while coding.",
        },
    ],
    "Project Management": [
        {
            id: uuidv4(),
            title: "Linear",
            url: "https://linear.app",
            category: "Project Management",
            description:
                "A project management tool that helps you manage projects and tasks.",
            dateAdded: "2024-01-15",
            useCase:
                "Perfect for agile project management. The keyboard shortcuts and clean UI make task management effortless.",
            comments:
                "The roadmap feature and GitHub integration have greatly improved our development workflow.",
        },
    ],
    Resources: [
        {
            id: uuidv4(),
            title: "Can I Use",
            url: "https://caniuse.com",
            category: "Resources",
            description:
                "A reference for HTML5, CSS3, SVG, and other web technologies.",
            dateAdded: "2024-01-15",
            useCase:
                "Essential for checking browser compatibility. Helps make informed decisions about using new features.",
            comments:
                "The usage statistics and known issues sections have saved me from many cross-browser headaches.",
        },
    ],
};
