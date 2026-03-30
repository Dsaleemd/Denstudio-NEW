import type { ReactNode } from "react";

/* ── Stat/Callout Box ── */
export function StatBox({ value, label, children }: { value: string; label?: string; children?: ReactNode }) {
  return (
    <div className="my-6 rounded-2xl bg-[#f7f5f0] border border-[#e8e2d6] p-6 md:p-8">
      <div className="text-3xl md:text-4xl font-bold text-[#0b3b3b] mb-1">{value}</div>
      {label && <div className="text-sm font-semibold uppercase tracking-wide text-[#666] mb-2">{label}</div>}
      {children && <div className="text-sm text-[#555] leading-relaxed">{children}</div>}
    </div>
  );
}

/* ── Callout / Highlight Box ── */
export function Callout({ children, variant = "default" }: { children: ReactNode; variant?: "default" | "warning" | "pine" }) {
  const styles = {
    default: "bg-[#f7f5f0] border-[#e8e2d6] text-[#333]",
    warning: "bg-[#fef3cd] border-[#f0d78c] text-[#856404]",
    pine: "bg-[#0b3b3b] border-[#0b3b3b] text-white",
  };
  return (
    <div className={`my-6 rounded-xl border-l-4 p-5 md:p-6 ${styles[variant]} text-[15px] leading-relaxed`}>
      {children}
    </div>
  );
}

/* ── Data Table ── */
export function DataTable({ headers, rows, caption }: { headers: string[]; rows: string[][]; caption?: string }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[#e5e5e5]">
      {caption && <div className="px-4 py-3 bg-[#f8f8f6] border-b border-[#e5e5e5] text-sm font-semibold text-[#333]">{caption}</div>}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#f7f5f0]">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 font-semibold text-[#333] text-xs uppercase tracking-wide border-b border-[#e5e5e5]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 1 ? "bg-[#fafaf8]" : ""}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-[#444] border-b border-[#f0f0ee] leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Comparison Table (two columns with check/cross) ── */
export function ComparisonTable({ title1, title2, rows }: { title1: string; title2: string; rows: [string, string, string][] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[#e5e5e5]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#f7f5f0]">
            <th className="text-left px-4 py-3 font-semibold text-[#333] text-xs uppercase tracking-wide border-b border-[#e5e5e5]">Factor</th>
            <th className="text-left px-4 py-3 font-semibold text-[#333] text-xs uppercase tracking-wide border-b border-[#e5e5e5]">{title1}</th>
            <th className="text-left px-4 py-3 font-semibold text-[#333] text-xs uppercase tracking-wide border-b border-[#e5e5e5]">{title2}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-[#fafaf8]" : ""}>
              <td className="px-4 py-3 font-medium text-[#333] border-b border-[#f0f0ee]">{row[0]}</td>
              <td className="px-4 py-3 text-[#444] border-b border-[#f0f0ee]">{row[1]}</td>
              <td className="px-4 py-3 text-[#444] border-b border-[#f0f0ee]">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Section Divider ── */
export function Divider() {
  return <hr className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-[#ddd] to-transparent" />;
}

/* ── Author Bio Block ── */
export function AuthorBio() {
  return (
    <div className="my-10 rounded-xl bg-[#f7f5f0] border border-[#e8e2d6] p-6 md:p-8">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-[#888] mb-3">About the Author</h4>
      <p className="text-[#444] text-[15px] leading-relaxed">
        Dr. Jana Denzel is an internationally recognized cosmetic dentist, BBC Apprentice star, twice-awarded Best Young Dentist in the UK, and founder of Denstudio at 139 Harley Street, London, W1G 6BG. Named among the world&apos;s top 32 dentists and a Global Ambassador for Slow Dentistry, Dr. Denzel has transformed the smiles of Grammy-winning artists, elite athletes, members of royal families, and patients from across London and around the world.
      </p>
    </div>
  );
}

/* ── Clinical Disclaimer ── */
export function ClinicalDisclaimer() {
  return (
    <div className="my-8 text-xs text-[#999] leading-relaxed border-t border-[#eee] pt-6">
      <strong className="text-[#777]">Clinical note:</strong> This article is intended for general informational purposes only and does not constitute clinical advice. Individual treatment suitability should be assessed in consultation with a qualified dental professional. All treatments carry risks which will be discussed during your consultation.
    </div>
  );
}

/* ── Sources/References Block ── */
export function Sources({ items }: { items: string[] }) {
  return (
    <div className="my-8 text-xs text-[#888] leading-relaxed">
      <h4 className="font-semibold text-[#666] mb-2 uppercase tracking-wide">Sources</h4>
      <ol className="list-decimal pl-5 space-y-1">
        {items.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  );
}
