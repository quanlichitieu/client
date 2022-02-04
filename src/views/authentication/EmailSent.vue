<template>
    <div class="email-sent">
        <h1>Email sent!</h1>
        <img src="../../assets/mail-send.png" alt="">
        <p>Email has been sent to your email address. Please check your email inbox!</p>
        <p>If you don't receive the email, please check your spam folder.</p>
        <br />
        <router-link to="/login"><a class="link">Login here</a></router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.email-sent {
    text-align: center;
    padding: 100px;
}
img {
    width: 40%;
}
h1 {
    font-size: 2.5rem;
    font-family: "Trebuchet MS", sans-serif;
}
</style>