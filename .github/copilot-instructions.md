# Room Manager - Vue.js Hotel Room Management Component

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the information provided here.

## Working Effectively

### Bootstrap and Setup

- Install Node.js if not available: `node --version && npm --version` (should show v20.19.4+ and npm 10.8.2+)
- Install dependencies: `npm install` -- takes ~10 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- The repository has a complete Vue.js development setup with Vite build system

### Build Process

- `npm run build` -- takes ~1 second to complete. NEVER CANCEL. Set timeout to 120+ seconds.
- Build creates optimized production files in `dist/` directory
- Build output: `dist/index.html` and `dist/assets/index-*.js` (gzipped ~25KB)

### Development Server

- `npm run dev` -- starts development server in ~350ms. NEVER CANCEL. Set timeout to 120+ seconds.
- Runs on http://localhost:3000 with hot module replacement
- Use `npm run dev -- --host 0.0.0.0` to expose server on all network interfaces

### Preview Built Application

- `npm run preview` -- starts preview server for built application. NEVER CANCEL. Set timeout to 120+ seconds.
- Runs on http://localhost:4173
- Must run `npm run build` first

### Code Quality

- `npm run lint` -- runs ESLint with Vue.js support. Takes ~5 seconds. Set timeout to 60+ seconds.
- `npm run format` -- runs Prettier for code formatting. Takes ~2 seconds. Set timeout to 60+ seconds.
- ALWAYS run both `npm run lint` and `npm run format` before committing changes

## Validation

### Manual Testing Scenarios

- ALWAYS test the room management functionality after making changes:
  1. Start development server: `npm run dev`
  2. Open http://localhost:3000 in browser
  3. Enter room numbers in Thai interface: "101, 102, 103, 104, 105" in the textarea
  4. Select rooms from the dropdown (multiple selection)
  5. Choose bedroom count (1-3 bedrooms)
  6. Select room type (Standard/Executive/Deluxe)
  7. Select bed type (King/Queen/Double/Twin)
  8. Click "บันทึกข้อมูลห้อง" (Save Room Data) button
  9. Verify generated room codes appear in the list format: "1SD101" (1 bedroom, Standard, Double, room 101)
  10. Test alert appears confirming data saved

### Build Validation

- ALWAYS test that both development and production builds work:
  1. `npm run build && npm run preview`
  2. Open http://localhost:4173 and run the same manual test scenario
  3. Verify functionality matches development version exactly

### Code Validation

- ALWAYS run linting and formatting before changes:
  ```bash
  npm run lint && npm run format
  ```

## Repository Structure

### Key Files

- `src/components/RoomManager.vue` -- Main Vue.js component (Thai language interface)
- `src/main.js` -- Application entry point
- `index.html` -- HTML template
- `vite.config.js` -- Vite build configuration
- `package.json` -- Project dependencies and scripts
- `eslint.config.js` -- ESLint configuration with Vue.js rules
- `.prettierrc` -- Code formatting configuration

### Component Overview

The RoomManager.vue component provides:

- Room number input (comma-separated list)
- Multi-select room picker
- Bedroom count selection (1-3)
- Room type selection (S=Standard, E=Executive, D=Deluxe)
- Bed type selection (K=King, Q=Queen, D=Double, T=Twin)
- Room code generation in format: `${bedrooms}${type}${bed}${roomNumber}`

### Dependencies

- Vue 3.x for reactive component framework
- Vite 7.x for fast development and building
- ESLint + eslint-plugin-vue for code quality
- Prettier for consistent formatting

## Common Commands Reference

### Repository Root Contents

```
.
├── .github/
├── README.md
├── RoomManager (empty file)
├── dist/ (build output)
├── node_modules/ (dependencies)
├── src/
│   ├── components/
│   │   └── RoomManager.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .prettierrc
```

### Package.json Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --fix",
  "format": "prettier --write ."
}
```

## Critical Warnings

### Build and Development

- NEVER CANCEL build commands - they complete quickly but set proper timeouts
- NEVER CANCEL npm install - set timeout to 300+ seconds
- Always wait for development server to fully start before testing

### Code Changes

- ALWAYS test functionality manually after any changes to Vue components
- ALWAYS run lint and format before committing
- The component uses Thai language - preserve Unicode characters
- Test room code generation logic thoroughly when modifying computed properties

### File Management

- NEVER commit node_modules/ directory (excluded by .gitignore)
- NEVER commit dist/ directory unless specifically needed for deployment
- The empty "RoomManager" file at root can be ignored or removed

## Working with Vue.js Components

### Making Changes to RoomManager.vue

- Template section: Contains Thai language UI elements
- Script section: Contains component logic and data
- No styling section currently - component uses browser defaults
- Always test reactive data binding when modifying component state
- Verify computed properties update correctly when changing business logic

### Adding Features

- Follow existing Vue.js patterns in the component
- Maintain Thai language consistency in UI text
- Test all reactive features thoroughly
- Run full validation cycle after changes
