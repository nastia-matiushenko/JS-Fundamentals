export default function BrowserComp() {
  const supportsBackdrop = CSS.supports("backdrop-filter", "blur(5px)");

  const supportsFlexGap = CSS.supports("gap: 10px");

  const supportsWebp = (() => {
    const el = document.createElement("canvas");
    return el.toDataURL("image/webp").includes("data:image/webp");
  })();

  return (
    <div>
      <p>Supports backdrop-filter: {supportsBackdrop ? "Yes" : "No"}</p>
      <p>Supports flex gap: {supportsFlexGap ? "Yes" : "No"}</p>
      <p>Supports WebP: {supportsWebp ? "Yes" : "No"}</p>
    </div>
  );
}
