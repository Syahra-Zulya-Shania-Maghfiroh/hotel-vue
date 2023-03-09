<template>
    <!-- <div style="background-color: yellow; width: 50rem"> -->
        <Navbar/>
        <section class="bg-warning" style="height: 100px; z-index: 1">
        </section>
        <div class="container" style="position: relative; z-index: 2">
            <div class="row" style="margin-top: 3rem; ">
                <div class="col-lg-4">
                   <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fas fa-chart-line fa-3x text-warning"></i>
                        <div class="ms-3">
                            <p class="mb-2">Today Sale</p>
                            <h4 class="mb-0">$1234</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                   <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fas fa-chart-bar fa-3x text-warning"></i>
                        <div class="ms-3">
                            <p class="mb-2">Total Sale</p>
                            <h4 class="mb-0">$1234</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                   <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fas fa-chart-area fa-3x text-warning"></i>
                        <div class="ms-3">
                            <p class="mb-2">Today Revenue</p>
                            <h4 class="mb-0">$1234</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    <!-- </div> -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
    name : "DashboardView",
    components : {
        Navbar
    },
    data: function () { 
        return { 
            list_order: [], 
            status: "", 
            showDropdown: false, 
            //filter order 
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
                axios.post("/orderFilter", { guest_name:
this.guest_name, }) .then((resp) => { this.list_order = resp.data.data; }); }
else if (this.check_in !== null && this.guest_name === "") { axios
.post("/orderFilter", { check_in: this.check_in, }) .then((resp) => {
this.list_order = resp.data.data; }); } else { this.getOrder; } }, created() {
this.filterOrders(); }, }, mounted() { this.getOrder(); },

}
</script>
