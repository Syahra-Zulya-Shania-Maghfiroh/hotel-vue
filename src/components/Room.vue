<template>
    <div class="container" style="text-align: center;">
        <h6 style="color: #ffd700">WIKUSAMA ROOMS</h6>
        <h2 style="margin-bottom: 2em">Hotel Master's Rooms</h2> 
        <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-sm pl-5 pr-5 pt-2 pb-2 mt-1">Klik Modal</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> {{ action }} Data </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="">Book Name</label>
                        <input type="text" v-model="book_name" class="form-control" required>
                    </div>

                    <div class="mb-3">
                        <label for="">Author</label>
                        <input type="text" v-model="author" class="form-control" required>       
                    </div>

                    <div class="mb-3">
                        <label for="">Description</label>
                        <textarea v-model="desc" class="form-control" required style="height: 100px" @keypress.enter="saveData()"></textarea>
                    </div>        
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                    <button v-on:click="saveData()" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">{{this.action}}</button>
                </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="standard card text-white" width="50%" style="width: auto; margin-bottom: 1em; padding: 100px 0 100px 0; text-align: bottom">
                    <div class="card-body">
                        <h3 class="text-bottom">Standard Room</h3>
                        <!-- <router-link class="btn btn-warning" to="/booking/1">Booking</router-link> -->
                        <button class="btn btn-warning" @click="showModal = true">Booking</button>
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
                        <!-- <router-link class="btn btn-warning" to="/booking/">Booking</router-link> -->
                        <!-- <b-button v-b-modal.modal-1>Booking</b-button> -->
                        <!-- <button class="btn btn-warning" data-toggle="modal" data-target="#info">Booking</button> -->
                        <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-warning btn-sm pl-5 pr-5 pt-2 pb-2 mt-1">Booking</button>

                    </div>
                </div>
            </div>
        </div>
        <!-- modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <!-- <h5 class="modal-title" id="exampleModalLabel"> {{ action }} Data </h5> -->
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="">Book Name</label>
                        <!-- <input type="text" v-model="book_name" class="form-control" required> -->
                    </div>

                    <div class="mb-3">
                        <label for="">Author</label>
                        <!-- <input type="text" v-model="author" class="form-control" required>        -->
                    </div>

                    <div class="mb-3">
                        <label for="">Description</label>
                        <!-- <textarea v-model="desc" class="form-control" required style="height: 100px" @keypress.enter="saveData()"></textarea> -->
                    </div>        
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                    <button v-on:click="saveData()" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">{{this.action}}</button>
                </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoomView',
    components: {

    }
}
</script>