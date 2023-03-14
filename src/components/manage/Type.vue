<template>
  <Navbar />
  <section class="bg-warning" style="height: 100px"></section>
  <div class="container">
    <div style="position: relative; z-index: 2">
      <div class="row" style="margin-top: -3rem; margin-bottom: 3rem">
        <div class="col-lg-6">
          <div
            class="bg-light rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fas fa-hotel fa-3x text-warning"></i>
            <div class="ms-3">
              <p class="mb-2">Total Type</p>
              <h4 class="mb-0">{{ total_type }}</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            class="bg-light rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fas fa-bed fa-3x text-warning"></i>
            <div class="ms-3">
              <p class="mb-2">Total Room</p>
              <h4 class="mb-0">{{ total_room }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="margin-bottom: 2rem">
    <div class="row">
      <div class="col-lg-10">
        <h3>All Type Room</h3>
      </div>
      <div class="col-lg-2">
        <button
          type="button"
          v-on:click="addType()"
          data-toggle="modal"
          data-target="#typeModal"
          class="btn btn-warning pl-4 pr-4 text-light"
        >
          + Add More
        </button>
      </div>
    </div>
  </div>
  <div
    class="container m-auto d-flex flex-wrap align-items-stretch justify-content-around"
  >
    <div
      class="card"
      style="width: 30rem; margin-bottom: 2rem"
      v-for="type in list_type"
      :key="type"
    >
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <img
            :src="'http://127.0.0.1:8000/images/' + type.photo_name"
            alt="Gambar"
            style="width: 435px; height: 250px"
          />
        </li>
        <li
          class="list-group-item"
          style="text-transform: uppercase; text-align: center"
        >
          {{ type.type_name }} ROOM
        </li>
        <li class="list-group-item">
          <h5 style="color: #14274a">Rp. {{ type.price }}</h5>
          <p>{{ type.desc }}</p>
          <div class="container text-center mb-2">
            <router-link
              class="btn btn-warning text-light mr-2"
              :to="{ name: 'droom', params: { type_id: type.type_id } }"
              >See More</router-link
            >
            <button
              v-on:click="editType(type)"
              class="btn btn-warning text-light mr-2"
              data-toggle="modal"
              data-target="#typeModal"
            >
              Update
            </button>
            <button v-on:click="hapus(type.type_id)" class="btn btn-danger">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- Type Modal -->
  <div
    class="modal fade"
    id="typeModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Data Type</h5>
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
              <label for="">Type Name :</label>
              <input
                type="text"
                v-model="type_name"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="">Price :</label>
              <input
                type="text"
                v-model="price"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="">Description :</label>
              <textarea
                v-model="desc"
                class="form-control"
                required
                style="height: 100px"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="">Photo :</label>
              <br />
              <input type="file" ref="file" v-on:change="uploadPhoto" />
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
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
// import { defineComponent } from 'vue' 
import Swal from 'sweetalert2'


export default {
  name: "TypeView",
  data: function () {
    return {
      list_type: [],
      type_id: "",
      type_name: "",
      price: "",
      desc: "",
      photo: "",
      photo_name: "",
      photo_path: "",
      action: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    getData: function () {
      let token = {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      };

      this.axios.get("/type", token).then((resp) => {
        this.list_type = resp.data.data;
        this.total_type = resp.data.total_type;
        this.total_room = resp.data.total_room;
        console.log(this.list_type);
      });
    },
    uploadPhoto(e) {
      this.photo = e.target.files[0];
    },
    addType: function () {
      (this.type_id = ""),
        (this.type_name = ""),
        (this.desc = ""),
        (this.price = ""),
        (this.photo = ""),
        (this.action = "insert");
    },
    editType: function (typeData) {
      (this.type_id = typeData.type_id),
        (this.type_name = typeData.type_name),
        (this.desc = typeData.desc),
        (this.price = typeData.price),
        (this.photo = typeData.photo);
      this.action = "update";
    },
    saveData: function () {
      let token = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      let formData = new FormData();
      formData.append("type_id", this.type_id);
      formData.append("type_name", this.type_name);
      formData.append("desc", this.desc);
      formData.append("price", this.price);

      // if(this.photo) {
      formData.append("photo", this.photo);
      // formData.append('photo_name', this.photo_name);
      // formData.append('photo_path', this.photo_path);
      // }

      if (this.action === "insert") {
        this.axios
          .post("/type", formData, token)
          .then((resp) => {
            this.list_type = resp.data.data;
            Swal.fire({
              title: "Success",
              text: resp.data.message,
              icon: "success",
            });
            console.log(resp.data.message)
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.axios
          .post("/type/" + this.type_id, formData, token)
          .then((resp) => {
            this.list_type = resp.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.getData();
    },

    hapus(type_id) {
      let token = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      if (confirm("Are you sure?")) {
        this.axios.delete("/type/" + type_id, token).then(() => {
          this.getData();
          // location.reload()
        });
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
