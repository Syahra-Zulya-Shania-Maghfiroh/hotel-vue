<script setup>
    import {ref} from 'vue';
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
// import func from 'vue-editor-bridge';

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
    <div class="container" style="padding: 50px 0 50px 0">
        <h2 style="text-align: center">Booking Information</h2>
        <h6 style="color: #B0B0B0; text-align: center; margin-bottom: 60px">Please fill up the blank fields below</h6>
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
        <router-link class="btn btn-secondary" to="rooms">Cancel</router-link>
    </div>
</template>

<script>
    export default {
        name: "BookView",
        components: {
        },
        data(){
            return{
                date: null,
                list_type : '',
                type_id : '',
                type_name: '',
                photo_name: '',
                desc: '',
                price: '',
            }
        },
        methods: {
            getData: function(){
                this.axios.get('/type').then(resp => {
                    this.list_type = resp.data.data;
                    console.log(this.list_type);
                })
            },
            // getDetail: function(){
            //     this.axios.get('/type/' + type_id).then(resp => {
            //         this.list_type = resp.data.data;
            //     })
            // }
        }
    }

</script>
