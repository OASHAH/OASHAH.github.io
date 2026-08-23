---
number: "01"
index: "Energy systems"
title: "Energy systems for the German market"
name: "SIV.AG"
provenance: "Harris Operating Group · Constellation Software · via Contour Software"
period: "2025—"
location: "Germany"
tags: ["TypeScript", "Kafka", "PostgreSQL", "OpenSearch", "KrakenD", "Keycloak", "Nx", "Turborepo"]
brands:
  - { src: "/work/logos/siv.svg", name: "SIV.AG", scale: 1.5 }
figures:
  - value: "7,000,000+"
    label: "address records consolidated behind one API surface"
  - value: "150+"
    label: "tenants running the platform in production"
  - value: "6"
    label: "cube applications sharing one case-management library"
  - value: "0"
    label: "minutes of downtime across the legacy migration"
image: "/work/siv-site.webp"
imageAlt: "The SIV.AG website, showing its ERP software suite for the German energy and water industry"
caption: "SIV.AG — software for the German energy and water industry"
plateWidth: "full"
note:
  label: "Architecture note: one governed API surface"
  body: |
    Clients do not address services. They address the gateway, which owns the routes, composes the JSON:API document from whichever services are involved, and applies the tenant's identity before anything downstream sees the request.

    Retrieval and record-keeping are deliberately separate. PostgreSQL holds the addresses; OpenSearch holds the shape that search needs; Kafka keeps the second consistent with the first, and carried the legacy estate across during the migration.

    Schema changes follow expand-and-contract: add the new shape, write both, move readers, then remove the old one — each step reversible, each release gated per tenant behind a flag.
---

Energy software for the German market, inside Constellation Software's Harris group. I architected **Address Space**, the company-wide platform consolidating 7M+ address records across 150+ tenants, with its OpenSearch layer and a KrakenD gateway that serves the routes and composes the JSON:API document. I also architected and launched the **Feed-in** cube — grid registration, solar onboarding, metering and market-location workflows — now in production across the same tenant estate.

Millions of legacy records moved with zero downtime, on Kafka synchronisation, expand-and-contract schema evolution and tenant-scoped feature flags. Six cube applications now share one case-management library I built, alongside the Keycloak, microfrontend and design-system patterns those teams build against.
