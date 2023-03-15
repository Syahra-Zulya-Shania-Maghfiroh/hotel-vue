<template>
    <div class="receipt">
        <div class="container">
            <div class="row">
                <div class="col-lg-4"></div>
                <div class="col-lg-8">
                    <div class="card" style="margin-top: 12rem; margin-bottom: 12rem; width: 45rem; padding: 3rem">
                        <h4 style="text-align: center; margin-bottom: 2rem">Find Your Receipt</h4>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" v-model="customer_email" class="form-control" placeholder="Your email">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <input type="text" v-model="order_number" class="form-control" placeholder="Your Order Number">
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <!-- <router-link to="{name: 'receipt', params:{order_number:}}"> -->
                                    <button class="btn btn-warning" @click="searchData">Search</button>
                                <!-- </router-link> -->
                            </div>
                        </div>

                        <!-- <div v-if="receipt">
                            <Receipt :receipts="receipt" />
                        </div> -->
                        <div v-if="receipt.length > 0">
                            {{ order_number }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.receipt{
    background-image: url("/src/assets/landing.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}
</style>

<script>
// import Receipt from '@/views/Receipt.vue'

export default {
    name: "FindReceipt",
    components:  {
        // Receipt
    },
    data: function() {
        return {
            receipt: [],
            customer_email: "",
            order_number: ""
        }
    },
    methods: {
        searchData(){
            console.log('here');
            this.axios.post('/checkorder', {
                email: this.customer_email,
                order_number: this.order_number
            }).then((resp) => {
                // console.log(resp.data.data.original.data.order_number !== this.order_number)
                // if (resp.data.data.original.data.order_number !== true){
                // this.$router.push({name: 'notfound'});   
                // }
                // else {

                    this.$router.push({name: 'receipt', params:{order_number: this.order_number}});
                // }
              
                console.log(resp);
                // console.log(resp.data.data.original.data.order_number)
            })
        }
    }
}
</script>
