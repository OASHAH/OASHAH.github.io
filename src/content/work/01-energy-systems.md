---
number: "01"
index: "Energy systems"
title: "Energy systems for the German market"
name: "SIV.AG"
provenance: "Harris Operating Group · Constellation Software · via Contour Software"
period: "2025—"
location: "Germany"
tags: ["TypeScript", "Kafka", "PostgreSQL", "OpenSearch", "KrakenD", "Keycloak", "multi-tenancy"]
figures:
  - value: "7,000,000+"
    label: "address records consolidated behind one API surface"
  - value: "150+"
    label: "tenants running the platform in production"
  - value: "6"
    label: "cube applications sharing one case-management library"
  - value: "0"
    label: "minutes of downtime across the legacy migration"
note:
  label: "Architecture note: one governed API surface"
  body: |
    Clients do not address services. They address the gateway, which owns the routes, composes the JSON:API document from whichever services are involved, and applies the tenant's identity before anything downstream sees the request.

    Retrieval and record-keeping are deliberately separate concerns. PostgreSQL holds the addresses; OpenSearch holds the shape that search needs; Kafka keeps the second consistent with the first and carried the legacy estate across during the migration.

    Schema changes follow expand-and-contract: add the new shape, write both, move readers, then remove the old one — each step reversible, and each release gated per tenant behind a flag. This is what allows millions of records to move underneath a system that is still answering.
plate: "siv"
caption: "Address Space: one governed surface over many tenants"
plateWidth: "column"
---

German utilities settle their business against addresses, meters and market locations, and every one of those records has to agree across a hundred and fifty separate tenant deployments. Address Space is the platform that holds that agreement. Seven million address records sit behind a single governed API surface, with an OpenSearch layer for retrieval and a KrakenD gateway that both serves the routes and composes the JSON:API document, so no client has to know which service answered.

The second system, Feed-in, covers the workflows that put electricity back into the grid: grid registration, solar onboarding, metering and market-location handling. It shipped as an MVP and now runs in production across the same tenant estate. Much of the work was not new construction. Millions of legacy records had to move while the old system kept serving, which meant Kafka-based synchronisation, expand-and-contract schema evolution, and feature flags scoped per tenant so that a release could be withdrawn before anyone had cause to notice it.

Six cube applications were each carrying their own copy of the same workflow logic. That became one case-management library, alongside the shared Keycloak, microfrontend and design-system integration patterns those teams now build against. The rest is unglamorous and load-bearing: a full test pyramid under trunk-based development, CI quality gates, architecture decisions argued as ADRs in design review before delivery, and the CLI tooling and documentation that gets a new developer to a running system.
