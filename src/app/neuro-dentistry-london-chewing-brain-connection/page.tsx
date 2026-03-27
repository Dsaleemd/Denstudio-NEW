import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Why Your Bite is Your Brain's Best Friend — DENSTUDIO",
  description:
    "Explore the connection between chewing, occlusion, and brain health. Research from King's College and longitudinal studies on dental function and cognition.",
};

export default function NeuroDentistryPage() {
  return (
    <BlogArticleLayout
      title="Why Your Bite is Your Brain&apos;s Best Friend"
      publishDate="27 March 2026"
    >
      <p>
        You probably do not think about your bite when you think about your
        brain. But a growing body of neuroscience research suggests you should.
        The act of chewing — and the dental occlusion that makes it possible —
        is directly connected to cognitive function, memory, and long-term
        brain health. Welcome to the emerging field of{" "}
        <strong>neuro-dentistry</strong>.
      </p>

      <h2>The Brain-Chewing Connection</h2>
      <p>
        Chewing is not a passive mechanical act. Every time you bite down,
        sensory receptors in the periodontal ligament — the tissue that
        suspends each tooth in its socket — send proprioceptive signals
        directly to the brain via the trigeminal nerve, the largest cranial
        nerve.
      </p>
      <p>
        These signals reach the <strong>hippocampus</strong>, the brain region
        responsible for memory formation and spatial navigation. Functional MRI
        studies have shown that the act of chewing increases blood flow to the
        hippocampus and activates regions of the prefrontal cortex associated
        with attention, working memory, and executive function.
      </p>

      <h3>Hippocampal Stimulation</h3>
      <p>
        Animal studies have demonstrated that tooth loss leads to measurable
        hippocampal atrophy. When teeth are extracted in rodent models, the
        hippocampus loses neurons and shows reduced levels of brain-derived
        neurotrophic factor (BDNF) — a protein essential for neuronal growth
        and synaptic plasticity. The mechanism is straightforward: fewer teeth
        means less chewing, which means less proprioceptive input, which means
        less hippocampal stimulation.
      </p>

      <h2>Poor Alignment and Brain Fog</h2>
      <p>
        It is not only tooth loss that affects cognition. Malocclusion — a bite
        that does not come together correctly — reduces chewing efficiency and
        alters the pattern of proprioceptive signalling. Patients with
        significant malocclusion chew less effectively, which may reduce the
        quantity and quality of neural input to the hippocampus.
      </p>
      <p>
        While the term &quot;brain fog&quot; is not a clinical diagnosis, many
        patients report improved mental clarity after orthodontic treatment or
        occlusal rehabilitation. The mechanism likely involves restored chewing
        efficiency and normalised trigeminal input — though more research is
        needed to confirm the subjective reports with objective cognitive
        measures.
      </p>

      <h2>Occlusion and Brain Health</h2>
      <p>
        Your occlusion — the way your upper and lower teeth meet — determines
        how force is distributed during chewing. A balanced occlusion ensures
        even force distribution across all teeth, maximising proprioceptive
        input and chewing efficiency. An unbalanced occlusion concentrates
        force on specific teeth, leading to:
      </p>
      <ul>
        <li>Accelerated wear and eventual tooth loss</li>
        <li>Temporomandibular joint (TMJ) dysfunction</li>
        <li>Chronic muscle tension and headaches</li>
        <li>Reduced chewing function and, potentially, reduced cognitive stimulation</li>
      </ul>
      <p>
        Maintaining a stable, functional occlusion throughout life is not just
        a dental objective — it may be a neurological one.
      </p>

      <h2>The Evidence</h2>
      <p>
        The link between dental function and cognitive health is supported by
        significant research:
      </p>
      <ul>
        <li>
          A study from <strong>King&apos;s College London</strong> found that
          participants with fewer teeth had a{" "}
          <strong>48% higher risk of cognitive impairment</strong> compared to
          those with a full dentition, even after controlling for age, education,
          smoking, and other confounders.
        </li>
        <li>
          An <strong>18-year longitudinal study</strong> published in the{" "}
          <em>Journal of the American Geriatrics Society</em> tracked over
          4,000 participants and found that tooth loss was independently
          associated with an accelerated rate of cognitive decline. Each tooth
          lost was associated with a measurable decrease in cognitive test
          scores over the study period.
        </li>
        <li>
          A systematic review in <em>PLOS ONE</em> analysing 14 longitudinal
          studies confirmed a statistically significant association between
          tooth loss and dementia risk, with an estimated 1.3-fold increase in
          dementia risk for every five teeth lost.
        </li>
        <li>
          Research using functional MRI has demonstrated that gum chewing
          increases cerebral blood flow and enhances performance on tasks
          requiring sustained attention and working memory.
        </li>
      </ul>

      <h2>Neuro-Dentistry in Practice at Denstudio</h2>
      <p>
        At{" "}
        <Link href="/">Denstudio</Link>, we approach occlusion as a
        whole-body system — not just a question of whether the teeth fit
        together. Our comprehensive assessment includes:
      </p>
      <ul>
        <li>
          <strong>Occlusal analysis</strong> — evaluating how force is
          distributed across the dental arches during function and
          parafunction.
        </li>
        <li>
          <strong>TMJ assessment</strong> — screening for joint dysfunction,
          muscle tension, and abnormal jaw movement patterns.
        </li>
        <li>
          <strong>Functional evaluation</strong> — assessing chewing efficiency
          and identifying teeth that are not contributing to function.
        </li>
        <li>
          <strong>Restorative planning</strong> — when teeth are missing or
          worn, developing a plan to restore full dental function with the
          understanding that this supports not just oral health but systemic and
          cognitive health.
        </li>
      </ul>
      <p>
        Whether through{" "}
        <Link href="/teeth-straightening">orthodontics</Link>,{" "}
        <Link href="/porcelain-veneers">restorative work</Link>, or a
        combination, our goal is a stable, balanced occlusion that serves you
        for decades — protecting your teeth, your jaw joints, and, the evidence
        increasingly suggests, your brain.
      </p>

      <p>
        If you are concerned about your bite, experiencing jaw pain, or
        interested in how dental health connects to cognitive function,{" "}
        <Link href="/contact-us">book a consultation</Link> at our Harley
        Street practice.
      </p>
    </BlogArticleLayout>
  );
}
