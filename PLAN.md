# Portfolio Improvement Plan

Last updated: 2026-06-09
Status: Layout update documented, validated, and ready for deployment

## Goal
Improve the portfolio in three practical ways:

1. Clean up the code so it is easier to understand and maintain.
2. Refine the design so the site feels more polished and intentional.
3. Add a recent project to the projects section without adding one-off code.

## Current Focus
This file is a living checklist. Update it whenever scope changes or a task is completed.

Current release layout:
- Keep the hero as one top card that combines the intro content, social links, and skills visualisation.
- Keep `Experience` as the second block.
- Keep `About` below `Experience` in a text-left, photo-right layout on large screens.
- Keep `Projects` and `Footer` in the existing closing positions.

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
- [x] Finalise the top-of-page layout as a shared hero card with intro content and skills bubbles.
- [x] Lock in the section order as `IntroSection`, `Experience`, `About`, `Projects`, then `Footer`.
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
- [x] Re-run validation after the final layout documentation update.

### Validation Notes
- The smoke test passes after updating `src/App.test.js` to match the current section labels.
- The production build passes.
- `react-force-graph-2d` was removed after confirming it was unused.
- Remaining command-line warnings come from the Create React App toolchain: a stale `browserslist` data notice, a `babel-preset-react-app` dependency warning, and a Jest open-handle notice after the test run. None blocked the build or the smoke test.

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

### 2026-06-09
- Updated `README.md` to describe the current shipped layout and deployment flow.
- Updated this plan to reflect the final section order and deployment-readiness check.
- Updated the smoke test to assert the current layout headings and re-ran validation successfully.
