<template>
    <div :class="'tab-bar ' + getTheme">
        <div class="nav">
            <div
                v-for="(item, index) in tabBarList"
                :class="'nav-item ' + (selected === item ? 'selected' : '')"
                :key="index"
                @click="selected = item"
            >
                <p>{{ item }}</p>
            </div>
        </div>
        <div class="content">
            <div
                v-for="(item, index) in tabBarList"
                :key="index"
                :class="'content-item ' + item"
                v-show="item===selected"
            >
                <slot :name="item"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabBar",
    data() {
        return {
            theme: this.$store.state.general.theme,
            selected: this.tabBarList[0],
        };
    },
    props: {
        tabBarList: Array,
    },
    computed: {
        getTheme() {
            return this.theme === "light" ? "light" : "dark";
        },
    },
};
</script>

<style scoped>
/*   general   */
.tab-bar {
    position: relative;
    margin: 5px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.tab-bar .nav {
    display: table;
    table-layout: fixed;
    width: 100%;
    height: 35px;
}
.tab-bar .nav .nav-item {
    display: table-cell;
    width: 2%;
    text-align: center;
    line-height: 35px;
}
.tab-bar .nav .nav-item:hover {
    cursor: pointer;
}
.tab-bar .nav .nav-item:first-child {
    border-top-left-radius: 5px;
}
.tab-bar .nav .nav-item:last-child {
    border-top-right-radius: 5px;
}
.tab-bar .content {
    margin-top: 35px;
    width: 100%;
    height: calc(100% - 76px);
}
.tab-bar .content .content-item {
    width: 100%;
    height: 100%;
}
/* ___________ */
/* light theme */
.light .tab-bar {
    background-color: var(--l-background-2);
}
.light  .tab-bar .nav .nav-item {
    border: 3px solid var(--l-background-3);
}
.light  .tab-bar .nav .selected {
    background-color: var(--l-background-3);
}
/* ___________ */
/*  dark theme */
.dark .tab-bar {
    background-color: var(--d-background-2);
}
.dark  .tab-bar .nav .nav-item {
    border: 3px solid var(--d-background-3);
}
.dark  .tab-bar .nav .selected {
    background-color: var(--d-background-3);
}
/* ___________ */
</style>