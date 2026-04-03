"use client";

interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  view: "board" | "table";
  onViewChange: (view: "board" | "table") => void;
}

export default function SearchFilter({
  search,
  onSearchChange,
  status,
  onStatusChange,
  view,
  onViewChange,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2.5">
      <div className="flex-1 relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-muted"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="6.5" cy="6.5" r="4.5" />
          <path d="M10 10l3.5 3.5" />
        </svg>
        <input
          type="text"
          placeholder="Search name, email, phone..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full border border-admin-border rounded-md pl-9 pr-3 py-1.5 text-sm bg-admin-surface text-admin-text placeholder:text-admin-muted focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
        />
      </div>
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border border-admin-border rounded-md px-3 py-1.5 text-sm bg-admin-surface text-admin-text focus:outline-none focus:ring-1 focus:ring-admin-primary/30 focus:border-admin-primary/40"
      >
        <option value="">All Statuses</option>
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="booked">Booked</option>
        <option value="closed">Closed</option>
      </select>
      <div className="flex border border-admin-border rounded-md overflow-hidden">
        <button
          onClick={() => onViewChange("board")}
          className={`px-3 py-1.5 text-sm transition-colors ${
            view === "board"
              ? "bg-admin-primary text-white"
              : "bg-admin-surface text-admin-text-secondary hover:bg-admin-bg"
          }`}
          title="Board view"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="2" width="4" height="12" rx="0.5" />
            <rect x="6" y="2" width="4" height="12" rx="0.5" />
            <rect x="11" y="2" width="4" height="12" rx="0.5" />
          </svg>
        </button>
        <button
          onClick={() => onViewChange("table")}
          className={`px-3 py-1.5 text-sm border-l border-admin-border transition-colors ${
            view === "table"
              ? "bg-admin-primary text-white"
              : "bg-admin-surface text-admin-text-secondary hover:bg-admin-bg"
          }`}
          title="Table view"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 4h12M2 8h12M2 12h12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
