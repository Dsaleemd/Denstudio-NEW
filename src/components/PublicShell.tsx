"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryModalProvider from "@/components/EnquiryModalProvider";

export default function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <EnquiryModalProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </EnquiryModalProvider>
  );
}
