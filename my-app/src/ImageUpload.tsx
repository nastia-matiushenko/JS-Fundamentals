import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  const [originalSize, setOriginalSize] = useState<number | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setOriginalSize(file.size);

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    const options = {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setCompressedSize(compressedFile.size);

      const formData = new FormData();
      formData.append("file", compressedFile);

      // await fetch("/upload", {
      //   method: "POST",
      //   body: formData,
      // });

      console.log("Compressed file ready:", compressedFile);
    } catch (err) {
      console.error("Compression failed:", err);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  return (
    <div style={{ width: "300px" }}>
      <h2>Image Upload with Preview</h2>

      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #4b5563",
          padding: "20px",
          textAlign: "center",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop image here…</p>
        ) : (
          <p>Drag & drop image or click to select</p>
        )}
      </div>

      {preview && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={preview}
            alt="preview"
            style={{ width: "100%", borderRadius: "8px" }}
          />

          <div style={{ marginTop: "10px", color: "#e5e7eb" }}>
            <p>Original size: {(originalSize! / 1024).toFixed(2)} KB</p>
            {compressedSize && (
              <p>Compressed size: {(compressedSize / 1024).toFixed(2)} KB</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
