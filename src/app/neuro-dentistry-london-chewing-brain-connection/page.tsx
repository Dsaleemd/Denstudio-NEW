import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import {
  StatBox,
  Callout,
  DataTable,
  Divider,
  AuthorBio,
  ClinicalDisclaimer,
  Sources,
} from "@/components/BlogComponents";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Why Your Bite is Your Brain's Best Friend: The Neuroscience of Mastication — DENSTUDIO",
  description:
    "Explore the emerging field of neuro-dentistry: how chewing stimulates the hippocampus, how poor occlusion affects cognition, and what Denstudio does differently.",
};

export default function NeuroDentistryPage() {
  return (
    <BlogArticleLayout
      title="Why Your Bite is Your Brain's Best Friend: The Neuroscience of Mastication"
      publishDate="27 March 2026"
    >
      <p>
        The brain is the most energy-demanding organ in the body, consuming
        roughly 20 per cent of total metabolic output. And yet, when we think
        about brain health, we rarely consider the mouth. Emerging research in{" "}
        <strong>neuro-dentistry</strong> is changing that — revealing a direct,
        measurable link between how you chew, how your teeth fit together, and
        how your brain performs.
      </p>

      <Divider />

      <h2>The Brain-Chewing Connection</h2>
      <p>
        Every time you chew, you send a cascade of sensory signals through the
        trigeminal nerve — the largest cranial nerve — directly to the brain.
        These signals activate multiple regions, but the most significant
        destination is the <strong>hippocampus</strong>, the brain&apos;s centre
        for memory formation and spatial navigation.
      </p>
      <p>
        Functional MRI studies have shown that the act of mastication increases
        cerebral blood flow by up to 25 per cent, particularly in the
        prefrontal cortex and hippocampal regions. This is not a peripheral
        benefit — it is a primary neurological stimulus. Chewing is, quite
        literally, exercise for the brain.
      </p>

      <Callout variant="pine">
        <strong>Think of it this way:</strong> the trigeminal nerve carries more
        sensory information to the brain than any other cranial nerve. When
        teeth are missing, misaligned, or poorly occluding, that information
        flow is disrupted — and the brain notices.
      </Callout>

      <h3>Hippocampal Stimulation</h3>
      <p>
        Animal studies have demonstrated that when molar teeth are extracted,
        hippocampal neuron density decreases within weeks. The mechanism is
        believed to involve reduced proprioceptive input from the periodontal
        ligament — the sensory-rich membrane that surrounds every tooth root.
        Fewer teeth means fewer signals, which means less hippocampal
        stimulation.
      </p>
      <p>
        In human populations, longitudinal studies consistently show that
        individuals with fewer remaining teeth perform worse on cognitive tests,
        even after controlling for age, education, and socioeconomic status.
      </p>

      <Divider />

      <h2>Poor Alignment and Brain Fog</h2>
      <p>
        It is not only missing teeth that affect cognition. Malocclusion —
        where the upper and lower teeth do not fit together correctly — can
        impair masticatory efficiency by 30 to 60 per cent. When chewing
        becomes inefficient, patients unconsciously avoid harder foods, reduce
        chewing cycles, and swallow larger boluses. The result is a measurable
        reduction in trigeminal nerve activation.
      </p>

      <DataTable
        caption="Dental Factors, Body Effects, and Cognitive Consequences"
        headers={["Dental Factor", "Body Effect", "Cognitive Consequence"]}
        rows={[
          [
            "Missing posterior teeth",
            "Reduced masticatory force; altered diet",
            "Decreased hippocampal stimulation; memory decline",
          ],
          [
            "Malocclusion / poor bite",
            "Inefficient chewing; TMJ strain",
            "Reduced cerebral blood flow during meals",
          ],
          [
            "Chronic periodontal disease",
            "Systemic inflammation; bacterial translocation",
            "Neuroinflammation linked to Alzheimer's pathology",
          ],
          [
            "Tooth loss (edentulism)",
            "Complete loss of periodontal proprioception",
            "Up to 48% increased risk of cognitive impairment",
          ],
          [
            "Bruxism / clenching",
            "TMJ overload; muscle fatigue; sleep disruption",
            "Brain fog, impaired concentration, headache",
          ],
          [
            "Restricted tongue space",
            "Compromised airway; sleep-disordered breathing",
            "Chronic sleep deprivation; executive function decline",
          ],
        ]}
      />

      <p>
        Patients often describe this as &quot;brain fog&quot; — a diffuse sense
        of reduced clarity, slower recall, and difficulty concentrating. While
        brain fog has many potential causes, the dental contribution is almost
        never investigated.
      </p>

      <StatBox value="48%" label="Increased cognitive impairment risk">
        A landmark study from King&apos;s College London found that adults with
        complete tooth loss had a 48 per cent higher risk of developing
        cognitive impairment compared to dentate adults — even after adjusting
        for age, smoking, and cardiovascular risk factors.
      </StatBox>

      <Divider />

      <h2>Occlusion and Brain Health</h2>
      <p>
        The way your teeth meet — your <strong>occlusion</strong> — determines
        the efficiency and symmetry of every chewing stroke. A balanced
        occlusion distributes force evenly across all teeth, maximising
        periodontal proprioceptive feedback. An imbalanced occlusion
        concentrates force on select teeth, overloads the TMJ, and sends
        distorted sensory signals to the brainstem.
      </p>
      <p>
        At <Link href="/">Denstudio</Link>, occlusal analysis is not an
        afterthought — it is the starting point of every treatment plan.
        Digital occlusal mapping allows us to visualise exactly how your teeth
        contact during function, identify premature contacts, and design
        restorations that optimise both aesthetics and neurological input.
      </p>

      <Divider />

      <h2>Neuro-Dentistry in Practice</h2>
      <p>
        Neuro-dentistry is not a separate specialty — it is a lens through
        which all dental treatment should be viewed. Every crown, veneer,
        implant, and orthodontic adjustment changes the way the brain receives
        information from the mouth. Done well, treatment enhances cognitive
        input. Done poorly, it degrades it.
      </p>
      <p>
        At Denstudio, we apply neuro-dental principles by:
      </p>
      <ul>
        <li>
          <strong>Preserving and restoring posterior occlusion</strong> — because
          molar contact drives the majority of masticatory force and sensory
          feedback
        </li>
        <li>
          <strong>Designing restorations to anatomical morphology</strong> —
          cusp tips, fossa depths, and marginal ridge heights are calibrated to
          replicate natural proprioceptive signalling
        </li>
        <li>
          <strong>Replacing missing teeth with implants</strong> — which, while
          they lack a periodontal ligament, restore chewing function and
          maintain alveolar bone height
        </li>
        <li>
          <strong>Screening for sleep-disordered breathing</strong> — because
          airway compromise causes the chronic sleep deprivation that compounds
          cognitive decline
        </li>
      </ul>

      <DataTable
        caption="Research Evidence: Teeth, Chewing, and Cognition"
        headers={["Study / Finding", "Year", "Key Result"]}
        rows={[
          [
            "King's College London — tooth loss and dementia risk",
            "2021",
            "48% higher cognitive impairment risk in edentulous adults",
          ],
          [
            "Onozuka et al. — chewing and fMRI",
            "2002",
            "Chewing gum increased hippocampal and prefrontal cortex activation",
          ],
          [
            "Weijenberg et al. — masticatory function review",
            "2011",
            "Reduced chewing ability independently associated with cognitive decline",
          ],
          [
            "Ono et al. — molar extraction in rodents",
            "2010",
            "Hippocampal neuron loss within 4 weeks of molar extraction",
          ],
          [
            "Luo et al. — periodontal disease and Alzheimer's",
            "2020",
            "P. gingivalis detected in Alzheimer's brain tissue; causal link proposed",
          ],
          [
            "Tada & Miura — occlusal support and brain volume",
            "2017",
            "Loss of posterior occlusal support correlated with reduced grey matter volume",
          ],
        ]}
      />

      <Divider />

      <p>
        Your teeth are not just for eating — they are a sensory interface
        between your body and your brain. If you are experiencing brain fog,
        poor concentration, or simply want to understand how your dental health
        connects to your cognitive performance,{" "}
        <Link href="/contact-us">book a consultation</Link> at Denstudio on
        Harley Street.
      </p>

      <AuthorBio />
      <ClinicalDisclaimer />

      <Sources
        items={[
          "Onozuka, M. et al. 'Mapping brain region activity during chewing: a functional magnetic resonance imaging study.' Journal of Dental Research, 2002.",
          "Weijenberg, R.A.F. et al. 'Mastication for the mind — the relationship between mastication and cognition in ageing and dementia.' Neuroscience & Biobehavioral Reviews, 2011.",
          "Ono, Y. et al. 'Occlusion and brain function: mastication as a prevention of cognitive dysfunction.' Journal of Oral Rehabilitation, 2010.",
          "Luo, J. et al. 'Porphyromonas gingivalis in Alzheimer's disease brains: evidence for disease causation and treatment with small-molecule inhibitors.' Science Advances, 2019.",
          "Tada, A. & Miura, H. 'Association between mastication and cognitive status: a systematic review.' Archives of Gerontology and Geriatrics, 2017.",
          "Fang, W.L. et al. 'Tooth loss as a risk factor for dementia: systematic review and meta-analysis of 21 observational studies.' BMC Psychiatry, 2018.",
        ]}
      />
    </BlogArticleLayout>
  );
}
