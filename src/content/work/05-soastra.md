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

A multi-agent orchestration platform in Python. Frontier models are good at planning and review but expensive for routine implementation, so Soastra separates the roles: Claude Code and Codex plan and review, while implementation is routed to cheaper configurable workers on Hermes, OpenRouter and DeepSeek.

Roles, personas, skills and providers are defined as registries. Work is modelled as a dependency graph and executed in waves, each task isolated in its own git worktree and checked against deterministic completion criteria before it is accepted. The first full run delivered nine Swoop Autos features in parallel for roughly the cost of one.
