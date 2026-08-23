---
number: "06"
index: "SoasKit"
title: "I eventually turned my second brain into software"
name: "SoasKit"
provenance: "independent · private"
period: "ongoing"
location: "private"
tags: ["FastAPI", "PostgreSQL", "SvelteKit", "Android", "MCP", "Cloudflare Access"]
plate: "soaskit"
caption: "Personal sources, one append-only record, scoped tools"
plateWidth: "column"
---

It started as a collection of scripts. This happens frequently. Tasks, then finances, then capture, notes, journaling, books and career records — each began as its own small thing, and at some point they stopped being separate. SoasKit is what they became: one system on FastAPI and PostgreSQL, with SvelteKit and Android on top and owner-controlled Drive vaults for anything that should not live in a database.

The ingestion side runs locally. WhatsApp and Meta exports, Gmail, ChatGPT history — all normalised into append-only events, searchable memory and a generated chronology. Archival is not the point. The point is that when I ask an agent something about my own life, it can answer from a source of truth rather than from whatever happens to be in the conversation window.

So the system exposes MCP servers and tools, and agents query and act through the same interfaces I do. Keeping that private and dependable is most of the remaining engineering: one PostgreSQL source of truth, evidence-linked vaults, task-routed models, scoped tools, confirmation policies, audit records, and Cloudflare Access with cloudflared in front of all of it.
