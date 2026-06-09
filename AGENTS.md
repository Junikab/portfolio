# AGENTS.md

## Project Overview
- This repo is a personal portfolio site for Jenny Deygin.
- It is a single-page React app built with Create React App and Tailwind CSS.
- The portfolio is published to GitHub Pages via the `homepage`, `predeploy`, and `deploy` scripts in `package.json`.

## Main Tech Stack
- React 18
- Tailwind CSS 3
- D3 for the draggable skills bubble canvas
- React Icons for social and UI icons

## Important Paths
- `src/App.js`: app entry component
- `src/components/layout/PortfolioPage.js`: top-level page composition
- `src/components/layout/`: page sections and layout components
- `src/components/SkillsBubbles.js`: canvas-based skills visualization
- `src/data/projectData.js`: projects content
- `src/data/skillData.js`: skill labels and bubble colors
- `src/assets/`: local images, PDF resume, and project artwork
- `public/index.html`: page metadata and font loading
- `PLAN.md`: living implementation checklist

## Local Commands
- `npm start`: run the development server
- `npm test -- --watchAll=false`: run the test suite once
- `npm run build`: create a production build
- `npm run deploy`: publish the build to GitHub Pages

## How To Add A New Project
1. Add the image to `src/assets/` if you have one.
2. Update `src/data/projectData.js`.
3. Prefer this project shape:
   - `id`
   - `title`
   - `description`
   - `image`
   - `link`
   - `tech`
   - `category`
   - `year`
   - `linkLabel`
4. If the screenshot is not ready yet, the UI supports a fallback image and link label.
5. Keep project descriptions short and concrete. One or two sentences is enough.

## Design Guardrails
- Keep the current one-page structure unless there is a strong reason to change it.
- Prefer polished typography, spacing, and consistent surfaces over adding more sections.
- Do not add generic “template” UI patterns unless they solve a real problem.
- Reuse shared card and button styles instead of creating one-off classes in each component.
- Keep the skills canvas playful, but make the rest of the page calm and readable around it.

## Code Guardrails
- Prefer small focused components over large JSX blocks.
- Keep static content in data files when it is reused or likely to grow.
- Preserve semantic HTML: headings, sections, lists, and footer markup should be valid.
- If you change layout or canvas behavior, verify both mobile and desktop structure.
- Update `PLAN.md` whenever scope changes or a major task is completed.

## Validation Rules
  - For text-only or content-only changes, do not run tests or build by default.
  - For style-only changes, run `npm run build` only if the change affects layout broadly.
  - For component logic, data shape, or interactive behavior changes, run relevant tests.
  - Run full validation before deploy or when requested.