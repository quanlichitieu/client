<template>
    <div id="nav" v-if="notInHideNavRoute">
        <router-link to="/">Home</router-link> |
        <router-link to="/dashboard">Dashboard</router-link>
    </div>
</template>

<script>
export default {
    name: "Nav",
    data: () => ({
        hideNavRoute: [
            "/login",
            "/register",
            "/email-sent",
            "/forgot-password",
            "/"
        ],
    }),
    computed: {
        notInHideNavRoute() {
            return !this.hideNavRoute.includes(this.$route.path);
        },
    },
};
</script>

<style>
</style>