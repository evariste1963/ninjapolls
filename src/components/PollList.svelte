<script>
  //import { onMount, onDestroy } from "svelte";
  import { fly, fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
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
  <div class="noPolls" in:scale|global style="text-align:center">
    there are no Polls to show, try creating one!
  </div>
{:else}
  <div class="poll-list">
    {#each $PollStore as poll (poll.id)}
      <div
        in:fly|global={{ x: 200, delay: 500 }}
        out:fly|global={{ x: -200 }}
        animate:flip={{ duration: 1000 }}
      >
        <PollDetails {poll} />
      </div>
    {/each}
  </div>
{/if}

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .noPolls {
    font-style: italic;
    color: #272727;
    font-weight: 400;
  }
</style>
