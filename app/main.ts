// Global code
import '../styles/app.css';
import flamethrower from 'flamethrower-router';
import { scrollSave } from './util/scroll';
import './util/key-bindings';

window.addEventListener('flamethrower:router:end', (e) => {
    GAPageView()
});
  

// saves scroll position on navbar
scrollSave();

// handles passwordless signin
passwordlessSignin();

// Router
export const router = flamethrower({ prefetch: 'hover', log: false });


// All web components must be exported here
export * from './components/test.svelte';

