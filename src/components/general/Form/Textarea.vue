<template>
    <label :class="'form-textarea ' + getTheme">
        <p :title="label">{{ label }}</p>
        <textarea
            name=""
            :rows="row"
            :class="disabled ? '' : 'effect'"
            :disabled="disabled"
            :required="required"
            v-model="data"
        ></textarea>
    </label>
</template>

<script>
export default {
    name: "Textarea",
    data() {
        return {
            theme: this.$store.state.general.theme,
            data: "",
        };
    },
    props: {
        label: String,
        disabled: Boolean,
        required: Boolean,
        row: Number,
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
/*  general  */
.form-textarea {
    display: block;
    margin: 5px;
}
/* fix float height problem */
.form-textarea::after {
    content: "";
    display: table;
    clear: both;
}
p {
    line-height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    display: inline-block;
    width: 20%;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    overflow-y: hidden;
    overflow-x: hidden;
}
textarea {
    transition: all 0s;
    resize: vertical;
    line-height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    float: right;
    width: 79%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow-y: hidden;
    overflow-x: hidden;
    border: none;
    font-size: var(--text-font-size);
    font-family: "Trebuchet MS", sans-serif;
    transition: box-shadow 0.3s;
}
textarea:focus {
    outline: none;
}
/* ___________ */
/* light theme */
.light p {
    background-color: var(--l-background-3);
}
.light textarea {
    background-color: var(--l-background-2);
    border: 3px solid var(--l-background-3);
    color: var(--l-text);
}
.light textarea:disabled {
    background-color: var(--l-background-3);
    color: var(--l-text);
}
.light .effect:hover {
    box-shadow: 0px 0px 5px rgba(33, 33, 33);
}
.light .effect:focus {
    box-shadow: 0px 0px 5px rgba(33, 33, 33);
    border: 3px solid var(--l-background-3);
}
/* ___________ */
/*  dark heme  */
.dark p {
    background-color: var(--d-background-3);
}
.dark textarea {
    background-color: var(--d-background-2);
    border: 3px solid var(--d-background-3);
    color: var(--d-text);
}
.dark textarea:disabled {
    background-color: var(--d-background-3);
    color: var(--d-text);
}
.dark .effect:hover {
    box-shadow: 0px 0px 5px rgba(233, 233, 233);
}
.dark .effect:focus {
    box-shadow: 0px 0px 5px rgba(233, 233, 233);
    border: 3px solid var(--d-background-3);
}
/* ___________ */
</style>