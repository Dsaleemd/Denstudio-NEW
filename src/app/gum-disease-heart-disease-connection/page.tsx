import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import Link from "next/link";
import {
  StatBox,
  Callout,
  DataTable,
  Divider,
  AuthorBio,
  ClinicalDisclaimer,
  Sources,
} from "@/components/BlogComponents";

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

      <StatBox value="2–3x" label="Higher Risk of Cardiovascular Events">
        According to Harvard Health, people with periodontal disease are two to
        three times more likely to experience a heart attack, stroke, or other
        serious cardiovascular event compared to those with healthy gums.
      </StatBox>

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

      <Divider />

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

      <Callout variant="pine">
        <strong>Key finding:</strong> Even after controlling for shared risk
        factors like smoking, diabetes, and obesity, studies consistently find an
        independent association between periodontal disease and cardiovascular
        events — suggesting the link is biological, not merely coincidental.
      </Callout>

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

      <Divider />

      <h2>Other Health Conditions Linked to Gum Disease</h2>
      <p>
        The heart is not the only organ affected. Research has also linked
        periodontal disease to a range of systemic conditions:
      </p>

      <DataTable
        caption="Systemic Conditions Linked to Periodontal Disease"
        headers={["Condition", "Nature of Association", "Key Evidence"]}
        rows={[
          [
            "Type 2 Diabetes",
            "Bidirectional — each worsens the other",
            "Gum disease increases insulin resistance; uncontrolled glucose accelerates periodontal breakdown",
          ],
          [
            "Alzheimer's Disease",
            "P. gingivalis found in brain tissue",
            "Gingipain enzymes detected in brains of Alzheimer's patients; linked to neuronal damage",
          ],
          [
            "Adverse Pregnancy Outcomes",
            "Inflammatory mediators cross placental barrier",
            "Higher risk of pre-eclampsia, preterm birth, and low birth weight",
          ],
          [
            "Respiratory Infections",
            "Aspiration of oral bacteria into lungs",
            "Significant risk factor for pneumonia in elderly and immunocompromised patients",
          ],
          [
            "Rheumatoid Arthritis",
            "Shared inflammatory pathways",
            "Patients with periodontitis show higher rates of RA and vice versa",
          ],
        ]}
      />

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

      <Callout>
        <strong>Remember:</strong> Bleeding gums are never &quot;normal.&quot;
        They are the earliest visible sign of a disease process that, left
        unchecked, can affect far more than your mouth.
      </Callout>

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

      <Divider />

      <AuthorBio />

      <ClinicalDisclaimer />

      <Sources
        items={[
          "Harvard Health Publishing. \"Gum disease and heart disease: The common thread.\" Harvard Medical School, 2021.",
          "Chang Y, et al. \"Improved oral hygiene care attenuates the cardiovascular risk of oral health disease.\" European Heart Journal, 2019; 40(14): 1138–1145.",
          "Sanz M, et al. \"Periodontitis and cardiovascular diseases: Consensus report.\" Journal of Clinical Periodontology, 2020; 47(3): 268–288.",
          "Dominy SS, et al. \"Porphyromonas gingivalis in Alzheimer's disease brains: Evidence for disease causation and treatment with small-molecule inhibitors.\" Science Advances, 2019; 5(1): eaau3333.",
        ]}
      />
    </BlogArticleLayout>
  );
}
