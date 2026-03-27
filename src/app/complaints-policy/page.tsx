import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Complaints Policy — DENSTUDIO",
  description:
    "Read the DENSTUDIO complaints policy. We are committed to providing exceptional care and take all complaints seriously.",
};

export default function ComplaintsPolicyPage() {
  return (
    <LegalPageLayout title="Complaints Policy">
      <h2>Introduction</h2>
      <p>
        At DENSTUDIO, we are committed to providing the highest standard of
        dental care and patient service. We value your feedback and take all
        complaints seriously. If you are unhappy with any aspect of your
        experience, we want to hear from you so that we can put things right and
        improve our services.
      </p>

      <h2>Our Commitment</h2>
      <p>We are committed to:</p>
      <ul>
        <li>Treating all complaints with fairness, sensitivity and confidentiality.</li>
        <li>Investigating complaints thoroughly and promptly.</li>
        <li>Providing a clear and honest response.</li>
        <li>Learning from complaints to improve our services.</li>
        <li>Ensuring that making a complaint does not adversely affect your ongoing care.</li>
      </ul>

      <h2>Who Can Complain?</h2>
      <p>
        A complaint can be made by any patient, or by a representative acting on
        behalf of a patient with their written consent. Complaints can relate to
        any aspect of our service, including clinical treatment, staff conduct,
        facilities, communication or administration.
      </p>

      <h2>How to Complain</h2>
      <p>
        We encourage you to raise any concerns as soon as possible so that we
        can address them quickly. Complaints can be made:
      </p>
      <ul>
        <li>
          <strong>In writing:</strong> Email us at{" "}
          <a href="mailto:hello@denstudio.co.uk">hello@denstudio.co.uk</a> or
          write to Denstudio Dental Ltd, 139 Harley Street, London.
        </li>
        <li>
          <strong>By phone:</strong> Call us on{" "}
          <a href="tel:02038830588">020 3883 0588</a>.
        </li>
        <li>
          <strong>In person:</strong> Speak to a member of our team at the
          practice.
        </li>
      </ul>

      <h2>What to Include</h2>
      <p>To help us investigate your complaint effectively, please include:</p>
      <ul>
        <li>Your full name and contact details.</li>
        <li>The date(s) of the incident or treatment in question.</li>
        <li>A clear description of your complaint and what happened.</li>
        <li>Any supporting documentation or evidence you may have.</li>
        <li>What outcome you are hoping for.</li>
      </ul>

      <h2>Our Complaints Process</h2>

      <h3>Stage 1: Acknowledgement</h3>
      <p>
        We will acknowledge your complaint within three working days of
        receiving it. We will confirm who will be handling your complaint and
        provide an expected timeline for our response.
      </p>

      <h3>Stage 2: Investigation</h3>
      <p>
        We will carry out a thorough investigation into your complaint. This may
        involve reviewing clinical records, speaking to relevant staff members
        and gathering any additional information. We aim to provide a full
        written response within 10 working days. If the investigation requires
        more time, we will keep you informed of progress.
      </p>

      <h3>Stage 3: Resolution</h3>
      <p>
        Our written response will include a summary of the investigation, our
        findings, an apology where appropriate and any actions we intend to take
        to resolve the matter and prevent recurrence. If you are not satisfied
        with our response, we will arrange a meeting to discuss the matter
        further.
      </p>

      <h2>Escalation</h2>
      <p>
        If you remain dissatisfied after completing our internal complaints
        process, you may escalate your complaint to the following external
        bodies:
      </p>

      <h3>Dental Complaints Service</h3>
      <p>
        The Dental Complaints Service provides a free and impartial service to
        help resolve complaints about private dental care. You can contact them
        at:
      </p>
      <ul>
        <li>
          Website:{" "}
          <a
            href="https://dcs.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            dcs.org.uk
          </a>
        </li>
        <li>Phone: 020 8253 0800</li>
        <li>
          Email:{" "}
          <a href="mailto:info@dentalcomplaints.org.uk">
            info@dentalcomplaints.org.uk
          </a>
        </li>
      </ul>

      <h3>General Dental Council (GDC)</h3>
      <p>
        If your complaint relates to the professional conduct or fitness to
        practise of a dental professional, you can contact the General Dental
        Council:
      </p>
      <ul>
        <li>
          Website:{" "}
          <a
            href="https://gdc-uk.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            gdc-uk.org
          </a>
        </li>
        <li>Phone: 020 7167 6000</li>
        <li>
          Email:{" "}
          <a href="mailto:information@gdc-uk.org">information@gdc-uk.org</a>
        </li>
      </ul>
    </LegalPageLayout>
  );
}
