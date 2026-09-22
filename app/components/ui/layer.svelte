<svelte:options tag="add-layer" />

<script lang="ts">
</script>

<div class="layer-container">
  <div class="layer">
    <slot />
  </div>
  <div class="shade"></div>
</div>

<style>
  .layer-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .layer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    color: white;
    background-color: black;
    transition: all 0.025s ease-in-out;
  }

  .layer:hover {
    transform: translateY(-4px);
  }

  .layer:active {
    transform: translateY(10px);
  }

  .shade {
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    z-index: -1;
    pointer-events: none;
  }
</style>
