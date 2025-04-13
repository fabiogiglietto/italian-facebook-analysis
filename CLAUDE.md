# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Development: `cd client && npm run dev`
- Build: `cd client && npm run build`
- Lint: `cd client && npm run lint`
- Preview: `cd client && npm run preview`

## Code Style Guidelines
- Use functional components with hooks
- Follow ESLint rules (React Hooks plugin, ECMAScript 2020)
- Format imports alphabetically with React imports first
- Use named exports/imports
- Follow Tailwind CSS utility classes for styling
- Use camelCase for variables/functions, PascalCase for components
- Handle errors with try/catch blocks and error state management
- Use destructuring for props
- Add PropTypes for component props
- Keep components focused and small
- Prefer async/await over raw promises