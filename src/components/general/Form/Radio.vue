<template>
    <div :class="'form-radio ' + getTheme">
        <p :title="label" class="label">{{ label }}</p>
        <div class="field">
            <label v-for="radio in radioData" :key="radio.name" :class="disabled ? '' : 'effect'">
                <input
                    type="radio"
                    :id="radio.name"
                    :name="radio.name"
                    :value="radio.value"
                    v-model="data"
                    :disabled="disabled"
                    :required="required"
                />
                <span class="checkmark"></span>
                <p :title="radio.name">{{ radio.name }}</p>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "Radio",
    data() {
        return {
            theme: this.$store.state.general.theme,
            data: "",
        };
    },
    props: {
        label: String,
        radioData: Object,
        disabled: Boolean,
        required: Boolean,
    },
    computed: {
        getTheme() {
            return this.theme === "light" ? "light" : "dark";
        },
    },
    watch: {
        data() {
            this.$emit("dataUpdated", this.data);
        },
    },
};
</script>

<style scoped>
.form-radio {
    display: block;
    margin: 5px;
    /* fix float height problem */
    overflow: hidden;
}
.label {
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
.field {
    float: right;
    width: calc(75% - 5px);
    height: fit-content;
}
label {
    position: relative;
    display: block;
    width: fit-content;
    height: 35px;
    margin: 5px 0;
}
label.effect:hover {
    cursor: pointer;
}
label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
label .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 35px;
    aspect-ratio: 1/1;
    border-radius: 50%;
}
label p {
    display: block;
    line-height: 35px;
    margin-left: 45px;
    /* width: fit-content; */
}
label input + .checkmark::after {
    content: "";
    position: absolute;
    display: block;
    top: 9.5px;
    left: 9.5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
}
label input:checked + .checkmark::after {
    display: block;
    transform: scale(2, 2);
}

.light .label {
    background-color: var(--l-background-3);
}
.light label .checkmark {
    background-color: var(--l-background-2);
    border: 3px solid var(--l-background-3);
}
.light label.effect:hover .checkmark {
    box-shadow: 0px 0px 5px rgba(33, 33, 33);
}
.light label input:checked + .checkmark::after {
    background-color: var(--l-background-3);
}
.light label input:disabled {
    background-color: var(--l-background-3);
}

.dark .label {
    background-color: var(--d-background-3);
}
.dark label .checkmark {
    background-color: var(--d-background-2);
    border: 3px solid var(--d-background-3);
}
.dark label.effect:hover .checkmark {
    box-shadow: 0px 0px 5px rgba(233, 233, 233);
}
.dark label input:checked + .checkmark::after {
    background-color: var(--d-line-2);
}
</style>