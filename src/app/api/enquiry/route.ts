import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

interface EnquiryBody {
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

export async function POST(request: Request) {
  try {
    const body: EnquiryBody = await request.json();

    // 1. Save to Supabase
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from("enquiries").insert([
        { ...body, created_at: new Date().toISOString() },
      ]);
      if (error) console.error("Supabase error:", error);
    }

    // 2. Send emails via Resend (if configured)
    const resend = getResend();
    if (resend) {
      const fromAddress = process.env.RESEND_FROM_EMAIL || "Denstudio <noreply@denstudio.co.uk>";

      // Confirmation email to patient
      await resend.emails.send({
        from: fromAddress,
        to: body.email,
        subject: "Thank you for your enquiry — Denstudio",
        html: patientEmailTemplate(body),
      });

      // Lead notification to clinic
      await resend.emails.send({
        from: fromAddress,
        to: "hello@denstudio.co.uk",
        replyTo: body.email,
        subject: `New Enquiry: ${body.first_name} ${body.last_name} — ${body.treatment_interest || "General"}`,
        html: clinicEmailTemplate(body),
      });
    } else {
      console.log("Resend not configured — skipping emails. Data saved to Supabase.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}

/* ────────────────────────────────────────────────────────
   EMAIL TEMPLATES
   ──────────────────────────────────────────────────────── */

function patientEmailTemplate(data: EnquiryBody): string {
  return `
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f7f5f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f5f0;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:#012406;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.08em;">DENSTUDIO</h1>
              <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.7);letter-spacing:0.06em;text-transform:uppercase;">Harley Street, London</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 8px;font-size:24px;color:#1a1a1a;font-weight:700;">Thank you, ${data.first_name}.</h2>
              <p style="margin:0 0 24px;font-size:15px;color:#555;line-height:1.6;">
                We&rsquo;ve received your enquiry and a member of our team will be in touch shortly to arrange your personalised consultation.
              </p>

              <!-- Summary card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f5f0;border-radius:12px;border:1px solid #e8e2d6;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;">Your enquiry details</p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;">
                      <tr>
                        <td style="padding:8px 0;font-size:13px;color:#888;width:120px;vertical-align:top;">Name</td>
                        <td style="padding:8px 0;font-size:13px;color:#1a1a1a;font-weight:500;">${data.first_name} ${data.last_name}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:13px;color:#888;vertical-align:top;">Email</td>
                        <td style="padding:8px 0;font-size:13px;color:#1a1a1a;">${data.email}</td>
                      </tr>
                      ${data.phone ? `<tr>
                        <td style="padding:8px 0;font-size:13px;color:#888;vertical-align:top;">Phone</td>
                        <td style="padding:8px 0;font-size:13px;color:#1a1a1a;">${data.phone}</td>
                      </tr>` : ""}
                      ${data.treatment_interest ? `<tr>
                        <td style="padding:8px 0;font-size:13px;color:#888;vertical-align:top;">Treatment</td>
                        <td style="padding:8px 0;font-size:13px;color:#1a1a1a;">${data.treatment_interest}</td>
                      </tr>` : ""}
                      ${data.message ? `<tr>
                        <td style="padding:8px 0;font-size:13px;color:#888;vertical-align:top;">Message</td>
                        <td style="padding:8px 0;font-size:13px;color:#1a1a1a;">${data.message}</td>
                      </tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What happens next -->
              <div style="margin-top:28px;">
                <h3 style="margin:0 0 12px;font-size:16px;color:#1a1a1a;font-weight:700;">What happens next?</h3>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:8px 0;font-size:14px;color:#444;line-height:1.5;">
                      <strong style="color:#012406;">1.</strong>&nbsp; Our team will review your enquiry within 24 hours.
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-size:14px;color:#444;line-height:1.5;">
                      <strong style="color:#012406;">2.</strong>&nbsp; We&rsquo;ll call or email to discuss your needs and find a suitable appointment time.
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-size:14px;color:#444;line-height:1.5;">
                      <strong style="color:#012406;">3.</strong>&nbsp; Your consultation with Dr Jana Denzel will be confirmed.
                    </td>
                  </tr>
                </table>
              </div>

              <!-- CTA -->
              <div style="margin-top:28px;text-align:center;">
                <a href="https://denstudio.co.uk" style="display:inline-block;background:#012406;color:#ffffff;padding:14px 32px;border-radius:50px;font-size:14px;font-weight:600;text-decoration:none;">
                  Visit Our Website
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #eee;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;color:#1a1a1a;font-weight:600;">Denstudio</p>
              <p style="margin:0;font-size:12px;color:#888;line-height:1.6;">
                139 Harley Street, London, W1G 6BG<br>
                <a href="tel:02038830588" style="color:#012406;text-decoration:none;">020 3883 0588</a> &nbsp;|&nbsp;
                <a href="mailto:hello@denstudio.co.uk" style="color:#012406;text-decoration:none;">hello@denstudio.co.uk</a>
              </p>
              <p style="margin:16px 0 0;font-size:11px;color:#bbb;">
                &copy; ${new Date().getFullYear()} Denstudio Dental Ltd. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function clinicEmailTemplate(data: EnquiryBody): string {
  const timestamp = new Date().toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/London",
  });

  return `
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">

          <!-- Header -->
          <tr>
            <td style="background:#012406;padding:20px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h1 style="margin:0;font-size:16px;color:#fff;font-weight:700;">New Enquiry</h1>
                  </td>
                  <td style="text-align:right;">
                    <span style="font-size:11px;color:rgba(255,255,255,0.7);background:rgba(255,255,255,0.15);padding:4px 10px;border-radius:99px;">${data.source === "enquiry_modal" ? "Popup Form" : data.source === "contact_page" ? "Contact Page" : data.source}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Lead info -->
          <tr>
            <td style="padding:28px 30px;">
              <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.06em;">Received ${timestamp}</p>

              <h2 style="margin:8px 0 20px;font-size:22px;color:#1a1a1a;font-weight:700;">${data.first_name} ${data.last_name}</h2>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8f6;border-radius:10px;border:1px solid #eee;">
                <tr>
                  <td style="padding:20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;width:110px;">Email</td>
                        <td style="padding:6px 0;font-size:13px;color:#1a1a1a;">
                          <a href="mailto:${data.email}" style="color:#012406;text-decoration:none;font-weight:500;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;">Phone</td>
                        <td style="padding:6px 0;font-size:13px;color:#1a1a1a;">
                          <a href="tel:${data.phone}" style="color:#012406;text-decoration:none;font-weight:500;">${data.phone || "Not provided"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;">Treatment</td>
                        <td style="padding:6px 0;font-size:13px;color:#1a1a1a;font-weight:500;">${data.treatment_interest || "Not specified"}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;">Privacy</td>
                        <td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${data.privacy_agreed ? "Agreed" : "Not agreed"}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;">Marketing</td>
                        <td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${data.marketing_opted_in ? "Opted in" : "Opted out"}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${data.message ? `
              <div style="margin-top:20px;">
                <p style="margin:0 0 6px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.06em;">Message</p>
                <div style="background:#f8f8f6;border:1px solid #eee;border-radius:10px;padding:16px;">
                  <p style="margin:0;font-size:14px;color:#333;line-height:1.6;white-space:pre-wrap;">${data.message}</p>
                </div>
              </div>` : ""}

              <!-- Quick actions -->
              <div style="margin-top:24px;">
                <a href="mailto:${data.email}" style="display:inline-block;background:#012406;color:#fff;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;margin-right:8px;">
                  Reply by Email
                </a>
                ${data.phone ? `<a href="tel:${data.phone}" style="display:inline-block;background:#f0f0f0;color:#1a1a1a;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;">
                  Call ${data.phone}
                </a>` : ""}
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
