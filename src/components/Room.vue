<template>
    <div class="container" style="text-align: center;">
        <h6 style="color: #ffd700">WIKUSAMA ROOMS</h6>
        <h2 style="margin-bottom: 2em">Hotel Master's Rooms</h2> 
        <div class="row">
            <div class="col-lg-6">
                <div class="standard card text-white" width="50%" style="width: auto; margin-bottom: 1em; padding: 100px 0 100px 0; text-align: bottom">
                    <div class="card-body">
                        <h3 class="text-bottom">Standard Room</h3>
                        <router-link class="btn btn-warning" to="/booking/1">Booking</router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="suite card text-white" width="50%" style="width: auto; margin-bottom: 1em; padding: 100px 0 100px 0; text-align: bottom">
                    <div class="card-body">
                        <h3 class="text-bottom">Suite Room</h3>
                        <router-link class="btn btn-warning" to="/booking/2">Booking</router-link>
                    </div>
                </div>
            </div>
        </div> 
        <div class="row">
            <div class="col-lg-6">
                <div class="deluxe card text-white" width="50%" style="width: auto; margin-bottom: 1em; padding: 100px 0 100px 0; text-align: bottom">
                    <div class="card-body">
                        <h3 class="text-bottom">Deluxe Room</h3>
                        <router-link class="btn btn-warning" to="/booking/">Booking</router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="president card text-white" width="50%" style="width: auto; margin-bottom: 1em; padding: 100px 0 100px 0; text-align: bottom">
                    <div class="card-body">
                        <h3 class="text-bottom">Presidential Room</h3>
                        <router-link class="btn btn-warning" to="/booking/">Booking</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoomView',
    data(){
        return {
            list_type: []
        }
    },
    methods: {
        getData(){
            this.axios.get('')
        }
    }
}
</script>