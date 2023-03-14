<script setup>
    // import {ref} from 'vue';

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    // const date = ref(null);
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
                <flat-pickr v-model="check_in" :config="config" class="form-control" placeholder="Select date" name="date"/>
            </div>
            <div class="col-lg-4">
                <label>Check out</label>
                <flat-pickr v-model="check_out" :config="config" class="form-control" placeholder="Select date" name="date"/>
            </div>
            <div class="col-lg-4 d-flex align-items-center">
                <button class="btn btn-warning" @click="searchData">Search</button>
            </div>
        </div>
    </div>
    <div class="container">
        <div v-if="list_type && list_type.length > 0">

        <div class="card" style="width: 70rem; margin-bottom: 2rem" v-for="type in list_type" :key="type.type_id">
            <img :src="'http://127.0.0.1:8000/images/' + type.photo_name" alt="Photo" style="width: 70rem">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" style="background-color: #14274A; color: #ffffff; text-transform: uppercase; text-align:center">{{type.type_name}} ROOM</li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-lg-10">{{type.desc}}</div>
                        <div class="col-lg-2">
                            <router-link class="btn btn-warning text-light" :to="{name: 'booking', params: {type_id: type.type_id}}">Rp.{{ type.price }} /night</router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        </div>

        <div v-else>
            <p>Data not Found</p>
        </div>
    </div>
</template>
<script>

// import axios from 'axios';

import Navbar from '@/components/Navbar.vue'

export default {
    name: "BookNow",
    components : {
        Navbar,
    },
    data() { 
        return { 
            type_id: '',
            type_name: '',
            price: '',
            photo_name: '',
            check_in: null, 
            check_out: null, 
            config: { 
                enableTime: false,
                dateFormat: "Y-m-d", 
            }, 
            list_type: [], 
            // axios: axios, // menambahkan axios ke dalam objek data 
        } 
    },

    methods: {
        searchData() { 
            this.axios.post('/datefilter', { 
                check_in: this.check_in,
                check_out: this.check_out 
            }).then((resp) => { 
                // this.getData();
                // set data check in, check out di sessionStorage
                // sessionStorage.setItem('check_in', this.check_in);
                // sessionStorage.setItem('check_out', this.check_out);

                
                console.log('sessionStorage : ', sessionStorage.getItem('check_in'), sessionStorage.getItem('check_out'))
                this.list_type = resp.data.data;
            }).catch((error) => { 
                console.log(error); 
            }); 
        },

    },
    mounted(){
        // this.getData()
    }
}
</script>
