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
    <div class="row">
      <div class="col-lg-10">
          <h3>All User</h3>
      </div>
      <div class="col-lg-2">
          <button type="button" data-toggle="modal" data-target="#userModal" class="btn btn-warning pl-5 pr-5 pt-2 pb-2 text-light">+ Add More</button>
      </div>
    </div>
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
                <button v-on:click="editUser(user)" class="btn btn-warning mx-2" data-toggle="modal" data-target="#userModal"><i class="far fa-edit"></i></button>
                <button v-on:click="hapus(user.id)" class="btn btn-danger"><i class="far fa-trash-alt"></i></button> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Data User</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-3">
                    <label for="">Username :</label>
                    <input type="text" v-model="name" class="form-control" required>       
                </div>
                <div class="mb-3">
                    <label for="">Email :</label>
                    <input type="email" v-model="email" class="form-control" required>       
                </div>
                <div class="mb-3">
                    <label for="">Password :</label>
                    <input type="password" v-model="password" class="form-control" required>       
                </div>
                <div class="mb-3">
                    <label for="">Password Confirm :</label>
                    <input type="password" v-model="password_confirmation" class="form-control" required>       
                </div>
                <div class="mb-3">
                    <label for="">Role :</label>
                    <select v-model="role" class="form-control" required>
                        <!-- <option value="">---Select Role---</option> -->
                        <option value="receptionist">Receptionist</option>
                        <option value="admin">Admin</option>
                    </select>
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
import Navbar from "@/components/Navbar.vue";
// import axios from "axios";
export default {
  name: "UserView",
  components: {
    Navbar,
  },
  data: function () {
    return {
        list_user: [],
        id: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        action: ''
    };
  },
  methods: {
    getData: function(){ 
      let token = { 
        headers : { 
          'Authorization': 'Bearer ' + localStorage.getItem('token') 
        } 
      }

      this.axios.get('/user', token).then(resp => { 
          this.list_user = resp.data.data; 
          console.log(this.list_user); 
      }) 
    },
    addUser: function(){
      this.id = "",
      this.name = "",
      this.password = "",
      this.role = "",
      this.password_confirmation = "",
      this.action = "insert"
    },
    editUser: function(userData){
      this.id = userData.id,
      this.name = userData.name,
      this.email = userData.email,
      this.password = userData.password,
      this.role = userData.role,
      this.password_confirmation = userData.password_confirmation,
      this.action = "update"
    },
    saveData: function(){
      let form = {
        'id' : this.id,
        'name' : this.name,
        'email' : this.email,
        'password' : this.password,
        'role' : this.role,
        'password_confirmation' : this.password_confirmation,
      }
      let token = { 
        headers : { 
          'Authorization': 'Bearer ' + localStorage.getItem('token') 
        } 
      }

      console.log(this.action);

      if(this.action === "insert"){
          this.axios.post('/register', form, token).then(resp => {
              this.list_user = resp.data;
              console.log(this.list_user)
          })
      } else {
          this.axios.put('/user/' + this.id, form, token).then(resp => {
            console.log(this.id)
              this.list_user = resp.data.data;
              console.log(this.list_user)
          })
      }
      this.getData()
    },
    hapus(id){
      let token = { 
        headers : { 
          'Authorization': 'Bearer ' + localStorage.getItem('token') 
        } 
      }

      if(confirm('Are you sure?')){
        this.axios.delete('/user/' + id, token).then(() =>
        {
          location.reload()
        })
      }
    }
  },
  mounted(){
    this.getData()
  }
};
</script>
