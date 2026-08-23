---
number: "02"
index: "Laboratory automation"
title: "Software that operates laboratory instruments"
name: "FORMULATRIX"
period: "2023—2025"
location: "Lahore"
tags: ["React", "Redux", "TypeScript", "MQTT", "PostgreSQL", "embedded integration", "OEE analytics"]
brands:
  - { src: "/work/logos/formulatrix.png", name: "Formulatrix", scale: 1.15 }
figures:
  - value: "~$120K"
    label: "list price of the instruments the software runs"
  - value: "24 fps"
    label: "live camera streaming integrated with embedded controls"
  - value: "1 year"
    label: "analytics subscription the OEE dashboards opened alongside instrument sales"
strip:
  - { src: "/work/products/upulse.webp", alt: "Formulatrix µPULSE automated buffer exchange instrument" }
  - { src: "/work/products/fast.webp", alt: "Formulatrix F.A.S.T. automated sample handling instrument" }
stripCaption: "Formulatrix instrument line. Control software shipped for aµtoPulse v4 and the Reagent Exchanger; camera streaming for STAMPEDE."
---

Formulatrix builds instruments that handle liquids and samples so scientists do not have to stand over them. I shipped the React, Redux and TypeScript control software for the **aµtoPulse v4** and **Reagent Exchanger** releases — instruments at roughly $120K each, bought for walk-away operation — and built real-time camera streaming at 24 fps inside **STAMPEDE**, integrated with the embedded hardware controls.

An MQTT broker and ingestion pipeline into PostgreSQL released the production data trapped inside the hardware. The shift and caddy-tip OEE calculations and dashboards built on it opened a one-year analytics subscription sold alongside the instruments.
