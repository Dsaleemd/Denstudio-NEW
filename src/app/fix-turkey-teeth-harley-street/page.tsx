import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Fix Turkey Teeth in London: Corrective Care at Harley Street — DENSTUDIO",
  description:
    "Experiencing problems with veneers done abroad? Learn about Denstudio's corrective care programme for turkey teeth at our Harley Street practice.",
};

export default function FixTurkeyTeethPage() {
  return (
    <BlogArticleLayout
      title="Fix Turkey Teeth in London: Corrective Care at Harley Street"
      publishDate="27 March 2026"
    >
      <p>
        Every week, patients walk into our Harley Street practice with the same
        story: they travelled abroad for a &quot;dream smile&quot; and came back
        with pain, failing restorations, and a growing sense of anxiety about
        what was done to their teeth. If this sounds familiar, you are not alone
        — and there are options.
      </p>

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

      <h2>What the British Dental Association Found</h2>
      <p>
        The BDA&apos;s investigation into dental tourism produced alarming
        statistics:
      </p>
      <ul>
        <li>
          <strong>86% of patients</strong> who had dental work abroad required
          corrective treatment upon returning to the UK.
        </li>
        <li>
          <strong>58% of Turkish dental clinics</strong> surveyed were found to
          recommend more extensive treatment than was clinically necessary —
          over-treating to justify higher fees.
        </li>
        <li>
          Patients reported minimal diagnostic records, no wax-ups or
          trial smiles, and limited informed consent processes.
        </li>
      </ul>

      <h2>Veneer vs Crown: Understanding the Difference</h2>
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-[#222222]">
              <th className="text-left py-3 pr-4 font-semibold text-[#222222]">
                Factor
              </th>
              <th className="text-left py-3 pr-4 font-semibold text-[#222222]">
                Porcelain Veneer
              </th>
              <th className="text-left py-3 font-semibold text-[#222222]">
                Full Crown
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e5e5]">
            <tr>
              <td className="py-3 pr-4 font-medium">Tooth reduction</td>
              <td className="py-3 pr-4">0.3–0.5 mm (front surface only)</td>
              <td className="py-3">1.5–2 mm (all surfaces)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">Enamel preserved</td>
              <td className="py-3 pr-4">Most enamel remains</td>
              <td className="py-3">Little to no enamel remains</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">Reversibility</td>
              <td className="py-3 pr-4">No, but minimal damage</td>
              <td className="py-3">No — significant and permanent</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">Nerve risk</td>
              <td className="py-3 pr-4">Very low</td>
              <td className="py-3">Moderate to high</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">Longevity</td>
              <td className="py-3 pr-4">15–20 years</td>
              <td className="py-3">10–15 years (then replacement needed)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">Typical cost (UK)</td>
              <td className="py-3 pr-4">£800–£1,500 per tooth</td>
              <td className="py-3">£1,000–£2,000 per tooth</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems We See</h2>
      <ol>
        <li>
          <strong>Debonding</strong> — restorations coming loose within weeks or
          months of placement, often due to contaminated bonding surfaces or
          poor cement selection.
        </li>
        <li>
          <strong>Recurrent decay</strong> — bacteria entering through open
          margins, causing cavities beneath the restorations that are
          undetectable without radiographs.
        </li>
        <li>
          <strong>Pulp necrosis</strong> — teeth dying as a result of
          over-preparation, requiring root canal treatment or extraction.
        </li>
        <li>
          <strong>Gingival inflammation</strong> — ill-fitting margins
          irritating the gum tissue, causing chronic redness and bleeding.
        </li>
        <li>
          <strong>Aesthetic dissatisfaction</strong> — overly white, uniform,
          bulky restorations that patients grow to dislike.
        </li>
        <li>
          <strong>Bite instability</strong> — jaw pain, headaches, and uneven
          wear from occlusion that was never properly assessed.
        </li>
      </ol>

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
    </BlogArticleLayout>
  );
}
