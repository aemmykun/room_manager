<template>
  <div>
    <label>Update All Room Number</label>
    <textarea v-model="roomNumbers" placeholder="101, 102, 103, ..."></textarea>

    <label>Selected Rooms</label>
    <select multiple v-model="selectedRooms">
      <option v-for="room in parsedRooms" :key="room">{{ room }}</option>
    </select>

    <label>Select Number of Bedrooms</label>
    <select v-model="bedroomCount">
      <option value="1">1 Bedroom</option>
      <option value="2">2 Bedroom</option>
      <option value="3">3 Bedroom</option>
    </select>

    <label>Select Room Type</label>
    <select v-model="roomType">
      <option value="S">Standard</option>
      <option value="E">Executive</option>
      <option value="D">Deluxe</option>
    </select>

    <label>Select Bed Type</label>
    <select v-model="bedType">
      <option value="K">King</option>
      <option value="Q">Queen</option>
      <option value="D">Double</option>
      <option value="T">Twin</option>
    </select>

    <button @click="assignRoomDetails">Save</button>

    <h3>Generate Rooms:</h3>
    <ul>
      <li v-for="code in generatedRoomCodes" :key="code">{{ code }}</li>
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
      bedType: 'D'
    };
  },
  computed: {
    parsedRooms() {
      return this.roomNumbers.split(',').map(r => r.trim()).filter(r => r);
    },
    generatedRoomCodes() {
      return this.selectedRooms.map(room => {
        return `${this.bedroomCount}${this.roomType}${this.bedType}${room}`;
      });
    }
  },
  methods: {
    assignRoomDetails() {
      alert("All Data Saved");
    }
  }
};
</script>
