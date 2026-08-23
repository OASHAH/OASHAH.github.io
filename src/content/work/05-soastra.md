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

Frontier coding agents are good at the parts of engineering that need judgment — planning a change, reviewing one — and wasteful at the part that does not, which is writing a bounded implementation against a specification that already exists. Soastra separates those roles. Planning and review are assigned to Claude Code and Codex; bounded implementation is routed to customizable, lower-cost workers on Hermes, OpenRouter and DeepSeek Harness.

Most of the platform is registries and constraints rather than prompting: roles, personas, skills, providers, billing and isolation. Work is described as a dependency graph and executed in waves, each unit in its own worktree, with verified retry loops and deterministic completion checks deciding what counts as done. Delegation is bounded on purpose — a worker is given a specification and a boundary, not a codebase and an intention.

The first substantial test delivered nine Swoop Autos changes through parallel worktrees and dependency-aware execution. A frontier orchestrator over lower-cost bounded workers brought all nine in at roughly the cost of one, where a single feature had previously exhausted a subscription.
