"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import StatusBadge from "@/components/admin/StatusBadge";
import TreatmentValueModal from "@/components/admin/TreatmentValueModal";
import type { Enquiry } from "@/components/admin/EnquiryCard";

const statusSteps = [
  { key: "new", label: "New" },
  { key: "contacted", label: "Contacted" },
  { key: "booked", label: "Booked" },
  { key: "closed", label: "Closed" },
];

export default function EnquiryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [showValueModal, setShowValueModal] = useState(false);
  const [pendingStatus, setPendingStatus] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const res = await fetch(`/api/admin/enquiries/${id}`);
    if (!res.ok) {
      router.push("/admin");
      return;
    }
    const data = await res.json();
    setEnquiry(data.enquiry);
    setNotes(data.enquiry.notes || "");
    setLoading(false);
  }, [id, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function handleStatusChange(status: string, treatmentValue?: number) {
    if (status === "booked" && treatmentValue === undefined) {
      setPendingStatus(status);
      setShowValueModal(true);
      return;
    }

    const body: Record<string, unknown> = { status };
    if (treatmentValue !== undefined) body.treatment_value = treatmentValue;

    const res = await fetch(`/api/admin/enquiries/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const updated = await res.json();
      setEnquiry(updated);
    }
  }

  async function handleSaveNotes() {
    setSavingNotes(true);
    const res = await fetch(`/api/admin/enquiries/${id}/notes`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes }),
    });
    if (res.ok) {
      const updated = await res.json();
      setEnquiry(updated);
    }
    setSavingNotes(false);
  }

  if (loading || !enquiry) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-5 h-5 border-2 border-admin-primary/30 border-t-admin-primary rounded-full animate-spin" />
      </div>
    );
  }

  const fullName = `${enquiry.first_name} ${enquiry.last_name}`;
  const currentIdx = statusSteps.findIndex((s) => s.key === enquiry.status);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Back */}
      <Link
        href="/admin"
        className="inline-flex items-center gap-1 text-[13px] text-admin-muted hover:text-admin-text transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 3L4.5 7 9 11" />
        </svg>
        Back
      </Link>

      {/* Header card */}
      <div className="bg-admin-surface rounded-lg border border-admin-border p-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-lg font-bold text-admin-text">{fullName}</h1>
              <StatusBadge status={enquiry.status} />
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
              <a
                href={`mailto:${enquiry.email}`}
                className="text-[13px] text-admin-text-secondary hover:text-admin-primary transition-colors"
              >
                {enquiry.email}
              </a>
              {enquiry.phone && (
                <a
                  href={`tel:${enquiry.phone}`}
                  className="inline-flex items-center gap-1.5 bg-admin-primary text-white px-3 py-1 rounded-md text-[12px] font-medium hover:bg-admin-primary-hover transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 2a1 1 0 011-1h1.5l1.5 3-1.5 1a6 6 0 003 3l1-1.5 3 1.5V10a1 1 0 01-1 1A8.5 8.5 0 011 2z" />
                  </svg>
                  {enquiry.phone}
                </a>
              )}
            </div>
          </div>
          {enquiry.treatment_value && (
            <div className="text-right">
              <p className="text-[11px] text-admin-muted uppercase tracking-wider">Value</p>
              <p className="text-lg font-bold text-amber-800">
                &pound;{Number(enquiry.treatment_value).toLocaleString()}
              </p>
            </div>
          )}
        </div>

        {/* Pipeline stepper */}
        <div className="flex gap-1.5 mt-5 pt-4 border-t border-admin-border">
          {statusSteps.map((step, i) => {
            const isActive = i <= currentIdx;
            const isCurrent = step.key === enquiry.status;
            return (
              <button
                key={step.key}
                onClick={() => handleStatusChange(step.key)}
                className={`
                  flex-1 py-1.5 rounded-md text-[12px] font-medium transition-all
                  ${isCurrent
                    ? "bg-admin-primary text-white"
                    : isActive
                      ? "bg-admin-primary/10 text-admin-primary"
                      : "bg-admin-bg text-admin-muted hover:bg-admin-border/60"
                  }
                `}
              >
                {step.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Details grid */}
      <div className="bg-admin-surface rounded-lg border border-admin-border p-5">
        <h2 className="text-[12px] font-semibold text-admin-text-secondary uppercase tracking-wider mb-3">
          Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Detail label="Treatment" value={enquiry.treatment_interest || "Not specified"} />
          <Detail
            label="Source"
            value={
              enquiry.source === "enquiry_modal"
                ? "Popup Form"
                : enquiry.source === "contact_page"
                  ? "Contact Page"
                  : enquiry.source
            }
          />
          <Detail
            label="Submitted"
            value={new Date(enquiry.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
          <Detail label="Message" value={enquiry.message || "None"} />
        </div>
      </div>

      {/* Notes */}
      <div className="bg-admin-surface rounded-lg border border-admin-border p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[12px] font-semibold text-admin-text-secondary uppercase tracking-wider">
            Notes
          </h2>
          <button
            onClick={handleSaveNotes}
            disabled={savingNotes || notes === (enquiry.notes || "")}
            className="text-[12px] font-medium text-admin-primary hover:text-admin-primary-hover disabled:text-admin-muted disabled:cursor-default transition-colors"
          >
            {savingNotes ? "Saving..." : "Save"}
          </button>
        </div>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="Add notes about this enquiry..."
          className="w-full border border-admin-border rounded-md px-3 py-2 text-[13px] text-admin-text placeholder:text-admin-muted resize-none focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
        />
      </div>

      {/* Treatment value modal */}
      {showValueModal && (
        <TreatmentValueModal
          enquiryName={fullName}
          onConfirm={(value) => {
            setShowValueModal(false);
            if (pendingStatus) {
              handleStatusChange(pendingStatus, value);
              setPendingStatus(null);
            }
          }}
          onCancel={() => {
            setShowValueModal(false);
            setPendingStatus(null);
          }}
        />
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] text-admin-muted uppercase tracking-wide">{label}</p>
      <p className="text-[13px] text-admin-text mt-0.5">{value}</p>
    </div>
  );
}
