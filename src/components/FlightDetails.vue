<template>
  <div id="details" class="page">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Flight Number: {{ id }}</h4>
      </li>
      <li class="collection-item">Manufacturer and model: <span>{{flight.model}}</span></li>
      <li class="collection-item">From: {{flight.from}}</li>
      <li class="collection-item">To: {{flight.to}}</li>
      <li class="collection-item">Logo: <img :src="flight.logo" alt="logo"> </li>
    </ul>
    <router-link to='/' class="btn grey">Back</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  name: "FlightDetails",
  data() {
    return {
      flight: {}
    };
  },
  created() {
    if (!!flights) {
      this.flight = flights.find(flight => flight.flightId == this.id);
    }
    console.log(flights);
  }
};
</script>