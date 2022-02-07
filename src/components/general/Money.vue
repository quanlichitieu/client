<template>
    <span class="money"> {{ getAmount }} </span>
</template>

<script>
import moneyFormatter from "../../utils/moneyFormatter";
import { USDto, toUSD } from "../../utils/moneyConverter";

export default {
    name: "Money",
    data() {
        return {
            theme: this.$store.state.general.theme,
        };
    },
    props: {
        amount: {
            //in USD
            type: Number,
            required: true,
        },
        negativeDisable: Boolean,
        colorDisable: Boolean,
        currency: {
            type: String,
            default: "USD",
        },
    },
    computed: {
        getAmount() {
            let moneyFormatted = moneyFormatter(
                USDto(this.currency, this.amount),
                this.currency
            );
            if (this.negativeDisable)
                moneyFormatted = moneyFormatted.replace("-", "");
            return moneyFormatted;
        },
    },
    mounted() {
        const el = this.$el;
        if (this.colorDisable) el.classList.add(this.theme);
        else if (this.amount < 0) el.classList.add("red");
        else if (this.amount > 0) el.classList.add("green");
    },
    watch: {
        amount() {
            if (this.colorDisable) return;
            const el = this.$el;
            if (this.amount < 0) {
                el.classList.remove("green");
                el.classList.add("red");
            } else if (this.amount > 0) {
                el.classList.remove("red");
                el.classList.add("green");
            } else {
                el.classList.remove("red");
                el.classList.remove("green");
            }
        },
    },
};
</script>

<style scoped>
.money {
    display: inline;
}
.light {
    color: var(--l-text);
}
.dark {
    color: var(--d-text);
}
.red {
    color: var(--color-red);
}
.green {
    color: var(--color-green);
}
</style>