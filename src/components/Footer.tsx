export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-sm">
          <a
            href="http://catalog.southeasttech.edu/preview_program.php?catoid=17&poid=2004&hl=%22programming%22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            STI CIS Programming Curriculum
          </a>
        </p>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Rami Aljanaby. All rights reserved.
        </p>
      </div>
    </footer>
  );
}