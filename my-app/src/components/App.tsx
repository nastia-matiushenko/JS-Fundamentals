import { jsPDF } from "jspdf";
import "./App.css";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

export default function App() {
  const triggerCSVExport = () => {
    exportCSV();
  };
  return (
    <>
      <div>hey me!</div>
      <button onClick={triggerCSVExport}>Export CSV</button>
      <button onClick={exportPDF}>Export PDF</button>
      <button onClick={exportDOCX}>Export DOCX</button>
    </>
  );
}

export function exportCSV() {
  const rows = [
    ["Name", "Age", "City"],
    ["Ko", 25, "Lviv"],
    ["Mike", 30, "Berlin"],
  ];

  const csvContent = rows.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "data.csv";
  a.click();
  URL.revokeObjectURL(url);
}

export function exportPDF() {
  const doc = new jsPDF();

  doc.text("Meals on Wheels Report", 10, 10);
  doc.text("Client: Ko", 10, 20);
  doc.text("Meals Delivered: 12", 10, 30);

  doc.save("report.pdf");
}

export async function exportDOCX() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph("Meals on Wheels Report"),
          new Paragraph("Client: Ko"),
          new Paragraph("Meals Delivered: 12"),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, "report.docx");
}


