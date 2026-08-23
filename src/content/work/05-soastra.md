---
number: "05"
index: "Soastra"
title: "Orchestration for coding agents"
name: "Soastra"
provenance: "independent · research and tooling"
period: "2026—"
location: "R&D"
tags: ["Python", "multi-agent orchestration", "LLM routing", "dependency graphs", "agent isolation", "deterministic verification"]
plate: "soastra"
caption: "Role separation: judgment at the edges, bounded work in the middle"
plateWidth: "column"
---
A multi-agent orchestration platform in Python. Frontier models are good at judgment — planning a change, reviewing one — and wasteful at bounded implementation, so Soastra splits the roles: Claude Code and Codex plan and review, and the implementation work is routed to cheaper customizable workers across Hermes, OpenRouter and DeepSeek.

Roles, personas, skills and providers are registries. Work is described as a dependency graph and executed in waves, each unit isolated in its own worktree behind deterministic verification and verified retry loops. The first substantial run delivered nine Swoop Autos features in parallel, at roughly the cost of one.
