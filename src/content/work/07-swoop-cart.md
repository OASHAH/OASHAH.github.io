---
number: "07"
index: "Swoop Cart"
title: "Earlier internet software"
name: "Swoop Cart Technologies"
period: "2020—2021"
location: "remote"
tags: ["Node.js", "React", "Docker", "streaming ingestion", "real-time features"]
---
The first marketplace: booking, accounts, listings, chat, notifications and a live feed across the customer and vendor sides, while the product grew toward ten thousand daily active users.

Two constraints shaped it more than any feature. Listing images arrived from Google Drive and TSV exports at around 5MB each; a streaming pipeline compressed them under 100KB and ingested thousands without anyone handling them. And the VPS was small enough that a 2GB Docker image failed on memory — multi-stage builds took it to 170MB, and the deployments stopped failing.
