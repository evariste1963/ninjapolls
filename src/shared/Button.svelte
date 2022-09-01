<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
  export let margin = "margin:20px";
</script>

<button class={type} style={margin} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
    margin: 20px;
    min-width: 100px;
  }
  .primary {
    background: #d91b42;
    color: white;
  }
  .secondary {
    border: 2px solid #45c496;
    background: #45c496;
    color: white;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    background: white;
    color: #d91b42;
    border: 2px solid #d91b42;
  }
  .secondary.inverse {
    background: white;
    color: #45c496;
    border: 2px solid #45c496;
  }
</style>
