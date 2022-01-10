<template>
    <button :class="getTheme">
        <p v-show="!isLoading">{{ buttonText }}</p>
        <Loading v-show="isLoading" />
    </button>
</template>

<script>
import Loading from './Loading'

export default {
    name: 'Button',
    data() {
        return {
            theme: this.$store.state.general.theme,
            buttonText: this.text,
        };
    },
    components: {
        Loading
    },
    props: {
        text: String,
        isLoading: Boolean,
    },
    computed: {
        getTheme() {
            return this.theme === 'light' ? 'light' : 'dark'
        },
        
    },
};
</script>

<style scoped>
button {
    border-radius: 5px;
    width: 90px;
    height: 40px;
    border: none;
}
button:hover {
    cursor: pointer;
}
.light {
    background-color: #dbdbdb;
    color: #000000;
}
.dark {
    background-color: #474747;
    color: #e8eaed;
}
</style>