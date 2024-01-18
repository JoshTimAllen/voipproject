<script>
    import Voice from "../../components/voice.svelte";

    var userToCall = "";

    let callBind;
    let Call = () => {
        callBind(userToCall);
    };

    let answerBind;
    let Answer = (userToAnswer) => {
        answerBind(userToAnswer);
    };

    let rejectBind;
    let Decline = (userToReject) => {
        rejectBind(userToReject);
    };
    let leaveBind;
    let LeaveCall = () => {
        leaveBind();
    };

    let incomingcalls = [];
</script>

<input type="text" bind:value={userToCall} />

<svelte:component
    this={Voice}
    bind:Call={callBind}
    bind:Answer={answerBind}
    bind:Reject={rejectBind}
    bind:incomingCalls={incomingcalls}
/>

<button on:click={Call}>Call</button>

<br />
<br />

{#each incomingcalls as incomingcall}
    <h1>{incomingcall}</h1>
    <button
        on:click={() => {
            Answer(incomingcall);
        }}>Answer</button
    >
    <button
        on:click={() => {
            Decline(incomingcall);
        }}>Reject</button
    >
    <button
        on:click={() => {
            LeaveCall();
        }}>Leave Call</button
    >
{/each}
