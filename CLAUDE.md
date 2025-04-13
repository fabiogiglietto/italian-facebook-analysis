# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Development: `cd client && npm run dev` (starts Vite dev server)
- Build: `cd client && npm run build` (builds with Vite)
- Lint: `cd client && npm run lint`
- Preview: `cd client && npm run preview` (previews Vite build)
- Test: `cd client && npm test` (add if needed)
- Test single file: `cd client && npm test -- path/to/test-file.test.jsx`

## Code Style Guidelines
- Use functional components with React hooks
- Follow ESLint rules (React Hooks plugin, ECMAScript 2020)
- Format imports alphabetically with React imports first
- Use named exports/imports
- Structure component files: imports, component definition, prop types, export
- Apply Tailwind CSS utility classes for styling
- Use camelCase for variables/functions, PascalCase for components
- Handle errors with try/catch blocks and error state management
- Destructure props and use prop-types for type checking
- Keep components focused, small, and with single responsibility
- Prefer async/await over raw promises
- Use lodash utilities for data manipulation operations
- Follow D3/Recharts patterns for data visualization components
- Use consistent error handling with fallback UI
- Follow Vite project structure with assets in /public and /src