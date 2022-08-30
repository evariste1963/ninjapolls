<script>
  //import { onMount, onDestroy } from "svelte";
  import PollStore from "../stores/PollStore";
  import PollDetails from "./PollDetails.svelte";

  //export let polls = [];

  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // lifecycle hooks -- old way
  //   onMount(()=> {
  //   // maybe get data from db
  //  })
  // onDestroy(() => {
  //   unsub();
  // });
</script>

<!-- $PollStore below subcribes and unsubscribes from the store implicitly -->

{#if $PollStore.length < 1}
  <h4 style="text-align:center"
    >there are no Polls to show, try creating one!</h4
  >
{:else}
  <div class="poll-list">
    {#each $PollStore as poll (poll.id)}
      <PollDetails {poll} />
    {/each}
  </div>
{/if}

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  h4 {
    font-style: italic;
    color: #272727;
    font-weight: 400;
  }
</style>
