<script>
    import Loginform from "../../components/loginform.svelte";
    import { Router, Route, Link } from "yrv";
    import Registerform from "../../components/registerform.svelte";
    import { onMount } from "svelte";
    import { redirect } from "@sveltejs/kit";
    import { goto } from "$app/navigation";
    export let data;
    var registerFormActive = false;
    // onMount(async () => {
    if (
        window.location.hash != "#login" &&
        window.location.hash != "#register"
    ) {
        window.location.hash = "login";
    }
    // });
</script>

<!-- <svelte:component this={Loginform} /> -->
<Router>
    <Route path="/access#login" component={Loginform} />
    <Route path="/access#register" component={Registerform} />
    <Route path="/access#:path" component={Loginform} />
    <Route path="/access:path" component={Loginform} />
</Router>
<!-- <button
    on:click={() => {
        registerFormActive = !registerFormActive;
    }}
>
    {#if registerFormActive}
        Login
    {:else}
        Register
    {/if}
</button> -->

<!-- {#if !registerFormActive}
    <svelte:component this={Loginform} bind:registerFormActive />
{:else}
    <svelte:component this={Registerform} bind:registerFormActive />
{/if} -->
{JSON.stringify(data)}
<!-- <svelte:component this={Loginform} /> -->
