"use client";

import { useEffect, useState } from "react";

interface DevLabelProps {
  id: number | string;
  children: React.ReactNode;
  className?: string;
}

export function DevLabel({ id, children, className = "" }: DevLabelProps) {
  return (
    <div className={`dev-label-wrapper relative ${className}`} data-dev-id={id}>
      {children}
      <span className="dev-label absolute -top-2 -left-2 z-[9999] bg-red-500 text-white text-[10px] font-bold leading-none w-5 h-5 rounded-full flex items-center justify-center shadow-md pointer-events-none opacity-0 transition-opacity">
        {id}
      </span>
    </div>
  );
}

export function DevOverlayToggle() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Only in development
    if (process.env.NODE_ENV !== "development") return;

    const handleKey = (e: KeyboardEvent) => {
      // Toggle with Ctrl+Shift+D or Cmd+Shift+D
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "D") {
        e.preventDefault();
        setActive((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (active) {
      document.body.classList.add("dev-overlay-active");
    } else {
      document.body.classList.remove("dev-overlay-active");
    }
  }, [active]);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setActive((prev) => !prev)}
        className={`fixed bottom-4 right-4 z-[10000] px-3 py-2 rounded-full text-xs font-bold shadow-lg transition-all cursor-pointer ${
          active
            ? "bg-red-500 text-white"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        {active ? "Labels ON" : "Labels OFF"} <span className="opacity-50 ml-1">⌘⇧D</span>
      </button>

      {/* CSS that shows/hides labels */}
      <style jsx global>{`
        .dev-overlay-active .dev-label {
          opacity: 1 !important;
        }
        .dev-overlay-active .dev-label-wrapper {
          outline: 2px dashed rgba(239, 68, 68, 0.4) !important;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}
