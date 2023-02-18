<template>
<div class="bg-image" style="padding: 200px 0 200px 0;">
    <div class="container text-left" style="font-weight: bold; color: #ffffff;">
        <h1 style="font-size: auto;">Wikusama Hotels</h1>
        <p>We are focused on providing clients with the highest level <br> of comfort and excellent affordable rates</p>
        <router-link class="btn btn-warning btn-fill btn-large me-md-2" to="/booknow">Book Now</router-link>
        <router-link class="btn btn-outline-warning" to="/receipt">Already Book?</router-link>
    </div>
</div>
    <div class="container">
        <div class="welcome" style="text-align: center; padding: 50px 0 50px 0">
            <h6 style="color: #ffd700">WELCOME TO WIKUSAMA HOTEL</h6>
            <h2 style="margin-bottom: 2em">You'll Never Want To Leave</h2>
            <div class="row">
                <div class="col-lg-3">
                    <img src="../assets/pool.png" alt="">
                    <p style="margin-top: 2rem">Swimming Pool</p>
                </div>
                <div class="col-lg-3">
                    <img src="../assets/customer.png" alt="">
                    <p style="margin-top: 2rem">Friendly Service</p>
                </div>
                <div class="col-lg-3">
                    <img src="../assets/food.png" alt="">
                    <p style="margin-top: 2rem">Get Breakfast</p>
                </div>
                <div class="col-lg-3">
                    <img src="../assets/bed.png" alt="">
                    <p style="margin-top: 2rem">Cozy Rooms</p>
                </div>
            </div>
        </div>
        <div class="about">
            <div class="row">
                <div class="col-lg-6">
                    <h4 style="margin-bottom: 20px">About <span style="color: #ffd700;">Wikusama Hotels</span></h4>
                    <p>Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. </p>
                    <p>Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. </p>
                </div>
                <div class="col-lg-6">
                    <img src="../assets/suite.jpg" alt="" style="width: 32rem">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroView'
}
</script>
