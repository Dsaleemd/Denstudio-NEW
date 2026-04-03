"use client";

import { useEffect, useState, useCallback } from "react";
import StatsCard from "@/components/admin/StatsCard";
import PipelineBoard from "@/components/admin/PipelineBoard";
import EnquiryTable from "@/components/admin/EnquiryTable";
import SearchFilter from "@/components/admin/SearchFilter";
import TimeSlicer, {
  type TimePeriod,
  getDateFromPeriod,
} from "@/components/admin/TimeSlicer";
import type { Enquiry } from "@/components/admin/EnquiryCard";

interface Stats {
  counts: { new: number; contacted: number; booked: number; closed: number };
  totalValue: number;
  conversionRate: number;
  totalEnquiries: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [view, setView] = useState<"board" | "table">("board");
  const [period, setPeriod] = useState<TimePeriod>("30d");
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const since = getDateFromPeriod(period);
    const statsParams = new URLSearchParams();
    if (since) statsParams.set("since", since);

    const listParams = new URLSearchParams();
    if (search) listParams.set("search", search);
    if (statusFilter) listParams.set("status", statusFilter);

    const [statsRes, enquiriesRes] = await Promise.all([
      fetch(`/api/admin/stats?${statsParams}`),
      fetch(`/api/admin/enquiries?${listParams}`),
    ]);

    if (statsRes.ok) setStats(await statsRes.json());
    if (enquiriesRes.ok) {
      const data = await enquiriesRes.json();
      setEnquiries(data.enquiries || []);
    }
    setLoading(false);
  }, [search, statusFilter, period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function handleStatusChange(
    id: string,
    status: string,
    treatmentValue?: number
  ) {
    const body: Record<string, unknown> = { status };
    if (treatmentValue !== undefined) body.treatment_value = treatmentValue;

    const res = await fetch(`/api/admin/enquiries/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) fetchData();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-5 h-5 border-2 border-admin-primary/30 border-t-admin-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h1 className="text-xl font-bold text-admin-text tracking-tight">
          Dashboard
        </h1>
        <TimeSlicer value={period} onChange={setPeriod} />
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <StatsCard label="Total" value={stats.totalEnquiries} />
          <StatsCard label="New" value={stats.counts.new} />
          <StatsCard label="Contacted" value={stats.counts.contacted} />
          <StatsCard
            label="Booked"
            value={stats.counts.booked}
            sub={`${stats.conversionRate}% conversion`}
          />
          <StatsCard
            label="Pipeline Value"
            value={`£${stats.totalValue.toLocaleString()}`}
          />
        </div>
      )}

      {/* Search, Filter & View Toggle */}
      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        status={statusFilter}
        onStatusChange={setStatusFilter}
        view={view}
        onViewChange={setView}
      />

      {/* Board or Table */}
      {view === "board" ? (
        <PipelineBoard
          enquiries={enquiries}
          onStatusChange={handleStatusChange}
        />
      ) : (
        <EnquiryTable enquiries={enquiries} />
      )}
    </div>
  );
}
