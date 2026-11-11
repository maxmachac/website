import '../styles/app.css';
import flamethrower from 'flamethrower-router';
import './util/key-bindings';

// Router
export const router = flamethrower({ prefetch: 'hover', log: false });


// All web components must be exported here

// UI
export * from './components/ui/layer.svelte';
export * from './components/ui/headder.svelte'
// Sections
export * from './components/sections/hero.svelte';
// Pages
export * from './components/pages/main.svelte'


