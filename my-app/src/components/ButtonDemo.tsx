import "../scss/main.scss";

export default function ButtonDemo() {
  return (
    <div style={{ padding: "24px" }}>
      <h2>SCSS Demo — Variables, Mixins, Nesting, Functions</h2>

      <button className="button">
        <span className="button__icon">✨</span>
        Primary Button
      </button>

      <button className="button button--danger" style={{ marginLeft: "16px" }}>
        <span className="button__icon">⚠️</span>
        Danger Button
      </button>
    </div>
  );
}
