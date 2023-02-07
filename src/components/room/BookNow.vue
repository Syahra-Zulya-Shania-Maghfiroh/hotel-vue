<script setup>
    import {ref} from 'vue';

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    const date = ref(null);
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
                <flat-pickr v-model="date" :config="config" class="form-control" placeholder="Select date" name="date"/>
            </div>
            <div class="col-lg-4">
                <label>Check out</label>
                <flat-pickr v-model="date" :config="config" class="form-control" placeholder="Select date" name="date"/>
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
            date: null,
        }
    }
}
</script>
