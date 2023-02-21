<template>
    <div class="row" style="background-color: #FFF5C1;">
        <div class="col-lg-6">
            <h6>Bookings From</h6>
            <p>
                <b>{{receipt.customer_name}}</b> <br>
                {{ receipt.customer_email }}
            </p>
        </div>
        <div class="col-lg-6">
            <h3>BOOKING RECEIPT {{receipt.guest_name}}</h3>
            <div class="row">
                <div class="col-lg-4"><p>Order Date</p><h6>{{ receipt.order_date }}</h6></div>
                <div class="col-lg-4"><p>Check In</p><h6>{{ receipt.check_in }}</h6></div>
                <div class="col-lg-4"><p>Check Out</p><h6>{{ receipt.check_out }}</h6></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ReceiptBody",
  props: ["receipt"],
};
</script>
