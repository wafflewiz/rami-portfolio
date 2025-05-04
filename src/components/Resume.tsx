import Navbar from "./Navbar";
import PDFViewer from "./PDFViewer";
import { Link } from "react-router-dom";


export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-blue-600 text-white py-4">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <div className="border rounded-lg overflow-hidden">
          {/* Use PDFViewer to display the resume */}


        </div>
      </main>
    </div>
  );
}