---
number: "03"
index: "Marketplace operations"
title: "The software behind automotive operations"
name: "Dubizzle Group"
provenance: "EMPG · a $1.4B marketplace operator"
period: "2021—2023"
location: "Lahore · UAE"
tags: ["Angular", "TypeScript", "multi-tenancy", "CRM", "auctions", "inspections", "RBAC"]
brands:
  - { src: "/work/logos/dubizzle.png", name: "dubizzle", scale: 0.88 }
  - { src: "/work/logos/bayut.png", name: "Bayut" }
  - { src: "/work/logos/olx.png", name: "OLX", scale: 0.95 }
  - { src: "/work/logos/lamudi.png", name: "Lamudi", scale: 0.95 }
  - { src: "/work/logos/zameen.png", name: "Zameen.com", scale: 1.05 }
figures:
  - value: "350+"
    label: "internal users across five tenants"
  - value: "1,000+"
    label: "vehicle sales a month running through the workflows"
  - value: "AED 50–60K"
    label: "average dealer subscription, with enterprise accounts above it"
  - value: "8h → 30m"
    label: "daily warehouse attendance processing, after QR check-in"
---

Dubizzle Group runs some of the largest classifieds marketplaces in the Middle East and South Asia — **dubizzle**, **Bayut**, **OLX**, **Lamudi** and **Zameen**. Behind the listings sits an operations business: cars get inspected, auctioned, assigned, scheduled and sold. I built and led delivery on the CRM, auction, inspection, reporting, dashboard and access-control workflows that ran it, from one multi-tenant codebase serving all of them.

At its size the platform carried 350+ internal users across five tenants, including the field-sales and inspection workforce, supporting 1,000+ vehicle sales a month. QR-based check-in took warehouse attendance from a full workday to thirty minutes; ROTA scheduling and flexible lead assignment replaced manual field-sales allocation.
