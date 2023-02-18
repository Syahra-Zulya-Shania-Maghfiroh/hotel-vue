<script setup>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
</script>

<template>
  <Navbar />
  <div class="landing" style="padding: 250px 0 250px 0; margin-bottom: 60px">
    <div
      class="container text-center"
      style="font-weight: bold; color: #ffffff"
    >
      <h1>User Data</h1>
    </div>
  </div>
  <div class="container">
    <h3>All User Data</h3>
    <div class="rounded h-100 p-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in list_user" :key="index.user">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
            </td>
            <td>500</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
// import axios from "axios";
export default {
  name: "UserView",
  components: {
    Navbar,
  },
  data: function () {
    return {
        list_user: []
    };
  },
  methods: {
    getData: function(){ 
        this.axios.get('/type').then(resp => { 
            this.list_user = resp.data.data; 
            console.log(this.list_user); 
        }) 
    }
  },
  mounted(){
    this.getData()
  }
};
</script>
