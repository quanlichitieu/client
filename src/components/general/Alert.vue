<template>
    <div class="alert" v-if="isShow">
        <h3>{{ message }}</h3>
        <i class="fas fa-times" @click="closeAlert" title="close"></i>
    </div>
</template>

<script>
export default {
    name: "Alert",
    props: {
        message: String,
        isShow: Boolean,
    },
    methods: {
        closeAlert() {
            this.$store.dispatch("general/setAlert", {
                status: false,
            });
        },
    },
};
</script>

<style>
.alert {
    display: block;
    position: fixed;
    width: 80%;
    height: 80px;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff4336;
    border-radius: 5px;
}
.alert h3 {
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    line-height: 80px;
    margin: 0;
}
.alert i {
    color: #fff;
    font-size: 1.5em;
    display: block;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
.alert i:hover {
    cursor: pointer;
}
</style>