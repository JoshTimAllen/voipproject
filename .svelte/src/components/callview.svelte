<script>
    import { CallData } from "../.shared/sharedmodels.js";

    export let calldata = new CallData();
    export let callerUserName = "";
    export let Answer = (callerUserName = "") => {};
    export let Decline = (callerUserName = "") => {};
</script>

{#each calldata.participants as particpant}
    <div class="incoming-call-container">
        <div class="image-container">
            <img
                src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357"
                class="rounded-circle mr-1 incoming-img"
                alt=""
                width="220"
                height="220"
            />
        </div>
        <h3>{particpant["username"]}</h3>
    </div>
{/each}

<div class="button-area">
    <button
        type="button"
        class="btn btn-success"
        on:click={() => {
            Answer(callerUserName);
        }}>Answer</button
    >
    <button
        type="button"
        class="btn btn-danger"
        on:click={() => {
            Decline(callerUserName);
        }}>Decline</button
    >
</div>

<style>
    .incoming-call-container {
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 10000;
        width: 450px;
        background: rgb(61, 61, 61);
        height: 350px;
        margin-right: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .button-area {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
