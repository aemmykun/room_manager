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
# Room Manager Vue.js Component

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

**CRITICAL**: This repository contains a standalone Vue.js component, NOT a complete runnable application. The RoomManager.vue component must be integrated into a Vue.js application to function.

### Repository Structure
- **NEVER** try to run this as a standalone application - it will fail
- `src/components/RoomManager.vue` - Main room management component (Thai language interface)
- `README.md` - Basic project description
- `RoomManager` - Empty file (can be ignored)

### Component Functionality
The RoomManager component provides:
- Room number input via textarea (comma-separated format: "101, 102, 103")
- Multi-select room list (automatically parsed from input)
- Room configuration options:
  - Bedroom count (1, 2, or 3 bedrooms)
  - Room type (Standard, Executive, Deluxe)
  - Bed type (King, Queen, Double, Twin)
- Automatic room code generation (format: `{bedrooms}{roomType}{bedType}{roomNumber}`)
- Save functionality with alert confirmation

### Testing and Validation Process

**NEVER CANCEL BUILDS** - All commands below have been tested and work correctly:

1. **Create test Vue.js application** (required for testing):
   ```bash
   cd /tmp
   npm create vue@latest test-room-manager
   # Select: no additional features, no experimental features, keep example code
   cd test-room-manager
   npm install  # Takes ~4-20 seconds. NEVER CANCEL.
   ```

2. **Integrate the component**:
   ```bash
   cp /home/runner/work/room_manager/room_manager/src/components/RoomManager.vue /tmp/test-room-manager/src/components/
   ```

3. **Update App.vue to use the component**:
   ```vue
   <script setup>
   import RoomManager from './components/RoomManager.vue'
   </script>

   <template>
     <header>
       <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
       <div class="wrapper">
         <h1>Room Manager Test</h1>
       </div>
     </header>
     <main>
       <RoomManager />
     </main>
   </template>
   ```

4. **Build and test** (VALIDATED - works correctly):
   ```bash
   cd /tmp/test-room-manager
   npm run build  # Takes ~0.7 seconds. Build succeeds.
   npm run dev    # Starts dev server on http://localhost:5173/
   ```

### Manual Validation Scenarios

**ALWAYS** validate component functionality after making changes:

1. **Basic Room Code Generation Test**:
   - Navigate to http://localhost:5173/
   - Enter room numbers: "101, 102, 103, 104"
   - Select room "103" from the list
   - Verify room code "1SD103" appears (1=bedroom, S=Standard, D=Double, 103=room)
   - Click "บันทึกข้อมูลห้อง" button
   - Confirm alert shows "ข้อมูลห้องถูกบันทึกแล้ว!"

2. **Configuration Options Test**:
   - Test different bedroom counts (1, 2, 3)
   - Test different room types (S=Standard, E=Executive, D=Deluxe)
   - Test different bed types (K=King, Q=Queen, D=Double, T=Twin)
   - Verify room codes update correctly with format: `{bedrooms}{roomType}{bedType}{roomNumber}`

3. **Multi-Room Selection Test**:
   - Enter multiple rooms: "201, 202, 203"
   - Select multiple rooms using Ctrl+click
   - Verify multiple room codes generate correctly

### Limitations and Constraints

- **Cannot run standalone** - Component requires Vue.js application framework
- **No build system** - Original repository has no package.json or build configuration
- **No testing framework** - No unit tests exist for the component
- **No linting** - No ESLint or other code quality tools configured
- **Syntax validation** - Use `node -c` does not work with .vue files; use Vue.js build process instead

### Common Development Tasks

**Adding new features to the component**:
1. Set up test environment (see Testing and Validation Process above)
2. Edit `/home/runner/work/room_manager/room_manager/src/components/RoomManager.vue`
3. Copy updated component to test app: `cp src/components/RoomManager.vue /tmp/test-room-manager/src/components/`
4. Test in browser using validation scenarios above
5. Verify room code generation logic works correctly

**Troubleshooting**:
- If dev server fails to start: Check Node.js version (requires v16+)
- If component doesn't display: Verify Vue.js app properly imports the component
- If room codes don't generate: Check computed property logic in `generatedRoomCodes`

### File Contents Reference

**RoomManager.vue structure**:
- Template: Form with textarea, multi-select, dropdowns, and button
- Script: Vue.js component with reactive data, computed properties, and methods
- Data properties: `roomNumbers`, `selectedRooms`, `bedroomCount`, `roomType`, `bedType`
- Computed: `parsedRooms` (splits comma-separated input), `generatedRoomCodes` (creates room codes)
- Methods: `assignRoomDetails()` (shows success alert)

**Thai language labels**:
- อัปโหลดเลขห้องทั้งหมด = Upload all room numbers
- เลือกห้องที่ต้องการกำหนดข้อมูล = Select rooms to configure
- จำนวนห้องนอน = Number of bedrooms
- ประเภทห้อง = Room type
- ประเภทเตียง = Bed type
- บันทึกข้อมูลห้อง = Save room data
- รหัสห้องที่สร้าง = Generated room codes

### Environment Requirements

- Node.js v16+ (tested with v20.19.4)
- npm v6+ (tested with v10.8.2)
- Modern web browser for testing
- Vue.js 3.x framework for integration

Always build and exercise your changes using the validation scenarios above before considering your work complete.
