<template>
  <!-- <div style="background-color: #ffd700"> -->
  <!-- <div class="container"> -->
  <div class="login">
    <div class="row">
      <div class="col-lg-6">
        <!-- <img src="../assets/hotel.jpg" alt="image" style="width: 500px"> -->
      </div>
      <div class="col-lg-6">
        <div
          class="card"
          style="margin-top: 12rem; margin-bottom: 12rem; width: 35rem"
        >
          <h2 style="text-align: center; margin-top: 2rem">Login</h2>
          <div class="card-body">
            <label for="">Email</label>
            <input type="email" v-model="email" class="form-control" required />

            <label for="">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              required
            />

            <button v-on:click="login()" class="btn btn-warning mt-4 mb-4">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>
<style>
.login {
  background-image: url("/src/assets/hotel.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      isLoggedIn: false,
    };
  },
  methods: {
    login() {
      this.axios
        .post("/login")
        .then((resp) => {
          localStorage.setItem("token", resp.data.token);
          localStorage.setItem("status", true);

          location.href = "/";
        })
        .catch((error) => {
          console.log(error);
          alert("password salah");
        });
    },
  },
};
</script>
