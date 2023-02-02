<template>
<Manage/>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <h3>Data Type Room </h3>
        </div>
        <div class="col-lg-6">
            <button type="button" v-on:click="addRoom()" data-toggle="modal" data-target="#roomModal" class="btn btn-warning pl-5 pr-5 pt-2 pb-2 text-light">+ Add More</button>
        </div>
    </div>
    <div class="bg-light rounded h-100 p-4">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Room Number</th>
                    <th scope="col">Type Room</th>
                    <th scope="col">Action</th>
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
<!-- Add Modal -->
<div class="modal fade" id="roomModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Data Type Room</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <!-- <div class="mb-3"> -->
                    <input type="hidden" v-model="type_id" class="form-control" required>
                <!-- </div>   -->
                <div class="mb-3">
                    <label for="">Room Number :</label>
                    <input type="number" v-model="room_number" class="form-control" required>       
                </div>
                <div class="mb-3">
                    <button v-on:click="saveData()" class="btn btn-warning">Save</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</div>

</template>
<script>
import Manage from '@/components/manage/Manage.vue'

export default {
    name: "DRoomView",
    data: function(){
        return{
            list_type: [],
            list_room: [],
            type_id: this.$route.params.type_id,
            room_id: "",
            room_number: "",
            action: "",
        }
    },
    components: {
        Manage
    },
    methods: {
        getRoom: function(){
            this.axios.get('/type/detail/' + this.$route.params.type_id).then(resp => {
                this.list_room = resp.data;
                // console.log(this.list_room)
            })
        },
        getType: function(){
            this.axios.get('/type').then(resp => {
                this.list_type = resp.data.data
            })
        },
        addRoom: function(){
            this.type_id = this.$route.params.type_id,
            this.room_id = "",
            this.room_number = "",
            this.action = "insert"
        },
        editRoom: function(roomData){
            this.type_id = roomData.type_id,
            this.room_id = roomData.room_id,
            this.room_number = roomData.room_number,
            this.action = "update"
        },
        saveData: function(){
            let form = {
                'type_id' : this.type_id,
                'room_number' : this.room_number
            }

            console.log(this.action);


            if(this.action === "insert"){
                this.axios.post('/room', form).then(resp => {
                    this.list_type = resp.data.data
                })
            } else {
                this.axios.put('/room/' + this.room_id, form).then(resp => {
                    this.list_type = resp.data.data
                })
            }
            this.getRoom()
        },
        hapus(room_id){
            if(confirm('Are you sure?')){
                this.axios.delete('/room/' + room_id).then(() =>
                {
                    location.reload()
                })
            }
        }
        
    },
    mounted(){
        this.getType()
        this.getRoom()
    }
}
</script>
