# Blush Command System

**Soft surfaces. Sharp workflows. Human-controlled AI.**

Blush Command System is a blush-first design system for AI coding workspaces, product landing pages, and slide decks. It combines warm pink surfaces with precise developer workflows: agent control, command execution, diff review, and editor-focused productivity.

## Core Principles

1. **Blush is the environment, not the accent.**  
   Pink creates the atmosphere; hot pink is reserved for action and state.
2. **Keep the workflow sharp.**  
   Soft surfaces should never blur the user’s next step.
3. **The user controls the agent.**  
   AI can plan and execute, but approval stays with the human.
4. **Technical information stays precise.**  
   Files, diffs, checks, counts, and status values must stay readable.
5. **Glow means state.**  
   Glow is used for active, running, selected, and success states—not decoration.

## What’s Included

- Design tokens for color, type, radius, shadow, spacing, and motion
- React + Tailwind primitive components
- Product components for AI coding workflows
- Core patterns: Agent Panel, Command Palette, Diff Review, Editor Shell, Journey Demo
- Example pages for landing, product UI, workflow, and slide preview
- Documentation for usage, accessibility, and QA

## Quick Start

```bash
pnpm install
pnpm dev
```

## Repository Structure

```txt
docs/       Design system documentation
tokens/     Source design tokens
src/        React components, patterns, examples, styles
public/     Static assets and placeholders
```

## Core Patterns

| Pattern | Role |
|---|---|
| Agent Panel | The cockpit where users steer AI work |
| Command Palette | The launcher for actions, files, checks, and agent workflows |
| Diff / Review | The trust layer where AI work becomes human-approved work |
| Editor Shell | The workbench where code, context, and agent actions meet |
| Journey Demo | Prompt → Plan → Edit → Review → Merge |

## v1 Scope

This v1 focuses on a polished, reusable system foundation. It intentionally does not include a full code editor, Storybook, npm publishing, dark mode, or a complete mobile coding UI.

## Typography

Blush Command System v1 follows the canvas artifact font behavior: UI text uses `ui-sans-serif, system-ui, sans-serif`; code, diff, and terminal surfaces use `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`. No font files are bundled.
