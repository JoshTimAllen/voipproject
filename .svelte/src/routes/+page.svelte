<script>
    import { Card_Type_1_Model } from "./../components/component_models.js";
    import Incomingcall from "./../components/messaging-components/incomingcall.svelte";
    import Voice from "./../components/voice.svelte";
    import CardType1 from "../components/messaging-components/cardtype1.svelte";
    import "./files/js/sidebars.js";
    import e from "cors";
    export var data;
    console.log(data);
    var focusUser_username = "";

    var searchResults = [];

    var rightDisplayTag = " main-no-display";
    var leftDisplayTag = "";

    function shiftDisplay(displayLeft = true) {
        if (displayLeft) {
            rightDisplayTag = " main-no-display";
            leftDisplayTag = "";
        } else {
            rightDisplayTag = "";
            leftDisplayTag = " main-no-display";
        }
    }

    var SearchQuery = "";
    async function SearchUser() {
        fetch("/usersearch/" + SearchQuery, {
            // mode: "no-cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (response) => {
                searchResults = await response.json();
                console.log(searchResults);
            })
            .catch((reason) => {
                console.log(reason);
            });
    }
    function GetModel(username = "") {
        let model = new Card_Type_1_Model();
        model.username = username;
        return model;
    }
    let callBind;
    let Call = () => {
        callBind(focusUser_username);
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

<svelte:head>
    <!-- <script
        src="./files/js/sidebars.js"
        on:load={() => console.log("script:load")}
    ></script> -->
</svelte:head>

<svelte:component
    this={Voice}
    bind:Call={callBind}
    bind:Answer={answerBind}
    bind:Reject={rejectBind}
    bind:incomingCalls={incomingcalls}
/>

<div class="page-content h-100">
    <main class="left-content side-main flex w-100 {leftDisplayTag}" style="">
        <div class="d-flex flex-column align-items-stretch flex-shrink-0 w-100">
            <a
                href="/"
                class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
            >
                <svg class="bi me-2" width="30" height="24"
                    ><use xlink:href="#bootstrap" /></svg
                >
                <span class="fs-5 fw-semibold">{"jhj"}</span>
            </a>
            <div class="px-4 d-md-block">
                <div class="d-flex align-items-center">
                    <div class="flex-grow-1">
                        <input
                            bind:value={SearchQuery}
                            on:input={SearchUser}
                            on:change={SearchUser}
                            type="text"
                            class="form-control my-3"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
            <div
                class="list-group list-group-flush border-bottom scrollarea w-100"
            >
                <!-- <a
                href="#"
                class="list-group-item list-group-item-action py-3 lh-tight"
            >
                <div
                    class="d-flex w-100 align-items-center justify-content-between"
                >
                    <strong class="mb-1">List group item heading</strong>
                    <small class="text-muted">Mon</small>
                </div>
                <div class="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                </div>
            </a> -->

                {#each searchResults as searchResult}
                    <a
                        href=""
                        on:click={() => {
                            focusUser_username = searchResult.username;
                            shiftDisplay(false);
                        }}
                    >
                        <svelte:component
                            this={CardType1}
                            model={GetModel(searchResult.username)}
                        /></a
                    >
                {/each}
            </div>
        </div>

        <a
            class="right-arrow"
            style="display: none;"
            href=" "
            on:click={() => {
                shiftDisplay(false);
            }}><i> {">"} </i></a
        >
    </main>
    <main class="right-content {rightDisplayTag}">
        <a
            class="left-arrow"
            style="display: none;"
            href=" "
            on:click={() => {
                shiftDisplay(true);
            }}><i> {"<"} </i></a
        >
        <div class="b-example-divider"></div>
        <div class="w-100" style="height: 100%;">
            <div class="msgcard vh-100 h-100">
                <!-- <div
                        class="left-panel col-12 col-lg-5 col-xl-3 border-right"
                    >
                        <hr class="d-block d-lg-none mt-1 mb-0" />
                    </div> -->
                <div class="right-messaging">
                    <div class="right-messaging-top">
                        <div class="d-flex align-items-center py-1">
                            <div class="position-relative">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                    class="rounded-circle mr-1"
                                    alt="Sharon Lessman"
                                    width="40"
                                    height="40"
                                />
                            </div>
                            <div class="flex-grow-1 pl-3">
                                <strong style="color: white;"
                                    >{focusUser_username}</strong
                                >
                                <div class="text-muted small">
                                    <em style="color: white;">Typing...</em>
                                </div>
                            </div>
                            <div>
                                <button
                                    on:click={Call}
                                    class="btn btn-primary btn-lg mr-1 px-3"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-phone feather-lg"
                                        ><path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                        ></path></svg
                                    ></button
                                >
                                <button
                                    class="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-video feather-lg"
                                        ><polygon points="23 7 16 12 23 17 23 7"
                                        ></polygon><rect
                                            x="1"
                                            y="5"
                                            width="15"
                                            height="14"
                                            rx="2"
                                            ry="2"
                                        ></rect></svg
                                    ></button
                                >
                                <button class="btn btn-light border btn-lg px-3"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-more-horizontal feather-lg"
                                        ><circle cx="12" cy="12" r="1"
                                        ></circle><circle cx="19" cy="12" r="1"
                                        ></circle><circle cx="5" cy="12" r="1"
                                        ></circle></svg
                                    ></button
                                >
                            </div>
                        </div>
                    </div>

                    <div class="right-messaging-middle">
                        <div class="chat-messages h-100">
                            <!-- MESSAGES HERE -->
                        </div>
                    </div>

                    <div
                        class="search-bar-section flex-grow-0 py-3 px-4 border-top"
                    >
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Type your message"
                            />
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<style>
    @import "./css/style.css";
    @import "./css/sidebars.css";
</style>
