<script setup>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
</script>

<template>
  <Navbar />
  <p>{{role}}</p>
  <section class="bg-warning" style="height: 100px; z-index: 1"></section>
  <div class="container">
    <div style="position: relative; z-index: 2">
      <div class="row" style="margin-top: -3rem; margin-bottom: 3rem">
        <div class="col-lg-4">
          <div
            class="bg-light rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fas fa-chart-line fa-3x text-warning"></i>
            <div class="ms-3">
              <p class="mb-2">Total Bookings</p>
              <h4 class="mb-0">{{ booking }}</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="bg-light rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fas fa-chart-bar fa-3x text-warning"></i>
            <div class="ms-3">
              <p class="mb-2">Total Check In</p>
              <h4 class="mb-0">{{ data_check }}</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="bg-light rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fas fa-chart-area fa-3x text-warning"></i>
            <div class="ms-3">
              <p class="mb-2">Total Revenue</p>
              <h4 class="mb-0">$1234</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="bg-light">
      <div class="container d-flex" style="margin-top: 2rem">
        <div class="mr-auto p-2">
          <h4 style="margin-top: 2rem">Filter Order</h4>
        </div>
        <div class="p-2">
          <div
            class="form-group"
            :style="{
              width: '15rem',
              'pointer-events': guest_name.length > 0 ? 'none' : '',
            }"
          >
            <!-- <label for="">Filter Check In</label> -->
            <flat-pickr
              v-model="check_in"
              :config="config"
              class="form-control"
              style="margin-top: 2rem"
              placeholder="Select date"
              name="date"
            />
          </div>
        </div>
        <div class="p-2">
          <div class="form-group" style="width: 15rem; margin-top: 2rem">
            <!-- <label for="">Filter Guest Name</label> -->
            <input
              type="text"
              v-model="guest_name"
              class="form-control"
              placeholder="Input name"
              :disabled="check_in !== null"
            />
          </div>
        </div>
      </div>
      <div class="row" style="margin-left: 1rem"></div>
      <!-- <h3>All Order Data</h3> -->
      <div class="rounded h-100 p-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order Number</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Status</th>
              <th scope="col">Rooms Amount</th>
              <th scope="col">Check In Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in list_order" :key="index.order_id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ order.order_number }}</td>
              <td>{{ order.guest_name }}</td>
              <td>
                <!-- jika status new -->
                <template v-if="order.status === 'New'">
                  <div class="status-dropdown">
                    <button
                      class="status-btn"
                      @click="order.showDropdown = !order.showDropdown"
                    >
                      {{ order.status }} ▼
                      <div v-if="order.showDropdown">
                        <p @click="updateStatus(order.order_id, 'Check In')">
                          Check In
                        </p>
                      </div>
                    </button>
                  </div>
                </template>
                <template v-else-if="order.status === 'Check In'">
                  <div class="status-dropdown">
                    <button
                      class="status-btn"
                      @click="order.showDropdown = !order.showDropdown"
                    >
                      {{ order.status }} ▼
                      <div v-if="order.showDropdown">
                        <p @click="updateStatus(order.order_id, 'Check Out')">
                          Check Out
                        </p>
                      </div>
                    </button>
                  </div>
                </template>
                <template v-else>
                  {{ order.status }}
                </template>
              </td>
              <td>{{ order.rooms_amount }}</td>
              <td>{{ order.check_in }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style>
.status-dropdown {
  display: inline-block;
  position: relative;
}
.status-btn {
  background-color: white;
  color: black;
  border: 1px solid #ddd;
  padding: 8px;
  cursor: pointer;
}
/* .dropdown-content { 
    display: none; 
    position: absolute; 
    z-index: 1; 
    background-color: white; 
    border: 1px solid #ddd; 
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); 
}  */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-10px);
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";
// import axios from "axios";
export default {
  name: "OrderView",
  components: {
    Navbar,
  },
  data: function () {
    return {
      list_order: [],
      status: "",
      showDropdown: false,
      // filter order
      date: null,
      check_in: null,
      guest_name: "",
    };
  },
  watch: {
    check_in: function () {
      this.filterOrders();
    },
    guest_name: function () {
      this.filterOrders();
    },
  },
  methods: {
    getOrder: function () {
      let token = {
        headers : {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      // let header = authHeader();

      this.axios.get("/orders", token).then((resp) => {
        this.list_order = resp.data.data;
        this.booking = resp.data.booking;
        this.data_check = resp.data.data_check;
        // console.log(sessionStorage.getItem);
        console.log("aaaaaaaaaa");
        console.log(this.list_order);
        console.log(this.data_check);
        console.log(this.booking);
      });
    },
    updateStatus(order_id, status) {
      let token = { 
        headers : { 
          'Authorization': 'Bearer ' + localStorage.getItem('token') 
        } 
      }
      let form = {
        status: status,
      };
      this.axios.put("/orders/status/" + order_id, form, token).then((resp) => {
        this.list_order = resp.data.status;
        this.showDropdown = false;
        this.getOrder();
        console.log("submitted");
      });
    },
    filterOrders: function() {
      let token = { 
        headers : { 
          'Authorization': 'Bearer ' + localStorage.getItem('token') 
        } 
      }
      if (this.guest_name !== "" && this.check_in === null) {
        this.axios
          .post("/orderFilter", token, {
            guest_name: this.guest_name,
          })
          .then((resp) => {
            this.list_order = resp;
            console.log(this.list_order)
          });
      } else if (this.check_in !== null && this.guest_name === "") {
        this.axios
          .post("/orderFilter", token, {
            check_in: this.check_in,
          })
          .then((resp) => {
            this.list_order = resp.data.data;
          });
      } else {
        this.getOrder;
      }
    },
    created() {
      this.filterOrders();
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
