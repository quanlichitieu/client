<template>
    <div :class="'modal-box ' + getTheme">
        <div class="modal-content" :style="'width: ' + modalWidth + ';'">
            <div class="modal-header">
                <div class="title"></div>
                <h2>{{ titleText }}</h2>
                <i class="fas fa-times" @click="closeModal" title="close"></i>
            </div>
            <div class="modal-hr"></div>
            <div class="modal-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalBox",
    data() {
        return {
            theme: this.$store.state.general.theme,
            titleText: this.title,
        };
    },
    props: {
        title: String,
        isShow: Boolean,
        modalWidth: String,
    },
    methods: {
        closeModal: function () {
            this.$emit("closeModal", false);
        },
    },
    computed: {
        getTheme() {
            return this.theme === "light" ? "light" : "dark";
        },
    },
    watch: {
        isShow() {
            const modal = this.$el;
            console.log(modal);
            if (this.isShow) modal.style.display = "block";
            else modal.style.display = "none";
        },
    },
};
</script>

<style scoped>
.modal-box {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1;
}
.light.modal-box {
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.6);
}
.dark.modal-box {
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.2);
}
.modal-content {
    display: block;
    position: relative;
    width: fit-content;
    height: fit-content;
    border-radius: 5px;
    margin: 50px auto auto;
    padding: 10px;
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.2s;
    animation-name: animate;
    animation-duration: 0.2s;
}
@-webkit-keyframes animate {
    from {
        top: -300px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}
@keyframes animate {
    from {
        top: -300px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}
.modal-header {
    position: relative;
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
}
.modal-header h2 {
    width: 100%;
    text-align: center;
}
.modal-header i {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 18px;
}
.modal-header i:hover {
    cursor: pointer;
}
.modal-hr {
    width: 100%;
    height: 1px;
    border-bottom: 2px solid var(--l-line-2);
}
.modal-body {
    margin-top: 10px;
    width: 100%;
    height: fit-content;
}
.light .modal-content {
    background-color: var(--l-background-2);
    /* border: 3px var(--l-line-1) solid; */
}
.light .modal-header h2 {
    color: var(--l-text);
}
.light .modal-header i {
    color: var(--l-text);
}
.light .modal-hr {
    color: var(--l-line-2);
}

.dark .modal-content {
    background-color: var(--d-background-2);
    /* border: 3px var(--d-line-1) solid; */
}
.dark .modal-header h2 {
    color: var(--d-text);
}
.dark .modal-header i {
    color: var(--d-text);
}
.dark .modal-hr {
    color: var(--d-line-2);
}
</style>    