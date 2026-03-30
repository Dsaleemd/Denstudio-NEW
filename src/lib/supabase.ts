import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

function getSupabase() {
  if (supabase) return supabase;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  supabase = createClient(url, key);
  return supabase;
}

export interface EnquiryFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  treatment_interest: string;
  message: string;
  privacy_agreed: boolean;
  marketing_opted_in: boolean;
  source: string; // "contact_page" | "enquiry_modal" | "landing_page"
}

export async function submitEnquiry(data: EnquiryFormData) {
  const client = getSupabase();
  if (!client) {
    console.warn("Supabase not configured — form data logged to console");
    console.log("Enquiry submission:", data);
    return { success: true };
  }

  const { error } = await client.from("enquiries").insert([
    {
      ...data,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error("Failed to submit enquiry");
  }

  return { success: true };
}
