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
    display: block;
    width: 100%;
    --layer-color: #6ebe23;
    --shade-color: color-mix(in srgb, var(--layer-color), black 60%);
    isolation: isolate;
  }

  .layer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 15px;
    color: white;
    background-color: var(--layer-color);
    transition: all 0.025s ease-in-out;
  }

   .layer:hover {
    transform: translateY(-0px);
  }

  .layer:active {
    transform: translate(10px, 10px);
  }

  .shade {
    position: absolute;
    top: 10px;
    transform: translate(-9.75px, -9.75px);
    left: 10px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    background-color: var(--shade-color);
    border-radius: 17.5px;
    z-index: -1;
    pointer-events: none;
  }
</style>
