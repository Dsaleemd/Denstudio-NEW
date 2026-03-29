"use client";

import { useState, useEffect, useCallback, FormEvent } from "react";

/* ──────────────────────────────── colour tokens ──────────────────────────── */
const pine = "#0b3b3b";
const charcoal = "#111315";
const porcelain = "#f7f5f0";
const stone = "#e8e2d6";
const gold = "#c8a85a";

/* ──────────────────────────────── tiny icons ─────────────────────────────── */
function IconCalendar() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function IconAward() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function IconMonitor() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
function IconArrow() {
  return <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>;
}

/* ──────────────────────────────── badge ───────────────────────────────────── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
      style={{ background: `${pine}14`, color: pine }}
    >
      {children}
    </span>
  );
}

/* ──────────────────────────────── pill ────────────────────────────────────── */
function Pill({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs" style={{ borderColor: stone, color: charcoal }}>
      <span className="font-semibold" style={{ color: pine }}>{label}:</span> {value}
    </span>
  );
}

/* ──────────────────────────────── card shell ──────────────────────────────── */
function Card({ children, className = "", id, style }: { children: React.ReactNode; className?: string; id?: string; style?: React.CSSProperties }) {
  return (
    <div
      id={id}
      className={`rounded-[18px] border bg-white/92 shadow-sm ${className}`}
      style={{ borderColor: `${stone}99`, ...style }}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────────── detail row ─────────────────────────────── */
function DetailRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 py-4 border-b last:border-b-0" style={{ borderColor: `${stone}66` }}>
      <div className="mt-0.5 shrink-0" style={{ color: pine }}>{icon}</div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: `${charcoal}99` }}>{label}</p>
        <div className="text-sm leading-relaxed" style={{ color: charcoal }}>{children}</div>
      </div>
    </div>
  );
}

/* ════════════════════════════════ ZOOM URL ════════════════════════════════ */
const ZOOM_URL = "https://us04web.zoom.us/meeting/register/E28xZq9cSt6INwqYxn2oBw";

