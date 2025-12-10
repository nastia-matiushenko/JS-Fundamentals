export default function EmbeddedViewDemo() {
  return (
    <div style={{ padding: "24px" }}>
      <h2>Embedded View (iframe example)</h2>

      <iframe
        src="https://example.com"
        title="External site"
        style={{
          width: "50%",
          height: "100px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />

      <iframe
        width="50%"
        height="250"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube widget"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: "8px",
          border: "none",
        }}
      />
  </div>
  );
}
