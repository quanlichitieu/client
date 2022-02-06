<template>
    <div id="nav" v-if="notInHideNavRoute" :class="getTheme + ' group-box'">
        <router-link
            v-for="(route, index) in navRoute"
            :key="index"
            :to="route"
            @click="lineAnimationUpdate(index)"
            >{{ route.replace("/", "") }}</router-link
        >
        <div class="totalBalance">
            <i class="fas fa-globe"></i>
            <h1>
                <Money :amount="getTotalBalance" colorDisable />
            </h1>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
import Money from "../components/general/Money";

export default {
    name: "Nav",
    data() {
        return {
            theme: this.$store.state.general.theme,
            navRoute: ["/dashboard", "/report", "/settings"],
            currentRoute: this.$route.path,
            hideNavRoute: [
                "/login",
                "/register",
                "/email-sent",
                "/forgot-password",
                "/",
            ],
        };
    },
    components: {
        Money,
    },
    methods: {
        lineAnimationUpdate(index) {
            const el = this.$el;
            if (el.data === "v-if") return;
            else {
                const line = el.querySelector(".line");
                line.style.left = `${2 + index * 11}%`;
            }
        },
    },
    computed: {
        getTotalBalance() {
            return this.$store.getters["wallet/getTotalBalance"]
        },
        notInHideNavRoute() {
            return !this.hideNavRoute.includes(this.$route.path);
        },
        getTheme() {
            return this.theme === "light" ? "light" : "dark";
        },
        setCurrentRoute() {},
    },
    updated() {
        this.currentRoute = this.$route.path;
        const index = this.navRoute.indexOf(this.currentRoute);
        this.lineAnimationUpdate(index);
    },
};
</script>

<style scoped>
#nav {
    position: relative;
    width: calc(100% - 20px);
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 45px;
}
#nav > * {
    display: inline-block;
    height: 100%;
    vertical-align: top;
}
a {
    width: 11%;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    font-size: var(--text-font-size);
    font-family: "Trebuchet MS", sans-serif;
}
.router-link-active {
    font-weight: bold;
}
.totalBalance {
    float: right;
    text-align: right;
    padding: 0 15px;
}
i {
    display: inline;
    font-size: 1.5em;
    line-height: 40px;
    vertical-align: top;
    padding-right: 5px;
}
h1 {
    display: inline;
    line-height: 45px;
    vertical-align: top;
}
.line {
    position: absolute;
    top: 30px;
    left: 2%;
    width: 7%;
    height: 2px !important;
    border-radius: 10px;
}
/* light theme */
.light a {
    color: var(--l-text);
}
.light a:visited {
    color: var(--l-text);
}
.light i {
    color: var(--l-text);
}
.light .line {
    background-color: var(--l-text);
}
/*  dark theme */
.dark a {
    color: var(--d-text);
}
.dark a:visited {
    color: var(--d-text);
}
.dark i {
    color: var(--d-text);
}
.dark .line {
    background-color: var(--d-text);
}
</style>