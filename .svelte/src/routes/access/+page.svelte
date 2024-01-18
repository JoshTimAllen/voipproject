<script>
    export const ssr = false;
    import Loginform from "../../components/loginform.svelte";
    // import { Router, Route, Link } from "yrv";
    import Registerform from "../../components/registerform.svelte";
    export let data;
    var registerFormActive = false;
</script>

<!-- <svelte:component this={Loginform} /> -->
<!-- <Router>
    <Route path="/access/login" component={Loginform} />
    <Route path="/access/register" component={Registerform} />
</Router> -->
<button
    on:click={() => {
        registerFormActive = !registerFormActive;
    }}
>
    {#if registerFormActive}
        Login
    {:else}
        Register
    {/if}
</button>

{#if !registerFormActive}
    <svelte:component this={Loginform} />
{:else}
    <svelte:component this={Registerform} />
{/if}
{JSON.stringify(data)}
<!-- <svelte:component this={Loginform} /> -->
