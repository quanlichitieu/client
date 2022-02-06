<template>
    <div :class="'dashboard ' + theme">
        <LoadingScreen v-if="loading" />
        <div class="content" v-else>Content</div>
        <Alert
            :message="$store.state.general.alertMessage"
            :isShow="$store.state.general.showAlert"
        />
    </div>
</template>

<script>
import LoadingScreen from "../components/LoadingScreen";
import Alert from "../components/general/Alert";
import { apiService } from "../helper/apiService";
import { errorHandler } from "../helper/errorHandler";

export default {
    name: "Dashboard",
    data() {
        return {
            theme: this.$store.state.general.theme,
            loading: true,
        };
    },
    components: {
        LoadingScreen,
        Alert,
    },
    created() {
        apiService("get", "/api/wallet/getWalletByUser")
            .then((data) => {
                console.log(data);
                if (data.success) {
                    this.$store.dispatch("wallet/setWalletList", data.wallet);
                } else {
                    throw new Error(data.message);
                }
            })
            .catch((error) => {
                errorHandler(error);
            });
    },
};
</script>

<style scoped>
</style>