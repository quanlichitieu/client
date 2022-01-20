<template>
    <div :class="'form-listSearch ' + getTheme">
        <label class="search">
            <div class="icon">
                <i class="fas fa-search"></i>
            </div>
            <input type="text" v-model="searchData" />
        </label>
        <div class="list" v-if="filterItem.length != 0">
            <List
                :listData="filterItem"
                @dataUpdated="dataChange"
                :selected="selected"
                :disabled="disabled"
            />
        </div>
        <div class="list not-found" v-else>
            <p>Not found :(</p>
        </div>
    </div>
</template>

<script>
import List from "./List";

export default {
    name: "ListSearch",
    data() {
        return {
            theme: this.$store.state.general.theme,
            data: "",
            searchData: "",
        };
    },
    props: {
        listData: Array,
        selected: String,
        disabled: Boolean,
    },
    components: {
        List,
    },
    methods: {
        dataChange(value) {
            this.data = value;
        },
    },
    computed: {
        getTheme() {
            return this.theme === "light" ? "light" : "dark";
        },
        filterItem() {
            return this.listData.filter((item) => {
                return (
                    item
                        .toLowerCase()
                        .indexOf(this.searchData.toLowerCase()) !== -1
                );
            });
        },
    },
    watch: {
        data() {
            this.$emit("dataUpdated", this.data + "");
        },
    },
    mounted() {
        // handle input focus
        // add box shadow to the search box
        const dom = this.$el;
        const search = dom.getElementsByTagName("label")[0];
        const input = dom.getElementsByTagName("input")[0];
        let boxShadowStyle = ""
        if (this.theme === "light")
            boxShadowStyle = "0px 0px 5px rgba(33, 33, 33)";
        else
            boxShadowStyle = "0px 0px 5px rgba(233, 233, 233)";
        input.addEventListener("focus", () => {
            search.style.boxShadow = boxShadowStyle;
        });
        input.addEventListener("blur", () => {
            search.style.boxShadow = "none";
        });
    },
};
</script>

<style scoped>
/*   general   */
.form-listSearch {
    position: relative;
    margin: 5px;
    height: 100%;
}
.search {
    display: block;
    width: 80%;
    height: 35px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 50px;
    box-shadow: none;
}
.icon {
    display: inline-block;
    width: 10%;
    height: 100%;
    vertical-align: top;
}
i {
    line-height: 29px;
    margin-left: 5px;
}
input {
    display: inline-block;
    height: 100%;
    width: 85%;
    font-size: var(--text-font-size);
    outline: none;
    border: none;
}
.list {
    width: 100%;
    height: calc(100% - 55px);
    overflow-y: overlay;
}
.not-found p {
    text-align: center;
}
/* ___________ */
/* light theme */
.light i {
    color: var(--l-text);
}
.light input {
    color: var(--l-text);
}
.light .search {
    border: 3px solid var(--l-background-3);
}
.light .search:hover {
    box-shadow: 0px 0px 5px rgba(33, 33, 33);
}
.light .search {
    background-color: var(--l-background-3);
}
.light input {
    background-color: var(--l-background-3);
}
/* ___________ */
/*  dark theme */
.dark i {
    color: var(--d-text);
}
.dark input {
    color: var(--d-text);
}
.dark .search {
    border: 3px solid var(--d-background-3);
}
.dark .search:hover {
    box-shadow: 0px 0px 5px rgba(233, 233, 233) !important;
}
.dark .search {
    background-color: var(--d-background-3);
}
.dark input {
    background-color: var(--d-background-3);
}
/* ___________ */
</style>