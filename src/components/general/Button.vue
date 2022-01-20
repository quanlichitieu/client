<template>
    <button :class="getTheme" :title="buttonText">
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
    margin: 5px;
}
button:hover {
    cursor: pointer;
}
.light {
    background-color: var(--l-background-3);
    border: 2px solid var(--l-line-1);
}
.light:hover {
    background-color: var(--l-background-4);
    box-shadow: 0px 0px 5px rgba(33,33,33);
}
.dark {
    background-color: var(--d-background-3);
    border: 2px solid var(--d-line-1);
}
.dark:hover {
    background-color: var(--d-background-4);
    box-shadow: 0px 0px 5px rgba(233,233,233);
}
</style>