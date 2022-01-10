<template>
    <div class="home">
        <h1>home</h1>
        <Button text="save" :isLoading="isLoading" @click="isLoading = !isLoading"/>
    </div>
</template>

<script>
import Button from '../components/general/Button'

export default {
    name: "Home",
    data() {
        return {
            isLoading: false,
        }
    },
    method: {

    },
    components: {
        Button
    }
};
</script>
<style scoped>
</style>