/* ════════════════════════════════ MAIN ════════════════════════════════════ */
export default function CpdClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", gdc: "", email: "" });

  /* close on Escape */
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setModalOpen(false);
  }, []);
  useEffect(() => {
    if (modalOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen, handleKey]);

  function openModal() {
    setSubmitted(false);
    setForm({ name: "", gdc: "", email: "" });
    setModalOpen(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.open(ZOOM_URL, "_blank", "noopener");
  }

  /* ─── schedule data ─── */
  const schedule = [
    { time: "09:00 \u2013 09:10", title: "Welcome, learning objectives, and CPD requirements" },
    { time: "09:10 \u2013 09:55", title: "Module 1: Foundations of laboratory communication" },
    { time: "09:55 \u2013 10:40", title: "Module 2: Writing effective lab prescriptions" },
    { time: "10:40 \u2013 11:25", title: "Module 3: Communication in aesthetic dentistry" },
    { time: "11:25 \u2013 11:40", title: "Break", isBreak: true },
    { time: "11:40 \u2013 12:25", title: "Module 4: Digital dentistry & lab collaboration" },
    { time: "12:25 \u2013 13:10", title: "Module 5: Preventing remakes & clinical errors" },
    { time: "13:10 \u2013 13:30", title: "Module 6: Technician partnerships, Q&A, and reflection" },
  ];

  const learningObjectives = [
    "Understand the key principles of effective communication between dental clinicians and laboratory technicians.",
    "Write clear, detailed, and clinically accurate laboratory prescriptions for a range of fixed and removable restorations.",
    "Apply structured communication frameworks to improve shade matching, material selection, and aesthetic outcomes.",
    "Identify common sources of error in the dentist\u2013technician workflow and implement strategies to reduce remakes.",
    "Leverage digital dentistry tools (intraoral scanners, CAD/CAM, digital shade matching) for clearer lab communication.",
    "Reflect on professional development in the context of GDC-recommended CPD outcomes.",
  ];

  const topics = [
    "Foundations of laboratory communication",
    "Writing effective lab prescriptions",
    "Communication in aesthetic dentistry",
    "Digital dentistry and lab collaboration",
    "Preventing remakes and clinical errors",
    "Building long-term technician partnerships",
  ];

  /* ════════════════════════════════ RENDER ════════════════════════════════ */
  return (
    <div
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 10%, ${gold}0a 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 80%, ${pine}08 0%, transparent 50%),
          ${porcelain}
        `,
      }}
    >
      {/* ═══════════════════ 1. HERO ═══════════════════ */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14 items-start">
            {/* left column */}
            <Card className="p-8 md:p-10" style={{ background: `linear-gradient(135deg, white 60%, ${porcelain})` } as React.CSSProperties}>
              {/* badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Free webinar</Badge>
                <Badge>4 hours verifiable CPD</Badge>
                <Badge>Live on Zoom</Badge>
                <Badge>Saturday 7th March 2026</Badge>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] leading-tight font-bold mb-5" style={{ color: charcoal }}>
                FREE 4-Hour{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Verifiable</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 -z-0 rounded-sm opacity-40" style={{ background: gold }} />
                </span>{" "}
                CPD Webinar &mdash; Precision in Practice: Effective Communication with the Dental Laboratory
              </h1>

              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: `${charcoal}cc` }}>
                A structured, practical session designed to improve dentist&ndash;technician collaboration, strengthen laboratory prescriptions, enhance aesthetic outcomes, and reduce remakes through clear clinical communication and robust workflows.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3 mb-5">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center gap-1 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${pine}, ${pine}dd)` }}
                >
                  Reserve your place <IconArrow />
                </button>
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-1 rounded-full px-6 py-3 text-sm font-semibold border transition hover:bg-white/60"
                  style={{ borderColor: stone, color: charcoal, background: "rgba(255,255,255,0.7)" }}
                >
                  View schedule
                </a>
                <a
                  href="mailto:hello@denstudio.co.uk"
                  className="inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold border transition hover:bg-white/60"
                  style={{ borderColor: stone, color: charcoal, background: "rgba(255,255,255,0.7)" }}
                >
                  <IconMail /> Email hello@denstudio.co.uk
                </a>
              </div>

              <p className="text-xs" style={{ color: `${charcoal}88` }}>
                You&rsquo;ll be redirected to Zoom to complete registration and receive your unique join link.
              </p>
            </Card>

            {/* right column — key details */}
            <div className="space-y-4">
              <Card className="px-6 py-2">
                <DetailRow icon={<IconMonitor />} label="Provider">
                  <p className="font-semibold">Denstudio Dental Limited</p>
                  <p className="text-xs mt-0.5" style={{ color: `${charcoal}88` }}>Live online delivery via Zoom</p>
                </DetailRow>
                <DetailRow icon={<IconCalendar />} label="Date & time">
                  <p className="font-semibold">Saturday 7th March 2026</p>
                  <p className="text-xs mt-0.5" style={{ color: `${charcoal}88` }}>09:00&ndash;13:30 (includes 15-minute break)</p>
                </DetailRow>
                <DetailRow icon={<IconClock />} label="CPD hours">
                  <p className="font-semibold">4 hours (verifiable)</p>
                  <p className="text-xs mt-0.5" style={{ color: `${charcoal}88` }}>Attendance tracked by Zoom</p>
                </DetailRow>
                <DetailRow icon={<IconCheck />} label="Development outcomes">
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {["A", "B", "C", "D"].map((l) => (
                      <span key={l} className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold" style={{ background: `${pine}14`, color: pine }}>
                        {l}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs mt-1.5" style={{ color: `${charcoal}88` }}>Communication, leadership, clinical skills, professionalism</p>
                </DetailRow>
                <DetailRow icon={<IconAward />} label="Certificate">
                  <p>Issued after attendance, confirming 4 hours verifiable CPD</p>
                </DetailRow>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 2. CONTENT GRID ═══════════════════ */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Course overview */}
            <Card className="p-8">
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: charcoal }}>Course overview</h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: `${charcoal}cc` }}>
                This free webinar has been developed to address one of the most common challenges in restorative and aesthetic dentistry: communication between the dental clinician and the laboratory technician.
                Across five focused modules and a reflective Q&amp;A session, participants will explore practical strategies to improve prescription quality, reduce remakes, and harness digital tools for clearer collaboration.
              </p>
              <div className="flex flex-wrap gap-2">
                <Pill label="Format" value="Live webinar" />
                <Pill label="Duration" value="4 hours" />
                <Pill label="Cost" value="Free" />
                <Pill label="Date" value="Sat 7 March 2026" />
              </div>
            </Card>

            {/* Learning objectives */}
            <Card className="p-8">
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: charcoal }}>Learning objectives</h2>
              <ul className="space-y-3">
                {learningObjectives.map((obj, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: `${charcoal}cc` }}>
                    <span className="mt-1 shrink-0" style={{ color: pine }}><IconCheck /></span>
                    {obj}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Who should attend */}
            <Card className="p-8">
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: charcoal }}>Who should attend</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: `${charcoal}cc` }}>
                This webinar is aimed at dental professionals who regularly prescribe laboratory work and want to strengthen their communication with dental technicians.
              </p>
              <ul className="space-y-2">
                {["General Dental Practitioners (GDPs)", "Associate Dentists", "Restorative clinicians", "Dental Therapists (where prescribing lab work)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: `${charcoal}cc` }}>
                    <IconUsers />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* What we'll cover */}
            <Card className="p-8">
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: charcoal }}>What we&rsquo;ll cover</h2>
              <ul className="space-y-2">
                {topics.map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: `${charcoal}cc` }}>
                    <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold" style={{ background: `${pine}14`, color: pine }}>
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 3. SCHEDULE ═══════════════════ */}
      <section id="schedule" className="pb-20 md:pb-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Card className="p-8 md:p-10">
            <h2 className="font-serif text-2xl font-bold mb-6" style={{ color: charcoal }}>Programme schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider" style={{ color: `${charcoal}88` }}>
                    <th className="pb-3 pr-6 font-semibold">Time</th>
                    <th className="pb-3 font-semibold">Session</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr
                      key={i}
                      className="border-t"
                      style={{
                        borderColor: `${stone}66`,
                        background: row.isBreak ? `${stone}44` : undefined,
                      }}
                    >
                      <td className="py-3.5 pr-6 font-mono text-xs whitespace-nowrap" style={{ color: pine }}>
                        {row.time}
                      </td>
                      <td className="py-3.5" style={{ color: row.isBreak ? `${charcoal}88` : charcoal }}>
                        {row.isBreak ? <em>{row.title}</em> : row.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-1 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                style={{ background: `linear-gradient(135deg, ${pine}, ${pine}dd)` }}
              >
                Reserve your place <IconArrow />
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══════════════════ 4. CERTIFICATE + REGISTRATION ═══════════════════ */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Certificate details */}
            <Card className="p-8">
              <div className="flex items-center gap-2 mb-4" style={{ color: pine }}>
                <IconAward />
                <h2 className="font-serif text-xl font-bold" style={{ color: charcoal }}>Certificate details</h2>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed" style={{ color: `${charcoal}cc` }}>
                <li className="flex gap-2.5"><span style={{ color: pine }}><IconCheck /></span>CPD certificate issued after attendance confirmation</li>
                <li className="flex gap-2.5"><span style={{ color: pine }}><IconCheck /></span>Confirms 4 hours of verifiable CPD</li>
                <li className="flex gap-2.5"><span style={{ color: pine }}><IconCheck /></span>Aligned with GDC development outcomes A, B, C, and D</li>
                <li className="flex gap-2.5"><span style={{ color: pine }}><IconCheck /></span>Suitable for inclusion in your CPD log and annual CPD statement</li>
                <li className="flex gap-2.5"><span style={{ color: pine }}><IconCheck /></span>Attendance tracked via Zoom &mdash; you must remain connected for the full session</li>
              </ul>
            </Card>

            {/* Reserve your place */}
            <Card className="p-8 flex flex-col justify-between" style={{ background: `linear-gradient(135deg, ${pine}, #0e4a4a)` } as React.CSSProperties}>
              <div>
                <h2 className="font-serif text-xl font-bold text-white mb-2">Reserve your place</h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.78)" }}>
                  This free webinar is open to all registered dental professionals. Secure your spot today and receive your personal Zoom join link.
                </p>
                <ul className="space-y-2 text-sm mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
                  <li className="flex items-center gap-2"><IconCalendar /> Saturday 7th March 2026</li>
                  <li className="flex items-center gap-2"><IconClock /> 09:00 &ndash; 13:30</li>
                  <li className="flex items-center gap-2"><IconMonitor /> Live on Zoom</li>
                  <li className="flex items-center gap-2"><IconAward /> 4 hours verifiable CPD</li>
                </ul>
              </div>
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center gap-1 rounded-full px-7 py-3 text-sm font-semibold shadow-lg transition hover:opacity-90 w-full"
                style={{ background: gold, color: charcoal }}
              >
                Reserve your place <IconArrow />
              </button>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 5. FOOTER ═══════════════════ */}
      <footer className="border-t py-12" style={{ borderColor: `${stone}66` }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <p className="text-sm font-semibold mb-1" style={{ color: charcoal }}>Denstudio Dental Limited</p>
          <p className="text-xs mb-4" style={{ color: `${charcoal}88` }}>
            Provider of verifiable CPD for dental professionals
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {[
              { letter: "A", label: "Communication" },
              { letter: "B", label: "Leadership" },
              { letter: "C", label: "Clinical skills" },
              { letter: "D", label: "Professionalism" },
            ].map((o) => (
              <span key={o.letter} className="inline-flex items-center gap-1.5 text-xs" style={{ color: `${charcoal}99` }}>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold" style={{ background: `${pine}14`, color: pine }}>{o.letter}</span>
                {o.label}
              </span>
            ))}
          </div>
          <p className="text-xs" style={{ color: `${charcoal}66` }}>
            &copy; {new Date().getFullYear()} Denstudio Dental Limited. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ═══════════════════ 6. MODAL ═══════════════════ */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.55)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div
            className="relative w-full max-w-md rounded-[18px] bg-white shadow-2xl overflow-hidden animate-[fadeUp_0.25s_ease]"
            role="dialog"
            aria-modal="true"
          >
            {/* close */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full transition hover:bg-black/5"
              style={{ color: `${charcoal}88` }}
              aria-label="Close"
            >
              <IconX />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-8">
                <h3 className="font-serif text-xl font-bold mb-1" style={{ color: charcoal }}>Proceed to Zoom registration</h3>
                <p className="text-sm mb-6" style={{ color: `${charcoal}88` }}>
                  Saturday 7th March 2026 &middot; 09:00&ndash;13:30 &middot; 4 hrs verifiable CPD
                </p>

                <label className="block mb-4">
                  <span className="block text-xs font-semibold mb-1" style={{ color: charcoal }}>Full name</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2"
                    style={{ borderColor: stone, color: charcoal }}
                    placeholder="Dr Jane Smith"
                  />
                </label>
                <label className="block mb-4">
                  <span className="block text-xs font-semibold mb-1" style={{ color: charcoal }}>GDC number</span>
                  <input
                    type="text"
                    required
                    value={form.gdc}
                    onChange={(e) => setForm({ ...form, gdc: e.target.value })}
                    className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2"
                    style={{ borderColor: stone, color: charcoal }}
                    placeholder="123456"
                  />
                </label>
                <label className="block mb-6">
                  <span className="block text-xs font-semibold mb-1" style={{ color: charcoal }}>Email address</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2"
                    style={{ borderColor: stone, color: charcoal }}
                    placeholder="jane@example.com"
                  />
                </label>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-1 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${pine}, ${pine}dd)` }}
                >
                  Continue to Zoom registration <IconArrow />
                </button>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: `${pine}14`, color: pine }}
                >
                  <IconCheck />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2" style={{ color: charcoal }}>You&rsquo;re being redirected</h3>
                <p className="text-sm mb-4" style={{ color: `${charcoal}88` }}>
                  A new tab has been opened to complete your Zoom registration. If it didn&rsquo;t open automatically, click the link below.
                </p>
                <a
                  href={ZOOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold underline"
                  style={{ color: pine }}
                >
                  Open Zoom registration <IconArrow />
                </a>
                <div className="mt-6">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="rounded-full px-6 py-2.5 text-sm font-semibold border transition hover:bg-black/5"
                    style={{ borderColor: stone, color: charcoal }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* keyframe for modal */}
      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
