<svelte:options tag="add-layer" />

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
    --shade-color: color-mix(in srgb, var(--layer-color), black 60%);
  }

  .layer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    color: white;
    background-color: var(--layer-color);
    transition: all 0.025s ease-in-out;
  }

  .layer:hover {
    transform: translateY(-3px);
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
    background-color: var(--shade-color);
    border-radius: 15px;
    z-index: -1;
    pointer-events: none;
  }
</style>
