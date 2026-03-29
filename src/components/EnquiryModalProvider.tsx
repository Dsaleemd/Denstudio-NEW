"use client";

import { createContext, useContext, useState } from "react";
import EnquiryModal from "./EnquiryModal";

const EnquiryContext = createContext<{ openEnquiry: () => void }>({
  openEnquiry: () => {},
});

export function useEnquiry() {
  return useContext(EnquiryContext);
}

export default function EnquiryModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EnquiryContext.Provider value={{ openEnquiry: () => setIsOpen(true) }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </EnquiryContext.Provider>
  );
}
