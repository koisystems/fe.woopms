<template>
    <div>

        <h1>Welcome to to Woo PMS!</h1>
        <div v-if="!loggedIn">
        To use this app you'll need to
        <router-link to="/login">
            Login
        </router-link>
        </div>

    </div>
</template>

<script>
    import { authComputed } from '../vuex/helpers'

    export default {
        computed: {
            ...authComputed
        }

    }
</script>