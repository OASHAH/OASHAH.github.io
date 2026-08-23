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
    Clients call a single gateway rather than individual services. It owns the routes, composes the response from whichever services are involved, and applies the tenant's identity before any request reaches them.

    Records and search are stored separately and kept in sync by an event stream. The same stream carried data across from the legacy system during migration.

    Schema changes use expand-and-contract: add the new shape, write to both, move readers, then drop the old one. Every step is reversible, and every release is gated per tenant behind a feature flag.
---

SIV.AG has built software for German utilities for forty years. I work on replacing that legacy system with event-driven microservices, one domain at a time, while the original stays in production.

I have delivered two services from greenfield to production: one consolidating the address records the business bills against, the other handling grid registration, solar onboarding and metering. Both required migrating millions of records off the legacy system without downtime, and turning decades of undocumented business rules into a working domain model. I also set the architecture standards the other teams build on, and introduced AI-assisted development across planning, documentation and implementation.
