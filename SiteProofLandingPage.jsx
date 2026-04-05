import React from "react";

const features = [
  {
    title: "Daily inspections",
    description:
      "Complete site inspections from a phone, attach photos, and keep every record organized by project and date.",
    icon: ClipboardIcon,
  },
  {
    title: "Toolbox talks",
    description:
      "Capture attendance, topic details, and signatures without chasing loose sheets at the end of the week.",
    icon: ChatIcon,
  },
  {
    title: "Hazard reports",
    description:
      "Log hazards as they happen, assign follow-up, and keep a clean record of what was reported and when.",
    icon: AlertIcon,
  },
  {
    title: "Training expiry tracking",
    description:
      "See expiring certifications before they become a problem and know exactly who needs attention next.",
    icon: ShieldIcon,
  },
  {
    title: "Compliance packet export",
    description:
      "Generate a proof-ready PDF packet with the records clients, consultants, and GCs ask for most.",
    icon: ExportIcon,
  },
];

const faqs = [
  {
    question: "Is this built for Ontario contractors?",
    answer:
      "Yes. SiteProof is designed with Ontario-first crews in mind, with simple recordkeeping that matches how small contractors actually work in the field.",
  },
  {
    question: "Do I need a big safety team to use SiteProof?",
    answer:
      "No. It is built for owners, supervisors, and office admins at smaller companies, especially teams with 1 to 25 workers.",
  },
  {
    question: "Can crews use it on-site?",
    answer:
      "Yes. The experience is mobile-first, so field crews can capture inspections, talks, and hazards right from the jobsite.",
  },
  {
    question: "Can I export records for clients or consultants?",
    answer:
      "Yes. SiteProof is designed around the moment someone asks for proof. You can export a clean compliance packet without scrambling through paper and photos.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan includes a 30-day free trial and no credit card is required to get started.",
  },
  {
    question: "Is this a replacement for a full enterprise EHS platform?",
    answer:
      "No. SiteProof is intentionally simpler. It is for small crews that need organized, proof-ready records without the overhead of enterprise software.",
  },
];

const steps = [
  {
    number: "01",
    title: "Capture records on-site",
    description:
      "Crews log inspections, toolbox talks, hazards, and photos from the field while the work is happening.",
  },
  {
    number: "02",
    title: "Track what’s missing in the office",
    description:
      "Owners and admins can see missing records and expiring training before a request turns into a scramble.",
  },
  {
    number: "03",
    title: "Export proof fast when requested",
    description:
      "Generate a clean PDF packet in minutes when a client, consultant, or GC asks for documentation.",
  },
];

const audience = [
  "Small Ontario contractors",
  "Owner-operators",
  "Field crews with 1 to 25 workers",
  "Office admins who need cleaner records",
];

const painPoints = [
  "Paper binders in trucks and trailers",
  "Scattered photos across phones and chats",
  "Missing forms when a site asks for them",
  "Last-minute proof requests that burn hours",
];

const trustPoints = [
  "Built for Ontario contractors",
  "30-day free trial",
  "No credit card required",
];

