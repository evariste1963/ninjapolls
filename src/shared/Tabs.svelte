<script>
  export let items;
  //export let activeItem;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li>
        <div>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
</style>
