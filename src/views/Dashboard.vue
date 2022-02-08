<template>
    <div :class="'dashboard ' + theme">
        <LoadingScreen v-if="loading" />
        <div class="content" v-else>
            <div class="column-1">
                <WalletInfo
                    :tradeList="getTradeByYearAndMonth"
                    :yearList="getAllYear"
                />
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
    computed: {
        getTradeByYear() {
            return this.tradeList.filter(
                (trade) =>
                    parseInt(trade.date.substring(6, 10)) ==
                    this.$store.state.wallet.currentYear
            );
        },
        getTradeByMonth() {
            return this.tradeList.filter(
                (trade) => 
                    parseInt(trade.date.substring(3, 5)) ==
                    this.$store.state.wallet.currentMonth
            );
        },
        getTradeByYearAndMonth() {
            return this.tradeList.filter(
                (trade) =>
                    parseInt(trade.date.substring(6, 10)) ==
                    this.$store.state.wallet.currentYear
            ).filter(
                (trade) => 
                    parseInt(trade.date.substring(3, 5)) ==
                    this.$store.state.wallet.currentMonth
            );
        },
        getAllYear() {
            const yearList = [];
            this.tradeList.map((trade) => {
                let year = parseInt(trade.date.substring(6, 10));
                if (!yearList.includes(year)) yearList.push(year);
            });
            if (yearList.includes(this.$store.state.wallet.currentYear))
                yearList.splice(
                    yearList.indexOf(this.$store.state.wallet.currentYear),
                    1
                );
            return yearList;
        },
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
    width: 20%;
    padding: 0 10px 10px 10px;
}
.column-2 {
    border: 1px solid blue;
    width: 80%;
    padding: 0 10px 10px 10px;
}
@media screen and (min-width: 1200px) {
    .column-1 {
        width: 240px;
    }
    .column-2 {
        width: calc(100% - 240px);
    }
}
</style>