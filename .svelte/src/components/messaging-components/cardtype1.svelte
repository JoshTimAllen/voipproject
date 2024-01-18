<script>
    import { Card_Type_1_Model } from "../component_models.js";
    export var model = new Card_Type_1_Model();
</script>

<a href="#" class="list-group-item list-group-item-action border-0">
    {#if model.messageCount > 0}
        <div class="badge bg-success float-right">5</div>
    {/if}
    <div class="d-flex align-items-start">
        <img
            src={model.imageSrc}
            class="rounded-circle mr-1"
            alt={model.username}
            width="40"
            height="40"
        />
        <div class="flex-grow-1 ml-3">
            {model.username}
            <div class="small">
                <span class="fas fa-circle chat-online"></span>
                {model.displayMsg}
            </div>
        </div>
    </div>
</a>
