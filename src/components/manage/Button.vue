<template>
    <div class="container">
        <div class="btn-group" role="group" aria-label="Basic example">
            <router-link class="btn btn-warning" to="/m-all">ALL</router-link>
            <router-link class="btn btn-warning" to="/m-user">USER</router-link>
            <router-link class="btn btn-warning" to="/m-type">TYPE ROOM</router-link>
            <router-link class="btn btn-warning" to="/m-room">ROOM</router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: "ButtonView"
}
</script>
