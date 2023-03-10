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
    <!-- <nav class="navbar">
        <div class="container-fluid">
            <ul class="navbar-nav ms-auto">

            <li class="nav-item">
                <router-link class="nav-link" to="/dashboard">DASHBOARD</router-link>
            </li>
            <button class="btn nav-link" @click="logout()">LOGOUT</button>
            
            </ul>
        </div>
    </nav> -->

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
