# Eluru Sai Venkat Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a working Astro portfolio and mathematical ML blog for Eluru Sai Venkat.

**Architecture:** Astro statically renders shared layouts and MDX content. A tiny inline theme initializer follows the visitor's system theme, persists manual overrides, and avoids a flash of the wrong theme.

**Tech Stack:** Astro, MDX, remark-math, rehype-katex, CSS, Node standard-library tests

**Spec:** `docs/superpowers/specs/2026-08-13-personal-website-design.md`

## Global Constraints

- Internal navigation stays in the current browser tab.
- Site chrome uses only black, white, and gray.
- Initial theme follows `prefers-color-scheme`; manual choice persists.
- No email, newsletter, contact form, or philosophy line.
- No commit is created unless the user requests one.

---

### Task 1: Static Site Contract

**Files:**
- Create: `package.json`
- Create: `tests/site.test.mjs`

**Interfaces:**
- Produces: `npm test` contract for generated routes, navigation, theme controls, and required homepage copy

- [ ] Write Node tests that expect the built pages and required content.
- [ ] Run `npm test` and verify failure because the site has not been built.

### Task 2: Astro Foundation

**Files:**
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/styles/global.css`
- Create: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Produces: `BaseLayout` accepting `title` and `description`
- Produces: CSS variables for dark and light themes

- [ ] Add Astro, MDX, and math-rendering dependencies.
- [ ] Configure static output and MDX math plugins.
- [ ] Implement the shared header, same-tab links, social links, theme initializer, and theme toggle.
- [ ] Implement responsive black/white visual tokens and accessible focus styles.

### Task 3: Portfolio Pages

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/about.astro`
- Create: `src/pages/academics.astro`
- Create: `src/pages/publications.astro`
- Create: `src/pages/projects.astro`

**Interfaces:**
- Consumes: `BaseLayout`
- Produces: five static portfolio routes

- [ ] Build the homepage identity card, timeline, research interests, and latest sections.
- [ ] Add concise About and Academics pages from approved copy.
- [ ] Add honest publication and project empty states without invented entries.

### Task 4: Mathematical Blog

**Files:**
- Create: `src/pages/blog/index.astro`
- Create: `src/pages/blog/attention-is-all-you-need.mdx`

**Interfaces:**
- Consumes: `BaseLayout` and MDX math rendering
- Produces: blog index and first draft route

- [ ] Add a blog index with title, thesis, date, tags, and reading status.
- [ ] Add the first Attention-series draft shell with the approved continuous narrative and primary references.
- [ ] Verify KaTeX CSS and equations render in the production build.

### Task 5: Verification

**Files:**
- Verify: `dist/`
- Verify: `tests/site.test.mjs`

**Interfaces:**
- Consumes: complete static site
- Produces: passing build and navigation checks

- [ ] Run `npm run build`.
- [ ] Run `npm test` and verify all tests pass.
- [ ] Inspect the generated homepage and article in a local browser at desktop and narrow widths.
- [ ] Fix only defects discovered by these checks, then rerun both commands.