export default function SiteProofLandingPage() {
  return (
    <div className="min-h-screen bg-[#07111B] text-white selection:bg-orange-500/30">
      <style>{`
        .siteproof-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .siteproof-orb {
          filter: blur(70px);
          opacity: 0.28;
          animation: drift 14s ease-in-out infinite;
        }
        .siteproof-float {
          animation: float 6s ease-in-out infinite;
        }
        .siteproof-float-delay {
          animation: float 7s ease-in-out infinite;
          animation-delay: 1.1s;
        }
        .siteproof-fade {
          animation: fadeUp 0.8s ease-out both;
        }
        @keyframes drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(18px, -22px, 0) scale(1.06); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative overflow-hidden">
        <div className="siteproof-grid absolute inset-0 opacity-30" />
        <div className="siteproof-orb absolute left-[-8rem] top-[5rem] h-64 w-64 rounded-full bg-orange-500" />
        <div className="siteproof-orb absolute right-[-6rem] top-[9rem] h-72 w-72 rounded-full bg-sky-500" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8 lg:px-10">
          <Header />
          <Hero />
        </div>
      </div>

      <main>
        <ProblemSolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SmallCrewsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="siteproof-fade flex items-center justify-between">
      <a href="#top" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
          <span className="text-lg font-semibold tracking-tight text-orange-400">
            SP
          </span>
        </div>
        <div>
          <div className="text-lg font-semibold tracking-tight">SiteProof</div>
          <div className="text-xs text-white/55">siteproof.ca</div>
        </div>
      </a>

      <nav className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
        <a href="#features" className="transition hover:text-white">
          Features
        </a>
        <a href="#pricing" className="transition hover:text-white">
          Pricing
        </a>
        <a href="#faq" className="transition hover:text-white">
          FAQ
        </a>
      </nav>

      <a
        href="#pricing"
        className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:border-orange-400/40 hover:bg-white/10"
      >
        Start free
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pb-10 pt-16 lg:pb-20 lg:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="siteproof-fade max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-200">
            Ontario-first records for small contractors
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Stop scrambling for safety records when proof is requested.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
            Keep inspections, toolbox talks, hazard reports, training records,
            and compliance exports in one simple place. Built for small crews
            that need proof fast, not bloated enterprise setup.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-orange-400"
            >
              Start free
            </a>
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/6 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/65">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="relative siteproof-fade">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-500/12 via-transparent to-sky-500/10 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/6 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-[#091521] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/50">Live compliance view</div>
                  <div className="text-lg font-semibold">Elm Ridge Roofing</div>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Proof-ready status
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="siteproof-float rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                        This week
                      </div>
                      <div className="mt-1 text-base font-semibold">
                        Records overview
                      </div>
                    </div>
                    <div className="rounded-full bg-orange-500/12 px-2.5 py-1 text-xs text-orange-200">
                      6 active workers
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <MetricCard
                      label="Missing inspections"
                      value="3"
                      tone="orange"
                      detail="2 days overdue"
                    />
                    <MetricCard
                      label="Expiring certifications"
                      value="2"
                      tone="sky"
                      detail="Within 14 days"
                    />
                    <MetricCard
                      label="Hazard reports today"
                      value="1"
                      tone="emerald"
                      detail="Flagged and assigned"
                    />
                    <MetricCard
                      label="Toolbox talks logged"
                      value="8"
                      tone="slate"
                      detail="This month"
                    />
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/8 bg-[#06101A] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">
                          Generate compliance packet
                        </div>
                        <div className="mt-1 text-sm text-white/50">
                          Include inspections, talks, hazards, and training log
                        </div>
                      </div>
                      <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-200">
                        Export PDF
                      </button>
                    </div>
                  </div>
                </div>

                <div className="siteproof-float-delay rounded-[1.4rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-base font-semibold">Field activity</div>
                    <div className="text-xs text-white/45">Mobile-first</div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <ActivityItem
                      title="Daily inspection submitted"
                      meta="Crew lead · 7:18 AM"
                      status="Completed"
                    />
                    <ActivityItem
                      title="Forklift training expires soon"
                      meta="2 workers · Reminder sent"
                      status="Attention"
                      warning
                    />
                    <ActivityItem
                      title="Hazard report added"
                      meta="Wet access path · Photo attached"
                      status="New"
                    />
                  </div>

                  <div className="mt-4 rounded-2xl border border-orange-400/15 bg-orange-500/8 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-orange-200/80">
                      Request received
                    </div>
                    <div className="mt-2 text-sm font-medium text-white">
                      Consultant asked for this month’s inspection and training
                      records.
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-white/55">
                        Packet ready in minutes
                      </span>
                      <span className="rounded-full border border-orange-300/25 px-3 py-1 text-xs text-orange-100">
                        Send today
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="border-t border-white/8 bg-[#08121C]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <SectionEyebrow>Before SiteProof</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Proof requests turn into a scramble.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/68">
              Small contractors already have the information somewhere. The
              problem is it lives across binders, spreadsheets, phones, chats,
              and memory.
            </p>
            <div className="mt-8 space-y-3">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#07111A] px-4 py-3 text-white/75"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-500/10 via-white/[0.04] to-sky-500/10 p-8">
            <SectionEyebrow>With SiteProof</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Field records stay organized and proof is ready in minutes.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/68">
              Crews log records on-site. The office sees what is missing. When
              a client, consultant, or GC asks for proof, the paperwork is
              already in shape.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <MiniStep
                title="Capture"
                text="Inspections, talks, hazards, and photos from the field."
              />
              <MiniStep
                title="Track"
                text="Missing records and expiring training in one clear view."
              />
              <MiniStep
                title="Export"
                text="Generate a clean compliance packet without chasing paper."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-[#07111B]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Core workflows"
          title="Everything small crews need to stay proof-ready"
          description="Focused tools for the records contractors get asked for most. No bloated modules, no enterprise maze."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}

          <div className="rounded-[2rem] border border-orange-400/15 bg-gradient-to-br from-orange-500/12 to-[#0A1622] p-6 lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-8 lg:flex-row">
              <div className="max-w-xl">
                <div className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-sm text-orange-200">
                  Proof export that actually matters
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  When someone asks for proof, you already know where it is.
                </h3>
                <p className="mt-4 text-white/70">
                  SiteProof is built around the real moment that matters:
                  pulling together records fast for a client, consultant, or
                  general contractor. That is the workflow, not an afterthought.
                </p>
              </div>

              <div className="w-full max-w-md rounded-[1.6rem] border border-white/10 bg-[#06101A] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Compliance packet</div>
                    <div className="mt-1 text-xs text-white/45">
                      North York school retrofit
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    Ready to export
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <PacketRow label="Daily inspections" value="22 records" />
                  <PacketRow label="Toolbox talks" value="6 signed" />
                  <PacketRow label="Hazard reports" value="2 logged" />
                  <PacketRow label="Training log" value="Current" />
                </div>
                <button className="mt-5 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-100">
                  Generate PDF packet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="border-y border-white/8 bg-[#08131D]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Simple enough for crews, clear enough for the office"
          description="A lightweight flow that keeps records moving from the jobsite to a proof-ready export."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-400/20 hover:bg-white/[0.05]"
            >
              <div className="text-sm font-medium tracking-[0.28em] text-orange-300">
                {step.number}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmallCrewsSection() {
  return (
    <section className="bg-[#07111B]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionEyebrow>Built for small crews</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Not another enterprise safety platform.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/68">
              SiteProof is for contractors who want cleaner records without
              rollout overhead, admin bloat, or software that feels built for a
              corporate compliance department.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/68">
              If you run a small company, manage a field crew, or wear both the
              office and site hat, this is designed for how you already work.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold">A fit for</h3>
              <div className="mt-5 space-y-3">
                {audience.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/72">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0A1520] p-6">
              <h3 className="text-lg font-semibold">Not built for</h3>
              <div className="mt-5 space-y-4 text-white/65">
                <ContrastRow text="Complex enterprise rollout projects" />
                <ContrastRow text="Heavy multi-department EHS systems" />
                <ContrastRow text="Months of configuration before value" />
                <ContrastRow text="Software that crews avoid using" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="border-t border-white/8 bg-[#08121C]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Pricing preview"
          title="Straightforward pricing for growing crews"
          description="Start with a 30-day free trial. No credit card required."
          centered
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2">
          <PricingCard
            tier="Starter"
            price="CAD $79"
            period="/month"
            detail="Up to 10 workers"
            description="A simple starting point for smaller crews that need organized records and fast proof exports."
            highlights={[
              "Daily inspections",
              "Toolbox talks",
              "Hazard reports",
              "Training tracking",
              "PDF compliance packet export",
            ]}
            cta="Start 30-day trial"
          />
          <PricingCard
            tier="Pro"
            price="CAD $149"
            period="/month"
            detail="Up to 25 workers"
            description="More room for active crews that need better visibility across field activity and expiring records."
            highlights={[
              "Everything in Starter",
              "More workers and projects",
              "Clearer office oversight",
              "Faster proof assembly",
              "Built for growing small teams",
            ]}
            cta="Book a demo"
            featured
          />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-[#07111B]">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions small contractors usually ask first"
          description="Clear answers before you commit time to another tool."
          centered
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-medium text-white">
                <span>{faq.question}</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/45 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-white/65">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="border-t border-white/8 bg-gradient-to-b from-[#08121C] to-[#050C13]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-orange-500/12 via-white/[0.04] to-sky-500/10 px-8 py-12 text-center shadow-2xl shadow-black/30 sm:px-12">
          <SectionEyebrow>Ready when proof is requested</SectionEyebrow>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Keep your records organized. Export proof fast. Get back to work.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            SiteProof helps small Ontario contractors stay proof-ready without
            turning safety records into a full-time admin job.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-orange-400"
            >
              Start free today
            </a>
            <a
              href="mailto:hello@siteproof.ca"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/14 bg-white/6 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>
          <div className="mt-6 text-sm text-white/52">
            30-day free trial. No credit card. Built for small crews.
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={centered ? "text-center" : "max-w-3xl"}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 text-white/68 sm:text-lg ${
          centered ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-orange-200">
      {children}
    </div>
  );
}

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <div
      className={`group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-400/20 hover:bg-white/[0.05] ${
        index === 4 ? "lg:col-span-1" : ""
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/14 to-white/[0.03]">
        <Icon className="h-6 w-6 text-orange-300" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
      <p className="mt-3 leading-7 text-white/65">{feature.description}</p>
    </div>
  );
}

function PricingCard({
  tier,
  price,
  period,
  detail,
  description,
  highlights,
  cta,
  featured = false,
}) {
  return (
    <div
      className={`rounded-[2rem] border p-8 ${
        featured
          ? "border-orange-400/25 bg-gradient-to-b from-orange-500/12 to-[#09131D]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{tier}</div>
          <div className="mt-2 text-sm text-white/55">{detail}</div>
        </div>
        {featured ? (
          <div className="rounded-full border border-orange-400/25 bg-orange-500/12 px-3 py-1 text-xs font-medium text-orange-200">
            Best for growing crews
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex items-end gap-2">
        <div className="text-4xl font-semibold tracking-tight">{price}</div>
        <div className="pb-1 text-white/55">{period}</div>
      </div>

      <p className="mt-5 leading-7 text-white/67">{description}</p>

      <div className="mt-8 space-y-3">
        {highlights.map((item) => (
          <div key={item} className="flex items-start gap-3 text-white/72">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <a
        href="#final-cta"
        className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition ${
          featured
            ? "bg-orange-500 text-slate-950 hover:bg-orange-400"
            : "border border-white/14 bg-white/6 text-white hover:bg-white/10"
        }`}
      >
        {cta}
      </a>
      <div className="mt-4 text-center text-sm text-white/45">
        30-day free trial. No credit card required.
      </div>
    </div>
  );
}

function MiniStep({ title, text }) {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[#07111A] p-5">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-6 text-white/62">{text}</div>
    </div>
  );
}

function MetricCard({ label, value, detail, tone = "orange" }) {
  const toneClasses = {
    orange: "bg-orange-500/10 text-orange-200 border-orange-400/15",
    sky: "bg-sky-500/10 text-sky-200 border-sky-400/15",
    emerald: "bg-emerald-500/10 text-emerald-200 border-emerald-400/15",
    slate: "bg-white/[0.05] text-white border-white/10",
  };

  return (
    <div
      className={`rounded-2xl border p-4 ${toneClasses[tone] || toneClasses.orange}`}
    >
      <div className="text-xs uppercase tracking-[0.2em] text-white/40">
        {label}
      </div>
      <div className="mt-2 text-3xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-white/55">{detail}</div>
    </div>
  );
}

function ActivityItem({ title, meta, status, warning = false }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#07111A] p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-white">{title}</div>
          <div className="mt-1 text-xs text-white/45">{meta}</div>
        </div>
        <div
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
            warning
              ? "bg-orange-500/12 text-orange-200"
              : "bg-emerald-500/10 text-emerald-300"
          }`}
        >
          {status}
        </div>
      </div>
    </div>
  );
}

function PacketRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
      <span className="text-sm text-white/70">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}

function ContrastRow({ text }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
      {text}
    </div>
  );
}

function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M5 10.5L8.2 13.5L15 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClipboardIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 5.5H15M9 3H15C16.1 3 17 3.9 17 5V6H19C20.1 6 21 6.9 21 8V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H7V5C7 3.9 7.9 3 9 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11H16M8 15H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M8 18L4 20V6C4 4.9 4.9 4 6 4H18C19.1 4 20 4.9 20 6V14C20 15.1 19.1 16 18 16H10L8 18Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8H16M8 11.5H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AlertIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 4L21 19H3L12 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9V13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.5" r="1" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3L19 6V11C19 16 15.8 19.8 12 21C8.2 19.8 5 16 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2L11.1 14.1L15 10.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExportIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3V14M12 14L8 10M12 14L16 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
