"use client";

import { useEnquiry } from "./EnquiryModalProvider";

export default function EnquiryButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { openEnquiry } = useEnquiry();
  return (
    <button onClick={openEnquiry} className={className}>
      {children}
    </button>
  );
}
