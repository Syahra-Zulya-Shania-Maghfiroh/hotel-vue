<template>
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
                        <router-link class="nav-link" to="/rooms">OUR ROOM</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/manage">MANAGE</router-link>
                    </li> -->
                    <template v-if="role === 'admin' && role === 'receptionist'">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MANAGE
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div v-if="role === 'admin'">
                                <router-link class="dropdown-item" to="/m-user">USER</router-link>
                                <router-link class="dropdown-item" to="/m-type">ROOM TYPE</router-link>
                                </div>

                                <div v-else-if="role ==='receptionist'">
                                    <router-link class="dropdown-item" to="/m-order">BOOKING</router-link>
                                </div>
                            </div>
                        </li>
                    </template>
                    <li class="nav-item" v-if="role === 'admin' && role === 'receptionist'">
                        <!-- <router-link class="nav-link"> -->
                            <button class="btn nav-link" @click="logout()">LOGOUT</button>
                        <!-- </router-link> -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar_Page',
    data() {
        return {
            role: null,
        }
    },
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
