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
    Clients do not address services. They address a gateway that owns the routes, composes the response from whichever services are involved, and applies the tenant's identity before anything downstream sees the request.

    Retrieval and record-keeping stay separate concerns, kept consistent by an event stream that also carried the legacy estate across during the migration.

    Schema changes follow expand-and-contract: add the new shape, write both, move readers, then remove the old one — every step reversible, every release gated per tenant.
---

SIV.AG has been building the software German utilities run on for four decades. The work is a migration: taking a system with that much history inside it and rebuilding it as event-driven services, domain by domain, without interrupting the utilities depending on it.

I have taken two of those services from greenfield to production — one consolidating the address records the business settles against, the other covering grid registration, solar onboarding and metering. Both meant moving millions of records out of the legacy estate while it continued to serve, and sifting forty years of accumulated domain knowledge into a model that could hold it honestly. Alongside delivery I set the standards the other teams build against, worked across those teams to land them, and drove an AI-first practice through planning, architecture and implementation.
