"use client";

const periods = [
  { key: "7d", label: "7 days" },
  { key: "30d", label: "30 days" },
  { key: "90d", label: "90 days" },
  { key: "all", label: "All time" },
] as const;

export type TimePeriod = (typeof periods)[number]["key"];

interface TimeSlicerProps {
  value: TimePeriod;
  onChange: (period: TimePeriod) => void;
}

export default function TimeSlicer({ value, onChange }: TimeSlicerProps) {
  return (
    <div className="flex bg-admin-surface border border-admin-border rounded-md overflow-hidden">
      {periods.map((p) => (
        <button
          key={p.key}
          onClick={() => onChange(p.key)}
          className={`
            px-3 py-1 text-[12px] font-medium transition-colors
            ${value === p.key
              ? "bg-admin-primary text-white"
              : "text-admin-text-secondary hover:bg-admin-bg"
            }
          `}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}

export function getDateFromPeriod(period: TimePeriod): string | null {
  if (period === "all") return null;
  const days = parseInt(period);
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}
