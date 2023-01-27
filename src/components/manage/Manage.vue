<template>
    <Navbar/>
    <div class="landing" style="padding: 250px 0 250px 0; margin-bottom: 60px;">
        <div class="container text-center" style="font-weight: bold; color: #ffffff;">
            <h1>Manage Data</h1>
        </div>
    </div>
    <!-- <Button/> -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
// import Button from '@/components/manage/Button.vue'

    export default{
        name: "ManageView",
        components: {
            Navbar,
            // Button
        }
    }

</script>
