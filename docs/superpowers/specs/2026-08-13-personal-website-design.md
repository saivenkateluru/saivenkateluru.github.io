# Eluru Sai Venkat Personal Website Design

## Goal

Build a fast, academic personal website for Eluru Sai Venkat that combines Alex Zhang's research-publication structure with Aleksa Gordic's personal visual identity and theme support.

## Information Architecture

The persistent header contains `Eluru Sai Venkat`, `About`, `Academics`, `Blog`, `Publications`, and `Projects`, followed by X, LinkedIn, GitHub, and a theme toggle. Internal links use the current browser tab.

Routes:

- `/` — terminal-inspired identity card, timeline, research interests, and latest work
- `/about` — concise biography and research direction
- `/academics` — IISc and IIT Madras timeline
- `/blog` — mathematical ML writing index
- `/blog/attention-is-all-you-need` — first website-ready draft placeholder
- `/publications` — publication and writing record, with an honest empty state
- `/projects` — selected technical work, with an honest empty state

## Homepage Content

The hero is a terminal-inspired card whose primary identity is ASCII-style `ELURU SAI VENKAT`. It contains no slogan or philosophy line.

Current status:

- Second-year M.Tech student in Artificial Intelligence
- Representation Learning Lab, IISc Bengaluru
- August 2025 to present
- Advised by Dr. Prathosh A.P., linked to `https://prathosh.in/`

Previous experience:

- Samsung R&D Institute, Delhi — July 2023 to November 2024
- B.Tech in Electrical Engineering, IIT Madras — graduated 2023

Research interests:

- Self-Improving Agents
- Continual Learning
- Inference Optimization

Social profiles:

- X: `https://x.com/EluruSaiVenkat`
- LinkedIn: `https://www.linkedin.com/in/sai-venkat-eluru-737893191/`
- GitHub: `https://github.com/saivenkateluru`

No email address, contact form, newsletter, or philosophy line is included.

## Visual System

Use black, white, and gray only for the site chrome. The visitor's system preference selects the initial theme through `prefers-color-scheme`; a manual choice persists in `localStorage`.

- Dark: near-black background, white text, gray borders and surfaces
- Light: off-white background, black text, light-gray borders and surfaces
- Monospace: identity card, metadata, labels, and code
- Sans serif: long-form article prose for comfortable reading
- Article width: approximately 800px
- Figures: clear white-background research diagrams with restrained technical color where needed

## Blog Contract

Posts use MDX and KaTeX. Each mathematical post follows:

`motivation -> notation -> naive approach -> obstruction -> mathematical fix -> boxed takeaway`

Posts include a thesis-first introduction, numbered figures with captions, assumptions, a quick summary, and named primary-source references at the end. The first Attention article may begin as a structured draft and be refined before publication.

## Technical Design

- Astro static site
- MDX content pages
- KaTeX-compatible math rendering
- Shared responsive layout and theme script
- Static deployment compatible with Cloudflare Pages
- Build and Node standard-library tests as the validation gate

## Accessibility and Navigation

- Semantic landmarks and visible focus states
- Theme toggle has an accessible label
- Sufficient contrast in both themes
- Internal links never use `target="_blank"`
- Narrow screens replace oversized ASCII art with a readable text fallback
- Reduced-motion preferences disable decorative transitions
