<template>
    <div>
        <h1>Dashboard</h1>
        <template v-if="!isLoading">
            Hello {{user.name}} ( {{user.email}} )
        </template>
        <p v-else>
            Loading data
        </p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        components: {  },
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