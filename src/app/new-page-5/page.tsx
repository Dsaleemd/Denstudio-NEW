import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
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
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Veneers or Whitening? A Harley Street Expert Explains When Staining Requires More — DENSTUDIO",
  description:
    "Extrinsic vs intrinsic staining, when whitening works, when veneers are needed, and honest cost comparison. Harley Street cosmetic dentistry at Denstudio.",
};

export default function VeneersOrWhiteningPage() {
  return (
    <BlogArticleLayout
      title="Veneers or Whitening? A Harley Street Expert Explains When Staining Requires More Than a Chemical Bleach"
      publishDate="27 March 2026"
    >
      <p>
        Tooth discolouration is one of the most common reasons patients walk
        through our door at <Link href="/">Denstudio</Link>. But not all
        staining is created equal — and the difference between staining that
        responds to whitening and staining that does not is the difference
        between a simple chemical process and a structural restoration. Getting
        the diagnosis right saves time, money, and disappointment.
      </p>

      <Divider />

      <h2>Extrinsic vs Intrinsic Staining: The Fundamental Distinction</h2>
      <p>
        Every case of tooth discolouration falls into one of two categories.
        Understanding which one applies to you determines the entire treatment
        pathway.
      </p>
      <p>
        <strong>Extrinsic staining</strong> sits on or within the outer enamel
        surface. It is caused by external agents — food, drink, tobacco — that
        deposit chromogens (colour molecules) onto the tooth. These stains
        respond well to professional cleaning and chemical bleaching because
        the bleaching agent can reach and oxidise the chromogens.
      </p>
      <p>
        <strong>Intrinsic staining</strong> originates from within the tooth
        structure itself — in the dentine or even the pulp. It is caused by
        factors such as tetracycline antibiotics, fluorosis, dental trauma,
        root canal treatment, or the natural darkening of dentine with age.
        Because the discolouration is embedded within the tooth, surface-level
        bleaching cannot reach it.
      </p>

      <ComparisonTable
        title1="Extrinsic Staining"
        title2="Intrinsic Staining"
        rows={[
          [
            "Coffee & tea",
            "Brown/yellow surface deposits, typically uniform",
            "Not applicable — does not cause intrinsic discolouration",
          ],
          [
            "Red wine & berries",
            "Purple-grey surface staining, especially between teeth",
            "Not applicable",
          ],
          [
            "Tobacco / smoking",
            "Yellow-brown tar deposits on enamel",
            "Not applicable",
          ],
          [
            "Tetracycline antibiotics",
            "Not applicable",
            "Grey-brown horizontal banding within dentine; permanent",
          ],
          [
            "Fluorosis",
            "Not applicable",
            "White spots or brown pitting from excess fluoride during development",
          ],
          [
            "Dental trauma",
            "Not applicable",
            "Grey or dark discolouration from pulp necrosis or internal bleeding",
          ],
          [
            "Root canal treatment",
            "Not applicable",
            "Gradual darkening as devitalised tooth loses hydration",
          ],
          [
            "Ageing",
            "Cumulative surface staining over decades",
            "Dentine naturally yellows and thins enamel becomes more translucent",
          ],
          [
            "Poor oral hygiene",
            "Plaque and calculus deposits create yellow-brown coating",
            "Not applicable — oral hygiene does not cause intrinsic change",
          ],
        ]}
      />

      <Divider />

      <h2>When Whitening Works — and When It Does Not</h2>
      <p>
        Professional tooth whitening uses hydrogen peroxide or carbamide
        peroxide to break down chromogenic molecules through oxidation. When
        the staining is extrinsic, the results can be dramatic — often
        lifting teeth by six to eight shades in a single session.
      </p>
      <p>
        Whitening works well for:
      </p>
      <ul>
        <li>Coffee, tea, and red wine staining</li>
        <li>Tobacco discolouration</li>
        <li>General age-related yellowing (where the enamel is intact)</li>
        <li>Mild, uniform surface staining from food and drink</li>
      </ul>
      <p>
        Whitening does <strong>not</strong> work well for:
      </p>
      <ul>
        <li>
          Tetracycline banding — the stain is within the dentine and cannot be
          reached by surface bleaching agents
        </li>
        <li>
          Fluorosis — white spots may become more conspicuous after whitening,
          as the surrounding enamel lightens but the fluorotic areas remain
        </li>
        <li>
          Trauma-related greying — discolouration from pulp necrosis or
          internal resorption does not respond to external bleaching
        </li>
        <li>
          Root-treated teeth — internal bleaching can help in some cases, but
          external whitening alone is rarely sufficient
        </li>
        <li>
          Existing restorations — crowns, veneers, and composite bonding do
          not change colour with bleaching, creating a mismatch
        </li>
      </ul>

      <Callout variant="pine">
        <strong>Denstudio Whitening Guarantee:</strong> We offer a
        money-back guarantee on our professional whitening treatments. If
        your teeth do not lighten by the agreed number of shades, we will
        refund the treatment fee in full. This is only possible because we
        diagnose the type of staining before recommending whitening — we
        never recommend it when we know it will not work.
      </Callout>

      <Divider />

      <h2>When Porcelain Veneers Are the Answer</h2>
      <p>
        For intrinsic staining that does not respond to whitening, porcelain
        veneers offer a definitive solution. A veneer is a thin shell of
        ceramic — typically 0.3 to 0.5 mm thick — that is bonded to the
        front surface of the tooth, completely masking the underlying
        discolouration.
      </p>
      <p>
        Veneers are the treatment of choice when:
      </p>
      <ul>
        <li>
          The staining is intrinsic and will not respond to bleaching
        </li>
        <li>
          The patient wants to address both colour and shape simultaneously
        </li>
        <li>
          Existing restorations create a colour mismatch that whitening would
          worsen
        </li>
        <li>
          The tooth structure is compromised (worn, chipped, or uneven) and
          needs both aesthetic and structural rehabilitation
        </li>
      </ul>
      <p>
        At Denstudio, Dr Denzel uses hand-layered feldspathic porcelain for
        anterior veneers, building colour, translucency, and surface texture
        layer by layer to replicate the optical properties of natural enamel.
        The result is a restoration that looks like a tooth — not like a
        restoration.
      </p>

      <Divider />

      <h2>Cost Comparison: Whitening vs Veneers</h2>
      <p>
        Cost is always a factor, and transparency matters. Here is an honest
        comparison of what each treatment costs at Denstudio, along with what
        you can expect in terms of longevity and maintenance.
      </p>

      <DataTable
        caption="Pricing and Value Comparison"
        headers={["Factor", "Professional Whitening", "Porcelain Veneers"]}
        rows={[
          [
            "Cost",
            "\u00a3395 \u2013 \u00a3795 (depending on system)",
            "From \u00a31,200 per tooth",
          ],
          [
            "Treatment time",
            "1 \u2013 2 appointments",
            "2 \u2013 3 appointments over 2 \u2013 3 weeks",
          ],
          [
            "Longevity",
            "12 \u2013 24 months before touch-up needed",
            "15 \u2013 25 years with proper care",
          ],
          [
            "What it corrects",
            "Extrinsic staining and mild yellowing only",
            "Any discolouration, plus shape, alignment, and proportion",
          ],
          [
            "Tooth preparation",
            "None \u2014 completely non-invasive",
            "Minimal \u2014 0.3 to 0.5 mm of enamel removed",
          ],
          [
            "Reversibility",
            "Fully reversible",
            "Not reversible \u2014 tooth is permanently altered",
          ],
          [
            "Maintenance",
            "Periodic top-up trays; avoid staining agents for 48 hours post-treatment",
            "Normal oral hygiene; avoid biting hard objects directly",
          ],
          [
            "Best for",
            "Healthy teeth with surface staining and no structural concerns",
            "Intrinsic staining, worn or damaged teeth, or patients wanting a comprehensive smile transformation",
          ],
        ]}
      />

      <Divider />

      <h2>The Diagnostic Process at Denstudio</h2>
      <p>
        We never recommend a treatment until we have diagnosed the problem.
        Every new patient presenting with discolouration receives:
      </p>
      <ul>
        <li>
          <strong>Shade assessment</strong> — using a calibrated digital shade
          guide under standardised lighting to objectively measure current
          tooth colour
        </li>
        <li>
          <strong>Staining classification</strong> — determining whether
          discolouration is extrinsic, intrinsic, or a combination
        </li>
        <li>
          <strong>Periapical radiographs</strong> — to check for root canal
          status, internal resorption, or other pathology causing
          discolouration
        </li>
        <li>
          <strong>Existing restoration mapping</strong> — identifying any
          crowns, veneers, or bonding that will not respond to whitening
        </li>
        <li>
          <strong>Treatment simulation</strong> — showing the patient a
          digital preview of the expected whitening result or veneer outcome
          before any commitment is made
        </li>
      </ul>
      <p>
        This diagnostic rigour is why our whitening patients get the results
        they expect, and why our veneer patients are never surprised by the
        outcome.
      </p>

      <Divider />

      <p>
        Not sure whether whitening or veneers is right for you? The answer
        starts with a proper diagnosis.{" "}
        <Link href="/contact-us">Book a consultation</Link> at Denstudio on
        Harley Street and find out exactly what your teeth need — no guesswork,
        no wasted money.
      </p>

      <AuthorBio />
      <ClinicalDisclaimer />

      <Sources
        items={[
          "Joiner, A. 'The bleaching of teeth: a review of the literature.' Journal of Dentistry, 2006.",
          "Carey, C.M. 'Tooth whitening: what we now know.' Journal of Evidence-Based Dental Practice, 2014.",
          "Pini, N.I.P. et al. 'Enamel microabrasion: an overview of clinical and scientific considerations.' World Journal of Clinical Cases, 2015.",
          "Lopes, G.C. et al. 'Dental adhesion to enamel and dentin: a review.' Dental Materials, 2019.",
          "Sadowsky, S.J. 'An overview of treatment considerations for esthetic restorations: a review of the literature.' Journal of Prosthetic Dentistry, 2006.",
        ]}
      />
    </BlogArticleLayout>
  );
}
