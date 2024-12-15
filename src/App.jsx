import  { useState } from "react";
import LinkCard from "./components/LinkCard";

const App = () => {
  const links = [
    {
      id: 1,
      title: "Google",
      url: "https://google.com",
      category: "Search Engine",
      color: "#4285F4",
    },
    {
      id: 2,
      title: "GitHub",
      url: "https://github.com",
      category: "Development",
      color: "#333",
    },
    {
      id: 3,
      title: "Stack Overflow",
      url: "https://stackoverflow.com",
      category: "Programming",
      color: "#F48024",
    },
  ];

  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <button
        onClick={() => setDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          My Link Manager
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
