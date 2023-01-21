<script setup>
    import {ref} from 'vue';
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';

    const date = ref(null);
</script>
<!-- <template>
    <h1>Booking</h1>
    <h1 class="text-center mb-3 text-secondary">Datetime Picker</h1>
    <form>
        <flat-pickr v-model="date" :config="{enableTime: true, dateFormat: 'Y-m-d H:i'}"></flat-pickr>
    </form>
    
</template> -->
        <!-- <input class="form-control" type="datetime-local" placeholder="Select Datetime"> -->
<template>
    <Navbar/>
    <div class="container" style="padding: 50px 0 50px 0">
        <div class="row">
            <div class="col-lg-8">
                <h4 style="color: #ffd700; ">Suite Room</h4>
                <img src="../assets/suite.jpg" alt="suite room" style="width: 45rem">
                <h5 style="margin-top: 20px">Detail :</h5>
            </div>
            <div class="col-lg-4">
                <h4>Booking Room</h4>
                <flat-pickr v-model="date" :config="config" class="form-control" placeholder="Select date" name="date"/>
            </div>
        </div>
    </div>
    
</template>

<script>
import Navbar from '@/components/Navbar.vue'
    export default {
        name: "BookView",
        components: {
            Navbar
        },
        data(){
            return{
                date: null
            }
        }
    }

</script>
