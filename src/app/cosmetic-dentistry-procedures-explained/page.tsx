import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Procedures Explained — DENSTUDIO",
  description:
    "A comprehensive guide to cosmetic dentistry procedures including veneers, bonding, whitening, aligners, and gum reshaping. Denstudio, Harley Street, London.",
};

export default function CosmeticDentistryProceduresExplainedPage() {
  return (
    <BlogArticleLayout title="Cosmetic Dentistry Procedures Explained">
      <p>
        Cosmetic dentistry encompasses a range of treatments designed to improve
        the appearance of your teeth and smile. At Denstudio on Harley Street,
        Dr Jana Denzel offers a full spectrum of cosmetic procedures, each
        tailored to the individual patient&apos;s needs and goals. Here we
        explain the most popular treatments, what each involves, and who they
        are best suited for.
      </p>

      <h2>Porcelain Veneers</h2>
      <p>
        Porcelain veneers are ultra-thin shells of ceramic that are custom-made
        and bonded to the front surfaces of the teeth. They are the most
        versatile cosmetic treatment available, capable of transforming colour,
        shape, size, and alignment in a single treatment plan.
      </p>
      <ul>
        <li>
          <strong>What it involves:</strong> After a consultation and digital
          smile design, a small amount of enamel is removed from the tooth
          surface (typically 0.3mm to 0.7mm). Impressions are taken and sent to
          a specialist ceramist who handcrafts each veneer. Temporary veneers
          are worn while the final restorations are being created. At the
          bonding appointment, the permanent veneers are carefully placed and
          adjusted.
        </li>
        <li>
          <strong>Who it suits:</strong> Patients with discolouration, chips,
          gaps, mild misalignment, or worn teeth who want a comprehensive smile
          transformation.
        </li>
        <li>
          <strong>Cost considerations:</strong> Porcelain veneers are a premium
          treatment, reflecting the artistry and laboratory work involved.
          Prices vary depending on the number of teeth treated and the
          complexity of the case.
        </li>
      </ul>

      <h2>Composite Bonding</h2>
      <p>
        Composite bonding uses tooth-coloured resin to reshape, repair, or
        enhance the appearance of teeth. It is applied directly to the tooth
        surface and sculpted by hand, then hardened with a curing light.
      </p>
      <ul>
        <li>
          <strong>What it involves:</strong> The procedure is typically completed
          in a single appointment. The dentist applies layers of composite resin
          to the tooth, shaping and polishing it to blend seamlessly with the
          surrounding teeth. Little to no tooth preparation is required.
        </li>
        <li>
          <strong>Who it suits:</strong> Patients looking for a more affordable,
          less invasive alternative to veneers, or those who want to address
          minor imperfections such as small chips, gaps, or uneven edges.
        </li>
        <li>
          <strong>Cost considerations:</strong> Bonding is more affordable than
          porcelain veneers on a per-tooth basis, though it typically needs
          replacing or refinishing every three to seven years.
        </li>
      </ul>

      <h2>Teeth Whitening</h2>
      <p>
        Professional teeth whitening uses clinical-strength bleaching agents to
        brighten the natural colour of your teeth. It is one of the simplest
        and most popular cosmetic dental treatments.
      </p>
      <ul>
        <li>
          <strong>What it involves:</strong> At Denstudio, we offer both
          in-practice whitening (completed in a single session) and take-home
          whitening kits with custom-fitted trays. The active ingredients —
          hydrogen peroxide or carbamide peroxide — break down stains within
          the enamel structure.
        </li>
        <li>
          <strong>Who it suits:</strong> Patients with naturally discoloured or
          stained teeth who want a brighter smile without any structural changes
          to their teeth.
        </li>
        <li>
          <strong>Cost considerations:</strong> Whitening is one of the most
          affordable cosmetic treatments. Results can last from several months
          to a few years depending on lifestyle and maintenance.
        </li>
      </ul>

      <h2>Clear Aligners</h2>
      <p>
        Clear aligners, such as Invisalign, use a series of custom-made
        transparent trays to gradually move teeth into their ideal positions.
        They offer a discreet alternative to traditional braces.
      </p>
      <ul>
        <li>
          <strong>What it involves:</strong> After digital scanning and
          treatment planning, a series of aligners is manufactured. Each set is
          worn for one to two weeks before progressing to the next. Treatment
          duration typically ranges from three to eighteen months depending on
          the complexity of the case.
        </li>
        <li>
          <strong>Who it suits:</strong> Patients with crowding, spacing, or
          mild to moderate bite issues who want to straighten their teeth
          without the visibility of metal braces.
        </li>
        <li>
          <strong>Cost considerations:</strong> Clear aligner treatment is
          comparable in cost to traditional orthodontics. The overall price
          depends on the duration and complexity of treatment.
        </li>
      </ul>

      <h2>Gum Reshaping</h2>
      <p>
        Gum reshaping (gingivectomy or crown lengthening) involves carefully
        removing or recontouring excess gum tissue to create a more balanced
        and proportionate smile.
      </p>
      <ul>
        <li>
          <strong>What it involves:</strong> Using precision techniques, the
          dentist gently removes or reshapes the gum tissue to expose more of
          the tooth surface. The procedure is typically completed under local
          anaesthesia and recovery is straightforward.
        </li>
        <li>
          <strong>Who it suits:</strong> Patients with a &quot;gummy
          smile,&quot; uneven gum line, or teeth that appear short due to excess
          gum coverage.
        </li>
        <li>
          <strong>Cost considerations:</strong> Gum reshaping is often performed
          as part of a broader smile makeover. When combined with veneers or
          bonding, it can dramatically improve the overall proportions of the
          smile.
        </li>
      </ul>

      <h2>Choosing the Right Treatment</h2>
      <p>
        The best cosmetic treatment for you depends on your individual goals,
        the current condition of your teeth, your budget, and the longevity you
        expect from the result. At Denstudio, Dr Denzel takes time during the
        consultation to understand your priorities and recommend a personalised
        treatment plan that delivers the best possible outcome.
      </p>
    </BlogArticleLayout>
  );
}
