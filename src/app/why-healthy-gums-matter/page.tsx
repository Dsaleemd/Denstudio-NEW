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
  title: "Why Healthy Gums Matter More Than You Think — DENSTUDIO",
  description:
    "Discover how gum disease affects your heart, brain, and overall health. Learn the warning signs and how to protect your gums at Denstudio, Harley Street.",
};

export default function WhyHealthyGumsMatterPage() {
  return (
    <BlogArticleLayout
      title="Why Healthy Gums Matter More Than You Think"
      publishDate="27 March 2026"
    >
      <p>
        Most people think of gum disease as a dental problem — sore gums,
        bleeding when brushing, maybe eventually losing a tooth. But the science
        of the last two decades has revealed something far more significant:{" "}
        <strong>
          what happens in your gums does not stay in your gums
        </strong>
        . The health of your periodontal tissues is directly connected to your
        cardiovascular system, your brain, and your metabolic function.
      </p>

      <StatBox value="3x–6x" label="Higher Periodontitis Risk for Smokers">
        Smokers are three to six times more likely to develop severe
        periodontitis than non-smokers. Tobacco impairs blood flow to the gums,
        suppresses immune response, and masks early warning signs by reducing
        bleeding — meaning disease is often advanced by the time it is detected.
      </StatBox>

      <h2>How Gum Disease Starts</h2>
      <p>
        Your mouth is home to over 700 species of bacteria — a complex
        ecosystem known as the <strong>oral microbiome</strong>. In a healthy
        state, these organisms coexist in balance. Problems begin when that
        balance is disrupted.
      </p>
      <p>
        Poor oral hygiene allows pathogenic bacteria to proliferate and form a
        structured biofilm (plaque) along the gum line. Within days, the
        immune system mounts an inflammatory response: gums become red, swollen,
        and bleed easily. This is <strong>gingivitis</strong> — and at this
        stage, it is entirely reversible.
      </p>
      <p>
        Left unchecked, the inflammation deepens. The biofilm matures and
        migrates beneath the gum line, forming{" "}
        <strong>periodontal pockets</strong>. The immune response intensifies,
        but instead of clearing the infection, it begins destroying the very
        bone and connective tissue that hold the teeth in place. This is{" "}
        <strong>periodontitis</strong> — and it is irreversible.
      </p>

      <Callout variant="warning">
        <strong>The silent progression:</strong> Periodontitis is often called a
        &quot;silent disease&quot; because it can advance significantly without
        pain. By the time symptoms become obvious — loose teeth, pus, visible
        recession — substantial bone loss may have already occurred.
      </Callout>

      <Divider />

      <h2>What Gum Disease Does to the Rest of Your Body</h2>

      <h3>Heart Disease</h3>
      <p>
        People with periodontitis are two to three times more likely to suffer
        a heart attack or stroke. Oral bacteria have been found inside
        atherosclerotic plaques in coronary arteries. Chronic oral inflammation
        elevates systemic markers such as C-reactive protein, which damages
        blood vessel walls.
      </p>

      <h3>Diabetes</h3>
      <p>
        The relationship between gum disease and diabetes is bidirectional.
        Uncontrolled blood sugar impairs the immune response to oral bacteria,
        worsening periodontitis. Simultaneously, the chronic inflammation from
        gum disease increases insulin resistance, making blood sugar harder to
        manage — creating a vicious cycle.
      </p>

      <h3>Dementia and Cognitive Decline</h3>
      <p>
        <em>Porphyromonas gingivalis</em>, a key periodontal pathogen, has been
        detected in the brains of Alzheimer&apos;s patients. Its toxic enzymes
        — gingipains — appear to contribute to neuronal damage. Longitudinal
        studies suggest that chronic periodontitis is associated with a
        measurably faster rate of cognitive decline.
      </p>

      <h3>Respiratory Infections</h3>
      <p>
        Bacteria from the oral cavity can be aspirated into the lungs,
        particularly during sleep. In vulnerable populations — the elderly,
        immunocompromised, or hospitalised — this is a significant risk factor
        for aspiration pneumonia.
      </p>

      <h3>Pregnancy Complications</h3>
      <p>
        Pregnant women with periodontitis face a higher risk of pre-eclampsia,
        preterm birth, and low birth weight. The inflammatory mediators produced
        in periodontal disease can cross the placental barrier and affect foetal
        development.
      </p>

      <Divider />

      <h2>8 Warning Signs of Gum Disease</h2>

      <DataTable
        caption="Warning Signs You Should Never Ignore"
        headers={["Sign", "What It Means", "Urgency"]}
        rows={[
          [
            "Gums that bleed when you brush or floss",
            "Active inflammation — the earliest sign of gingivitis",
            "Moderate — see a hygienist within 2 weeks",
          ],
          [
            "Red, swollen, or tender gums",
            "Immune response to bacterial biofilm along the gum line",
            "Moderate — schedule a check-up",
          ],
          [
            "Persistent bad breath",
            "Volatile sulphur compounds from bacteria in deep pockets",
            "Moderate — indicates active infection",
          ],
          [
            "Receding gums (teeth look longer)",
            "Bone and tissue loss exposing root surfaces",
            "High — suggests advancing periodontitis",
          ],
          [
            "Loose or shifting teeth",
            "Significant bone loss undermining tooth support",
            "High — urgent assessment needed",
          ],
          [
            "Pain when chewing",
            "Possible abscess or advanced pocket formation",
            "High — seek care promptly",
          ],
          [
            "Pus between teeth and gums",
            "Active periodontal abscess requiring drainage",
            "Urgent — same-day appointment recommended",
          ],
          [
            "Changes in bite alignment",
            "Teeth migrating due to bone loss altering occlusion",
            "High — comprehensive assessment needed",
          ],
        ]}
      />

      <Callout>
        If you recognise any of these signs, do not wait. Early intervention is
        the difference between reversible gingivitis and permanent bone loss.
      </Callout>

      <h2>How to Protect Your Gum Health</h2>

      <h3>Brush Properly, Twice Daily</h3>
      <p>
        Use a sonic or electric toothbrush with a soft head. Angle the bristles
        at 45 degrees towards the gum line and let the brush do the work — no
        aggressive scrubbing. Brush for a full two minutes.
      </p>

      <h3>Floss or Use Interdental Brushes Every Day</h3>
      <p>
        A toothbrush cannot reach the surfaces between teeth, which account for
        roughly 40% of the total tooth surface area. Daily interdental cleaning
        is non-negotiable for periodontal health.
      </p>

      <h3>Don&apos;t Smoke</h3>
      <p>
        Smoking is the single strongest modifiable risk factor for
        periodontitis. It impairs blood flow to the gums, suppresses the immune
        response, and masks early warning signs by reducing bleeding — meaning
        smokers often present with more advanced disease by the time it is
        detected.
      </p>

      <h3>Eat an Anti-Inflammatory Diet</h3>
      <p>
        A diet rich in omega-3 fatty acids, leafy greens, berries, and nuts
        supports the body&apos;s ability to manage inflammation. Conversely,
        refined sugars and processed foods fuel both bacterial growth and
        systemic inflammatory pathways.
      </p>

      <h3>Attend Regular Check-Ups and Hygiene Appointments</h3>
      <p>
        Professional cleaning removes calcified deposits (calculus) that cannot
        be shifted with home care alone. Regular periodontal charting allows
        your clinician to detect changes in pocket depth before they become
        clinically significant.
      </p>

      <Callout variant="pine">
        <strong>The 40% rule:</strong> Brushing alone cleans only about 60% of
        tooth surfaces. The remaining 40% — the interproximal surfaces between
        teeth — require floss or interdental brushes. Skipping this step is like
        washing only three walls of every room in your house.
      </Callout>

      <p>
        At{" "}
        <Link href="/">Denstudio</Link>, gum health is the foundation of
        everything we do. Our{" "}
        <Link href="/hygiene">hygiene programme</Link> is designed to keep your
        periodontal tissues in the best possible condition — for your teeth,
        and for the rest of your body. If you have concerns,{" "}
        <Link href="/contact-us">book a consultation</Link> at our Harley
        Street practice.
      </p>

      <Divider />

      <AuthorBio />

      <ClinicalDisclaimer />

      <Sources
        items={[
          "Harvard Health Publishing. \"Gum disease and heart disease: The common thread.\" Harvard Medical School, 2021.",
          "Harvard Health Publishing. \"Treating gum disease may lessen the burden of heart disease, cancer, and other conditions.\" 2022.",
          "Tomar SL, Asma S. \"Smoking-attributable periodontitis in the United States.\" Journal of Periodontology, 2000; 71(5): 743–751.",
          "Dominy SS, et al. \"Porphyromonas gingivalis in Alzheimer's disease brains.\" Science Advances, 2019; 5(1): eaau3333.",
          "Sanz M, et al. \"Periodontitis and cardiovascular diseases: Consensus report.\" Journal of Clinical Periodontology, 2020; 47(3): 268–288.",
        ]}
      />
    </BlogArticleLayout>
  );
}
