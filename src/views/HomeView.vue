<template>
  <div class="home">
    <Navbar/>
    <Hero/>
    <Room/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Room from '@/components/Room.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Hero,
    Room
  }
}
</script>
