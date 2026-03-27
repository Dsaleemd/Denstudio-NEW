"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface GridCard {
  title: string;
  href: string;
  image: string;
}

const gridCards: GridCard[] = [
  { title: "Replace Metal Crowns", href: "#metalcrowns", image: "/images/concerns/metal-crowns.webp" },
  { title: "Stains", href: "#stains", image: "/images/concerns/stains.webp" },
  { title: "Gummy Smile", href: "#gummysmile", image: "/images/concerns/gummy-smile.webp" },
  { title: "White Spots", href: "#whitespots", image: "/images/concerns/white-spots.webp" },
  { title: "Chipped & Broken Teeth", href: "#chippedbrokenteeth", image: "/images/concerns/chipped-broken.webp" },
  { title: "Gaps Between Teeth", href: "#gapsbetweenteeth", image: "/images/concerns/gaps.webp" },
  { title: "Tooth Discolouration", href: "#toothdiscolouration", image: "/images/concerns/discolouration.webp" },
  { title: "Missing Teeth", href: "#missingteeth", image: "/images/concerns/missing-teeth.webp" },
  { title: "Misaligned & Crowded Teeth", href: "#crowdedteeth", image: "/images/concerns/crowded-teeth.webp" },
  { title: "Misshapen Teeth", href: "#mishapenteeth", image: "/images/concerns/misshapen.webp" },
  { title: "Replace Metal Fillings", href: "#metalfillings", image: "/images/concerns/metal-fillings.webp" },
  { title: "Smile Makeover", href: "/smile-makeover", image: "/images/concerns/smile-makeover.webp" },
];

/* ------------------------------------------------------------------ */
/*  Concern sections data                                              */
/* ------------------------------------------------------------------ */

interface ConcernSection {
  id: string;
  number: string;
  title: string;
  image: string;
  intro: string;
  blocks: TreatmentBlock[];
}

interface TreatmentBlock {
  heading: string;
  subheading?: string;
  paragraphs?: string[];
  bullets?: { label: string; text: string }[];
}

