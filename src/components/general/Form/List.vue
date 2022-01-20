<template>
    <div :class="'form-list ' + getTheme + (disabled ? '' : ' effect')">
        <div
            v-for="(listElement, index) in listData"
            :key="index"
            :class="'element ' + (selected === listElement ? 'selected' : '')"
            @click="data = listElement"
        >
            <p>{{ listElement }}</p>
            <div class="hr" v-if="index !== listData.length - 1"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            theme: this.$store.state.general.theme,
            data: "",
        };
    },
    props: {
        listData: Array,
        selected: String,
        disabled: Boolean,
    },
    computed: {
        getTheme() {
            return this.theme === "light" ? "light" : "dark";
        },
    },
    watch: {
        data() {
            // update the parent value if not disabled
            if (!this.disabled) {
                this.$emit("dataUpdated", this.data + "");
            }
        },
    },
};
</script>

<style scoped>
/*   general  */
.form-list {
    position: relative;
    width: 100%;
    border-radius: 5px;
}
.element {
    position: relative;
    width: 100%;
    height: 35px;
    line-height: 34px;
    text-align: center;
    overflow: hidden;
}
.hr {
    border: none;
    border-bottom: 1px solid;
    width: 90%;
    margin: auto;
}
.element:hover {
    cursor: pointer;
}
p::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 35px;
    left: 5%;
    transform: translateX(-100%);
    transition: all 0.2s ease-in-out;
}
.effect p:hover::before {
    transform: translateX(0);
}
.selected p::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 35px;
    left: 5%;
    transform: translateX(0);
}
/* ___________ */
/* light theme */
.light .hr {
    border-color: var(--l-background-3);
}
.light .form-list {
    background-color: var(--l-background-2);
}
.light p::before {
    background-color: var(--l-background-2);
}
.effect.light p:hover::before {
    background-color: var(--l-background-3);
}
.light .selected p::before {
    background-color: var(--l-background-3);
}
/* ___________ */
/* dark theme  */
.dark .hr {
    border-color: var(--d-background-3);
}
.dark .form-list {
    background-color: var(--d-background-2);
}
.dark p::before {
    background-color: var(--d-background-2);
}
.effect.dark p:hover::before {
    background-color: var(--d-line-2);
}
.dark .selected p::before {
    background-color: var(--d-line-2);
}
/* ___________ */
</style>