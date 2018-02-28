import Vue from 'vue'
import Router from 'vue-router'
import Flights from '@/components/Flights'
import FlightDetails from '@/components/FlightDetails'

window.flights = [];

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'flights',
      component: Flights,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: FlightDetails,
      props: true
    }
  ]
})