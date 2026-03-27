import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Prices Explained — DENSTUDIO",
  description:
    "A clear guide to cosmetic dentistry prices in the UK, covering veneers, bonding, whitening, aligners, and the factors that affect cost at Denstudio on Harley Street.",
};

export default function CosmeticDentistryPricesExplainedPage() {
  return (
    <BlogArticleLayout title="Cosmetic Dentistry Prices Explained">
      <p>
        Understanding the cost of cosmetic dentistry can feel overwhelming.
        Prices vary significantly depending on the treatment, materials, and
        practitioner. In this guide, we break down the most common cosmetic
        dental treatments and what you can expect to pay in the UK.
      </p>

      <h2>Overview of UK Cosmetic Dentistry Pricing</h2>
      <p>
        Cosmetic dentistry encompasses a wide range of treatments, each with its
        own pricing structure. Here is a summary of typical costs at Denstudio on
        Harley Street:
      </p>

      <table>
        <thead>
          <tr>
            <th>Treatment</th>
            <th>Denstudio Price</th>
            <th>UK Average Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Porcelain veneers (per tooth)</td>
            <td>£1,200</td>
            <td>£600–£1,200</td>
          </tr>
          <tr>
            <td>Composite bonding (per tooth)</td>
            <td>£350</td>
            <td>£200–£500</td>
          </tr>
          <tr>
            <td>Teeth whitening</td>
            <td>£395–£795</td>
            <td>£300–£1,000</td>
          </tr>
          <tr>
            <td>Clear aligners (Invisalign)</td>
            <td>From £3,950</td>
            <td>£2,500–£5,500</td>
          </tr>
        </tbody>
      </table>

      <h2>Porcelain Veneers — £1,200 per Tooth</h2>
      <p>
        Porcelain veneers are the gold standard for comprehensive smile
        transformations. At Denstudio, we use E.max lithium disilicate ceramics
        for exceptional aesthetics and durability. The price includes
        consultation, preparation, premium laboratory work, and fitting.
      </p>
      <p>
        A full set of 6 to 10 upper veneers typically ranges from £7,200 to
        £12,000. Smile makeover packages that combine veneers with other
        treatments offer better value for comprehensive transformations.
      </p>

      <h2>Composite Bonding — £350 per Tooth</h2>
      <p>
        Composite bonding is a more affordable alternative to veneers,
        particularly suited for minor corrections such as small chips, gaps, or
        shape improvements. The treatment is completed in a single visit and is
        largely reversible, making it a popular choice for patients who want
        improvements without committing to porcelain.
      </p>
      <p>
        While bonding is less expensive upfront, it does have a shorter lifespan
        (5–7 years) and is more prone to staining than porcelain.
      </p>

      <h2>Teeth Whitening — £395 to £795</h2>
      <p>
        Professional teeth whitening is one of the most accessible cosmetic
        treatments. At Denstudio, we offer both in-clinic and at-home whitening
        options:
      </p>
      <ul>
        <li>
          <strong>At-home whitening kit</strong> — Custom trays with
          professional-grade whitening gel, used over two weeks, from £395.
        </li>
        <li>
          <strong>In-clinic whitening</strong> — A more intensive session
          performed in the practice, delivering faster results, from £795.
        </li>
      </ul>
      <p>
        Whitening is often combined with other treatments as part of a smile
        makeover package for the best overall result.
      </p>

      <h2>Clear Aligners — From £3,950</h2>
      <p>
        Invisalign and other clear aligner systems offer a discreet way to
        straighten teeth without traditional metal braces. At Denstudio, aligner
        treatment starts from £3,950, depending on the complexity of your case.
      </p>
      <p>
        We offer a price-match guarantee for Invisalign — if you find a lower
        price at another London practice, we will match it.
      </p>

      <h2>Factors Affecting Price</h2>
      <p>
        Several factors influence the cost of cosmetic dental treatment:
      </p>
      <ul>
        <li>
          <strong>Material quality</strong> — Premium materials like E.max
          porcelain cost more than standard alternatives but deliver superior
          results.
        </li>
        <li>
          <strong>Dentist experience</strong> — A highly trained cosmetic
          dentist with a strong track record will typically charge more,
          reflecting the quality and predictability of outcomes.
        </li>
        <li>
          <strong>Number of teeth treated</strong> — More teeth means a higher
          total cost, though package pricing can offer savings.
        </li>
        <li>
          <strong>Laboratory quality</strong> — The best results require skilled
          ceramists at premium dental laboratories.
        </li>
        <li>
          <strong>Complexity</strong> — Cases requiring additional preparatory
          work such as gum reshaping or orthodontics will cost more.
        </li>
        <li>
          <strong>Location</strong> — Harley Street practices have higher
          overheads, but this reflects the standard of care, facilities, and
          expertise available.
        </li>
      </ul>

      <h2>Finance Options</h2>
      <p>
        At Denstudio, we believe that a beautiful smile should be accessible. We
        offer flexible finance options including interest-free payment plans,
        allowing you to spread the cost of treatment over manageable monthly
        instalments. Our team will discuss all available options during your
        consultation.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the cheapest cosmetic dental treatment?</h3>
      <p>
        Teeth whitening is typically the most affordable cosmetic treatment,
        starting from £395 at Denstudio. Composite bonding at £350 per tooth is
        also a cost-effective option for targeted improvements.
      </p>

      <h3>Why is cosmetic dentistry expensive?</h3>
      <p>
        The cost reflects the materials, technology, laboratory work, and
        expertise required to deliver safe, predictable, and long-lasting
        results. Premium treatments use the best materials and are performed by
        highly trained specialists.
      </p>

      <h3>Can I get cosmetic dentistry on the NHS?</h3>
      <p>
        The NHS does not typically cover cosmetic treatments. It provides
        functional dentistry — treatments necessary for oral health — but
        elective aesthetic improvements are generally private.
      </p>

      <h3>Is it worth paying more for a Harley Street dentist?</h3>
      <p>
        Harley Street practices offer access to leading specialists, premium
        materials, and state-of-the-art technology. For treatments that directly
        affect your appearance, investing in expertise and quality typically
        delivers significantly better outcomes.
      </p>

      <h3>Do you offer payment plans?</h3>
      <p>
        Yes. We offer interest-free and interest-bearing finance options to help
        spread the cost of treatment. Contact us for full details.
      </p>
    </BlogArticleLayout>
  );
}
