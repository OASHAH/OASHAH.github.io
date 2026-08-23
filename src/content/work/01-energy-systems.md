---
number: "01"
index: "Energy systems"
title: "Rebuilding a forty-year-old system for the German energy market"
name: "SIV.AG"
provenance: "Harris Operating Group · Constellation Software"
period: "2025—"
location: "Germany"
tags: ["TypeScript", "Kafka", "PostgreSQL", "OpenSearch", "domain-driven design", "event-driven architecture"]
brands:
  - { src: "/work/logos/siv.png", name: "SIV.AG", scale: 1.5 }
image: "/work/siv-site.webp"
imageAlt: "The SIV.AG website, showing its software suite for the German energy and water industry"
caption: "SIV.AG — software for the German energy and water industry"
plateWidth: "full"
note:
  label: "Architecture note: one governed surface"
  body: |
    A KrakenD gateway fronts the services. It owns routing, composes the JSON:API document and resolves tenant identity before any request reaches a downstream service.

    PostgreSQL holds the records and OpenSearch the read model, kept in sync over Kafka. The same topics carried the legacy data across during migration.

    Schema changes follow expand-and-contract — add, dual-write, migrate readers, drop — with per-tenant feature flags gating each release.
---

SIV.AG has built software for German utilities for forty years. I work on the phased migration of that legacy monolith to event-driven microservices, with the original still in production.

I delivered two services greenfield to production: a master-data platform consolidating millions of address records across tenants, and the Feed-in MVP for grid registration, solar onboarding and metering. Both required zero-downtime migration and domain modelling from undocumented legacy rules. I defined the architecture standards through ADRs and introduced AI-assisted development across the team.
