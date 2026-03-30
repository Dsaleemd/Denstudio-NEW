export interface EnquiryFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  treatment_interest: string;
  message: string;
  privacy_agreed: boolean;
  marketing_opted_in: boolean;
  source: string;
}

export async function submitEnquiry(data: EnquiryFormData) {
  const res = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit enquiry");
  }

  return await res.json();
}
