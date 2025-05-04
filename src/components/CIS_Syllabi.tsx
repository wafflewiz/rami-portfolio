import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function CIS_Syllabi() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-blue-600 text-white py-4">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-4">CIS Syllabi</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link
              to="/syllabi/CIS293.pdf"
              className="text-blue-600 hover:underline"
            >
              CIS293 - Advanced Technologies
            </Link>
          </li>
          <li>
            <Link
              to="/syllabi/CIS296.pdf"
              className="text-blue-600 hover:underline"
            >
              CIS296 - C# Development
            </Link>
          </li>
          <li>
            <Link
              to="https://catalog.southeasttech.edu/preview_program.php?catoid=17&poid=2004&hl=%22programming%22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View CIS Curriculum
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}