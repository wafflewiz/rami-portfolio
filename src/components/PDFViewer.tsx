import { useParams } from "react-router-dom";

type Params = { filename?: string }; // Optional because it’s undefined until the match occurs

const PDFViewer: React.FC = () => {
  const { filename } = useParams<Params>();

  if (!filename) return <p>No file chosen.</p>;

  return (
<div>
      <h2>Viewing: {filename}</h2>
      <iframe
        src={`/syllabi/${filename}`}
        width="100%"
        height="100%"
        title="PDF Viewer"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PDFViewer;
