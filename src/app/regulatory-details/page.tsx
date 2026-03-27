import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Regulatory Details — DENSTUDIO",
  description:
    "View the regulatory details for DENSTUDIO, including company registration, GDC registration, indemnity insurance and clinical governance information.",
};

export default function RegulatoryDetailsPage() {
  return (
    <LegalPageLayout title="Regulatory Details">
      <p>
        DENSTUDIO is committed to operating transparently and in full compliance
        with all regulatory requirements. Below you will find our key regulatory
        and registration details.
      </p>

      <h2>Company Information</h2>
      <ul>
        <li>
          <strong>Company Name:</strong> Denstudio Dental Ltd
        </li>
        <li>
          <strong>Company Number:</strong> 13884905
        </li>
        <li>
          <strong>Registered Address:</strong> 27 Addison Way, Northwood,
          Middlesex, HA6 2RB
        </li>
      </ul>

      <h2>GDC Registration</h2>
      <p>
        All dental professionals at DENSTUDIO are registered with the General
        Dental Council (GDC), the regulatory body for dental professionals in
        the United Kingdom.
      </p>
      <ul>
        <li>
          <strong>Dr Jana Denzel Nandakumar</strong> &ndash; GDC Registration
          Number: 285525
        </li>
      </ul>
      <p>
        You can verify the registration of any dental professional on the{" "}
        <a
          href="https://www.gdc-uk.org/registration/the-register"
          target="_blank"
          rel="noopener noreferrer"
        >
          GDC register
        </a>
        .
      </p>

      <h2>Indemnity Insurance</h2>
      <p>
        All dental professionals at DENSTUDIO hold appropriate professional
        indemnity insurance as required by the GDC. This ensures that patients
        are protected in the unlikely event of a claim arising from treatment
        provided.
      </p>

      <h2>Advertising Compliance</h2>
      <p>
        DENSTUDIO is committed to advertising our services honestly and
        responsibly. All marketing materials and website content comply with the
        guidelines set out by the GDC, the Advertising Standards Authority (ASA)
        and the Committee of Advertising Practice (CAP).
      </p>
      <p>
        Before and after photographs shown on our website represent genuine
        patient results and are used with written consent. Individual results
        may vary.
      </p>

      <h2>Clinical Governance</h2>
      <p>
        DENSTUDIO maintains robust clinical governance procedures to ensure the
        safety and quality of care for all patients. This includes:
      </p>
      <ul>
        <li>Regular clinical audits and peer review.</li>
        <li>Ongoing continuing professional development (CPD) for all staff.</li>
        <li>Adherence to infection control and decontamination protocols.</li>
        <li>Comprehensive record keeping in accordance with GDC standards.</li>
        <li>A clear complaints procedure to address any patient concerns.</li>
        <li>Regular equipment maintenance and calibration.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        If you have any questions about our regulatory details, please contact
        us at{" "}
        <a href="mailto:hello@denstudio.co.uk">hello@denstudio.co.uk</a> or
        call us on <a href="tel:02038830588">020 3883 0588</a>.
      </p>
    </LegalPageLayout>
  );
}
