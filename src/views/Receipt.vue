<template>
  <div class="container" style="border: 2px solid black; height: 400px">
    <div class="row">
      <div class="col-lg-6">
        <img src="..\assets\wikusama.png" alt="" width="50px" />
        <span style="font-weight: 500; margin-left: 10px">Wikusama Hotels</span>
      </div>
      <div class="col-lg-6">
        <h6>#{{ receipts.data.order_number }}</h6>
      </div>
    </div>
    <div
      class="row"
      style="background-color: #fff5c1"
    >
      <div class="col-lg-6">
        <h6>Bookings From</h6>
        <p>
          <b>{{ receipts.data.customer_name }}</b> <br />
          {{ receipts.data.customer_email }}
        </p>
      </div>
      <div class="col-lg-6">
        <h3>BOOKING RECEIPT {{ receipts.data.guest_name }}</h3>
        <div class="row">
          <div class="col-lg-4">
            <p>Order Date</p>
            <h6>{{ receipts.data.order_date }}</h6>
          </div>
          <div class="col-lg-4">
            <p>Check In</p>
            <h6>{{ receipts.data.check_in }}</h6>
          </div>
          <div class="col-lg-4">
            <p>Check Out</p>
            <h6>{{ receipts.data.check_out }}</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="address">
      <div
        class="rounded h-100 p-4"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Type Room</th>
              <th scope="col">Room Number</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(selected, index) in room_selected" :key="selected">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ selected.type_name }}</td>
              <td>{{ selected.room_number }}</td>
              <td>Rp {{ selected.price }}</td>
            </tr>
            <!-- <tr>
                            <th scope="row">2</th>
                            <td>Suite Room</td>
                            <td>202</td>
                            <td>Rp. 250.000</td>
                        </tr> -->
          </tbody>
          <tfoot>
            <td style="background-color: #fff5c1">
              <b>Grand Total : <span style="float: right">Rp {{ grands }}</span></b>
            </td>
          </tfoot>
        </table>
        <!-- <div style="background-color: #fff5c1; float: right"><b>Grand Total : <span style="float:right">Rp. 500.000</span></b></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReceiptView",
  components: {},
  data: function () {
    return {
      receipts: [],
      room_selected: [],
      grands: [],
      order_id: "",
      // order_date: "Y-m-d",
      order_number: this.$route.params.order_number,
    };
  },
  methods: {
    getData() {
      this.axios
        .get("/orders/receipt/" + this.$route.params.order_number)
        .then((resp) => {
          this.receipts = resp.data;
          this.room_selected = resp.data.room_selected;
          this.grands = resp.data.grand_total;
          console.log(resp.data);
          console.log("aaaaaaaaaaa");
          console.log(resp.data.grand_total);
          // console.log(this.receipts)
          console.log("=====");
          // console.log(resp.data.room_selected)
          // console.log(this.receipts.order_number)
          // console.log(this.receipts.customer_name)
        })
        .catch((error) => {
          console.error(error);
          this.receipts = null;
        });
    },
  },
  mounted() {
    // this.getData()
  },
  created() {
    // setTimeout(this.getData(), 1000)
    this.getData();
  },
};
</script>
