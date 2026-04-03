"use client";

import { useRouter } from "next/navigation";
import StatusBadge from "./StatusBadge";

export interface Enquiry {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  treatment_interest: string | null;
  message: string | null;
  status: string;
  treatment_value: number | null;
  notes: string | null;
  source: string;
  created_at: string;
  updated_at: string | null;
}

interface EnquiryCardProps {
  enquiry: Enquiry;
  draggable?: boolean;
}

export default function EnquiryCard({ enquiry, draggable }: EnquiryCardProps) {
  const router = useRouter();
  const timeAgo = getTimeAgo(enquiry.created_at);
  let isDragging = false;

  function handleDragStart(e: React.DragEvent) {
    isDragging = true;
    e.dataTransfer.setData("enquiry-id", enquiry.id);
    e.dataTransfer.effectAllowed = "move";
  }

  function handleDragEnd() {
    isDragging = false;
  }

  function handleClick(e: React.MouseEvent) {
    // Don't navigate if we just finished dragging
    if (isDragging) {
      e.preventDefault();
      return;
    }
    router.push(`/admin/enquiries/${enquiry.id}`);
  }

  return (
    <div
      draggable={draggable}
      onDragStart={draggable ? handleDragStart : undefined}
      onDragEnd={draggable ? handleDragEnd : undefined}
      onClick={handleClick}
      className={`
        bg-admin-surface rounded-lg border border-admin-border p-3.5
        hover:border-admin-primary/30 hover:shadow-sm transition-all
        ${draggable ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}
      `}
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-semibold text-[13px] text-admin-text">
          {enquiry.first_name} {enquiry.last_name}
        </h4>
        <StatusBadge status={enquiry.status} />
      </div>

      {enquiry.treatment_interest && (
        <p className="text-[12px] text-admin-text-secondary mt-1">
          {enquiry.treatment_interest}
        </p>
      )}

      {enquiry.notes && (
        <p className="text-[11px] text-admin-muted mt-1.5 line-clamp-2 italic">
          {enquiry.notes}
        </p>
      )}

      <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-admin-border/60">
        <span className="text-[11px] text-admin-muted">{timeAgo}</span>
        {enquiry.treatment_value && (
          <span className="text-[11px] font-semibold text-amber-800">
            &pound;{Number(enquiry.treatment_value).toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}

function getTimeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diffMs = now - then;
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}
