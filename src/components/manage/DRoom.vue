<template>
<Manage/>
<div class="container">
    <h3>Data Type Room </h3>
    <div class="bg-light rounded h-100 p-4">
        <h6 class="mb-4" v-for="type in list_type" :key="type">type.type_name</h6>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>jhon@email.com</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>mark@email.com</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>jacob@email.com</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
import Manage from '@/components/manage/Manage.vue'

export default {
    name: "DRoomView",
    data: function(){
        return{
            list_type: [],
            type_name: '',
            list_room: [],

        }
    },
    components: {
        Manage
    },
    methods: {
        getType: function(){
            this.axios.get('/type').then(resp => {
                this.list_type = resp.data.data
            })
        }
    }
}
</script>