const concerns: ConcernSection[] = [
  {
    id: "metalcrowns",
    number: "01",
    title: "Replace Metal Veneers & Crowns",
    image: "/images/concerns/detail-metal-crowns.webp",
    intro:
      "Looking to refresh your smile and say goodbye to traditional metal or gold veneers and crowns? At DENSTUDIO, we offer a modern and aesthetic solution — replacing metal or gold restorations with advanced tooth-coloured composite fillings that restore dental health while bringing natural, seamless beauty to your smile.",
    blocks: [
      {
        heading: "The Downsides of Metal Restorations",
        paragraphs: [
          "While metal and gold crowns and veneers have been staples in dental restorations for decades, they come with notable drawbacks:",
        ],
        bullets: [
          {
            label: "Aesthetic Considerations",
            text: "Metal restorations are highly visible when you smile or speak, drawing attention away from the natural beauty of your teeth. Over time, they may also cause a grey line to appear at the gum line.",
          },
          {
            label: "Potential Allergies",
            text: "Some individuals may experience sensitivities or allergic reactions to certain metals used in these restorations.",
          },
          {
            label: "Tooth Preparation",
            text: "Traditional crowns often require significant removal of healthy tooth structure to accommodate the restoration, which may weaken the tooth over time.",
          },
        ],
      },
      {
        heading: "Tooth-Coloured Composite Solutions",
        subheading: "How It Works",
        paragraphs: [
          "Our experienced cosmetic dentists carefully remove the old metal or gold restoration and replace it with a custom-shaded, tooth-coloured composite material. This composite is meticulously sculpted and bonded to your tooth, creating a flawless, natural-looking result.",
        ],
        bullets: [
          {
            label: "Aesthetic Appeal",
            text: "Tooth-coloured composites mimic the translucency and shade of natural teeth, ensuring your restoration blends seamlessly with your smile.",
          },
          {
            label: "Minimised Tooth Structure Removal",
            text: "Unlike traditional crowns, composite restorations often require less removal of your natural tooth, preserving more of your healthy tooth structure.",
          },
          {
            label: "Versatility",
            text: "Composite materials can be used for a variety of restorations, including fillings, veneers and crowns, making them a flexible option for replacing multiple metal restorations.",
          },
        ],
      },
    ],
  },
  {
    id: "stains",
    number: "02",
    title: "Stains",
    image: "/images/concerns/stains.webp",
    intro:
      "Are stubborn stains tarnishing the brilliance of your smile? Whether caused by coffee, tea, red wine, tobacco, or simply the passage of time, stained teeth can impact your confidence. At DENSTUDIO, we offer professional dental hygiene treatments designed to restore the natural brightness and beauty of your smile.",
    blocks: [
      {
        heading: "Professional Dental Hygiene",
        subheading: "How It Works",
        paragraphs: [
          "Our skilled dental hygienists use advanced techniques, including ultrasonic scaling and air-polishing, to gently yet effectively remove surface stains, plaque and tartar build-up from your teeth. This thorough cleaning goes beyond what regular brushing and flossing can achieve, targeting hard-to-reach areas and stubborn discolouration.",
        ],
      },
      {
        heading: "The Finish",
        paragraphs: [
          "Following your deep clean, your teeth will be polished to a smooth, bright finish. You\u2019ll leave with a noticeably cleaner, fresher smile and the confidence that your oral health is in excellent condition.",
          "Regular professional hygiene appointments are recommended every 3 to 6 months to maintain your results and keep stains at bay.",
        ],
      },
    ],
  },
  {
    id: "gummysmile",
    number: "03",
    title: "Gummy Smile",
    image: "/images/concerns/gummy-smile.webp",
    intro:
      "Are you self-conscious about a gummy smile? When an excessive amount of gum tissue is visible above the upper teeth while smiling, it can make teeth appear shorter and throw off the proportions of your smile. At DENSTUDIO, we offer effective solutions to create a more balanced and confident smile.",
    blocks: [
      {
        heading: "Gum Lasering / Contouring",
        subheading: "How It Works",
        paragraphs: [
          "Using advanced laser technology, our experienced dentists precisely reshape the gum line by gently removing excess tissue. This reveals more of the tooth\u2019s natural crown, creating a more proportionate and aesthetically pleasing smile. The procedure is performed under local anaesthetic for your comfort.",
        ],
        bullets: [
          {
            label: "Precision",
            text: "Laser technology allows for highly accurate reshaping, ensuring even and symmetrical results.",
          },
          {
            label: "Minimally Invasive",
            text: "The laser cauterises as it works, reducing bleeding and promoting faster healing compared to traditional surgical methods.",
          },
          {
            label: "Quick Results",
            text: "The improvement to your smile is visible immediately, with full healing typically taking just one to two weeks.",
          },
        ],
      },
      {
        heading: "Composite Bonding or Porcelain Veneers",
        subheading: "How It Works",
        paragraphs: [
          "For cases where the teeth themselves appear short or disproportionate, composite bonding or porcelain veneers can be used to lengthen the visible portion of the teeth, achieving a more balanced smile. These treatments can be used alone or in combination with gum contouring for optimal results.",
        ],
        bullets: [
          {
            label: "Customisation",
            text: "Each veneer or bonding application is tailored to your unique smile, ensuring natural-looking, proportionate results.",
          },
          {
            label: "Versatility",
            text: "These treatments can address multiple concerns simultaneously, including tooth shape, size and colour.",
          },
          {
            label: "Durable",
            text: "Porcelain veneers in particular offer long-lasting results, typically lasting 10\u201315 years with proper care.",
          },
        ],
      },
    ],
  },
  {
    id: "whitespots",
    number: "04",
    title: "White Spots",
    image: "/images/concerns/detail-white-spots.webp",
    intro:
      "Are white spots on your teeth causing you concern? These chalky, opaque patches can be a source of self-consciousness, but they are a common dental issue with effective treatments available. At DENSTUDIO, we use innovative techniques like ICON treatment to restore the uniform, natural appearance of your smile.",
    blocks: [
      {
        heading: "Understanding White Spots",
        paragraphs: [
          "White spots on teeth can occur for several reasons:",
        ],
        bullets: [
          {
            label: "Demineralisation",
            text: "Early stages of tooth decay can cause the enamel to lose minerals, resulting in white, chalky patches.",
          },
          {
            label: "Fluorosis",
            text: "Excessive fluoride exposure during childhood can lead to white or brown spots on the teeth.",
          },
          {
            label: "Post-Orthodontic",
            text: "White spots may develop around where braces were placed due to difficulty cleaning those areas during treatment.",
          },
        ],
      },
      {
        heading: "ICON Treatment",
        subheading: "How It Works",
        paragraphs: [
          "ICON is a revolutionary, minimally invasive treatment that infiltrates the porous enamel of white spot lesions with a specially formulated resin. This resin fills the micro-porosities in the enamel, effectively blending the white spot with the surrounding healthy tooth structure. The result is a smoother, more uniform appearance without the need for drilling or injections.",
        ],
        bullets: [
          {
            label: "Non-Invasive",
            text: "No drilling, no injections and no removal of healthy tooth structure. ICON works by infiltrating and reinforcing the existing enamel.",
          },
          {
            label: "Quick and Painless",
            text: "The treatment is typically completed in a single visit, usually within 30\u201345 minutes, with no discomfort.",
          },
          {
            label: "Aesthetic Improvement",
            text: "ICON effectively camouflages white spots, restoring a natural, even tone to your teeth.",
          },
        ],
      },
    ],
  },
  {
    id: "chippedbrokenteeth",
    number: "05",
    title: "Chipped & Broken Teeth",
    image: "/images/concerns/chipped-broken.webp",
    intro:
      "We offer two exceptional options to restore and enhance your smile: Composite Bonding and Porcelain Veneers. Whether you\u2019re dealing with chipped, cracked, or broken teeth, our skilled cosmetic dentists at DENSTUDIO will guide you towards the ideal solution for a beautiful, natural-looking result.",
    blocks: [
      {
        heading: "Composite Bonding",
        paragraphs: [
          "Composite bonding is a quick, effective and minimally invasive treatment that uses a tooth-coloured resin to repair chips, cracks and minor fractures. The composite is carefully sculpted and shaped to restore your tooth\u2019s natural appearance.",
        ],
        bullets: [
          {
            label: "Quick and Painless",
            text: "The procedure is usually completed in a single visit without the need for anaesthetic.",
          },
          {
            label: "Conservative",
            text: "Little to no removal of your natural tooth structure is required, preserving the health and integrity of your teeth.",
          },
          {
            label: "Affordable",
            text: "Composite bonding is one of the most cost-effective cosmetic dental treatments available.",
          },
        ],
      },
      {
        heading: "Porcelain Veneers",
        paragraphs: [
          "For more significant damage or when a longer-lasting result is desired, porcelain veneers offer a premium solution. These thin, custom-made shells are bonded to the front of your teeth, providing a durable and aesthetically superior restoration.",
        ],
        bullets: [
          {
            label: "Versatility",
            text: "Veneers can address a wide range of issues beyond chips and cracks, including discolouration, gaps and misshapen teeth.",
          },
          {
            label: "Durability",
            text: "Porcelain veneers are highly resistant to staining and can last 10\u201315 years or more with proper care.",
          },
          {
            label: "Natural Appearance",
            text: "The translucent quality of porcelain closely mimics natural tooth enamel, creating a beautiful, lifelike smile.",
          },
        ],
      },
    ],
  },
  {
    id: "gapsbetweenteeth",
    number: "06",
    title: "Gaps Between Teeth",
    image: "/images/concerns/gaps.webp",
    intro:
      "Are gaps between your teeth affecting your confidence? Whether caused by genetics, missing teeth, or natural growth patterns, spaces between the teeth \u2014 known as diastema \u2014 can be a common cosmetic concern. At DENSTUDIO, we offer effective, tailored solutions to close those gaps and give you a smile you\u2019ll love.",
    blocks: [
      {
        heading: "Composite Bonding",
        paragraphs: [
          "Composite bonding is a quick, non-invasive treatment that uses a tooth-coloured resin to fill in gaps between teeth. The material is expertly sculpted and shaped to create a natural, seamless result.",
        ],
        bullets: [
          {
            label: "Affordable",
            text: "Composite bonding is one of the most cost-effective solutions for closing small to moderate gaps.",
          },
          {
            label: "Non-Invasive",
            text: "No drilling or removal of tooth structure is required, making it a conservative and comfortable option.",
          },
          {
            label: "Quick",
            text: "The procedure can typically be completed in a single appointment, delivering instant results.",
          },
        ],
      },
      {
        heading: "Invisalign",
        paragraphs: [
          "For larger gaps or cases where the teeth need to be repositioned, Invisalign clear aligners offer a discreet and effective orthodontic solution. These custom-made, virtually invisible aligners gradually move your teeth into their ideal positions, closing gaps naturally.",
          "Invisalign aligners are removable, making it easy to eat, drink and maintain your oral hygiene throughout treatment. Most treatment plans are completed within 6 to 18 months, depending on the complexity of your case.",
        ],
      },
    ],
  },
  {
    id: "toothdiscolouration",
    number: "07",
    title: "Tooth Discolouration",
    image: "/images/concerns/detail-discolouration.webp",
    intro:
      "Are discoloured or yellowed teeth causing you to hide your smile? Tooth discolouration is one of the most common dental concerns, affecting people of all ages. At DENSTUDIO, we provide professional teeth whitening treatments to help you achieve a brighter, more confident smile.",
    blocks: [
      {
        heading: "Understanding the Causes",
        paragraphs: [
          "Tooth discolouration can be caused by a variety of factors, including:",
        ],
        bullets: [
          {
            label: "Foods & Beverages",
            text: "Coffee, tea, red wine and certain foods can stain the outer layer of your teeth over time.",
          },
          {
            label: "Tobacco Use",
            text: "Smoking or chewing tobacco is a major cause of yellowing and stubborn stains.",
          },
          {
            label: "Ageing",
            text: "As we age, the outer enamel layer thins, revealing the naturally yellower dentine underneath.",
          },
          {
            label: "Poor Oral Hygiene",
            text: "Inadequate brushing and flossing can lead to plaque and tartar build-up, contributing to discolouration.",
          },
        ],
      },
      {
        heading: "Professional Teeth Whitening",
        paragraphs: [
          "Our professional whitening treatments use carefully formulated, dentist-grade whitening agents to break down stains and lighten the natural shade of your teeth. Treatments are available as in-practice sessions for immediate results or as take-home kits for gradual whitening at your convenience.",
        ],
        bullets: [
          {
            label: "Enhanced Aesthetics",
            text: "Achieve a noticeably brighter smile that looks natural and healthy.",
          },
          {
            label: "Boosted Confidence",
            text: "A whiter smile can significantly improve your self-esteem and willingness to smile openly.",
          },
          {
            label: "Safe and Supervised",
            text: "Professional treatments are carefully controlled to minimise sensitivity and ensure even, predictable results.",
          },
        ],
      },
    ],
  },
  {
    id: "missingteeth",
    number: "08",
    title: "Missing Teeth",
    image: "/images/concerns/detail-missing-teeth.webp",
    intro:
      "Missing teeth can affect far more than just your appearance \u2014 they can impact your ability to eat, speak and maintain the structural integrity of your jaw. At DENSTUDIO, we offer effective restorative solutions to replace missing teeth and help you regain a complete, confident smile.",
    blocks: [
      {
        heading: "Dental Bridges",
        paragraphs: [
          "A dental bridge literally \u2018bridges\u2019 the gap created by one or more missing teeth. It consists of one or more artificial teeth (pontics) anchored by crowns on the adjacent natural teeth or implants.",
        ],
        bullets: [
          {
            label: "Stability",
            text: "Bridges are fixed in place, providing a secure and stable restoration that feels and functions like natural teeth.",
          },
          {
            label: "Natural Appearance",
            text: "Custom-made to match the colour, shape and size of your existing teeth, bridges blend seamlessly into your smile.",
          },
          {
            label: "Improved Function",
            text: "By filling the gap, bridges restore your ability to chew and speak properly, and prevent neighbouring teeth from shifting.",
          },
        ],
      },
      {
        heading: "Dentures",
        paragraphs: [
          "For patients missing several or all teeth, dentures offer a removable, comfortable and aesthetically pleasing solution. Modern dentures are custom-designed to fit snugly and look remarkably natural.",
        ],
        bullets: [
          {
            label: "Customisation",
            text: "Each set of dentures is tailored to fit your mouth precisely, ensuring comfort and a natural appearance.",
          },
          {
            label: "Affordable",
            text: "Dentures are one of the most cost-effective options for replacing multiple missing teeth.",
          },
          {
            label: "Enhanced Confidence",
            text: "A full set of teeth restores your smile and your ability to eat and speak with ease.",
          },
        ],
      },
    ],
  },
  {
    id: "crowdedteeth",
    number: "09",
    title: "Misaligned & Crowded Teeth",
    image: "/images/concerns/detail-crowded.webp",
    intro:
      "Crooked, overlapping or crowded teeth are more than a cosmetic concern \u2014 they can also make it harder to clean your teeth effectively, increasing the risk of decay and gum disease. At DENSTUDIO, we offer modern solutions to straighten and align your teeth discreetly and comfortably.",
    blocks: [
      {
        heading: "Invisalign",
        paragraphs: [
          "Invisalign uses a series of custom-made, clear plastic aligners to gradually move your teeth into their ideal positions. Each set of aligners is worn for approximately two weeks before progressing to the next set in the series.",
        ],
        bullets: [
          {
            label: "Invisible",
            text: "The clear aligners are virtually undetectable, allowing you to straighten your teeth discreetly.",
          },
          {
            label: "Comfortable",
            text: "Made from smooth, BPA-free plastic, Invisalign aligners are more comfortable than traditional metal braces.",
          },
          {
            label: "Convenient",
            text: "Aligners are removable, making it easy to eat, drink and maintain oral hygiene throughout treatment.",
          },
        ],
      },
      {
        heading: "Porcelain Veneers",
        paragraphs: [
          "For mild misalignment or when a faster solution is preferred, porcelain veneers can create the appearance of perfectly straight teeth without the need for orthodontics. These custom-crafted shells are bonded to the front of the teeth, instantly transforming your smile.",
        ],
        bullets: [
          {
            label: "Quick Results",
            text: "Veneers can achieve a straight-looking smile in just two to three appointments, compared to months of orthodontic treatment.",
          },
          {
            label: "Versatility",
            text: "Veneers can address multiple cosmetic issues at once, including discolouration, gaps and uneven teeth.",
          },
          {
            label: "Durable",
            text: "Porcelain veneers are strong, stain-resistant and can last 10\u201315 years with proper care.",
          },
        ],
      },
    ],
  },
  {
    id: "mishapenteeth",
    number: "10",
    title: "Misshapen Teeth",
    image: "/images/concerns/misshapen.webp",
    intro:
      "Teeth that are uneven, too small, irregularly shaped or out of proportion can detract from an otherwise healthy smile. At DENSTUDIO, we offer expert cosmetic treatments to reshape and refine your teeth, creating a harmonious and balanced appearance.",
    blocks: [
      {
        heading: "Composite Bonding",
        paragraphs: [
          "Composite bonding is a versatile and minimally invasive treatment that uses tooth-coloured resin to reshape and sculpt teeth. It\u2019s an excellent option for minor adjustments, such as building up small or uneven teeth, smoothing rough edges, or correcting slight irregularities.",
        ],
        bullets: [
          {
            label: "Conservative",
            text: "Little to no removal of natural tooth structure is needed, preserving the integrity of your teeth.",
          },
          {
            label: "Affordable",
            text: "Bonding is one of the most budget-friendly cosmetic treatments available.",
          },
          {
            label: "Quick",
            text: "Results are achieved in a single appointment, usually within 30\u201360 minutes per tooth.",
          },
        ],
      },
      {
        heading: "Porcelain Veneers",
        paragraphs: [
          "For more significant reshaping or when a longer-lasting solution is desired, porcelain veneers provide a premium option. These thin, custom-made porcelain shells are designed to cover the front surface of the teeth, creating a uniform, beautifully shaped smile.",
        ],
        bullets: [
          {
            label: "Versatility",
            text: "Veneers can correct a wide range of cosmetic issues, from shape and size to colour and alignment.",
          },
          {
            label: "Durability",
            text: "Porcelain is highly durable and resistant to staining, providing long-lasting results.",
          },
          {
            label: "Customisation",
            text: "Each veneer is custom-crafted to complement your facial features and create a natural, balanced smile.",
          },
        ],
      },
    ],
  },
  {
    id: "metalfillings",
    number: "11",
    title: "Replace Metal Fillings",
    image: "/images/concerns/detail-metal-fillings.webp",
    intro:
      "Are dark metal fillings affecting the appearance of your smile? Amalgam fillings, while durable, can be unsightly and may raise concerns about the materials used. At DENSTUDIO, we offer modern, tooth-coloured composite fillings as a healthier-looking and aesthetically superior alternative.",
    blocks: [
      {
        heading: "The Limitations of Metal Fillings",
        paragraphs: [
          "Amalgam (metal) fillings have been used in dentistry for over a century, but they come with several drawbacks:",
        ],
        bullets: [
          {
            label: "Aesthetic",
            text: "Their dark silver or grey colour makes them highly visible, especially on back teeth when you laugh or speak.",
          },
          {
            label: "Structure Impact",
            text: "Metal fillings do not bond to the tooth and often require more removal of healthy tooth structure to create a mechanical lock.",
          },
          {
            label: "Temperature",
            text: "Metal expands and contracts with temperature changes, which over time can lead to micro-cracks in the surrounding tooth.",
          },
        ],
      },
      {
        heading: "Tooth-Coloured Composite Fillings",
        paragraphs: [
          "Our composite fillings are carefully matched to the shade of your natural teeth, making them virtually invisible. The composite resin is applied in layers, sculpted to the shape of your tooth and hardened with a curing light for a strong, lasting bond.",
        ],
        bullets: [
          {
            label: "Aesthetically Pleasing",
            text: "Composite fillings blend seamlessly with your natural teeth, providing a clean, uniform appearance.",
          },
          {
            label: "Preservation",
            text: "Because composite bonds directly to the tooth, less healthy tooth structure needs to be removed during placement.",
          },
          {
            label: "Enhanced Bonding",
            text: "The adhesive nature of composite fillings provides additional structural support to the treated tooth.",
          },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ConcernPageClient() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  /* Smooth-scroll for anchor links */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  /* IntersectionObserver fade-in */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const els = document.querySelectorAll(".fade-in-section");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ====== HERO ====== */}
      <section
        className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #06420d 0%, #012406 70%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <span className="inline-block text-[13px] tracking-[0.25em] uppercase text-white/60 font-medium mb-6">
            DENSTUDIO Harley Street
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            What&rsquo;s Your Concern?
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everyone&rsquo;s smile is unique, and so are their concerns. Select
            the issue that resonates with you and discover how DENSTUDIO can
            help.
          </p>
        </div>
      </section>

      {/* ====== GRID ====== */}
      <section className="py-16 md:py-24 bg-[#faf9f7]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {gridCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group relative block aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Label + arrow */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <span className="text-white text-[15px] font-semibold leading-snug">
                    {card.title}
                  </span>
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/40 group-hover:translate-x-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====== DETAIL SECTIONS ====== */}
      {concerns.map((concern, idx) => {
        const isEven = idx % 2 === 1;
        const bg = isEven ? "bg-[#f3f1ed]" : "bg-[#faf9f7]";

        return (
          <section
            key={concern.id}
            id={concern.id}
            ref={(el) => { sectionRefs.current[idx] = el; }}
            className={`${bg} py-16 md:py-24 fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out`}
          >
            <div className="mx-auto max-w-7xl px-6">
              {/* Back link */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-sm text-[#012406]/60 hover:text-[#012406] transition-colors mb-10"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to all concerns
              </a>

              {/* Two-column layout */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  isEven ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Content column */}
                <div className={isEven ? "lg:[direction:ltr]" : ""}>
                  {/* Number circle */}
                  <div className="w-14 h-14 rounded-full border-2 border-[#012406]/20 flex items-center justify-center mb-6">
                    <span className="text-[15px] font-semibold text-[#012406]">
                      {concern.number}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                    {concern.title}
                  </h2>

                  <p className="text-[#555] text-[16px] leading-relaxed mb-10">
                    {concern.intro}
                  </p>

                  {/* Treatment blocks */}
                  {concern.blocks.map((block, bIdx) => (
                    <div key={bIdx} className="mb-10">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4">
                        {block.heading}
                      </h3>

                      {block.subheading && (
                        <h4 className="text-base font-semibold text-[#012406] mb-3">
                          {block.subheading}
                        </h4>
                      )}

                      {block.paragraphs?.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-[#555] text-[15px] leading-relaxed mb-4"
                        >
                          {p}
                        </p>
                      ))}

                      {block.bullets && block.bullets.length > 0 && (
                        <ul className="space-y-4 mt-4">
                          {block.bullets.map((bullet, buIdx) => (
                            <li key={buIdx} className="flex gap-3">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#012406] mt-2.5" />
                              <div>
                                <span className="font-semibold text-[#1a1a1a] text-[15px]">
                                  {bullet.label}:
                                </span>{" "}
                                <span className="text-[#555] text-[15px] leading-relaxed">
                                  {bullet.text}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-4 mt-10">
                    <Link
                      href="/contact-us"
                      className="bg-[#012406] text-white px-10 py-4 rounded-full text-[15px] font-medium tracking-wide hover:bg-[#023a09] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Book Consultation
                    </Link>
                    <a
                      href="tel:02038830588"
                      className="border-[1.5px] border-[#012406] text-[#012406] px-9 py-3.5 rounded-full text-[15px] font-medium hover:bg-[#012406] hover:text-white transition-all duration-300"
                    >
                      Call 020 3883 0588
                    </a>
                  </div>
                </div>

                {/* Sticky image column */}
                <div className={`${isEven ? "lg:[direction:ltr]" : ""} lg:sticky lg:top-28`}>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={concern.image}
                      alt={concern.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ====== FINAL CTA ====== */}
      <section className="py-20 md:py-28 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Book your consultation at our Harley Street practice and take the
            first step towards the smile you have always wanted.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-[#012406] px-10 py-4 rounded-full text-[15px] font-medium hover:bg-gray-100 transition-all duration-300"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
