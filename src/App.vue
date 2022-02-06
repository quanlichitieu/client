<template>
    <div id="main" :class="getTheme">
        <Nav />
        <router-view />
    </div>
</template>

<script>
import Nav from "./components/Nav";
import { routerCheck } from "./helper/routeRedirect";
import { apiService } from "./helper/apiService";
import { errorHandler } from "./helper/errorHandler";

export default {
    data() {
        return {
            theme: this.$store.state.general.theme,
        };
    },
    computed: {
        getTheme() {
            return this.theme === "light" ? "light" : "dark";
        },
    },
    components: {
        Nav,
    },
    created() {
        //local storage setup
        if (localStorage.getItem("theme") !== "dark")
            localStorage.setItem("theme", "light");
        document.body.style.backgroundColor =
            localStorage.getItem("theme") === "light" ? "#fff" : "#1a1a1a";
        //fetch user data
        if (localStorage.getItem("accessToken")) {
            apiService("get", "/api/user/info")
                .then((data) => {
                    console.log(data)
                    this.$store.dispatch("user/setUser", data);
                })
                .catch((error) => {
                    errorHandler(error);
                });
        }
    },
    mounted() {},
    watch: {
        $route(to, from) {
            routerCheck(to, from);
        },
    },
};
</script>

<style>
@import "./App.css";
</style>
