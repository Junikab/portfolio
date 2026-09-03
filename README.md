# Jenny Portfolio

Single-page portfolio site built with React, Tailwind CSS, and a custom D3 skills visualization. The site is used as a public showcase for Jenny Deygin's front-end, client, and AI-assisted projects.

## Stack
- React 18
- Create React App
- Tailwind CSS
- D3

## Local Development
```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Useful Commands
```bash
npm test -- --watchAll=false
npm run build
npm run deploy
```

## Recent Project Content
The projects section is maintained in `src/data/projectData.js`.

Recent additions include `LLM Job Finder`, a public showcase project for AI-assisted job search built with TypeScript, React, Vite, Fastify, Playwright, and Cheerio.

## Project Structure
- `src/components/layout/`: page sections
- `src/components/layout/PortfolioPage.js`: top-level section order and page shell
- `src/components/layout/IntroSection.js`: hero card with intro content, links, and skills canvas
- `src/components/SkillsBubbles.js`: draggable skills canvas
- `src/data/projectData.js`: projects content
- `src/data/skillData.js`: skills data and bubble colors
- `src/assets/`: images and PDF resume
- `PLAN.md`: living improvement checklist
- `AGENTS.md`: repo guidance for future changes

## Deployment
The site is configured for GitHub Pages using the `homepage`, `predeploy`, and `deploy` settings in `package.json`.

Run `npm run deploy` to publish the current build to GitHub Pages. The `predeploy` script automatically runs `npm run build` first, so a successful local build is the main deployment check.
