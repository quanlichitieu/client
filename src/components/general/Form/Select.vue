<template>
    <div :class="'select ' + theme">
        <label @click="isShowItemList = !isShowItemList">
            <p>{{ title }}</p>
            <i :class="'fas fa-caret-down ' + (isShowItemList ? 'flipped' : '')"></i>
        </label>
        <ul class="itemList" v-if="isShowItemList">
            <List :listData="itemList" @dataUpdated="handleUpdated"/>
        </ul>
    </div>
</template>

<script>
import List from "./List"

export default {
    name: "Select",
    data() {
        return {
            theme: this.$store.state.general.theme,
            isShowItemList: false,
        };
    },
    components: {
        List
    },
    methods: {
        handleUpdated(value) {
            this.isShowItemList = false;
            this.$emit("dataUpdated", value);
        },
    },
    props: {
        title: String,
        itemList: Array,
    },
};
</script>

<style scoped>
.select {
    display: block;
    margin: 5px;
    position: relative;
}
label {
    display: block;
    border-radius: 5px;
    overflow-y: hidden;
    overflow-x: hidden;
}
label:hover {
    cursor: pointer;
}
p {
    display: inline;
    line-height: 35px;
    padding-left: 10px;
}
i {
    float: right;
    line-height: 35px;
    margin-right: 10px;
}
.flipped {
    transform: rotate(180deg);
}
ul {
    position: absolute;
    top: 100%;
    width: 100%;
}
/* light theme */
.light label {
    background-color: var(--l-background-3);
}
.dark i {
    color: var(--l-text);
}
/*  Dark theme */
.dark label {
    background-color: var(--d-background-3);
}
.dark i {
    color: var(--d-text);
}
</style>