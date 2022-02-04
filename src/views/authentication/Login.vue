<template>
    <div class="login light">
        <div class="card">
            <div class="content-group">
                <img src="../../assets/logo.png" alt="qlct" />
                <h2>Sign in to qlct</h2>
                <form @submit="submitForm">
                    <Input
                        label="Email"
                        type="email"
                        :disabled="isLoading"
                        :required="true"
                        placeholder="Enter your email"
                        @dataUpdated="updateEmail"
                    />
                    <Input
                        label="Password"
                        type="password"
                        :disabled="isLoading"
                        :required="true"
                        placeholder="Enter password"
                        @dataUpdated="updatePassword"
                    />
                    <p class="error">{{ error }}</p>
                    <p class="reset-password">
                        <router-link to="/forgot-password"
                            ><a class="link">Reset password</a></router-link
                        >
                    </p>
                    <Button text="Sign up" :isLoading="isLoading" />
                </form>

                <p class="register-redirect">
                    Don't have an account?
                    <router-link to="/register"
                        ><a class="link">Register now!</a></router-link
                    >
                </p>
            </div>
        </div>

        <div class="overlay-left">
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
            :message="alertMessage"
            :isShow="isAlert"
            @closeAlert="isAlert = false"
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
    emailValidation,
    passwordValidation,
} from "../../utils/formValidation.js";

import { authHandler } from "../../helper/errorHandler.js";

export default {
    name: "Login",
    data: () => ({
        form: {
            email: "",
            password: "",
        },
        isLoading: false,
        isAlert: false,
        alertMessage: "",
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
        updatePassword(password) {
            this.form.password = password;
        },
        submitForm(e) {
            e.preventDefault();
            if (this.isLoading) return;

            //validation
            if (emailValidation(this.form.email)) {
                this.error = emailValidation(this.form.email);
                return;
            }
            if (passwordValidation(this.form.password)) {
                this.error = passwordValidation(this.form.password);
                return;
            }

            this.error = "";
            this.isLoading = true;

            console.log(this.form.email + sha256(this.form.password));
            axios
                .post(`${process.env.VUE_APP_API_URL}/api/user/login`, {
                    email: this.form.email,
                    hashPassword: sha256(this.form.password),
                })
                .then((res) => {
                    const { data } = res;
                    if (data.success) {
                        localStorage.setItem("accessToken", data.accessToken);
                        this.$router.push("/dashboard");
                    } else {
                        throw new Error(data.message);
                    }
                })
                .catch((error) => {
                    authHandler(error.response.status)
                    this.isLoading = false;
                    this.alertMessage =
                        typeof error.response === "undefined"
                            ? "Something went wrong"
                            : error.response.data.message;
                    this.isAlert = true;
                });
        },
    },
    computed: {},
    created() {
        if (localStorage.getItem("theme") === "dark")
            this.$store.dispatch("general/setTheme", "light");
    },
    watch: {
        error() {
            if (this.error !== "")
                setTimeout(() => {
                    this.error = "";
                }, 3000);
        },
    },
};
</script>

<style scoped>
.login {
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
    float: right;
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
    color: red;
}
.reset-password {
    width: 100%;
    overflow: hidden;
}
.reset-password a {
    float: right;
    margin-right: 5px;
}
.register-redirect {
    display: block;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
}

.overlay-left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 50%;
    background-color: #696969ab;
}
.overlay-left .text {
    display: block;
    position: absolute;
    width: 60%;
    top: 30%;
    right: 0;
    margin-right: 10%;
}
.overlay-left h2 {
    color: white;
    font-size: 3em;
    margin-bottom: 10px;
    text-align: right;
}
.overlay-left p {
    color: white;
    text-align: right;
}
.shape {
    position: absolute;
    background-color: #8b8b8bab;
}
.shape.a {
    top: calc(30% - 80px);
    left: 20%;
    width: 15%;
    aspect-ratio: 1/1;
    clip-path: polygon(100% 0, 10% 49%, 53% 100%);
}
.shape.b {
    top: 15%;
    left: 50%;
    width: 10%;
    aspect-ratio: 1/1;
    clip-path: circle(35.8% at 50% 50%);
}
.shape.c {
    top: 80%;
    left: 85%;
    width: 10%;
    aspect-ratio: 1/1;
    clip-path: circle(50.7% at 50% 50%);
}
.shape.d {
    top: 70%;
    left: 20%;
    width: 16%;
    aspect-ratio: 1/1;
    clip-path: circle(40.7% at 50% 50%);
}
.shape.e {
    top: 15%;
    right: 10%;
    width: 15%;
    aspect-ratio: 1/1;
    clip-path: polygon(35% 0, 0 30%, 72% 51%);
}
.shape.f {
    top: 60%;
    left: 70%;
    width: 20%;
    aspect-ratio: 1/1;
    clip-path: polygon(26% 12%, 64% 100%, 100% 65%);
}
</style>