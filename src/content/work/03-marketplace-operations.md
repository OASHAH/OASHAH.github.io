---
number: "03"
index: "Marketplace operations"
title: "The software behind automotive operations"
name: "Dubizzle Group"
provenance: "EMPG · dubizzle · OLX · Lamudi · Zameen"
period: "2021—2023"
location: "Lahore · UAE"
tags: ["Angular", "TypeScript", "multi-tenancy", "CRM", "auctions", "access control"]
figures:
  - value: "350+"
    label: "internal users across five tenants"
  - value: "1,000+"
    label: "vehicle sales a month running through the workflows"
  - value: "8h → 30m"
    label: "daily warehouse attendance processing, after QR check-in"
plate: "dubizzle"
caption: "One operations platform, four marketplaces"
plateWidth: "column"
---

Dubizzle Group operates several of the largest classifieds marketplaces in the Middle East and South Asia. Behind the consumer-facing listings there is an operations business — cars are inspected, auctioned, assigned to agents, scheduled and sold — and that business ran on a shared platform serving dubizzle, OLX, Lamudi and Zameen from one multi-tenant codebase.

I built and led delivery on the CRM, auction, inspection, reporting, dashboard and access-control workflows. At its size the platform carried 350+ internal users across five tenants, including the field-sales and inspection workforce, and the workflows underneath supported more than a thousand vehicle sales a month. Dealer subscriptions on it averaged AED 50–60K per client, with enterprise accounts above that.

Two changes are worth recording precisely because they are mundane. Warehouse attendance was a full workday of manual processing; QR-based check-in and check-out took it to about thirty minutes. Field-sales allocation was done by hand; ROTA scheduling, flexible lead assignment and inspection workflows replaced it. Neither is interesting technology. Both are why the rest of the platform was trusted with anything.
