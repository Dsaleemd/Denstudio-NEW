"use client";

import { useRouter } from "next/navigation";
import StatusBadge from "./StatusBadge";
import type { Enquiry } from "./EnquiryCard";

export default function EnquiryTable({ enquiries }: { enquiries: Enquiry[] }) {
  const router = useRouter();

  return (
    <div className="bg-admin-surface rounded-lg border border-admin-border overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-admin-border">
            <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider">Name</th>
            <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider hidden sm:table-cell">Treatment</th>
            <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider hidden md:table-cell">Email</th>
            <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider hidden lg:table-cell">Phone</th>
            <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider">Status</th>
            <th className="text-right px-4 py-2.5 text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider hidden md:table-cell">Value</th>
            <th className="text-right px-4 py-2.5 text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((e) => (
            <tr
              key={e.id}
              onClick={() => router.push(`/admin/enquiries/${e.id}`)}
              className="border-b border-admin-border/60 last:border-0 hover:bg-admin-bg/50 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 text-[13px] font-medium text-admin-text">
                {e.first_name} {e.last_name}
              </td>
              <td className="px-4 py-3 text-[13px] text-admin-text-secondary hidden sm:table-cell">
                {e.treatment_interest || "\u2014"}
              </td>
              <td className="px-4 py-3 text-[13px] text-admin-text-secondary hidden md:table-cell">
                {e.email}
              </td>
              <td className="px-4 py-3 text-[13px] text-admin-text-secondary hidden lg:table-cell">
                {e.phone || "\u2014"}
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={e.status} />
              </td>
              <td className="px-4 py-3 text-[13px] text-right text-admin-text-secondary hidden md:table-cell">
                {e.treatment_value
                  ? `\u00A3${Number(e.treatment_value).toLocaleString()}`
                  : "\u2014"}
              </td>
              <td className="px-4 py-3 text-[12px] text-right text-admin-muted">
                {new Date(e.created_at).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                })}
              </td>
            </tr>
          ))}
          {enquiries.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="px-4 py-12 text-center text-sm text-admin-muted"
              >
                No enquiries found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
