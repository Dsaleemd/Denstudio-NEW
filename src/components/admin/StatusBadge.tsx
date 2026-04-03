const statusConfig: Record<string, { label: string; className: string }> = {
  new: { label: "New", className: "bg-emerald-900/10 text-emerald-800" },
  contacted: { label: "Contacted", className: "bg-teal-900/10 text-teal-800" },
  booked: { label: "Booked", className: "bg-amber-900/10 text-amber-800" },
  closed: { label: "Closed", className: "bg-stone-900/8 text-stone-500" },
};

export default function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status] || statusConfig.new;
  return (
    <span className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-semibold tracking-wide ${config.className}`}>
      {config.label}
    </span>
  );
}
