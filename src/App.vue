<template>
    <div id="main" :class="getTheme">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    <router-view />
    </div> 
</template>

<script>
export default {
    data() {
        return {
            theme: this.$store.state.general.theme,
        }
    },
    computed: {
        getTheme() {
            return this.theme === 'light' ? 'light' : 'dark'
        },
        
    },
    mounted() {
        //local storage setup
        if (localStorage.getItem('theme') !== 'dark')
            localStorage.setItem('theme', 'light');
        if (localStorage.getItem('language') !== 'vn')
            localStorage.setItem('language', 'en')
        // setTimeout(() => {
        //     this.$store.dispatch('general/setTheme', 'dark');
        //     this.$store.dispatch('general/setLanguage', 'vn')
        // }, 2000);
    },
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 0.3s;
}
:root {
    --l-background-1: #ffffff;
    --l-background-2: #f7f7f7;
    --l-background-3: #c9c9c9;
    --l-background-4: #b5b5b5;
    --l-text: #000000;
    --l-line-1: #000000;
    --l-line-2: #3d3d3d;
    --d-background-1: #1a1a1a;
    --d-background-2: #202020;
    --d-background-3: #3d3d3d;
    --d-background-4: #474747;
    --d-text: #e8eaed;
    --d-line-1: #e8eaed;
    --d-line-2: #c4c4c4;
}
#main {
    /* min-width: 1000px; */
}
#main.light {
    background-color: #ffffff;
}
#main.dark {
    background-color: #212121;
}
p {
    font-size: 16px;
    font-family: 'Trebuchet MS', sans-serif;
}
.light p {
    color: var(--l-text);
}
.dark p {
    color: var(--d-text);
}
h2 {
    font-family: Garamond, serif;
}
</style>
