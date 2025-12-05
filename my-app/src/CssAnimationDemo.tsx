import "./CssAnimationDemo.css";

export default function CssAnimationDemo() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>CSS Animation Demo</h2>

      <div className="box move-animation">Move Animation</div>
      <div className="box color-animation">Color Animation</div>
      <div className="box grow-animation">Grow Animation</div>
    </div>
  );
}
