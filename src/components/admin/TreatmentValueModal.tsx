"use client";

import { useState } from "react";

interface TreatmentValueModalProps {
  enquiryName: string;
  onConfirm: (value: number) => void;
  onCancel: () => void;
}

export default function TreatmentValueModal({
  enquiryName,
  onConfirm,
  onCancel,
}: TreatmentValueModalProps) {
  const [value, setValue] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="bg-admin-surface rounded-xl shadow-xl border border-admin-border w-full max-w-sm p-5">
        <h3 className="text-base font-bold text-admin-text">Treatment Value</h3>
        <p className="text-[13px] text-admin-text-secondary mt-1">
          Enter the estimated treatment value for {enquiryName}.
        </p>
        <div className="mt-4 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-muted text-sm">
            &pound;
          </span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="0.00"
            className="w-full border border-admin-border rounded-md pl-7 pr-4 py-2 text-sm text-admin-text focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
            autoFocus
          />
        </div>
        <div className="flex gap-2.5 mt-4">
          <button
            onClick={onCancel}
            className="flex-1 border border-admin-border rounded-md py-2 text-[13px] font-medium text-admin-text-secondary hover:bg-admin-bg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(parseFloat(value) || 0)}
            className="flex-1 bg-admin-primary text-white rounded-md py-2 text-[13px] font-semibold hover:bg-admin-primary-hover transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
