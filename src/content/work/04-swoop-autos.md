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
    Each stage accepts a different class of evidence. SEE reads what arrived: photos, video, and voice notes in Pashto, Urdu, Arabic or English. EXTRACT turns that into fields. CHECK verifies those fields against OCR on the plate or chassis, function calls and NHTSA vPIC lookups. DECIDE applies business rules to select suppliers and price. BUILD assembles the outbound message.

    Confidence is not carried silently between stages. An uncertain image read escalates to a stronger model or to an operator instead of passing a guess forward, and retries are capped.

    Two constraints matter more than the model choices. Every automated stage can be run manually, so an operator can take any single step by hand without leaving the system. And outbound sending is gated: nothing reaches a customer or supplier on a model's output alone.
---

A car-parts sourcing platform in daily production use in Dubai. Customers send photos, video and voice notes to a WhatsApp number. The system transcribes and reads them, identifies the vehicle through OCR and function calling, routes the request to suppliers, collects their replies and produces a quotation.

Built in Python. Intake is multimodal and multilingual, extraction uses structured outputs, and model routing escalates to frontier models only when a read is uncertain. The pipeline runs five fixed stages — SEE, EXTRACT, CHECK, DECIDE, BUILD — with deterministic rules at each boundary. Every automated step can also be run by hand, and nothing reaches a customer or supplier without approval.
