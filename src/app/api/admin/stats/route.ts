import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createSupabaseServer } from "@/lib/supabase-server";

export async function GET(request: NextRequest) {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const since = request.nextUrl.searchParams.get("since");

  let query = supabase
    .from("enquiries")
    .select("status, treatment_value, created_at");

  if (since) {
    query = query.gte("created_at", since);
  }

  const { data: enquiries, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const counts = { new: 0, contacted: 0, booked: 0, closed: 0 };
  let totalValue = 0;

  for (const e of enquiries || []) {
    const status = e.status as keyof typeof counts;
    if (status in counts) counts[status]++;
    if (e.treatment_value) totalValue += Number(e.treatment_value);
  }

  const total = enquiries?.length || 0;
  const conversionRate =
    total > 0 ? Math.round((counts.booked / total) * 100) : 0;

  return NextResponse.json({
    counts,
    totalValue,
    conversionRate,
    totalEnquiries: total,
  });
}
