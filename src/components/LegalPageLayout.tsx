import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function LegalPageLayout({
  title,
  children,
}: LegalPageLayoutProps) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#222222] mb-10">
          {title}
        </h1>
        <div className="prose prose-lg max-w-none text-[#333333] leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#222222] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#222222] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2 [&_a]:text-[#012406] [&_a]:underline [&_a]:hover:text-[#023a09]">
          {children}
        </div>
      </div>
    </section>
  );
}
