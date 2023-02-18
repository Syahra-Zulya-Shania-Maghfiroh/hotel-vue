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
      <h1>Order Data</h1>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div
        class="form-group"
        :style="{
          width: '15rem',
          'pointer-events': guest_name.length > 0 ? 'none' : '',
        }"
      >
        <label for="">Filter Check In</label>
        <flat-pickr
          v-model="check_in"
          :config="config"
          class="form-control"
          placeholder="Select date"
          name="date"
        />
      </div>
      <div class="form-group" style="width: 15rem">
        <label for="">Filter Guest Name</label>
        <input
          type="text"
          v-model="guest_name"
          class="form-control"
          :disabled="check_in !== null"
        />
      </div>
    </div>
    <h3>All Order Data</h3>
    <div class="rounded h-100 p-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order Number</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Rooms Amount</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Status</th>
            <th scope="col">Grand Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in list_order" :key="index.order_id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ order.order_number }}</td>
            <td>{{ order.guest_name }}</td>
            <td>{{ order.rooms_amount }}</td>
            <td>{{ order.check_in }}</td>
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
                    <p>{{ order.status }} ▼</p>
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
            <td>500</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
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
import axios from "axios";
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
      this.axios.get("/orders").then((resp) => {
        this.list_order = resp.data.data;
      });
    },
    updateStatus(order_id, status) {
      let form = {
        status: status,
      };
      this.axios.put("/orders/status/" + order_id, form).then((resp) => {
        this.list_order = resp.data.status;
        this.showDropdown = false;
        this.getOrder();
        console.log("submitted");
      });
    },
    filterOrders() {
      if (this.guest_name !== "" && this.check_in === null) {
        axios
          .post("/orderFilter", {
            guest_name: this.guest_name,
          })
          .then((resp) => {
            this.list_order = resp.data.data;
          });
      } else if (this.check_in !== null && this.guest_name === "") {
        axios
          .post("/orderFilter", {
            check_in: this.check_in,
          })
          .then((resp) => {
            this.list_order = resp.data.data;
          });
      } else {
        this.getOrder;
      }
      // if (this.check_in === null && this.guest_name === ''){
      //     // jgn kembalikan apa2
      //     return;
      // }

      // axios.post('/orderFilter', {
      //     check_in: this.check_in !== null ? this.check_in : '',
      //     guest_name: this.guest_name
      // }).then(resp => {
      //     this.list_order = resp.data.data
      //     // this.getOrder()
      //     // console.log(resp.data.data)
      //     // console.log('aaaaaa')
      //     // console.log(this.list_order)
      // })
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
