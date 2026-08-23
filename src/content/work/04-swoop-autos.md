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
image: "/work/swoop-console.webp"
imageAlt: "The Swoop inquiry console: a live queue of car-part inquiries with their state, part counts, confidence and next action"
caption: "Inquiry operations console, August 2026. Customer names, numbers and VINs redacted."
plateWidth: "full"
note:
  label: "Architecture note: a deliberately bounded pipeline"
  body: |
    Each stage takes a different class of evidence. SEE handles inbound media: photos, video, and voice notes in Pashto, Urdu, Arabic or English. EXTRACT produces structured fields. CHECK validates them against OCR on the plate or chassis, function calls and NHTSA vPIC lookups. DECIDE applies business rules for supplier selection and pricing. BUILD assembles the outbound message.

    Confidence is not carried between stages. A low-confidence read escalates to a higher-tier model or an operator rather than propagating, and retries are capped.

    Two constraints outrank the model choices. Every stage is independently executable, so an operator can run any single step manually. And sending is gated: no outbound message leaves on model output alone.
---

A car-parts sourcing platform in daily production use in Dubai, built on the WhatsApp Cloud API. Customers send photos, video and voice notes; the system transcribes them, resolves vehicle identity through OCR, function calling and NHTSA vPIC lookups, routes RFQs to suppliers and generates quotations.

Python throughout: multimodal and multilingual intake, structured outputs, tiered model routing with escalation on low confidence, and deterministic business rules between stages. The pipeline runs five stages — SEE, EXTRACT, CHECK, DECIDE, BUILD — each independently executable, with human approval gating every outbound message.
