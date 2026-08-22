import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export type EnquiryInput = {
  name: string;
  email: string;
  dates: string;
  guests: string;
  stay: string;
  message: string;
};

const TO_EMAIL = "elorahomesinn@gmail.com";
// Resend requires a verified domain to send to external inboxes.
// Until a domain is verified, Resend's shared onboarding sender is used.
const FROM_EMAIL = process.env.ENQUIRY_FROM_EMAIL ?? "Elora Homes <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendEnquiry = createServerFn({ method: "POST" })
  .validator((data: EnquiryInput): EnquiryInput => {
    const fields: (keyof EnquiryInput)[] = ["name", "email", "dates", "guests", "stay", "message"];
    const clean = {} as EnquiryInput;
    for (const field of fields) {
      const value = typeof data?.[field] === "string" ? data[field].trim() : "";
      if (!value) throw new Error(`Missing field: ${field}`);
      clean[field] = value.slice(0, 2000);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
      throw new Error("Invalid email address");
    }
    return clean;
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Email service is not configured. Please add RESEND_API_KEY.");
    }

    const resend = new Resend(apiKey);
    const rows: [string, string][] = [
      ["Name", data.name],
      ["Email", data.email],
      ["Dates", data.dates],
      ["Guests", data.guests],
      ["Stay", data.stay],
    ];

    const html = `
      <div style="font-family: Georgia, 'Times New Roman', serif; color: #26332b; line-height: 1.6;">
        <h2 style="font-weight: 400;">New enquiry from Elora Homes</h2>
        <table style="border-collapse: collapse;">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><td style="padding: 4px 16px 4px 0; color: #8a8478;">${label}</td><td style="padding: 4px 0;">${escapeHtml(
                  value,
                )}</td></tr>`,
            )
            .join("")}
        </table>
        <p style="margin-top: 20px; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `Enquiry for ${data.stay} — ${data.name}`,
      html,
    });

    if (error) {
      throw new Error(error.message || "Failed to send enquiry.");
    }

    return { ok: true as const };
  });
