<script>
    import {
        useForm,
        validators,
        HintGroup,
        Hint,
        email,
        required,
    } from "svelte-use-form";

    const form = useForm();

    var username = "";
    var emailAddress = "";
    var password = null;

    async function doPost() {
        const res = await fetch("/register", {
            // mode: "no-cors",
            method: "POST",
            body: JSON.stringify({
                username: username,
                email: emailAddress,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await res.json();
        var result = JSON.stringify(json);
        console.log(result);
    }
</script>

<form use:form>
    <h1>Register</h1>

    <input
        type="username"
        name="username"
        bind:value={username}
        use:validators={[required]}
    />
    <br />
    <input
        type="email"
        name="email"
        bind:value={emailAddress}
        use:validators={[required, email]}
    />
    <HintGroup for="email">
        <Hint on="required">This is a mandatory field</Hint>
        <Hint on="email" hideWhenRequired>Email is not valid</Hint>
    </HintGroup>
    <br />
    <input
        type="password"
        name="password"
        bind:value={password}
        use:validators={[required]}
    />
    <Hint for="password" on="required">This is a mandatory field</Hint>

    <button on:click={doPost} disabled={!$form.valid}>Register</button>
</form>
<pre>
  <!-- {JSON.stringify($form, null, " ")} -->
  </pre>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }
</style>
