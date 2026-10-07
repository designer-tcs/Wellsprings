import { useState, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import {
  PageHero,
  SectionShell,
  SectionEyebrow,
} from "@/components/page/Primitives";
import heroImage from "@/assets/photos/disc-01-noticeboard.webp";

export const Route = createFileRoute("/mandatory-disclosure")({
  head: () => ({
    meta: [
      { title: "Mandatory Public Disclosure | Wellsprings Academy" },
      {
        name: "description",
        content:
          "CBSE Mandatory Public Disclosure for Wellsprings Academy — affiliation, infrastructure, staff, results and fee structure.",
      },
      { property: "og:title", content: "Mandatory Public Disclosure — Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "All CBSE-mandated public disclosures for Wellsprings Academy in one place.",
      },
    ],
  }),
  component: MandatoryDisclosurePage,
});

const GENERAL = [
  { label: "Name of the school", value: "Wellsprings Academy" },
  { label: "Affiliation No. (CBSE)", value: "831719" },
  { label: "Complete address with pin code", value: "Sy No. 146/1,2,3, Mugalur Village, Sarjapura – Chikka Thirupathi Road, Anekal Taluk, Bengaluru, Karnataka 562125" },
  { label: "School email", value: "hello@wellspringsacademy.in" },
  { label: "Contact number", value: "063663 61707" },
] as const;

const STAFF = [
  { label: "Principal", value: "1" },
  { label: "Total teaching staff", value: "30" },
  { label: "PPRT", value: "8" },
  { label: "PRT", value: "6" },
  { label: "TGT", value: "16" },
  { label: "Special educator", value: "1" },
  { label: "Counsellor", value: "1" },
] as const;

const DOCUMENTS: readonly { label: string; href: string }[] = [
  { label: "Affiliation / upgradation letter from CBSE", href: "/disclosure/cbse-grant-letter.pdf" },
  { label: "Trust / society / company registration certificate", href: "/disclosure/trust-deed.pdf" },
  { label: "No-Objection Certificate (NOC) from State Government", href: "/disclosure/noc-certificate.pdf" },
  { label: "Recognition certificate under RTE Act, 2009", href: "/disclosure/recognition-certificate.pdf" },
  { label: "Building safety certificate", href: "/disclosure/building-safety-certificate.pdf" },
  { label: "Fire safety certificate", href: "/disclosure/fire-safety-certificate.pdf" },
  { label: "Copy of valid water, health and sanitation certificates", href: "/disclosure/water-certificate.pdf" },
];

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-[var(--grey-200)] py-4 last:border-b-0 sm:grid-cols-[1fr_2fr] sm:gap-6">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
        {label}
      </span>
      <span className="text-[15px] text-[var(--ws-ink)]">{value}</span>
    </div>
  );
}

function MandatoryDisclosurePage() {
  const [openHref, setOpenHref] = useState<string | null>(null);

  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--grey-700)" } as CSSProperties}>
      <PageHero
        eyebrow="Public disclosure"
        pillar="Belong"
        title={
          <>
            Mandatory
            <br />
            <span className="text-[var(--sage-700)]">public disclosure</span>.
          </>
        }
        intro={
          <p>
            As a CBSE-affiliated school, we publish the following information for parents,
            applicants and the general public.
          </p>
        }
        image={heroImage}
        imageAlt="The Wellsprings school noticeboard"
        imageCaption="The school noticeboard."
      />

      {/* General information */}
      <SectionShell eyebrow="A. General information" title="The school, in numbers and names.">
        <div className="border-y border-[var(--grey-200)]">
          {GENERAL.map((row) => (
            <Row key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
      </SectionShell>

      {/* Documents */}
      <SectionShell
        background="grey"
        eyebrow="B. Documents and information"
        title="Statutory documents."
        intro={<p>Click a document to view it.</p>}
      >
        <ul className="border-y border-[var(--grey-300)]">
          {DOCUMENTS.map((doc) => (
            <li
              key={doc.label}
              className="border-b border-[var(--grey-300)] last:border-b-0"
            >
              <button
                type="button"
                aria-expanded={openHref === doc.href}
                onClick={() => setOpenHref((current) => (current === doc.href ? null : doc.href))}
                className="grid w-full grid-cols-[auto_1fr] items-center gap-3 py-4 text-left sm:grid-cols-[auto_1fr_auto] sm:gap-6"
              >
                <FileText size={18} strokeWidth={1.5} className="text-[var(--grey-700)]" />
                <span className="text-[15px] text-[var(--ws-ink)]">{doc.label}</span>
                <span className="col-span-2 inline-flex items-center justify-self-start border border-[var(--ws-ink)] px-3 py-1.5 text-xs font-medium text-[var(--ws-ink)] sm:col-span-1 sm:justify-self-auto">
                  {openHref === doc.href ? "Hide" : "View"}
                </span>
              </button>
              {openHref === doc.href ? (
                <object
                  data={doc.href}
                  type="application/pdf"
                  aria-label={doc.label}
                  className="mb-4 h-[75vh] w-full border border-[var(--grey-300)] bg-white"
                >
                  <iframe title={doc.label} src={doc.href} className="h-full w-full" />
                </object>
              ) : null}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell eyebrow="D. Staff" title="Teaching and support staff.">
        <div className="border-y border-[var(--grey-200)]">
          {STAFF.map((row) => (
            <Row key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
      </SectionShell>

      {/* Contact for clarifications */}
      <SectionShell background="ink">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <SectionEyebrow>For clarifications</SectionEyebrow>
            <h2 className="mt-3 text-4xl leading-[1.05] md:text-5xl">
              Need a document that isn't here yet?
            </h2>
            <p className="mt-5 text-[17px] leading-[1.75] text-[var(--slate-200)]">
              Write to us and we will send the latest copy by email, usually the same day.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-between gap-2 bg-white px-6 py-4 text-sm font-medium text-[var(--ws-ink)] transition-colors hover:bg-[var(--coral-200)]"
          >
            Contact the school office
          </a>
        </div>
      </SectionShell>
    </div>
  );
}
