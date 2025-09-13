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