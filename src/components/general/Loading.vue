<template>
    <div>
        <i :class="getTheme"></i>
    </div>
    
</template>

<script>
export default {
    name: "Loading",
    data() {
        return {
            theme: this.$store.state.general.theme,
        };
    },
    computed: {
        getTheme() {
            return this.theme === 'light' ? ['fas', 'fa-cog', 'light'] : ['fas', 'fa-cog', 'dark']
        },
    },
};
</script>
<style scoped>
i {
    font-size: 20px;
    animation: spin 3s linear infinite;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.light {
    color: #000000;
}
.dark {
    color: #e8eaed;
}

</style>