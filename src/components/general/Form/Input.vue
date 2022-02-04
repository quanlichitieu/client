<template>
    <label :class="'form-input ' + getTheme">
        <p class="label" :title="label">{{ label }}</p>
        <input
            :type="type"
            :class="disabled ? '' : 'effect'"
            v-model="data"
            :disabled="disabled"
            :required="required"
            :placeholder="placeholder"
        />
    </label>
</template>

<script>
export default {
    name: "Input",
    data() {
        return {
            theme: this.$store.state.general.theme,
            data: "",
            buttonText: this.text,
        };
    },
    props: {
        label: String,
        type: String,
        disabled: Boolean,
        required: Boolean,
        placeholder: String,
    },
    computed: {
        getTheme() {
            return this.theme === "light" ? "light" : "dark";
        },
    },
    watch: {
        data() {
            this.$emit("dataUpdated", this.data + "");
        },
    },
};
</script>

<style scoped>
.form-input {
    display: block;
    height: 35px;
    margin: 5px;
}
p {
    line-height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    display: inline-block;
    width: 25%;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    overflow-y: hidden;
    overflow-x: hidden;
}
input {
    line-height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    float: right;
    width: calc(75% - 5px);
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow-y: hidden;
    overflow-x: hidden;
    border: none;
    font-size: var(--text-font-size);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input::placeholder {
    font-size: 14px;
    color: #bbbbbb;
}
input[type="number"] {
    -moz-appearance: textfield;
}
.effect:focus {
    border: none;
    outline: none;
}

.light .effect:hover {
    box-shadow: 0px 0px 5px rgba(33, 33, 33);
}
.light .effect:focus {
    box-shadow: 0px 0px 5px rgba(33, 33, 33);
    border: 3px solid var(--l-background-3);
}
.light p {
    background-color: var(--l-background-3);
}
.light input {
    background-color: var(--l-background-2);
    border: 3px solid var(--l-background-3);
}
.light input:disabled {
    background-color: var(--l-background-3);
    color: var(--l-text);
}

.dark .effect:hover {
    box-shadow: 0px 0px 5px rgba(233, 233, 233);
}
.dark .effect:focus {
    box-shadow: 0px 0px 5px rgba(233, 233, 233);
    border: 3px solid var(--d-background-3);
}
.dark p {
    background-color: var(--d-background-3);
}
.dark input {
    background-color: var(--d-background-2);
    border: 3px solid var(--d-background-3);
    color: var(--d-text);
}
.dark input:disabled {
    background-color: var(--d-background-3);
}
</style>