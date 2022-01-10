<template>
    <div id="main">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    <router-view />
    </div> 
</template>

<script>
export default {
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
#main {
    margin: 5px;
    /* background-color: #212121; */
}
p {
    font-size: 20px;
    font-family: 'Trebuchet MS', sans-serif;
}
h3 {
    font-family: Garamond, serif;
}
</style>
