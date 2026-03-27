import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Can Gum Disease Affect Your Heart? What the Research Says — DENSTUDIO",
  description:
    "Explore the link between periodontal disease and cardiovascular health, what Harvard Health and large-scale studies reveal, and how Denstudio approaches gum care.",
};

export default function GumDiseaseHeartDiseasePage() {
  return (
    <BlogArticleLayout
      title="Can Gum Disease Affect Your Heart? What the Research Says"
      publishDate="27 March 2026"
    >
      <p>
        For decades, dentistry and medicine operated in separate silos. Your
        dentist looked after your teeth; your GP looked after the rest. But a
        growing body of research is making it impossible to maintain that
        division — particularly when it comes to the relationship between{" "}
        <strong>gum disease and heart disease</strong>.
      </p>

      <h2>What Is Gum Disease?</h2>
      <p>
        Gum disease — known clinically as <strong>periodontal disease</strong>{" "}
        — is a chronic inflammatory condition caused by bacterial biofilm
        (plaque) accumulating along and beneath the gum line. It progresses
        through two stages:
      </p>
      <ul>
        <li>
          <strong>Gingivitis</strong> — reversible inflammation of the gums,
          characterised by redness, swelling, and bleeding when brushing.
        </li>
        <li>
          <strong>Periodontitis</strong> — irreversible destruction of the bone
          and connective tissue that support the teeth. Left untreated, it leads
          to tooth loss.
        </li>
      </ul>
      <p>
        Periodontitis affects roughly 45% of UK adults to some degree, making
        it one of the most prevalent chronic diseases in the country.
      </p>

      <h2>What the Research Shows</h2>
      <p>
        The connection between periodontal disease and cardiovascular disease
        has been studied for over 30 years. The evidence is now substantial:
      </p>
      <ul>
        <li>
          <strong>Harvard Health</strong> reports that people with gum disease
          are two to three times more likely to experience a heart attack,
          stroke, or other serious cardiovascular event.
        </li>
        <li>
          A large-scale study published in the{" "}
          <em>European Heart Journal</em> involving over 160,000 participants
          found that regular tooth brushing was associated with a 9% lower risk
          of heart failure and a 10% lower risk of atrial fibrillation over a
          10-year follow-up period.
        </li>
        <li>
          Research published in the <em>Journal of Periodontology</em> found
          that treating periodontal disease reduced systemic inflammatory
          markers — including C-reactive protein (CRP) — within weeks.
        </li>
      </ul>

      <h2>Three Theories: How Gums May Affect the Heart</h2>

      <h3>1. The Bacterial Theory</h3>
      <p>
        In advanced periodontitis, the ulcerated pocket lining provides a
        direct gateway for oral bacteria to enter the bloodstream — a
        phenomenon called <strong>bacteraemia</strong>. Pathogens such as{" "}
        <em>Porphyromonas gingivalis</em> have been found in atherosclerotic
        plaques removed from coronary arteries, suggesting they may contribute
        directly to plaque formation in blood vessels.
      </p>

      <h3>2. The Inflammation Theory</h3>
      <p>
        Chronic periodontal infection triggers a sustained immune response.
        Pro-inflammatory cytokines (IL-6, TNF-alpha) and acute-phase proteins
        (CRP) are elevated in the bloodstream of patients with periodontitis.
        This systemic inflammation can damage the endothelial lining of blood
        vessels, accelerating atherosclerosis.
      </p>

      <h3>3. Common Risk Factors</h3>
      <p>
        Some researchers argue that the association is partly explained by
        shared risk factors: smoking, diabetes, obesity, poor diet, and
        socioeconomic deprivation all increase the risk of both periodontal
        disease and cardiovascular disease. However, studies that control for
        these confounders still find an independent association between the two
        conditions.
      </p>

      <h2>Other Health Conditions Linked to Gum Disease</h2>
      <p>
        The heart is not the only organ affected. Research has also linked
        periodontal disease to:
      </p>
      <ul>
        <li>
          <strong>Type 2 diabetes</strong> — the relationship is bidirectional;
          diabetes worsens gum disease, and gum disease makes blood sugar
          harder to control.
        </li>
        <li>
          <strong>Alzheimer&apos;s disease</strong> —{" "}
          <em>P. gingivalis</em> DNA and its toxic enzymes (gingipains) have
          been detected in the brains of Alzheimer&apos;s patients.
        </li>
        <li>
          <strong>Adverse pregnancy outcomes</strong> — including pre-eclampsia,
          preterm birth, and low birth weight.
        </li>
        <li>
          <strong>Respiratory infections</strong> — aspiration of oral bacteria
          can contribute to pneumonia, particularly in elderly or
          immunocompromised patients.
        </li>
      </ul>

      <h2>Practical Steps You Can Take</h2>
      <ol>
        <li>
          <strong>Brush thoroughly twice daily</strong> using a fluoride
          toothpaste and a sonic or electric toothbrush.
        </li>
        <li>
          <strong>Clean between your teeth every day</strong> with floss or
          interdental brushes.
        </li>
        <li>
          <strong>Don&apos;t ignore bleeding gums</strong> — bleeding is a sign
          of active inflammation, not normal wear and tear.
        </li>
        <li>
          <strong>Quit smoking</strong> — tobacco is the strongest modifiable
          risk factor for periodontitis.
        </li>
        <li>
          <strong>Manage blood sugar</strong> if you have diabetes, as
          uncontrolled glucose levels accelerate periodontal breakdown.
        </li>
        <li>
          <strong>Attend regular dental and hygiene appointments</strong> to
          catch early signs before they become systemic problems.
        </li>
      </ol>

      <h2>Denstudio&apos;s Approach to Gum Health</h2>
      <p>
        At{" "}
        <Link href="/">Denstudio</Link>, we view periodontal care as the
        foundation of all dental treatment. Before any cosmetic work begins, we
        ensure gum health is stable. Our{" "}
        <Link href="/hygiene">hygiene programme</Link> includes detailed
        periodontal charting, personalised home-care coaching, and
        evidence-based treatment protocols for patients at every stage of gum
        disease.
      </p>
      <p>
        If you are concerned about your gum health — or simply want a thorough
        assessment —{" "}
        <Link href="/contact-us">book a consultation</Link> at our Harley
        Street practice.
      </p>
    </BlogArticleLayout>
  );
}
