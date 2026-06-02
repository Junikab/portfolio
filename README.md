# Jenny Deygin Portfolio

Personal portfolio site built with React, Tailwind CSS, and a custom D3 skills visualization.

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

## Project Structure
- `src/components/layout/`: page sections
- `src/components/SkillsBubbles.js`: draggable skills canvas
- `src/data/projectData.js`: projects content
- `src/data/skillData.js`: skills data and bubble colors
- `src/assets/`: images and PDF resume
- `PLAN.md`: living improvement checklist
- `AGENTS.md`: repo guidance for future changes

## Deployment
The site is configured for GitHub Pages using the `homepage`, `predeploy`, and `deploy` settings in `package.json`.
