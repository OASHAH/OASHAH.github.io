---
number: "05"
index: "Soastra"
title: "A toolkit for AI-assisted development"
name: "Soastra"
provenance: "independent · research and tooling"
period: "2026—"
location: "R&D"
tags: ["Python", "multi-agent orchestration", "model routing", "git worktrees", "SQLite", "MCP"]
plate: "soastra"
caption: "Billing decides the role: subscription agents lead and review, API workers do the bounded work"
plateWidth: "column"
---

Coding subscriptions are flat-fee; API tokens are metered, so billing decides the role. Planning and review stay on the subscription you already pay for — Claude Code or Codex — and bounded implementation goes to cheaper models over OpenRouter, chosen per task.

Each worker takes its own git worktree and merges onto a single integration branch. A check is a command that passes or fails, so nothing is done because a model said it was. Profiles bound the delegation tree by width, depth and total, and one engine runs three modes: conversation, a single-task retry loop, or a dependency graph.
