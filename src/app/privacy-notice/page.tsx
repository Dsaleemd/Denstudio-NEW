import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Notice — DENSTUDIO",
  description:
    "Read the DENSTUDIO privacy notice to understand how we collect, use and protect your personal data in accordance with UK GDPR.",
};

export default function PrivacyNoticePage() {
  return (
    <LegalPageLayout title="Privacy Notice">
      <p>
        DENSTUDIO is committed to protecting your privacy. This Privacy Notice
        explains how we collect, use, store and protect your personal data in
        accordance with the UK General Data Protection Regulation (UK GDPR) and
        the Data Protection Act 2018.
      </p>

      <h2>Data Controller</h2>
      <p>
        The data controller responsible for your personal data is Dr Jana Denzel
        Nandakumar, operating through Denstudio Dental Ltd. If you have any
        questions about how we handle your data, please contact us at{" "}
        <a href="mailto:hello@denstudio.co.uk">hello@denstudio.co.uk</a>.
      </p>

      <h2>What Data We Collect</h2>
      <p>
        We may collect and process the following categories of personal data:
      </p>

      <h3>Contact Information</h3>
      <p>
        Your name, email address, phone number, postal address and any other
        contact details you provide to us when making an enquiry or booking an
        appointment.
      </p>

      <h3>Health Data</h3>
      <p>
        Medical and dental history, treatment records, clinical notes,
        photographs, X-rays, CT scans and any other health-related information
        necessary to provide dental care. This is classified as special category
        data under UK GDPR.
      </p>

      <h3>Technical Data</h3>
      <p>
        IP address, browser type and version, time zone setting, browser plug-in
        types and versions, operating system and platform, and other technology
        on the devices you use to access our website.
      </p>

      <h3>Financial Data</h3>
      <p>
        Payment information necessary to process transactions for dental
        treatments. We do not store full payment card details on our systems.
      </p>

      <h3>Usage and Marketing Data</h3>
      <p>
        Information about how you use our website and your preferences in
        relation to receiving marketing communications from us.
      </p>

      <h2>Marketing Preferences</h2>
      <p>
        We may send you marketing communications about our services, promotions
        and events where you have consented to receive them or where we have a
        legitimate interest to do so. You can opt out of receiving marketing
        communications at any time by:
      </p>
      <ul>
        <li>Clicking the unsubscribe link in any marketing email.</li>
        <li>
          Contacting us at{" "}
          <a href="mailto:hello@denstudio.co.uk">hello@denstudio.co.uk</a>.
        </li>
        <li>Calling us on <a href="tel:02038830588">020 3883 0588</a>.</li>
      </ul>

      <h2>Third Parties</h2>
      <p>
        We may share your personal data with the following third parties where
        necessary:
      </p>
      <ul>
        <li>Dental laboratories for the fabrication of dental appliances and restorations.</li>
        <li>NHS and other healthcare providers where required for your care.</li>
        <li>Payment processors to facilitate transactions.</li>
        <li>IT service providers who support our systems and website.</li>
        <li>Regulatory bodies such as the GDC and CQC where legally required.</li>
        <li>Legal and professional advisors where necessary.</li>
      </ul>
      <p>
        We will never sell your personal data to third parties.
      </p>

      <h2>Data Security</h2>
      <p>
        We take the security of your personal data seriously and have
        implemented appropriate technical and organisational measures to protect
        it against unauthorised access, alteration, disclosure or destruction.
        These measures include encrypted storage, secure access controls,
        regular system updates and staff training.
      </p>

      <h2>Your Rights</h2>
      <p>
        Under UK GDPR, you have the following rights in relation to your
        personal data:
      </p>
      <ul>
        <li><strong>Right of Access:</strong> You can request a copy of the personal data we hold about you.</li>
        <li><strong>Right to Rectification:</strong> You can request that we correct any inaccurate or incomplete data.</li>
        <li><strong>Right to Erasure:</strong> You can request that we delete your personal data, subject to legal and regulatory obligations.</li>
        <li><strong>Right to Restrict Processing:</strong> You can request that we limit the way we use your data.</li>
        <li><strong>Right to Data Portability:</strong> You can request that we transfer your data to another organisation.</li>
        <li><strong>Right to Object:</strong> You can object to the processing of your data in certain circumstances.</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at{" "}
        <a href="mailto:hello@denstudio.co.uk">hello@denstudio.co.uk</a>. We
        will respond to your request within one month.
      </p>
      <p>
        If you are not satisfied with how we handle your personal data, you have
        the right to lodge a complaint with the Information Commissioner&apos;s
        Office (ICO) at{" "}
        <a
          href="https://ico.org.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          ico.org.uk
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
