---
name: write-ml-blogs-like-an-iiscian
description: Write and maintain rigorous, first-principles ML blogs together with their personal website. Use whenever starting an ML-blog project, drafting or revising a mathematical ML article, adding handwritten figures, integrating posts into a website, or reviewing this user's academic blog—even when the user does not explicitly say "use the skill."
---

# Write ML Blogs Like an IIScian

Produce mathematically serious ML writing that remains useful to students, then integrate it cleanly into the accompanying personal website.

## Project isolation comes first

For every genuinely new project, create a dedicated, descriptively named directory **before** downloading, cloning, installing, generating, or editing anything.

1. Confirm the intended project name and parent workspace.
2. If a remote repository exists, clone its main branch directly into the new directory. Do not populate the shared parent directory and move files later.
3. If no repository exists, create the directory first and initialize all project files inside it.
4. Set every command's working directory to that project directory.
5. Verify `pwd`, `git rev-parse --show-toplevel` when applicable, and the parent directory listing before substantial work.
6. Never move, clear, or modify unrelated sibling projects.
7. Keep project-local skills under `<project>/.agents/skills/`, never in a shared parent or home directory unless the user explicitly asks.

Do not create another nested directory when the current directory is already the established project root. This rule applies when **starting** a project, not when continuing one.

## Article standard

- Always write mathematics in LaTeX: use `$...$` for inline expressions and `$$...$$` for displayed equations. Do not substitute plain text, Unicode approximations, or images for mathematical notation.
- Start with the motivating problem, then follow **definition → obstruction → remedy → boxed result**.
- Derive every important mathematical claim; do not replace algebra with prose such as “by the chain rule.”
- Introduce notation before using it and distinguish full derivatives from individual computational paths.
- Anticipate two or three genuine student doubts and answer them near the relevant derivation.
- End with a compact summary for ML students.
- Respect the requested stopping point; do not add adjacent topics merely because they are popular.

When the project-local `learn-from-prathosh` skill is available, use its derivation structure and teaching checks. Do not infer source authorship from that teaching style.

## Figures and sources

- Prefer the author's tightly cropped GoodNotes figures for intuition, diagrams, and derivation flow.
- Render LaTeX with KaTeX so equations remain searchable, selectable, accessible, and responsive.
- Give every figure useful alt text and a precise caption.
- Caption original notes as `Author's handwritten notes.`
- Attribute external figures only to verified sources; if authorship is unknown, link the document without guessing an author.
- Prefer papers, official course notes, and authoritative textbooks. Place clearly named reference links at the end.

## Website integration

- Preserve the site's established visual system instead of redesigning unrelated pages.
- Keep internal navigation in the same tab.
- Support system-aware light and dark themes.
- Make prose, equations, and figures responsive from mobile through desktop.
- Reuse existing Astro layouts and CSS before adding JavaScript, dependencies, or abstractions.

## Completion check

Before claiming completion:

1. Build the site and run its existing tests.
2. Check desktop and mobile overflow when visual content changed.
3. Confirm source names, captions, links, and alt text.
4. Confirm Git operations ran from the dedicated project root.
5. Deploy only through the project's established workflow and verify the public result when deployment is part of the task.
