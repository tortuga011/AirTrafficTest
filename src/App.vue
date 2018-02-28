<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <transition name="rout-animation" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRightBig" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";

</style>
