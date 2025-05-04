import { useParams } from "react-router-dom";

type Params = { filename?: string }; // Optional because it’s undefined until the match occurs

const PDFViewer: React.FC = () => {
  const { filename } = useParams<Params>();

  if (!filename) return <p>No file chosen.</p>;

  return (
    <object
      data={`/syllabi/${filename}.pdf`}
      type="application/pdf"
      className="w-full h-screen"
    />
  );
};

export default PDFViewer;
