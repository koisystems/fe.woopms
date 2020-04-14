<template>
    <div class="text-center mt-12">

        <h1 class="text-3xl">Welcome to to Woo PMS!</h1>
        <div v-if="!loggedIn" class="bg-red">
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