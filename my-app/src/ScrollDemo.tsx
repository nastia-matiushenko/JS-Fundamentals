import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ScrollDemo() {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800 });

    let lastScroll = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      if (currentY > lastScroll) {
        setDirection("down");
      } else if (currentY < lastScroll) {
        setDirection("up");
      }

      lastScroll = currentY;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Scroll Animation + Scroll Detection Example</h2>

      <p>Current scroll position: {scrollY}px</p>
      <p>Scrolling direction: {direction ?? "none yet"}</p>

      <div
        data-aos="fade-up"
        style={{
          marginTop: 100,
          padding: 40,
          background: "#1f2937",
          borderRadius: 8,
          color: "white",
        }}
      >
        <h3>Fade-up animation (AOS)</h3>
        <p>This element animates when it appears in the viewport.</p>
      </div>

      <div
        data-aos="zoom-in"
        style={{
          marginTop: 200,
          padding: 40,
          background: "#374151",
          borderRadius: 8,
          color: "white",
        }}
      >
        <h3>Zoom-in animation</h3>
        <p>Another animation triggered by scroll.</p>
      </div>

      <div
        data-aos="flip-left"
        style={{
          marginTop: 200,
          padding: 40,
          background: "#4b5563",
          borderRadius: 8,
          color: "white",
        }}
      >
        <h3>Flip animation</h3>
        <p>This demonstrates use of a scroll animation library.</p>
      </div>
    </div>
  );
}
