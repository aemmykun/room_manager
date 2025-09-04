<template>
  <div>
    <label>อัปโหลดเลขห้องทั้งหมด</label>
    <textarea v-model="roomNumbers" placeholder="101, 102, 103, ..." />

    <label>เลือกห้องที่ต้องการกำหนดข้อมูล</label>
    <select v-model="selectedRooms" multiple>
      <option v-for="room in parsedRooms" :key="room">
        {{ room }}
      </option>
    </select>

    <label>จำนวนห้องนอน</label>
    <select v-model="bedroomCount">
      <option value="1">1 ห้องนอน</option>
      <option value="2">2 ห้องนอน</option>
      <option value="3">3 ห้องนอน</option>
    </select>

    <label>ประเภทห้อง</label>
    <select v-model="roomType">
      <option value="S">Standard</option>
      <option value="E">Executive</option>
      <option value="D">Deluxe</option>
    </select>

    <label>ประเภทเตียง</label>
    <select v-model="bedType">
      <option value="K">King</option>
      <option value="Q">Queen</option>
      <option value="D">Double</option>
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
