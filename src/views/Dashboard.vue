<template>
    <div>
        <h1>Dashboard</h1>
        <div v-if="!isLoading">
            <h3 class="text=2xl">Hello {{user.name}} ( {{user.email}} )</h3>
            <WooTable/>
        </div>
        <p v-else>
            Loading data
        </p>
    </div>
</template>

<script>
    import axios from 'axios'
    import WooTable from "../components/WooTable"

    export default {
        components: { WooTable },
        data () {
            return {
                isLoading: true,
                user: null
            }
        },
        created () {
            axios.get('//localhost:8001/api/v1/user/me').then(({ data }) => {
                this.user = data.data
                this.isLoading = false
            })
        }
    }
</script>