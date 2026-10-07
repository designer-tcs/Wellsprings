import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, MottoStrip } from "@/components/page/Primitives";
import heroImage from "@/assets/photos/curr-overview-hero.webp";
import { MoreToExplore } from "@/components/page/MoreToExplore";
import xAbout1 from "@/assets/photos/why-hero-hand-up.webp";
import xCurr from "@/assets/photos/curr-overview-hero.webp";
import xLife from "@/assets/photos/life-page-hero.webp";
import xAdm from "@/assets/photos/adm-page-hero.webp";
import xAboutP from "@/assets/photos/about-01-hero.webp";
import xBlog from "@/assets/photos/blog-01-hero.webp";

export const Route = createFileRoute("/curriculum/")({
  head: () => ({
    meta: [
      { title: "Curriculum — A CBSE curriculum that grows with your child | Wellsprings" },
      {
        name: "description",
        content:
          "From the wonder of pre-primary to the rigour of middle school, Wellsprings teaches the whole child — Mind, Body, Heart — through every stage of growing up.",
      },
      { property: "og:title", content: "Curriculum — Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "Pre-primary, Primary, and Middle School — taught with CBSE rigour and Wellsprings warmth.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: CurriculumOverview,
});

function CurriculumOverview() {
  return (
    <div
      className="bg-[var(--ws-paper)]"
      style={{ ["--page-accent" as string]: "var(--coral-600)" } as CSSProperties}
    >
      <PageHero
        eyebrow="Curriculum"
        pillar="Build"
        title={
          <>
            A curriculum that
            <br />
            <span className="text-[var(--sun-700)]">grows with your child</span>.
          </>
        }
        intro={
          <p>
            From the wonder of the early years to the rigour of the board grades, your child moves
            through a CBSE curriculum that grows with them without losing its warmth.
          </p>
        }
        image={heroImage}
        imageAlt="Two Wellsprings students building a small circuit beside a laptop"
        imageCaption="A circuit, mid-afternoon."
        cta={{ label: "Schedule a campus visit", href: "/admissions#enquire" }}
        secondaryCta={{ label: "Talk to admissions", href: "/contact" }}
      />

      <MottoStrip tier={1} />

      <MoreToExplore
        cards={[
          {
            title: "Why Wellsprings",
            body: "The seven things we work on through the year, and what you can look for when you visit.",
            href: "/why-wellsprings",
            label: "What we focus on",
            image: xAbout1,
            imageAlt: "A Wellsprings student raising his hand in class",
          },
          {
            title: "A day at school",
            body: "Clubs, sport, music, houses and the ordinary rhythm of a school day at Wellsprings.",
            href: "/life",
            label: "Life at Wellsprings",
            image: xLife,
            imageAlt: "Three Wellsprings students talking together in a corridor",
          },
          {
            title: "Joining Wellsprings",
            body: "How admissions work, what we need from you, and how to book a visit to the campus.",
            href: "/admissions",
            label: "Admissions",
            image: xAdm,
            imageAlt: "A Wellsprings student reading in the library",
          },
        ]}
      />
    </div>
  );
}
