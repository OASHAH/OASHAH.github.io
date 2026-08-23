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
    The pipeline has five stages and each one is allowed a different class of evidence. SEE reads what arrived — photographs, video, voice notes in Pashto, Urdu, Arabic or English. EXTRACT turns that into fields. CHECK tests those fields against sources that can be wrong in known ways: OCR on the plate or chassis, function calls, NHTSA vPIC lookups. DECIDE applies deterministic business rules to select suppliers and price. BUILD assembles the outbound message.

    Confidence does not accumulate silently across stages. An uncertain image read escalates to a stronger model or to a person rather than passing a guess forward, and every retry is bounded rather than hopeful.

    Two properties matter more than the model choices. Every automated stage remains manually executable, so an operator can take any single step by hand without leaving the system. And outbound sending is gated: nothing reaches a customer or supplier on a model's say-so alone.
---
An AI-native car-parts sourcing operation, in daily production use in Dubai. Customers send photographs, video and voice notes to a WhatsApp number; the system transcribes and reads them, resolves the vehicle through OCR and function calling, routes the request to suppliers who carry the part, collects what comes back and builds the quotation.

Python throughout, with multimodal and multilingual intake, structured outputs, tiered model routing that escalates to frontier models only when a read is uncertain, deterministic guardrails and bounded retries. The pipeline is intentionally bounded — SEE, EXTRACT, CHECK, DECIDE, BUILD — every automated stage stays manually executable, and outbound sending is gated behind a human.
