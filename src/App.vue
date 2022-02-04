<template>
    <div id="main" :class="getTheme">
        <Nav />
        <router-view />
    </div>
</template>

<script>
import Nav from "./components/Nav";
import { routerCheck } from "./helper/routeRedirect";

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
    },
    mounted() {},
    watch: {
        $route(to, from) {
            routerCheck(to, from);
        }
    }
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 0.3s;
}
#main {
    min-width: 800px;
}
:root {
    --l-background-1: #ffffff;
    --l-background-2: #f7f7f7;
    --l-background-3: #d9d9d9;
    --l-background-4: #b5b5b5;
    --l-text: #000000;
    --l-line-1: #000000;
    --l-line-2: #3d3d3d;
    --l-line-3: #696969;
    --d-background-1: #1a1a1a;
    --d-background-2: #202020;
    --d-background-3: #3d3d3d;
    --d-background-4: #474747;
    --d-text: #e8eaed;
    --d-line-1: #e8eaed;
    --d-line-2: #c4c4c4;
    --d-line-3: #b3b3b3;
    --text-font-size: 16px;
    --color-theme: #4daae0;
}
p {
    font-size: var(--text-font-size);
    font-family: "Trebuchet MS", sans-serif;
}
.dark p {
    color: var(--d-text);
}
.light p {
    color: var(--l-text);
}
.dark *::selection {
    background: var(--l-background-1);
    color: var(--l-text);
}
.light *::selection {
    background: var(--d-background-1);
    color: var(--d-text);
}
h2 {
    font-family: Garamond, serif;
}
h3 {
    font-family: Garamond, serif;
}
a.link {
    font-size: var(--text-font-size);
    font-family: "Trebuchet MS", sans-serif;
    color: var(--color-theme);
}
a.link:visited {
    color: var(--color-theme);
}
a.link:hover {
    text-shadow: 0 0 2px var(--color-theme);
}

::-webkit-scrollbar {
    width: 7px;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
}

.light ::-webkit-scrollbar-thumb {
    background-color: rgba(200, 200, 200, 0.5);
}
.light ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(200, 200, 200, 0.8);
}

.dark ::-webkit-scrollbar-thumb {
    background-color: rgba(61, 61, 61, 0.5);
}
.dark ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(61, 61, 61, 0.8);
}

body::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.5);
}
body::-webkit-scrollbar-thumb:hover {
    background-color: rgba(100, 100, 100, 0.8);
}
</style>
