<template>
  <div>
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
  </div>
</template>
