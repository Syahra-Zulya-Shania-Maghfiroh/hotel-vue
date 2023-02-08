<template>
    <h1>receipt</h1>
    <div class="container" style="border: 2px solid black; height: 400px">
        <div class="row">
            <div class="col-lg-6">
                <img src="..\assets\wikusama.png" alt="" width="50px"> 
                <span style="font-weight: 500; margin-left: 10px">Wikusama Hotels</span>
            </div>
            <div class="col-lg-6">
                <h6>#2398</h6>
            </div>
        </div>
        <div class="row" style="background-color: #FFF5C1;">
            <div class="col-lg-6">
                <h6>Bookings From</h6>
                <p>
                    <b>Syahra Zulya</b> <br>
                    syahrazulya@gmail.com
                </p>
            </div>
            <div class="col-lg-6">
                <h3>BOOKING RECEIPT</h3>
                <div class="row">
                    <div class="col-lg-4"><p>Order Date</p><h6>2023-02-07</h6></div>
                    <div class="col-lg-4"><p>Check In</p><h6>2023-02-10</h6></div>
                    <div class="col-lg-4"><p>Check Out</p><h6>2023-02-14</h6></div>
                </div>
            </div>
        </div>
        <div class="address" >
            <div class="rounded h-100 p-4">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Suite Room</td>
                            <td>201</td>
                            <td>Rp. 250.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Suite Room</td>
                            <td>202</td>
                            <td>Rp. 250.000</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <td style="background-color: #FFF5C1"><b>Grand Total : <span style="float: right">Rp. 500.000</span></b></td>
                    </tfoot>
                </table>
                <!-- <div style="background-color: #fff5c1; float: right"><b>Grand Total : <span style="float:right">Rp. 500.000</span></b></div> -->
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name : "ReceiptView",
    components: {

    }
}
</script>
