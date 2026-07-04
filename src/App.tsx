import React, { useEffect, useRef, useState } from "react";
import dattaImage from "./assets/images/ChatGPT Image Jul 2, 2026, 11_50_30 AM.png";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const image = new Image();
    image.src = dattaImage;
    image.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas dimensions to match the image's natural dimensions exactly
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      // Draw the image onto the canvas exactly as it is, with no alterations
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      setLoading(false);
    };
  }, []);

  return (
    <div className="min-h-screen w-screen bg-[#000000] flex items-center justify-center overflow-hidden p-0 m-0 relative">
      {loading && (
        <div className="absolute text-stone-600 font-mono text-xs tracking-widest uppercase animate-pulse">
          Loading...
        </div>
      )}
      <canvas
        ref={canvasRef}
        id="divine-canvas"
        className="max-w-full max-h-screen object-contain shadow-2xl transition-opacity duration-700 ease-in-out"
        style={{ opacity: loading ? 0 : 1 }}
      />
    </div>
  );
}
