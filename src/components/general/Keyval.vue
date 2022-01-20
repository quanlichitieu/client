<template>
    <div :class="'keyval ' + getTheme">
        <p class="key" :title="key">{{ key }}</p>
        <p class="val" :title="val">{{ val }}</p>
    </div>
</template>

<script>
export default {
    name: "Keyval",
    data() {
        return {
            theme: this.$store.state.general.theme,
            key: this.keyText,
            val: this.valText,
        };
    },
    props: {
        keyText: String,
        valText: String,
    },
    computed: {
        getTheme() {
            return this.theme === "light" ? "light" : "dark";
        },
    },
};
</script>

<style scoped>
.keyval {
    display: block;
    height: 35px;
    margin: 5px;
}
p {
    line-height: 35px;
    padding-left: 10px;
    padding-right: 10px;
}
.key {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 20%;
    height: 100%;
    display: inline-block;
    overflow-y: hidden;
    overflow-x: hidden;
}
.val {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 79%;
    height: 100%;
    float: right;
    overflow-y: hidden;
    overflow-x: hidden;
}
.light .key {
    background-color: var(--l-background-3);
}
.light .val {
    background-color: var(--l-background-3);
}
.dark .key {
    background-color: var(--d-background-3);
}
.dark .val {
    background-color: var(--d-background-3);
}
</style>