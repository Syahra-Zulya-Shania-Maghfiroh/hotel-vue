<script setup>
    import 'flatpickr/dist/flatpickr.css';
</script>
<template>
<Navbar/>
    <div class="landing" style="padding: 250px 0 250px 0; margin-bottom: 60px;">
        <div class="container text-center" style="font-weight: bold; color: #ffffff;">
            <h1>Booking Now</h1>
        </div>
    </div>
    <div class="container">
        <div class="row" style="margin-bottom: 60px">
            <div class="col-lg-4">
                <label>Check in</label>
                <input class="form-control" type="datetime-local" placeholder="Select Datetime">
            </div>
            <div class="col-lg-4">
                <label>Check out</label>
                <input class="form-control" type="datetime-local" placeholder="Select Datetime">
            </div>
            <div class="col-lg-4 d-flex align-items-center">
                <button class="btn btn-warning">Search</button>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: "BookNow",
    components : {
        Navbar,
    },
    data() {
        return{
            date: null
        }
    }
}
</script>
