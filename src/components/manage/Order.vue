<template>
    <Navbar/>
    <div class="landing" style="padding: 250px 0 250px 0; margin-bottom: 60px;">
        <div class="container text-center" style="font-weight: bold; color: #ffffff;">
            <h1>Order Data</h1>
        </div>
    </div>
    <div class="container">
        <h3>All Order Data</h3>
        <div class="bg-light rounded h-100 p-4">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Order Number</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Rooms Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Grand Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(room, index) in list_room" :key="index">
                    <th scope="row">{{index + 1}}</th>
                    <td>{{room.room_number}}</td>
                    <td>{{room.type_name}}</td>
                    <td>
                        <button v-on:click="editRoom(room)" class="btn btn-warning mx-2" data-toggle="modal" data-target="#roomModal"><i class="far fa-edit"></i></button>
                        <button v-on:click="hapus(room.room_id)" class="btn btn-danger"><i class="far fa-trash-alt"></i></button> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: "OrderView",
    components : {
        Navbar
    },
    methods : {
        
    }
}
</script>
