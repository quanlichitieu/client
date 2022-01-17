<template>
    <div class="home">
        <h1>home</h1>
        <Button text="Launch" :isLoading="isLoading" @click="this.isLoading = !this.isLoading" @closeModal="this.isLoading = false"/>
        <p>1</p>
        <Keyval keyText="name" valText="Nguyen Tung Lam" keyWidth="70px" />
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>

        <ModalBox title="Model box" :isShow="isLoading" @closeModal="isLoading = !isLoading" modalWidth="80%">
            <Keyval keyText="name" valText="Nguyen Tung Lam" />
            <Keyval keyText="age" valText="18" />
            <Keyval keyText="email" valText="abc@gmail.com" />
            <div>
                <Button text="Cancel" />
                <Button text="Save" />
            </div>
        </ModalBox>
    </div>
</template>

<script>
import Button from "../components/general/Button";
import Keyval from "../components/general/Keyval";
import ModalBox from "../components/general/ModalBox.vue";

export default {
    name: "Home",
    data() {
        return {
            isLoading: false,
        };
    },
    method: {},
    components: {
        Button,
        Keyval,
        ModalBox,
    },
};
</script>
<style scoped>
</style>