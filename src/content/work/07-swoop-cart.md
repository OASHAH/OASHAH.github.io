---
number: "07"
index: "Swoop Cart"
title: "Earlier internet software"
name: "Swoop Cart Technologies"
period: "2020—2021"
location: "remote"
tags: ["Node.js", "React", "Docker", "streaming ingestion", "real-time features"]
plate: "swoopcart"
caption: "Deployment image, before and after multi-stage builds"
plateWidth: "column"
---

The first marketplace. Booking, accounts, listings, chat, notifications and a live feed, built across both the customer and vendor sides while the product grew toward ten thousand daily active users.

Two constraints shaped the work more than any feature did. Listing images arrived from Google Drive and TSV exports at around 5MB each; a streaming pipeline compressed them to under 100KB and ingested thousands of listings without anyone handling them. And the whole thing deployed to a VPS small enough that a 2GB Docker image failed on memory. Multi-stage builds took it to 170MB. The deployments stopped failing.
