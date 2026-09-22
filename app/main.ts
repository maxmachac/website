console.log(`%c  

.d888 d8b                           888      d8b          
d88P"  Y8P                          888      Y8P          
888                                 888                   
888888 888 888d888 .d88b.  .d8888b  88888b.  888 88888b.  
888    888 888P"  d8P  Y8b 88K      888 "88b 888 888 "88b 
888    888 888    88888888 "Y8888b. 888  888 888 888  888 
888    888 888    Y8b.          X88 888  888 888 888 d88P 
888    888 888     "Y8888   88888P' 888  888 888 88888P"  
                                                 888      
                                                 888      
                                                 888      `, 'font-family:monospace; color: orange;');




// Global code
import '../styles/app.css';
import flamethrower from 'flamethrower-router';
import { scrollSave } from './util/scroll';
import './util/key-bindings';

// saves scroll position on navbar
scrollSave();

// Router
export const router = flamethrower({ prefetch: 'hover', log: false });


// All web components must be exported here


// UI
export * from './components/ui/layer.svelte';
export * from './components/ui/hi-mom.svelte';

