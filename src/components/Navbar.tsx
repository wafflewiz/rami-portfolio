import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:underline">
            Rami Aljanaby
          </Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:underline hover:text-gray-200 transition"
            >
              Home
            </Link>
          </li>
         
          <li>
            <Link
              to="/cis_syllabi"
              className="hover:underline hover:text-gray-200 transition"
            >
              CIS Syllabi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}