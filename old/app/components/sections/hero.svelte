<svelte:options tag="hero-section" />

<section id="hero" aria-labelledby="hero-section">
  <div id="hero-content">
    <img id="image" src="website/app/assets/me.jpg" alt="Hero Image" />
    <div id="text">
      <h1 id="hero-section">Hi I'm Max</h1>
      <p>
        I'am FrontEnd DEV using this techstack:
      </p>
      <ul>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Svelte</li>
        <li>SvelteKit</li>
        <li>HTML</li>
        <li>Vanila</li>
      </ul>
    </div>
  </div>
</section>

<style>
  #image {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 15px;
  }

  #hero {
    width: 98%;
    margin: 1%;
    background: transparent;
    border-radius: 25px;
  }

  #hero-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "image text";
  gap: var(--1);
  align-items: center;
  padding: 5%;
  }

  #image {
    grid-area: image;
    justify-self: center;
  }

  #text {
    grid-area: text;
    --layer-color: #1e1e1e;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    list-style: none;
    border: 1px solid #555;
    border-radius: 8px;
    overflow: hidden;
    margin-top: var(--1);
  }

  li {
    padding: var(--1);
    border-right: 1px solid #555;
    border-bottom: 1px solid #555;
  }

  li:nth-child(even) {
    border-right: 0;
  }

  li:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  @media (max-width: 700px) {
    #hero-content {
      grid-template-columns: 1fr;
      grid-template-areas:
        "image"
        "text";
    }
  }
</style>