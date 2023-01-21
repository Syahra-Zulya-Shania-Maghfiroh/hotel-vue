<template>
    <Navbar/>
    <div class="landing" style="padding: 250px 0 250px 0; margin-bottom: 60px;">
        <div class="container text-center" style="font-weight: bold; color: #ffffff;">
        <h1>Our Room</h1>
    </div>
    </div>
    <Room/>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Room from '@/components/Room.vue'

    export default {
        name: "RoomsView",
        components: {
            Navbar,
            Room
        }
    }
</script>
