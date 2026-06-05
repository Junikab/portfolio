# Portfolio Improvement Plan

Last updated: 2026-06-04
Status: Layout experiment branch in progress

## Goal
Improve the portfolio in three practical ways:

1. Clean up the code so it is easier to understand and maintain.
2. Refine the design so the site feels more polished and intentional.
3. Add a recent project to the projects section without adding one-off code.

## Current Focus
This file is a living checklist. Update it whenever scope changes or a task is completed.

Current branch focus:
- Combine the intro, contact actions, and skills visualisation into one top block.
- Keep `Experience` as the second block.
- Move `About` below `Experience` and switch it to a text-left, photo-right layout on large screens.

## Phase 1: Documentation And Repo Guidance
- [x] Create `PLAN.md` as the working checklist for this repo.
- [x] Create `AGENTS.md` with repo structure, commands, and editing rules.
- [ ] Keep both files updated as future portfolio changes are made.

## Phase 2: Code Quality Cleanup

### Objective
Remove outdated scaffold code, fix weak structure, and make the codebase easier to change.

### Tasks
- [x] Replace the default Create React App test with a real smoke test.
- [x] Review `public/index.html` and remove outdated references.
- [x] Add the missing web app manifest so the HTML matches the repo.
- [x] Fix invalid or weak HTML structure in layout components.
- [x] Improve shared styling patterns so cards and buttons are more consistent.
- [x] Re-check dependencies and remove any confirmed-unused package entries after install/build validation.

### Notes
- The old `learn react` test was no longer relevant.
- `public/index.html` had a stale `/dist/styles.css` reference.
- Footer markup needed semantic cleanup.

## Phase 3: Design Refinement

### Objective
Keep the current section structure, but improve the site's hierarchy, rhythm, and visual consistency.

### Tasks
- [x] Refresh the page background, spacing, and section surfaces.
- [x] Improve typography hierarchy for headings, copy, and project metadata.
- [x] Refine the hero section while keeping the current portfolio identity.
- [x] Improve the projects grid and project card design.
- [x] Improve the footer layout and CTA area.
- [x] Make light copy edits for clarity and professionalism.
- [x] Keep the layout responsive on mobile and desktop.

### Design Direction
- Keep the existing sections.
- Do not do a full redesign or framework migration.
- Prefer clean, readable, intentional styling over flashy effects.

## Phase 4: Project Content

### Objective
Add one recent project in a way that remains easy to maintain.

### Tasks
- [x] Expand the project data shape so cards can support richer metadata.
- [x] Add the recent portfolio project to `src/data/projectData.js`.
- [x] Add safe fallbacks for project images and link labels.
- [x] Keep the projects UI reusable for future additions.
- [ ] Replace the temporary portfolio logo artwork with a stronger project screenshot if one becomes available.

### Project Fields
Each project can now support:
- `id`
- `title`
- `description`
- `image`
- `link`
- `tech`
- `category`
- `year`
- `linkLabel`

## Phase 5: Validation

### Functional Checks
- [x] Main sections still render.
- [x] Skills canvas still mounts with the updated layout code.
- [x] Resume CTA and social links still exist in the UI.
- [x] New project card is included in the projects list.

### Local Validation
- [x] Install dependencies locally in this environment.
- [x] Run `npm test`.
- [x] Run `npm run build`.

### Validation Notes
- The smoke test passes.
- The production build passes.
- `react-force-graph-2d` was removed after confirming it was unused.
- The remaining command-line warning is a stale `browserslist` data notice from the CRA toolchain, not an app code failure.

## Follow-Up Ideas
- Replace placeholder-like project artwork with cleaner screenshots for any older projects that need it.
- Consider updating `caniuse-lite` / browserslist data during a future maintenance pass.
- Consider a second pass focused only on copy and personal branding.

## Change Log

### 2026-06-02
- Created the working plan file.
- Implemented the first cleanup and design pass.
- Added the portfolio project to the projects data.
- Validated with `npm test` and `npm run build`.

### 2026-06-04
- Started the `portfolio-layout-experiment` branch.
- Reworked the page structure into a combined intro block, then `Experience`, then `About`.
- Split the combined intro block back into separate `Header`, `SocialLinks`, `Skills`, and `IntroSection` components while keeping the same visual layout direction.
