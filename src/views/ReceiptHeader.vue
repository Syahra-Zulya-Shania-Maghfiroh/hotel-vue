<template>
    <div class="row">
        <div class="col-lg-6">
            <img src="..\assets\wikusama.png" alt="" width="50px"> 
            <span style="font-weight: 500; margin-left: 10px">Wikusama Hotels</span>
        </div>
        <div class="col-lg-6">
            <!-- <p>{{receipt}}</p> -->
            <h6>#{{number.order_number}}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReceiptHeader",
    props: ["receipt"]
}
</script>