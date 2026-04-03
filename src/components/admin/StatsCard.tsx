interface StatsCardProps {
  label: string;
  value: string | number;
  sub?: string;
  trend?: string;
}

export default function StatsCard({ label, value, sub, trend }: StatsCardProps) {
  return (
    <div className="bg-admin-surface rounded-lg border border-admin-border p-4">
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-semibold text-admin-text-secondary uppercase tracking-wider">
          {label}
        </p>
        {trend && (
          <span className="text-[11px] font-medium text-admin-accent">{trend}</span>
        )}
      </div>
      <p className="text-2xl font-bold text-admin-text mt-1.5 tracking-tight">{value}</p>
      {sub && <p className="text-[11px] text-admin-muted mt-0.5">{sub}</p>}
    </div>
  );
}
