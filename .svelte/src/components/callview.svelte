<script>
    import { CallData } from "../.shared/sharedmodels.js";
    let maximize = true;
    export let calldata = new CallData();
    calldata.participants.push({
        username: "hgfyhgjgh",
    });
    calldata.participants.push({
        username: "hgfyhgjgh",
    });
    calldata.participants.push({
        username: "hgfyhgjgh",
    });
    calldata.participants.push({
        username: "hgfyhgjgh",
    });
    calldata.participants.push({
        username: "hgfyhgjgh",
    });
    calldata.participants.push({
        username: "hgfyhgjgh",
    });
    calldata.participants.push({
        username: "hgfyhgjgh",
    });
    export let callerUserName = "";
    export let LeaveCall = () => {};
</script>

{#if maximize}
    <div class="call-view">
        <a
            class="x-off"
            href=""
            on:click={() => {
                maximize = false;
            }}>x</a
        >
        <div class="call-view-container">
            {#each calldata.participants as particpant}
                <div class="caller-display">
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
                    class="btn btn-danger"
                    on:click={() => {
                        LeaveCall();
                    }}>Leave</button
                >
            </div>
        </div>
    </div>
{:else}
    <div class="mini-call-view">
        <a
            href=""
            on:click={() => {
                maximize = true;
            }}>+</a
        >
    </div>
{/if}

<style>
    .call-view {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 6969696969;
        margin: auto;
    }
    .x-off {
        text-decoration: none;
        color: white;
        font-size: 50px;
        right: 0;
        margin-right: 60px;
        position: absolute;
        top: 0;
        float: right;
        z-index: 99999999999;
    }
    .mini-call-view {
        background: rgb(61, 61, 61);
        position: fixed;
        width: 100vw;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 6969696969;
        margin: auto;
        bottom: 0;
    }
    .mini-call-view a {
        text-decoration: none;
        color: white;
        font-size: 50px;
    }
    .call-view-container {
        background: rgb(44, 44, 44);
        width: 95%;
        height: 95%;
        display: inline-flex;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .caller-display {
        position: relative;
        right: 0;
        bottom: 0;
        z-index: 10000;
        max-width: 450px;
        min-width: 350px;
        background: rgb(61, 61, 61);
        max-height: 350px;
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
