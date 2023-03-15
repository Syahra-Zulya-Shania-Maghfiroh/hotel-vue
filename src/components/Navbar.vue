<template>
    <!-- <div class="container"> -->
    <template v-if="role === 'receptionist'">
        <nav class="navbar">
            <div class="container-fluid">
                <router-link class="nav-link" to="/dashboard">DASHBOARD</router-link>
                
                <button class="btn nav-link" @click="logout()">LOGOUT</button>
            </div>
        </nav>
    </template>
    <template v-if="role === 'admin'">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/m-user">USER</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/m-type">ROOM</router-link>
                    </li>
                </ul>
                <button class="btn nav-link" @click="logout()">LOGOUT</button>
                </div>
            </div>
        </nav>

    </template>
    <template v-if="role !== 'admin' && role !== 'receptionist'">
        <nav class="navbar navbar-expand-lg navbar-light" style="color: #000000">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../assets/wikusama.png" alt="Wikusama" height="30px" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-black" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">HOME</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/booknow">BOOK NOW</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/rooms">OUR ROOM</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/#">CONTACT</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </template>

    <!-- </div> -->
</template>

<script>
export default {
    name: 'Navbar_Page',
    data() {
        return {
            role: null,
        }
    },
        // console.log("aaaaaaa");
    methods: {
        logout(){
            this.axios.post('/logout').then(resp => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.removeItem('role')
                console.log(resp)

                this.$router.push('/login')
            })

        }
    },
    mounted() {
        this.role = localStorage.getItem("role")
    }
}
</script>
