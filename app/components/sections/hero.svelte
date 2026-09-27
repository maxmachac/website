<svelte:options tag="hero-section" />


<main-container>
  <add-layer id="image">
    <img src="../../assets/me.jpg" alt="Me" />
  </add-layer>
  <add-layer id="text">
  </add-layer>
</main-container>

<style>
  #image {
    --layer-color: #00ff00;
  }

  #text {
    --layer-color: #1e1e1e;
  }
</style>