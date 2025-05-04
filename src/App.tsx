import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";
import CIS_Syllabi from "./components/CIS_Syllabi";
import PDFViewer from "./components/PDFViewer";



function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cis_syllabi" element={<CIS_Syllabi />} />
        <Route path="/syllabi/:filename" element={<PDFViewer />} />
        <Route path="*" element={<Home />} />

      </Routes>
  );
}

export default App;