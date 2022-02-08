<template>
    <div :class="'wallet-info group-box ' + theme">
        <h3>{{ wallet.walletName }}</h3>
        <h3>
            <Money
                :amount="wallet.walletBalance"
                colorDisable
                :currency="$store.state.user.user.currencyUnit"
            />
        </h3>
        <hr />
        <p class="balanceVolatility">
            <Money
                :amount="balanceVolatility"
                :currency="$store.state.user.user.currencyUnit"
            />
        </p>
        <p class="currentDate">
            {{ $store.state.wallet.currentMonth }}/{{
                $store.state.wallet.currentYear
            }}
        </p>
        <Select
            :title="$store.state.wallet.currentYear.toString()"
            :itemList="getYearList"
            @dataUpdated="handleUpdated"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import Select from "../general/Form/Select";
import Money from "../general/Money";

export default {
    name: "WalletInfo",
    data() {
        return {
            theme: this.$store.state.general.theme,
        };
    },
    components: {
        Select,
        Money,
    },
    methods: {
        handleUpdated(value) {
            this.$store.dispatch("wallet/setCurrentYear", parseInt(value));
        },
    },
    computed: {
        ...mapGetters({
            wallet: "wallet/getCurrentWallet",
        }),
        balanceVolatility() {
            let balanceVolatility = 0;
            this.tradeList.map((trade) => {
                balanceVolatility += trade.amount;
            });
            return balanceVolatility;
        },
        getYearList() {
            if (this.yearList.includes(this.$store.state.wallet.currentYear))
                this.yearList.splice(
                    this.yearList.indexOf(this.$store.state.wallet.currentYear),
                    1
                );
            return this.yearList.sort();
        },
    },
    props: {
        tradeList: Array,
        yearList: Array,
    },
};
</script>

<style scoped>
.wallet-info {
    display: block;
    position: relative;
    padding: 5px;
    text-align: center;
}
hr {
    margin-top: 15px;
    height: 1px;
    outline: none;
    border: none;
    border-radius: 5px;
}
.balanceVolatility {
    margin-top: 10px;
}
/* light theme */
.light hr {
    background: var(--l-line-2);
}
/*  dark theme */
.dark hr {
    background: var(--d-line-2);
}
</style>