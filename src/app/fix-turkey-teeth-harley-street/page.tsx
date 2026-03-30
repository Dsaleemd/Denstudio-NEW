import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import Link from "next/link";
import {
  StatBox,
  Callout,
  DataTable,
  ComparisonTable,
  Divider,
  AuthorBio,
  ClinicalDisclaimer,
  Sources,
} from "@/components/BlogComponents";

export const metadata: Metadata = {
  title:
    "The Turkey Teeth Rescue: Why Harley Street is the Global Hub for Corrective Care — DENSTUDIO",
  description:
    "Experiencing problems with veneers done abroad? Learn about Denstudio's corrective care programme for turkey teeth at our Harley Street practice.",
};

export default function FixTurkeyTeethPage() {
  return (
    <BlogArticleLayout
      title="The Turkey Teeth Rescue: Why Harley Street is the Global Hub for Corrective Care"
      publishDate="27 March 2026"
    >
      <p>
        Every week, patients walk into our Harley Street practice with the same
        story: they travelled abroad for a &quot;dream smile&quot; and came back
        with pain, failing restorations, and a growing sense of anxiety about
        what was done to their teeth. If this sounds familiar, you are not alone
        — and there are options.
      </p>

      <StatBox value="86%" label="Require Corrective Treatment">
        According to the British Dental Association, 86% of patients who had
        dental work performed abroad required corrective treatment upon
        returning to the UK — ranging from minor adjustments to full-arch
        replacement.
      </StatBox>

      <StatBox value="58%" label="Over-Treatment Rate">
        The BDA also found that 58% of overseas dental clinics surveyed
        recommended more extensive treatment than was clinically necessary —
        over-treating to justify higher fees.
      </StatBox>

      <h2>Patient Stories</h2>
      <p>
        The patients we see in our corrective care programme share common
        experiences. One patient, aged 28, had 20 crowns placed in Turkey over
        five days. Within four months, three had debonded, two teeth had become
        non-vital, and she was in constant discomfort. Another patient, aged 34,
        was told he was receiving &quot;porcelain veneers&quot; — but
        radiographs revealed full-coverage crowns on every anterior tooth, with
        margins open to bacteria.
      </p>
      <p>
        These are not isolated cases. They represent a pattern we see
        repeatedly, and the clinical challenges are significant but manageable
        with the right expertise.
      </p>

      <Callout variant="warning">
        <strong>A common misconception:</strong> Many patients believe they
        received &quot;veneers&quot; abroad, only to discover upon UK assessment
        that full-coverage crowns were placed instead — requiring 4–5 times more
        tooth reduction and carrying significantly higher long-term risk.
      </Callout>

      <Divider />

      <h2>What Turkey Teeth Means Clinically</h2>
      <p>
        The term &quot;turkey teeth&quot; typically describes full-arch crown
        preparations performed overseas with excessive tooth reduction,
        substandard materials, and inadequate bonding. The clinical reality is
        often:
      </p>
      <ul>
        <li>Teeth reduced to stumps far beyond what any restoration requires</li>
        <li>Pulpal proximity or exposure leading to nerve death</li>
        <li>Open margins that trap bacteria and accelerate decay</li>
        <li>Monochromatic, opaque restorations that look artificial</li>
        <li>No occlusal equilibration, leaving the bite unstable</li>
      </ul>

      <h2>Veneer vs Crown: Understanding the Difference</h2>

      <ComparisonTable
        title1="Porcelain Veneer"
        title2="Full Crown"
        rows={[
          ["Tooth reduction", "0.3–0.5 mm (front surface only)", "1.5–2 mm (all surfaces)"],
          ["Enamel preserved", "Most enamel remains intact", "Little to no enamel remains"],
          ["Reversibility", "No, but minimal permanent damage", "No — significant and permanent"],
          ["Nerve risk", "Very low (<1%)", "Moderate to high (10–15%)"],
          ["Longevity", "15–20 years with proper care", "10–15 years (then replacement needed)"],
          ["Typical cost (UK)", "£800–£1,500 per tooth", "£1,000–£2,000 per tooth"],
          ["When indicated", "Cosmetic improvement of healthy teeth", "Structurally compromised teeth"],
        ]}
      />

      <Divider />

      <h2>Common Problems We See</h2>

      <DataTable
        caption="Common Presenting Problems in Turkey Teeth Patients"
        headers={["Problem", "Cause", "Consequence If Untreated"]}
        rows={[
          [
            "Debonding",
            "Contaminated bonding surfaces or poor cement selection",
            "Exposed tooth stumps, sensitivity, rapid decay",
          ],
          [
            "Recurrent decay",
            "Open margins allowing bacterial ingress",
            "Cavities beneath restorations; potential tooth loss",
          ],
          [
            "Pulp necrosis",
            "Over-preparation causing nerve damage",
            "Abscess, pain, root canal treatment or extraction",
          ],
          [
            "Gingival inflammation",
            "Ill-fitting margins irritating gum tissue",
            "Chronic bleeding, bone loss, periodontal disease",
          ],
          [
            "Aesthetic dissatisfaction",
            "Opaque, monochromatic, bulky restorations",
            "Psychological impact, social anxiety, regret",
          ],
          [
            "Bite instability",
            "Occlusion never properly assessed or adjusted",
            "Jaw pain, headaches, TMJ disorder, uneven wear",
          ],
        ]}
      />

      <h2>Our 6-Step Corrective Process</h2>
      <ol>
        <li>
          <strong>Comprehensive assessment</strong> — full-mouth radiographs,
          clinical photographs, periodontal charting, and vitality testing of
          every restored tooth.
        </li>
        <li>
          <strong>Diagnosis and priority mapping</strong> — identifying which
          restorations are failing, which teeth are at risk, and which issues
          need immediate attention.
        </li>
        <li>
          <strong>Stabilisation</strong> — addressing pain, infection, and any
          teeth at immediate risk of loss. This may include emergency root canal
          treatment or temporary restorations.
        </li>
        <li>
          <strong>Treatment planning</strong> — developing a phased plan to
          replace failing restorations with properly fitted, high-quality
          alternatives. We present all options honestly, including the
          limitations of what can be achieved given the existing damage.
        </li>
        <li>
          <strong>Restorative phase</strong> — carefully removing failed
          restorations, preparing remaining tooth structure conservatively, and
          placing new restorations crafted by our master ceramist to precise
          specifications.
        </li>
        <li>
          <strong>Maintenance programme</strong> — regular review appointments
          and hygiene care to ensure long-term stability.
        </li>
      </ol>

      <Callout variant="pine">
        <strong>Our commitment:</strong> We will always tell you exactly what we
        find — including whether intervention is genuinely needed or whether
        monitoring is the better option. Not every case requires full
        replacement; some need targeted repairs and careful observation.
      </Callout>

      <Divider />

      <h2>The Cost Reality</h2>
      <p>
        We believe in transparency. Corrective treatment for failed overseas
        dental work typically costs{" "}
        <strong>three to five times the original treatment price</strong>. This
        is not because UK dentistry is overpriced — it is because undoing damage
        is inherently more complex, time-consuming, and material-intensive than
        doing the work correctly the first time.
      </p>
      <p>
        We offer staged payment plans and will always prioritise the most
        critical work first, allowing patients to spread the financial
        commitment over time.
      </p>

      <h2>Book an Assessment</h2>
      <p>
        If you are concerned about dental work done abroad, the most important
        step is getting an honest, thorough assessment. At Denstudio, we will
        tell you exactly what we find — including whether intervention is
        genuinely needed or whether monitoring is the better option.
      </p>
      <p>
        <Link href="/contact-us">Book a corrective care consultation</Link> at
        our Harley Street practice, or call us to discuss your situation before
        committing to an appointment.
      </p>

      <Divider />

      <AuthorBio />

      <ClinicalDisclaimer />

      <Sources
        items={[
          "British Dental Association. \"Dental tourism: Investigating the quality of dental treatment abroad.\" BDA Research Report, 2022.",
          "3Dental. \"Turkey Teeth: What the BDA found about dental tourism outcomes.\" 2023.",
          "General Dental Council. \"Standards for the dental team and overseas treatment complaints data.\" 2023.",
          "Denplan. \"The true cost of dental tourism: Corrective care outcomes in UK practices.\" 2022.",
        ]}
      />
    </BlogArticleLayout>
  );
}
