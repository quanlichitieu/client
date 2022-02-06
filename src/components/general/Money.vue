<template>
    <span class="money"> {{ getAmount }}{{ getCurrency }} </span>
</template>

<script>
export default {
    name: "Money",
    data() {
        return {
            theme: this.$store.state.general.theme,
        };
    },
    props: {
        amount: {
            type: Number,
            required: true,
        },
        negativeDisable: Boolean,
        colorDisable: Boolean,
    },
    computed: {
        getCurrency() {
            return this.$store.state.user.user.currencyUnit;
        },
        getAmount() {
            if (!this.negativeDisable)
                return +this.amount.toFixed(5);
            else
                return -this.amount.toFixed(5);
        }
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