"use client";

import { useState } from "react";
import EnquiryCard, { type Enquiry } from "./EnquiryCard";
import TreatmentValueModal from "./TreatmentValueModal";

const columns = [
  { key: "new", label: "New", dot: "bg-emerald-600" },
  { key: "contacted", label: "Contacted", dot: "bg-teal-600" },
  { key: "booked", label: "Booked", dot: "bg-amber-600" },
  { key: "closed", label: "Closed", dot: "bg-stone-400" },
] as const;

interface PipelineBoardProps {
  enquiries: Enquiry[];
  onStatusChange: (id: string, status: string, treatmentValue?: number) => void;
}

export default function PipelineBoard({
  enquiries,
  onStatusChange,
}: PipelineBoardProps) {
  const [activeTab, setActiveTab] = useState("new");
  const [dragOverCol, setDragOverCol] = useState<string | null>(null);
  const [modal, setModal] = useState<{
    enquiryId: string;
    name: string;
  } | null>(null);

  function getColumnEnquiries(status: string) {
    return enquiries.filter((e) => e.status === status);
  }

  function handleDrop(e: React.DragEvent, targetStatus: string) {
    e.preventDefault();
    setDragOverCol(null);
    const enquiryId = e.dataTransfer.getData("enquiry-id");
    if (!enquiryId) return;

    const enquiry = enquiries.find((en) => en.id === enquiryId);
    if (!enquiry || enquiry.status === targetStatus) return;

    if (targetStatus === "booked") {
      setModal({
        enquiryId,
        name: `${enquiry.first_name} ${enquiry.last_name}`,
      });
    } else {
      onStatusChange(enquiryId, targetStatus);
    }
  }

  function handleDragOver(e: React.DragEvent, colKey: string) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverCol(colKey);
  }

  return (
    <>
      {/* Mobile tabs */}
      <div className="flex lg:hidden border-b border-admin-border mb-4 overflow-x-auto scrollbar-hide">
        {columns.map((col) => {
          const count = getColumnEnquiries(col.key).length;
          return (
            <button
              key={col.key}
              onClick={() => setActiveTab(col.key)}
              className={`
                flex-shrink-0 px-4 py-2 text-[13px] font-medium border-b-2 transition-colors
                ${activeTab === col.key
                  ? "border-admin-primary text-admin-primary"
                  : "border-transparent text-admin-muted hover:text-admin-text"
                }
              `}
            >
              {col.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Mobile: single column */}
      <div className="lg:hidden space-y-2.5">
        {getColumnEnquiries(activeTab).map((e) => (
          <EnquiryCard key={e.id} enquiry={e} />
        ))}
        {getColumnEnquiries(activeTab).length === 0 && (
          <p className="text-sm text-admin-muted text-center py-8">
            No enquiries
          </p>
        )}
      </div>

      {/* Desktop: 4 columns with drag-and-drop */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-3">
        {columns.map((col) => {
          const items = getColumnEnquiries(col.key);
          const isOver = dragOverCol === col.key;
          return (
            <div
              key={col.key}
              onDrop={(e) => handleDrop(e, col.key)}
              onDragOver={(e) => handleDragOver(e, col.key)}
              onDragLeave={() => setDragOverCol(null)}
              className={`
                rounded-lg p-2.5 min-h-[300px] transition-colors
                ${isOver ? "bg-admin-primary/5 ring-1 ring-admin-primary/20" : "bg-transparent"}
              `}
            >
              <div className="flex items-center gap-2 mb-3 px-1">
                <div className={`w-1.5 h-1.5 rounded-full ${col.dot}`} />
                <h3 className="text-[12px] font-semibold text-admin-text-secondary uppercase tracking-wider">
                  {col.label}
                </h3>
                <span className="text-[11px] text-admin-muted ml-auto bg-admin-bg rounded px-1.5 py-0.5">
                  {items.length}
                </span>
              </div>
              <div className="space-y-2">
                {items.map((e) => (
                  <EnquiryCard key={e.id} enquiry={e} draggable />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Treatment value modal */}
      {modal && (
        <TreatmentValueModal
          enquiryName={modal.name}
          onConfirm={(value) => {
            onStatusChange(modal.enquiryId, "booked", value);
            setModal(null);
          }}
          onCancel={() => setModal(null)}
        />
      )}
    </>
  );
}
