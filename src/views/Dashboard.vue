<template>
    <div :class="'dashboard ' + theme">
        <LoadingScreen v-if="loading" />
        <div class="content" v-else>
            <div class="column-1">
                <WalletInfo />
            </div>
            <div class="column-2">content</div>
        </div>
        <Alert
            :message="$store.state.general.alertMessage"
            :isShow="$store.state.general.showAlert"
        />
    </div>
</template>

<script>
import WalletInfo from "../components/dashboard/WalletInfo";
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
            tradeList: [],
        };
    },
    components: {
        LoadingScreen,
        Alert,
        WalletInfo,
    },
    created() {
        apiService("get", "/api/wallet/getWalletByUser")
            .then((data) => {
                console.log(data);
                if (data.success) {
                    this.$store.dispatch("wallet/setWalletList", data.wallet);
                    this.loading = false;
                } else {
                    throw new Error(data.message);
                }
                return apiService("post", "/api/trade/getAllTrade", {
                    walletID:
                        this.$store.getters["wallet/getCurrentWallet"].walletID,
                });
            })
            .then((data) => {
                if (data.success) {
                    this.tradeList = data.tradeList;
                } else {
                    throw new Error(data.message);
                }
            })
            .catch((error) => {
                errorHandler(error);
                this.loading = false;
            });
        setTimeout(() => {
            if (this.loading) errorHandler(new Error("Something went wrong"));
        }, 15000);
    },
};
</script>

<style scoped>
.content {
    border: 1px solid green;
    display: flex;
    flex-direction: row;
}
.column-1 {
    border: 1px solid red;
    width: 200px;
    padding: 0 10px 10px 10px;
}
.column-2 {
    border: 1px solid blue;
    width: calc(100% - 200px);
    padding: 0 10px 10px 10px;
}
</style>