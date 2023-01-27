<template>
    <Manage/> 
    <div class="container" style="margin-bottom: 2rem">
        <div class="row">
            <div class="col-lg-10">
                <h3>All Type Room</h3>
            </div>
            <div class="col-lg-2">
                <button type="button" data-toggle="modal" data-target="#AddModal" class="btn btn-warning pl-5 pr-5 pt-2 pb-2 text-light">+ Add More</button>
            </div>
        </div>
    </div>
    <div class="container m-auto d-flex flex-wrap align-items-stretch justify-content-around">
        <div class="card" style="width: 30rem; margin-bottom: 2rem" v-for="type in list_type" :key="type">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><img :src="'http://127.0.0.1:8000/images/' + type.photo_name" alt="Gambar"></li>
                <li class="list-group-item" style="text-transform: uppercase; text-align:center">{{type.type_name}} ROOM</li>
                <li class="list-group-item">
                    <h5 style="color: #14274A">Rp. {{type.price}}</h5>
                    <p>{{type.desc}}</p>
                    <div class="container text-center mb-2">
                    <router-link class="btn btn-warning text-light mr-2" to="/booking">See More</router-link>
                    <router-link class="btn btn-warning text-light mr-2" to="/booking">Update</router-link>
                    <router-link class="btn btn-danger text-light" to="/booking">Delete</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- Add Modal -->
    <div class="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> {{ action }} Data Type Room</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="addType">
                    <div class="mb-3">
                        <label for="">Type Name :</label>
                        <input type="text" v-model="type_name" class="form-control" required>
                    </div>  
                    <div class="mb-3">
                        <label for="">Price</label>
                        <input type="text" v-model="price" class="form-control" required>       
                    </div>
                    <div class="mb-3">
                        <label for="">Description</label>
                        <textarea v-model="desc" class="form-control" required style="height: 100px" @keypress.enter="saveData()"></textarea>
                    </div>   
                    <div class="mb-3">
                        <label for="">Photo</label>
                        <input type="file" ref="file" v-on:change="uploadPhoto">
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-warning" type="submit">Tambah</button>
                    </div>
                </form>
                
                
                    
                <!-- <div class="mb-3"> -->
                    <!-- <label for="photo">Photo</label>
                    <input type="file" class="form-control" id="photo" @change="uploadPhoto($event)"> -->
                    <!-- <file-upload ref="upload" v-on:input="onFileSelected"/>
                    <button @click="uploadFile">Photo</button> -->
                    <!-- <input type="file" v-model="photo" class="form-control" required>        -->
                <!-- </div> -->
            </div>
            <!-- <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                <button v-on:click="saveData()" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">{{this.action}}</button>
            </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import Manage from '@/components/manage/Manage.vue'
import axios from 'axios'
// import axios from 'axios'

// import axios from 'axios'
// import Button from '@/components/manage/Button.vue'

    export default{
        name: 'TypeView',
        data: function(){
            return{
                list_type: [],
                type_id: '',
                type_name: '',
                price: '',
                desc: '',
                photo_name: '',
                photo_path: ''
            }
        },
        components: {
            Manage,
        },
        methods: {
            getData: function(){
                this.axios.get('/type').then(resp => {
                    this.list_type = resp.data.data;
                    console.log(this.list_type);
                })
            },
            uploadPhoto(e) {
                this.photo = e.target.files[0];
            },
            addType() {
                let formData = new FormData();
                formData.append('type_name', this.type_name);
                formData.append('price', this.price);
                formData.append('desc', this.desc);
                formData.append('photo', this.photo);

                axios.post('/type', formData, {
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }).then(resp => {
                    console.log(resp.data.data)
                    this.getData()
                })
            }
            // uploadPhoto: function(e) {
            //     this.photo = e.target.files[0]
            // },
            // upload: function() {
            //     let form = new FormData()
            //     form.append('photo', this.photo)

            //     this.axios.post('/type', form).then(resp =>
            //     { 
            //         console.log(resp.data.data)
            //     });
            //     this.getData()
            // },
            // Add: function() {
            //     this.type_id = "",
            //     this.type_name = "",
            //     this.desc = "",
            //     this.price = ""
            // },
            // Save: function() {
            //     let form = {
            //         'type_name' : this.type_name,
            //         'price' : this.price,
            //         'desc' : this.desc,
            //         'photo' : this.photo
            //     }
            //     this.axios.post('/type' , form).then(resp => {
            //         console.log(resp.data.data)
            //     })
            //     this.getData()
            // }
        },
        mounted(){
            this.getData()
        }
    }
</script>
