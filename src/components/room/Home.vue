<template>
    <Navbar/>
    <div class="landing" style="padding: 250px 0 250px 0; margin-bottom: 60px;">
        <div class="container text-center" style="font-weight: bold; color: #ffffff;">
            <h1>Our Room</h1>
        </div>
    </div>
    <div class="container" style="text-align: center; margin-bottom: 60px">
        <h2 style="color: #ffd700">Hotel Master's Rooms</h2>
        <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
    </div>
    <div class="container">
        <div class="card" style="width: 70rem; margin-bottom: 2rem" v-for="type in list_type" :key="type">
            <img :src="'http://127.0.0.1:8000/images/' + type.photo_name" alt="Photo" style="width: 70rem">
            <ul class="list-group list-group-flush">
                <!-- <li class="list-group-item"><img :src="'http://127.0.0.1:8000/images/' + type.photo_name" alt="Gambar"></li> -->
                <li class="list-group-item" style="background-color: #14274A; color: #ffffff; text-transform: uppercase; text-align:center">{{type.type_name}} ROOM</li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-lg-10">hahaha</div>
                        <div class="col-lg-2">
                            <router-link class="btn btn-warning text-light" to="/booking">Rp.{{ type.price }} /night</router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default{
        name: 'RoomsView',
        data: function(){
            return{
                list_type: [],
                type_id: '',
                type_name: '',
                price: '',
                desc: '',
                photo_name: '',
            }
        },
        components: {
            Navbar,
        },
        methods: {
            getData: function(){
                this.axios.get('/type').then(resp => {
                    this.list_type = resp.data.data;
                    console.log(this.list_type);
                })
            }
        },
        mounted(){
            this.getData()
        }
    }
</script>
