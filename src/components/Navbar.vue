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
                        <router-link class="nav-link" to="/ourroom">OUR ROOM</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">ABOOUT US</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">CONTACT</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar_Page'
}
</script>
