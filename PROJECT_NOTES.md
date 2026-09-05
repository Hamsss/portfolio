# Portfolio — continuation brief

Last updated: **2026-09-05**

This document is the durable handoff for future agents. Read it before making changes. It records the decisions the user has already made, the working deployment path, and the safest way to continue.

## 1. Project at a glance

This is **Seunghyun Ham's research portfolio**, built as a static React + Vite single-page site.

- Live site: https://hamsss.github.io/portfolio/
- GitHub repository: https://github.com/Hamsss/portfolio
- Published with **GitHub Pages / GitHub Actions**.
- The user explicitly prefers GitHub Pages over ChatGPT Sites. Do **not** migrate the project to another host or add `.openai/hosting.json` unless the user specifically requests it.

The current GitHub Pages workflow is `.github/workflows/deploy-pages.yml`. A push to `main` builds with Vite and deploys the `dist` folder.

## 2. Workspace and source of truth

Work from this directory:

```text
/Users/apple/Desktop/portfolio/site
```

Important files:

| File | Purpose |
| --- | --- |
| `src/main.tsx` | All visible page content, projects, papers, links, and section structure. |
| `src/style.css` | Entire visual system, responsive rules, typography, and accessibility styling. |
| `index.html` | Vite entry point and site metadata. |
| `public/og.png` | Existing social-share preview image; preserve unless a branding refresh is requested. |
| `.github/workflows/deploy-pages.yml` | GitHub Pages build and deployment workflow. |
| `package.json` | `npm run build`, `npm run dev`, `npm run lint` scripts. |

Reference documents live in the parent folder:

- `CV_SeungHyun Ham.doc`
- `SeungHyun Ham_Resume.pdf`
- `Personal History Statement_general.docx`
- `Cover_Letter_SeungHyun_Ham_Amex.docx`

Treat the latest CV/resume as the source for factual biography changes. Never invent credentials, dates, publications, or project claims.

## 3. Non-negotiable content decisions

- **Never show GPA** unless the user explicitly changes this decision.
- Contact email: `sh9109@nyu.edu`
- Education shown:
  - Incoming M.S. Data Science, New York University, 2026–2028 expected
  - M.S. Artificial Intelligence, Korea Aerospace University, 2024–2026
  - B.S. Software & Computer Engineering, Korea Aerospace University, 2022–2024
- Research focus: graph neural networks, GraphRAG, knowledge graphs, data embedding, and model design for structured data.
- The user's research direction is **not limited to language models**. The intended message is: understand the fundamental relationships within data, then select or design the most efficient and practical model for the problem.

Current compact wording:

- Hero: “I trace the relationships in data, then turn them into useful, efficient models.”
- Profile card: “Data relationships → applied models.”

Do not expand this back into a long generic AI-autonomy statement. The user previously rejected that direction.

## 4. Current content links

- Personal/development work: https://github.com/CELEBIT
- Won HANA: https://github.com/wonHANANA
- Graduate lab: https://github.com/KAU-QuantumAILab
- TRAIL code: https://github.com/Hamsss/TRAIL
- TRAIL paper: https://www.doi.org/10.1007/s10994-026-07015-z
- TESLA preprint: https://arxiv.org/pdf/2608.11970
- University chatbot: https://github.com/orgs/HangaPeople/repositories

## 5. Design system and user preferences

The desired feel is **calm, serious, academic, and contemporary** — closer to a considered research portfolio than a flashy product landing page. The user referenced the general scale and narrative flow of `garysheng.com`.

- Palette: warm off-white paper, navy ink, restrained periwinkle accent.
- Avoid dark or strongly saturated green.
- Use `Noto Sans KR` and `Noto Serif KR` from Google Fonts. They were chosen to render Korean and English clearly and avoid broken glyphs.
- Keep body and utility text genuinely readable. The current target is mostly 12–14px for supporting text and 14px for body copy; avoid reintroducing 9–10px text except where there is a compelling reason.
- Preserve the editorial hierarchy: large serif display text, readable sans-serif body text, modest uppercase metadata.
- Prefer compact but breathable spacing. Do not make the page excessively empty.
- The research direction is intentionally a visually distinct `.direction-card`, not a wall of text.

## 6. Responsive and accessibility work already completed

The latest design pass added the following. Preserve these unless a later request supersedes them:

- Reduced unnecessary hero whitespace and removed duplicated long copy.
- Added a 2-column project grid at tablet widths (up to 1080px) before the 1-column mobile layout.
- Rebalanced mobile spacing, paper headings, project card density, and hero text flow.
- Added keyboard-visible focus outlines.
- Added a “Skip to research” link for keyboard users.
- Added a `prefers-reduced-motion` rule.
- Added subtle hover treatment for research entries on pointer devices only.

The browser surface was unavailable during the last design audit, so future visual changes should ideally be inspected in a real browser at desktop, tablet, and mobile widths when a browser is available.

## 7. Development, validation, and deployment

From the `site` directory:

```bash
npm run build
```

The last production build completed successfully after the latest design refinement.

Deployment is automatic after a push to `main`. Confirm the `Deploy to GitHub Pages` workflow succeeds before reporting a change as live. The workflow sequence is:

1. `npm install`
2. `npm run build` with the Vite base path set to `/portfolio/`
3. Upload `dist`
4. Deploy with `actions/deploy-pages@v4`

### Git notes for this environment

- The local repository is in `site/.git`.
- Local direct `git push` may not have GitHub authentication in this environment.
- When available, the connected GitHub integration can update files in `Hamsss/portfolio` and trigger the Pages workflow.
- If GitHub-integration writes produce remote commits separate from local commits, do **not** use destructive commands (`git reset --hard`, forced checkout, etc.) to force histories together. Preserve local work and inspect status first.

Before changing anything, run:

```bash
git status --short
```

If the tree is dirty, treat existing changes as the user's unless they clearly belong to the requested task.

## 8. CSS maintenance note

`src/style.css` was originally compacted into long rules and has later refinement blocks appended at the end. The final rules intentionally override earlier values in the cascade.

- For a small visual tweak, update the relevant final refinement block to avoid accidentally cancelling later responsive behavior.
- For a substantial redesign, first consolidate the CSS carefully into a cleaner structure, then test desktop/tablet/mobile; do not blindly delete the override blocks.

## 9. Recent completed work

| Local commit | What changed |
| --- | --- |
| `eb0fccc` — `Refine portfolio readability and responsiveness` | Shortened repeated research-direction copy; improved desktop whitespace; tablet 2-column projects; mobile rhythm; keyboard focus, skip link, and reduced-motion support. GitHub Pages deployment succeeded. |
| `b55c9f1` — `Document portfolio project context` | Added the first project handoff document. |
| `c828eb0` — `Rebalance portfolio typography` | Raised small text sizes and introduced the profile direction card. |
| `8e7611b` — `Clarify research direction` | Replaced the earlier generic autonomy framing with the user's relationship/model-design focus. |
| `951d577` — `Adopt readable Noto typography and indigo palette` | Introduced the current font pairing and navy/periwinkle visual direction. |

## 10. Recommended restart checklist

1. Read this document.
2. Inspect `git status --short` and the latest commits.
3. Read `src/main.tsx` and the relevant portion of `src/style.css` before editing.
4. Keep the user’s content and design decisions above intact unless they request a change.
5. Make focused edits with `apply_patch`.
6. Run `npm run build`.
7. Commit and deploy to GitHub Pages; verify the Pages workflow completes successfully.
8. Update this document whenever a material decision, design direction, deployment method, or biographical source changes.

