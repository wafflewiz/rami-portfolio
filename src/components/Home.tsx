import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Resume from '../components/Resume.tsx';
import PDFViewer from '../components/PDFViewer';
import CIS_Syllabi from '../components/CIS_Syllabi';
import Footer from '../components/Footer';

import profilePicture from "../assets/picture.jpg"; 
import newsgatorImage from "../assets/newsgator.png";
import newsgator2Image from "../assets/newsgator2.png";
import contact1Image from "../assets/contact1.png";
import contact2Image from "../assets/contact2.png";
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <><header className="w-full bg-blue-600 text-white py-4">
      <Navbar />

    </header><div className="max-w-4xl mx-auto py-10 px-4">
        <div className="flex flex-col items-center text-center gap-6 mb-10">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-36 h-36 rounded-full border object-cover" />
          <h1 className="text-4xl font-bold">Rami Aljanaby</h1>
          <p className="text-gray-600 max-w-xl">
            Hi, I’m a Computer Programming student at Southeast Technical Institute with a passion for full-stack development.
            Explore my coursework, resume, and project samples below.
            <br/>
            <br/>

            <Link
              to="/syllabi/resume.pdf"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
View My Resume            </Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={newsgatorImage}
              alt="React/Vite/Node.JS Project"
              className="rounded-lg mb-4" />
            <img
              src={newsgator2Image}
              alt="React/Vite/Node.JS Project"
              className="rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">React/Vite/Node.JS Project</h2>
            <p className="text-gray-600 mb-4">
              A full-stack application using React, Vite, and Node.js to curate news based on user preference.
            </p>
            <Link
              to="https://github.com/wafflewiz/news-gator"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View Project
            </Link>
          </div>



          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={contact1Image}
              alt="C# Contact Manager Project"
              className="rounded-lg mb-4" />
            <img
              src={contact2Image}
              alt="C# Contact Manager Project 2"
              className="rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">C# Contact Manager Project</h2>
            <p className="text-gray-600 mb-4">
              ASP.NET MVC app showcasing CRUD operations, validation, and database integration.
            </p>
            <Link
              to="https://github.com/wafflewiz/ContactManagerT1"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View Project
            </Link>
          </div>


        </div>
      </div>
      <Footer />
      </>
  );
}