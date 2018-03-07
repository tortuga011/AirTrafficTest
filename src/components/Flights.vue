<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Flights</h4>
      </li>
      <li v-for="flight in flights" 
      :key="flight.flightId" 
      class="collection-item">
        <span class="btn-floating btn-large waves-effect waves-light">
          <i v-bind:style="{transform:'rotate('+ flight.direction + 'deg)'}" class="material-icons">airplanemode_active</i>
        </span>
        <span class="waves-effect waves-light btn">{{ flight.flightId }}</span>
        <span class="waves-effect waves-light btn">
          <i class="material-icons left">cloud</i>
          {{ flight.altitude }} ft
        </span>
        <router-link :to="{name: 'details', params: {id: flight.flightId}}" class="secondary-content">
          <i class="material-icons">remove_red_eye</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'flights',
  data () {
    return {
      flights: []
    }
  },
created() {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(`/VirtualRadar/AircraftList.json?lat=${position.coords.latitude}&lng=${position.coords.longitude}&fDstL=0&fDstU=100`, { method: "GET" })
      .then(res => res.json())
      .then(data => {
        this.flights = flights = data.acList.map(item => {
          return {
            flightId: item.Icao,
            altitude: item.Alt,
            from: item.From,
            to: item.To,
            model: item.Mdl,
            company: item.Op,
            direction: item.Trak,
            logo: `https://logo.clearbit.com/${item.Op.replace(' ', '').toLowerCase()}.com?s=64`
          }
        }).sort((a, b) => a.altitude  < b.altitude);
      });
    },
    error => { 
      if (error.code == error.PERMISSION_DENIED)
        alert("You can not use this aplication without Geolocation");
    });
  },
  beforeDestroy() {
    
  }
}

</script>

<style scoped>
  span {
    margin-right: 40px;
  }
</style>


