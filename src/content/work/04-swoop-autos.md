---
number: "04"
index: "Swoop Autos"
title: "A car-parts operation with models in the loop"
name: "Swoop Autos"
provenance: "independent · in daily production use"
period: "2026—"
location: "Dubai"
tags: ["WhatsApp Cloud API", "Python", "PostgreSQL", "multimodal intake", "structured outputs", "model routing", "human override"]
figures:
  - value: "10 → 100+"
    label: "inquiries handled per operator per day"
  - value: "~90%"
    label: "of inquiries completing without a human handoff"
  - value: "−82%"
    label: "inference cost per inquiry, after tiered model routing"
plate: "swoop"
caption: "Inquiry pipeline: bounded stages, escalation, gated send"
plateWidth: "full"
note:
  label: "Architecture note: a deliberately bounded pipeline"
  body: |
    The pipeline has five stages and each one is allowed a different class of evidence. SEE reads what arrived — photographs, video, voice notes in Pashto, Urdu, Arabic or English. EXTRACT turns that into fields. CHECK tests those fields against sources that can be wrong in known ways: OCR on the plate or chassis, function calls, NHTSA vPIC lookups. DECIDE applies deterministic business rules to select suppliers and price. BUILD assembles the outbound message.

    Confidence does not accumulate silently across stages. An uncertain image read escalates to a stronger model or to a person rather than passing a guess forward, and every retry is bounded rather than hopeful.

    Two properties matter more than the model choices. Every automated stage remains manually executable, so an operator can take any single step by hand without leaving the system. And outbound sending is gated: nothing reaches a customer or supplier on a model's say-so alone.
---

Someone photographs a broken part, sends it to a WhatsApp number, and expects a price. Between those two events sits the actual work: identify the vehicle, identify the part, find suppliers who carry it, ask them, collect what comes back, and quote. Swoop runs that loop. It is in daily production use by operators in the car-parts trade, and it has moved a single operator from roughly ten inquiries a day to over a hundred.

Intake is multimodal and multilingual because the trade is. Voice notes arrive in Pashto, Urdu, Arabic and English; parts arrive as photographs and video; vehicle identity is resolved through OCR, function calling and NHTSA vPIC lookups rather than inferred. The pipeline is deliberately bounded — SEE, EXTRACT, CHECK, DECIDE, BUILD — and the boundaries are the design. An uncertain read escalates instead of proceeding, every automated stage stays manually executable, and outbound sending is gated.

Operators report that roughly nine inquiries in ten complete without a handoff. The tenth is the reason the system is built this way, not a defect in it. Tiered model routing and selective escalation to premium models cut inference cost per inquiry by 82%. The business attracted an initial AED 60K credit on live traction, then a USD 200K working-capital line as volume scaled.
