<template>
  <div>
    <label>อัปโหลดเลขห้องทั้งหมด</label>
    <textarea v-model="roomNumbers" placeholder="101, 102, 103, ..." />

    <label>เลือกห้องที่ต้องการกำหนดข้อมูล</label>
    <select v-model="selectedRooms" multiple>
    <!-- Upload Room Numbers -->
    <label>Room Numbers</label>
    <textarea
      v-model="roomNumbers"
      placeholder="101, 102, 103, ..."
    ></textarea>

    <!-- Select Rooms -->
    <label>Select Rooms</label>
    <select multiple v-model="selectedRooms">
      <option v-for="room in parsedRooms" :key="room">
        {{ room }}
      </option>
    </select>

    <!-- Select Number of Bedrooms -->
    <label>Select Number of Bedrooms</label>
    <select v-model="bedroomCount">
      <option value="1">1 Bedroom</option>
      <option value="2">2 Bedrooms</option>
      <option value="3">3 Bedrooms</option>
    </select>

    <!-- Select Room Type -->
    <label>Select Room Type</label>
    <select v-model="roomType">
      <option value="S">Standard</option>
      <option value="E">Executive</option>
      <option value="D">Deluxe</option>
    </select>

    <!-- Select Bed Type -->
    <label>Select Bed Type</label>
    <select v-model="bedType">
      <option value="K">King</option>
      <option value="Q">Queen</option>
      <option value="T">Twin</option>
    </select>

    <button @click="assignRoomDetails">บันทึกข้อมูลห้อง</button>

    <h3>รหัสห้องที่สร้าง:</h3>
    <ul>
      <li v-for="code in generatedRoomCodes" :key="code">
        {{ code }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomNumbers: '',
      selectedRooms: [],
      bedroomCount: '1',
      roomType: 'S',
      bedType: 'D',
    };
  },
  computed: {
    parsedRooms() {
      return this.roomNumbers
        .split(',')
        .map((r) => r.trim())
        .filter((r) => r);
    },
    generatedRoomCodes() {
      return this.selectedRooms.map((room) => {
        return `${this.bedroomCount}${this.roomType}${this.bedType}${room}`;
      });
    },
  },
  methods: {
    assignRoomDetails() {
      alert('ข้อมูลห้องถูกบันทึกแล้ว!');
    },
  },
};
</script>
  </div>
</template>
