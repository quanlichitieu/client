<template>
    <div class="forgotPassword light">
        <div class="card">
            <div class="content-group">
                <img src="../../assets/logo.png" alt="qlct" />
                <h2>recover your password</h2>
                <form @submit="submitForm">
                    <Input
                        label="Email"
                        type="email"
                        :disabled="isLoading"
                        :required="true"
                        placeholder="Enter your email"
                        @dataUpdated="updateEmail"
                    />
                    <p class="error">{{ error }}</p>
                    <Button text="Recovery" :isLoading="isLoading" />
                </form>
            </div>
        </div>

        <div class="overlay-right">
            <div class="text">
                <h2>Where are my money ?</h2>
                <p>
                    qlct, the #1 web app for managing the income and expense for
                    your work and personal use.
                </p>
            </div>
            <div class="shape a"></div>
            <div class="shape b"></div>
            <div class="shape c"></div>
            <div class="shape d"></div>
            <div class="shape e"></div>
            <div class="shape f"></div>
        </div>
        <Alert
            :message="$store.state.general.alertMessage"
            :isShow="$store.state.general.showAlert"
        />
    </div>
</template>

<script>
import axios from "axios";
import sha256 from "sha256";

import Input from "../../components/general/Form/Input";
import Button from "../../components/general/Button";
import Alert from "../../components/general/Alert";
import {
    nameValidation,
    emailValidation,
    passwordValidation,
} from "../../utils/formValidation.js";
import { errorHandler } from "../../helper/errorHandler";

export default {
    name: "forgotPassword",
    data: () => ({
        form: {
            email: "",
        },
        isLoading: false,
        error: "",
    }),
    components: {
        Input,
        Button,
        Alert,
    },
    methods: {
        updateEmail(email) {
            this.form.email = email;
        },
        submitForm(e) {
            e.preventDefault();
            if (this.isLoading) return;
            if (emailValidation(this.form.email)) {
                this.error = emailValidation(this.form.email);
                return;
            }

            this.error = "";
            this.isLoading = true;

            axios
                .post(
                    `${process.env.VUE_APP_API_URL}/api/user/forgotPassword`,
                    {
                        email: this.form.email,
                    }
                )
                .then((response) => {
                    const data = response.data;
                    if (data.success) {
                        this.$router.push("/email-sent");
                    } else {
                        throw new Error(data.message);
                    }
                })
                .catch((error) => {
                    this.isLoading = false;
                    errorHandler(error)
                });
        },
    },
    created() {
        if (localStorage.getItem("theme") === "dark")
            this.$store.dispatch("general/setTheme", "light");
    },
    watch: {
        error() {
            if (this.error !== "")
                setTimeout(() => {
                    this.error = "";
                }, 5000);
        },
    },
};
</script>

<style>
.forgotPassword {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #e8ecf5;
}
.card {
    position: absolute;
    top: 8%;
    bottom: 8%;
    left: 8%;
    right: 8%;
    border-radius: 10px;
    background: #f5f6fa;
    box-shadow: 0px 0px 5px #dddddd;
}
.content-group {
    position: relative;
    width: 50%;
    height: 100%;
    padding: 4% 10px 0 10px;
    overflow-y: hidden;
}
.content-group > * {
    display: block;
    margin: auto;
    text-align: center;
}
.content-group img {
    width: 60px;
    margin-bottom: 5% !important;
}
.content-group h2 {
    font-weight: bold;
    margin-bottom: 5% !important;
}

.error {
    color: red !important;
}
.reset-password {
    width: 100%;
    overflow: hidden;
}
.reset-password a {
    float: right;
    margin-right: 5px;
}
.login-redirect {
    display: block;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
}

.overlay-right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    background-color: #696969ab;
}
.overlay-right .text {
    display: block;
    position: absolute;
    width: 60%;
    top: 30%;
    margin-left: 10%;
}
.overlay-right h2 {
    color: white;
    font-size: 3em;
    margin-bottom: 10px;
}
.overlay-right p {
    color: white;
}
.overlay-right .shape {
    position: absolute;
    background-color: #8b8b8bab;
}
.overlay-right .shape.a {
    top: calc(30% - 80px);
    left: 10%;
    width: 10%;
    aspect-ratio: 1/1;
    clip-path: polygon(100% 0, 5% 49%, 53% 100%);
}
.overlay-right .shape.b {
    top: 19%;
    left: 50%;
    width: 10%;
    aspect-ratio: 1/1;
    clip-path: circle(35.8% at 50% 50%);
}
.overlay-right .shape.c {
    top: 11%;
    left: 60%;
    width: 17%;
    aspect-ratio: 1/1;
    clip-path: circle(50.7% at 50% 50%);
}
.overlay-right .shape.d {
    top: 70%;
    left: 10%;
    width: 10%;
    aspect-ratio: 1/1;
    clip-path: circle(40.7% at 50% 50%);
}
.overlay-right .shape.e {
    top: 68%;
    left: 50%;
    width: 15%;
    aspect-ratio: 1/1;
    clip-path: polygon(35% 0, 0 30%, 72% 51%);
}
.overlay-right .shape.f {
    top: 73%;
    left: 60%;
    width: 20%;
    aspect-ratio: 1/1;
    clip-path: polygon(26% 12%, 64% 100%, 100% 65%);
}
</style>