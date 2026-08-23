---
number: "05"
index: "Soastra"
title: "Orchestration for coding agents"
name: "Soastra"
provenance: "independent · research and tooling"
period: "2026—"
location: "R&D"
tags: ["Python", "multi-agent orchestration", "dependency graphs", "git worktrees", "provider routing", "deterministic verification"]
plate: "soastra"
caption: "Role separation: judgment at the edges, bounded work in the middle"
plateWidth: "column"
---
Frontier coding agents are good at the part of engineering that needs judgment — planning a change, reviewing one — and wasteful at the part that does not. Soastra splits those roles: planning and review go to Claude Code and Codex, bounded implementation is routed to cheaper customizable workers on Hermes, OpenRouter and DeepSeek Harness.

Most of it is registries and constraints rather than prompting — roles, personas, skills, providers, billing, isolation. Work is a dependency graph executed in waves, each unit in its own worktree, with verified retry loops and deterministic completion checks. The first substantial test delivered nine Swoop Autos features through parallel worktrees at roughly the cost of one, where a single feature had previously exhausted a subscription.
