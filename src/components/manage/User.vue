<script setup>
import "mosha-vue-toastify/dist/style.css";
import { createToast } from "mosha-vue-toastify";
</script>

<template>
  <Navbar />
  <section class="bg-warning" style="height: 100px"></section>
  <div class="container">
    <div style="position: relative; z-index: 2">
      <div class="row" style="margin-top: -3rem; margin-bottom: 3rem">
        <div class="col-lg-4">
          <div
            class="bg-light rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fas fa-address-card fa-3x text-warning"></i>
            <div class="ms-3">
              <p class="mb-2">Total Officer</p>
              <h4 class="mb-0">{{ total }}</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="bg-light rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fas fa-user-friends fa-3x text-warning"></i>
            <div class="ms-3">
              <p class="mb-2">Total Admin</p>
              <h4 class="mb-0">{{ total_admin }}</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="bg-light rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fas fa-users fa-3x text-warning"></i>
            <div class="ms-3">
              <p class="mb-2">Total Receptionist</p>
              <h4 class="mb-0">{{ total_recep }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="margin-bottom: 2rem">
    <div class="row">
      <div class="col-lg-10">
        <h3>All User</h3>
      </div>
      <div class="col-lg-2">
        <button
          type="button"
          v-on:click="addUser()"
          data-toggle="modal"
          data-target="#userModal"
          class="btn btn-warning pl-4 pr-4 text-light"
        >
          + Add More
        </button>
      </div>
    </div>
  </div>
  <div class="container">
    <section class="bg-light">
      <div class="row" style="margin-left: 1rem"></div>
      <!-- <h3>All Order Data</h3> -->
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
                <button
                  v-on:click="editUser(user)"
                  class="btn btn-warning mx-2"
                  data-toggle="modal"
                  data-target="#userModal"
                >
                  <i class="far fa-edit"></i>
                </button>
                <button v-on:click="hapus(user.id)" class="btn btn-danger">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>

  <div
    class="modal fade"
    id="userModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Data User</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="">Username :</label>
              <input type="text" v-model="name" class="form-control" required />
            </div>
            <div class="mb-3">
              <label for="">Email :</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="">Password :</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="">Password Confirm :</label>
              <input
                type="password"
                v-model="password_confirmation"
                class="form-control"
                required
              />
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
              <button v-on:click="saveData()" class="btn btn-warning">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div>
      <b-alert show :variant="alertType">{{ alertMessage }}</b-alert>
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
      id: "",
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "",
      action: "",
    };
  },
  methods: {
    getData: function () {
      let token = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      this.axios.get("/user", token).then((resp) => {
        this.list_user = resp.data.user;
        this.total = resp.data.total;
        this.total_admin = resp.data.total_admin;
        this.total_recep = resp.data.total_recep;
        console.log(this.list_user);
      });
    },
    addUser: function () {
      (this.id = ""),
        (this.name = ""),
        (this.email = ""),
        (this.password = ""),
        (this.password_confirmation = ""),
        (this.role = ""),
        (this.action = "insert");
    },
    editUser: function (userData) {
      (this.id = userData.id),
        (this.name = userData.name),
        (this.email = userData.email),
        (this.password = userData.password),
        (this.password_confirmation = userData.password_confirmation),
        (this.role = userData.role),
        (this.action = "update");
    },
    saveData() {
      let form = {
        // 'id' : this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        role: this.role,
      };
      this.action = "insert";

      let token = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      if (this.action === "insert") {
        this.axios
          .post("/user", form, token)
          .then((resp) => {
            this.createAlert(resp.data.message, "success");
            location.reload();
          })
          .catch((error) => {
            this.createAlert(error, "danger");
            location.reload();
          });
      } else {
        this.axios
          .put("/user/" + this.id, form, token)
          .then((resp) => {
            this.createAlert(resp.data.message, "success");
            location.reload();
          })
          .catch((error) => {
            this.createAlert(error, "danger");
            location.reload();
          });
      }
    },
    hapus(id) {
      let token = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      if (confirm("Are you sure?")) {
        this.axios.delete("/user/" + id, token).then(() => {
          location.reload();
        });
      }
    },
  },
  createAlert(message, type) {
    createToast(message, {
      position: "top-right",
      type: type,
      timeout: 1500,
      dismissible: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      closeOnClick: true,
      closeButton: true,
      icon: true,
      rtl: false,
    });
  },

  mounted() {
    this.getData();
  },
};
</script>
