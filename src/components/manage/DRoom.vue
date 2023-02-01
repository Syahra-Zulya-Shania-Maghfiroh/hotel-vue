<template>
<Manage/>
<div class="container">
    <h3>Data Type Room </h3>
    <div class="bg-light rounded h-100 p-4">
        <!-- <h6 class="mb-4" v-for="type in list_type" :key="type">type.type_name</h6> -->
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Room Number</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(room, index) in list_room" :key="index">
                    <th scope="row">{{index + 1}}</th>
                    <td>{{room.room_number}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
import Manage from '@/components/manage/Manage.vue'

export default {
    name: "DRoomView",
    data: function(){
        return{
            type_id: '',
            list_type: [],
            type_name: '',
            list_room: [],
        }
    },
    components: {
        Manage
    },
    methods: {
        getRoom: function(){
            this.axios.get('/type/detail/' + this.$route.params.type_id).then(resp => {
                this.list_room = resp.data;
                console.log(this.list_room)
            })
        },
        getType: function(){
            this.axios.get('/type').then(resp => {
                this.list_type = resp.data.data
            })
        },
        // getDType(type_id){
        //     this.axios.get('/type/' + type_id).then((resp) => {
        //         this.type_id = resp.data.type_id
        //         this.type_name = resp.data.desc
        //         this.price = resp.data.price
        //         this.desc = resp.data.type_id
        //         // console.log(type_name);
                
        //     })
        // },
        
    },
    mounted(){
        // this.getType()
        this.getRoom()
        // this.getDType(this.$route.params.id)
    }
}
</script>
