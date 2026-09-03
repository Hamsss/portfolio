# Portfolio project notes

Last updated: 2026-09-03

## Purpose

Personal research portfolio for **Seunghyun Ham**. The site is a static React + Vite site and is published through **GitHub Pages**, not ChatGPT Sites.

## Public links

- Live site: https://hamsss.github.io/portfolio/
- Repository: https://github.com/Hamsss/portfolio
- GitHub Pages workflow: `.github/workflows/deploy-pages.yml`

## Source of truth

- Page content: `src/main.tsx`
- Visual design: `src/style.css`
- CV/resume reference files are in the parent project folder:
  - `CV_SeungHyun Ham.doc`
  - `SeungHyun Ham_Resume.pdf`
  - `Personal History Statement_general.docx`

## Current content decisions

- Do not display GPA.
- Contact email: `sh9109@nyu.edu`
- Education includes incoming M.S. in Data Science at NYU (2026–2028 expected), M.S. AI at Korea Aerospace University, and B.S. Software & Computer Engineering at Korea Aerospace University.
- Primary research interests: graph neural networks, GraphRAG, knowledge graphs, data embedding, and model design for structured data.
- Research-direction copy is intentionally compact and presented as a card:

  > Data relationships → practical models.

  The supporting sentence says that the goal is to uncover relationships that shape data and select or design the appropriate practical model, including language, graph, and vision models.

## Design decisions

- Calm, academic personal-site direction inspired by the general scale and narrative flow of garysheng.com.
- Palette: off-white paper, navy ink, and restrained periwinkle accent; avoid dark/strong green.
- Fonts: Google Fonts `Noto Sans KR` and `Noto Serif KR` for Korean/English readability and to prevent broken glyphs.
- Typography was recently rebalanced: small text is raised to readable sizes (mostly 12–14px); body copy is generally 14px; display titles stay larger for hierarchy.
- The profile direction uses `.direction-card` in `src/style.css`.

## Development and deployment

From this `site` directory:

```bash
npm run build
```

The GitHub Actions workflow deploys commits on `main` to GitHub Pages. If changing files locally, commit and push to `Hamsss/portfolio` (or update through the connected GitHub integration if local GitHub authentication is unavailable).

## Latest completed change

- Commit message: `Rebalance portfolio typography`
- Updated `src/main.tsx` and `src/style.css`
- Local production build passed successfully.

