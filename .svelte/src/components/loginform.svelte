<script>
    import { goto } from "$app/navigation";
    import { redirect } from "@sveltejs/kit";
    import {
        useForm,
        validators,
        HintGroup,
        Hint,
        email,
        required,
    } from "svelte-use-form";

    export var registerFormActive = false;

    const form = useForm();

    var username = "";
    var emailAddress = "";
    var password = null;

    async function doPost() {
        fetch("/login", {
            // mode: "no-cors",
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            goto("/");
        });
    }
</script>

<pre>
  <!-- {JSON.stringify($form, null, " ")} -->
  </pre>

<div class="container">
    <div class="d-flex justify-content-center h-100">
        <div class="card">
            <div class="card-header">
                <h3>Sign In</h3>
                <div class="d-flex justify-content-end social_icon">
                    <span><i class="fab fa-facebook-square"></i></span>
                    <span><i class="fab fa-google-plus-square"></i></span>
                    <span><i class="fab fa-twitter-square"></i></span>
                </div>
            </div>
            <div class="card-body">
                <form use:form>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"
                                ><i class="fas fa-user"></i></span
                            >
                        </div>
                        <input
                            class="form-control"
                            type="username"
                            name="username"
                            bind:value={username}
                            use:validators={[required]}
                        />
                    </div>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"
                                ><i class="fas fa-key"></i></span
                            >
                        </div>
                        <input
                            class="form-control"
                            type="password"
                            name="password"
                            bind:value={password}
                            use:validators={[required]}
                        />

                        <Hint for="password" on="required"
                            >This is a mandatory field</Hint
                        >
                    </div>

                    <div class="row align-items-center remember">
                        <input type="checkbox" />Remember Me
                    </div>
                    <div class="form-group">
                        <input
                            type="submit"
                            value="Login"
                            class="btn float-right login_btn"
                            on:click={doPost}
                            disabled={!$form.valid}
                        />
                    </div>
                </form>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-center links">
                    Don't have an account?<a href="#register">Register</a>
                </div>
                <div class="d-flex justify-content-center">
                    <a href="#">Forgot your password?</a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }
    /* Made with love by Mutiullah Samim*/

    @import url("https://fonts.googleapis.com/css?family=Numans");

    html,
    body {
        background-image: url("http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg");
        background: rgb(61, 61, 61);
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        font-family: "Numans", sans-serif;
    }

    .container {
        height: 100%;
        align-content: center;
    }

    .card {
        height: 370px;
        margin-top: auto;
        margin-bottom: auto;
        width: 400px;
        background-color: rgba(0, 0, 0, 0.5) !important;
    }

    .social_icon span {
        font-size: 60px;
        margin-left: 10px;
        color: #ffc312;
    }

    .social_icon span:hover {
        color: white;
        cursor: pointer;
    }

    .card-header h3 {
        color: white;
    }

    .social_icon {
        position: absolute;
        right: 20px;
        top: -45px;
    }

    .input-group-prepend span {
        width: 50px;
        background-color: #ffc312;
        color: black;
        border: 0 !important;
    }

    input:focus {
        outline: 0 0 0 0 !important;
        box-shadow: 0 0 0 0 !important;
    }

    .remember {
        color: white;
    }

    .remember input {
        width: 20px;
        height: 20px;
        margin-left: 15px;
        margin-right: 5px;
    }

    .login_btn {
        color: black;
        background-color: #ffc312;
        width: 100px;
    }

    .login_btn:hover {
        color: black;
        background-color: white;
    }

    .links {
        color: white;
    }

    .links a {
        margin-left: 4px;
    }
</style>
