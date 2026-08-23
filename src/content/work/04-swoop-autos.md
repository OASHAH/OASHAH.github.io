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
Someone photographs a broken part, sends it to a WhatsApp number, and expects a price. Swoop runs everything in between: identify the vehicle, identify the part, route to suppliers who carry it, collect what comes back, quote. It is in daily production use by operators in the Dubai car-parts trade, and it took one operator from roughly ten inquiries a day to over a hundred.

Intake is multimodal and multilingual — voice notes in Pashto, Urdu, Arabic and English, parts as photographs and video, vehicle identity resolved through OCR, function calling and NHTSA vPIC rather than guessed. The pipeline is deliberately bounded: SEE, EXTRACT, CHECK, DECIDE, BUILD. Uncertain reads escalate, every automated stage stays manually executable, and outbound sending is gated. Around nine inquiries in ten complete without a handoff, and tiered model routing cut inference cost per inquiry by 82%.
