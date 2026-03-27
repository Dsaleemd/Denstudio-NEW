import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — DENSTUDIO",
  description:
    "Read the terms and conditions governing the use of the DENSTUDIO website and dental services.",
};

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <p>
        Welcome to the DENSTUDIO website. By accessing and using this website,
        you agree to be bound by these Terms &amp; Conditions. Please read them
        carefully before using our website or services.
      </p>

      <h2>1. General Information</h2>
      <p>
        This website is operated by Denstudio Dental Ltd, a company registered
        in England and Wales under company number 13884905. Our registered
        office is at 27 Addison Way, Northwood, Middlesex, HA6 2RB.
      </p>

      <h2>2. Website Content</h2>
      <p>
        The content on this website is provided for general information purposes
        only. While we make every effort to ensure that the information is
        accurate and up to date, we make no representations or warranties of any
        kind, express or implied, about the completeness, accuracy, reliability,
        suitability or availability of the website or the information, products,
        services or related graphics contained on the website.
      </p>
      <p>
        Any reliance you place on such information is strictly at your own risk.
        The content does not constitute medical advice, diagnosis or treatment.
      </p>

      <h2>3. Third-Party Links</h2>
      <p>
        This website may contain links to third-party websites. These links are
        provided for your convenience and do not signify our endorsement of such
        websites. We have no control over and accept no responsibility for the
        content, privacy policies or practices of any third-party websites.
      </p>

      <h2>4. Appointments &amp; Services</h2>
      <p>
        All appointments are subject to availability and our booking and
        cancellation policy. Treatment plans are tailored to individual needs
        and are subject to clinical assessment. Fees quoted are correct at the
        time of consultation but may be subject to change.
      </p>
      <p>
        By booking an appointment, you agree to attend at the scheduled time or
        provide adequate notice if you need to reschedule or cancel. Our full
        booking and cancellation policy is available on our website.
      </p>

      <h2>5. Payment &amp; Refunds</h2>
      <p>
        Payment for treatments is due at the time of the appointment unless
        otherwise agreed. We accept payment by card. Deposits paid for
        treatments are non-refundable unless we cancel the appointment.
      </p>
      <p>
        Refunds for treatments already commenced will be assessed on a
        case-by-case basis and are at the discretion of the practice.
      </p>

      <h2>6. Medical Disclaimer</h2>
      <p>
        The information provided on this website is for general informational
        purposes only and should not be considered as medical advice. Always
        seek the guidance of a qualified dental professional with any questions
        you may have regarding your dental health.
      </p>
      <p>
        Results from dental treatments vary from person to person. Before and
        after images shown on this website are for illustrative purposes and do
        not guarantee specific outcomes.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Denstudio Dental Ltd shall not
        be liable for any indirect, incidental, special, consequential or
        punitive damages, or any loss of profits or revenues, whether incurred
        directly or indirectly, or any loss of data, use, goodwill or other
        intangible losses resulting from your use of this website.
      </p>

      <h2>8. Data Protection</h2>
      <p>
        We are committed to protecting your personal data. Please refer to our
        Privacy Notice for full details on how we collect, use and protect your
        information in accordance with the UK General Data Protection Regulation
        (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2>9. Accessibility</h2>
      <p>
        We are committed to making our website accessible to all users. If you
        experience any difficulty accessing any part of this website, please
        contact us and we will do our best to assist you.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms &amp; Conditions are governed by and construed in accordance
        with the laws of England and Wales. Any disputes relating to these terms
        shall be subject to the exclusive jurisdiction of the courts of England
        and Wales.
      </p>

      <h2>11. Contact</h2>
      <p>
        If you have any questions about these Terms &amp; Conditions, please
        contact us at{" "}
        <a href="mailto:hello@denstudio.co.uk">hello@denstudio.co.uk</a> or
        call us on <a href="tel:02038830588">020 3883 0588</a>.
      </p>
    </LegalPageLayout>
  );
}
