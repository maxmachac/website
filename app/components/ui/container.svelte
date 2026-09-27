<svelte:options tag="main-container" />

<div class="container">
  <slot />
</div>

<style>
    .container {
        display: flex;
        justify-content: space-evenly; /* Rozdelí voľné miesto rovnomerne okolo každého prvku */
        align-items: center; 
        padding: 1%;
    }
</style>