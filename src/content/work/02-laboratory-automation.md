---
number: "02"
index: "Laboratory automation"
title: "Software that operates laboratory instruments"
name: "FORMULATRIX"
period: "2023—2025"
location: "Lahore"
tags: ["React", "Redux", "TypeScript", "MQTT", "PostgreSQL", "embedded integration", "OEE"]
plate: "formulatrix"
caption: "Instrument data path: camera stream, broker, warehouse"
plateWidth: "full"
---

Formulatrix builds instruments that handle liquids and samples so that scientists do not have to stand over them. I wrote control software for two of them — the aµtoPulse v4 and the Reagent Exchanger — in React, Redux and TypeScript. An instrument bought at roughly $120K is bought for walk-away operation, which makes the interface's job narrow and unforgiving: state the machine's true condition, make the next action obvious, and never imply a run is proceeding when it is not.

Automated hardware generates a great deal of data and then keeps it. An MQTT broker and an ingestion pipeline into PostgreSQL released it: shift and caddy-tip OEE calculations, and dashboards a laboratory manager could read without a technician standing beside them. That analytics work later sold as a one-year subscription alongside the instruments, which is a more honest measure of its usefulness than any screenshot of it would be.

Inside STAMPEDE, a camera stream running at 24 fps was integrated with the embedded controls, so that operators could watch a run rather than infer it from a status line. Across the applications, shared React controls and patterns were standardised — the ordinary consequence being that later workflows took less time to build than earlier ones.
