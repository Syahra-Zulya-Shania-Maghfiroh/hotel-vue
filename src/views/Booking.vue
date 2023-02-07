<script setup>
    import {ref} from 'vue';
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';

    const date = ref(null);
</script>
<template>
    <div class="container" style="padding: 50px 0 50px 0">
        <h2 style="text-align: center">Booking Information</h2>
        <h6 style="color: #B0B0B0; text-align: center; margin-bottom: 60px">Please fill up the blank fields below</h6>
        <div class="row">
            <div class="col-lg-8" v-for="type in list_type" :key="type">
                <h4>{{ type.type_name }} Room</h4>
                <img :src="'http://127.0.0.1:8000/images/' + type.photo_name" alt="Gambar" style="width: 45rem; margin-bottom: 2rem">
            </div>
            <div class="col-lg-4">
                <h4>Booking Room</h4>
                <!-- <div style="border: 1px solid black; padding-left: 20px; padding-right: 50px"> -->
                    <label for="">Customer Name</label>
                    <input type="text" v-model="customer_name" class="form-control" required>    

                    <label for="">Customer Email</label>
                    <input type="email" v-model="customer_email" class="form-control" required>      

                    <label for="">Check In</label>
                    <flat-pickr v-model="check_in" :config="config" class="form-control" placeholder="Select date" name="date"/>

                    <label for="">Check Out</label>
                    <flat-pickr v-model="check_out" :config="config" class="form-control" placeholder="Select date" name="date"/>

                    <label for="">Guest Name</label>
                    <input type="text" v-model="guest_name" class="form-control" required>    

                    <label for="">Rooms Amount</label>
                    <input type="number" v-model="rooms_amount" class="form-control" required>   

                    <input type="hidden" v-model="type_id" class="form-control" required>

                    <button v-on:click="bookNow()" class="btn btn-warning mt-4">Book Now</button>
            </div>
        </div>
        <router-link class="btn btn-secondary" to="/rooms">Cancel</router-link>
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
                list_type : [],
                type_id : this.$route.params.type_id,
            }
        },
        methods: {
            getDetail: function(){
                this.axios.get('/type/' + this.$route.params.type_id).then(resp => {
                    this.list_type = resp.data;
                    console.log(this.list_type);
                })
            },
            bookNow: function(){
                let form = {
                    customer_name : this.customer_name,
                    customer_email : this.customer_email,
                    check_in : this.check_in,
                    check_out : this.check_out,
                    guest_name : this.guest_name,
                    rooms_amount : this.rooms_amount,
                    type_id : this.type_id
                }
                this.axios.post('/orders', form).then(resp => {
                    this.list_type = resp.data.data;
                })
            }
        },
        mounted(){
            this.getDetail()
        }
    }

</script>
