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
export * from './components/global-data.svelte';

// User state
export * from './components/users/user-data.svelte';
export * from './components/users/if-pro.svelte';
export * from './components/users/if-user.svelte';
export * from './components/users/if-access.svelte';
export * from './components/users/user-avatar.svelte';

// Progress Tracking
export * from './components/progress/complete-icon.svelte';

// UI
export * from './components/ui/modal-action.svelte';
export * from './components/ui/modal-dialog.svelte';
export * from './components/ui/route-loader.svelte';
export * from './components/ui/toast-message.svelte';
export * from './components/ui/navbar-toggle.svelte';
export * from './components/ui/img-reveal.svelte';
export * from './components/ui/scroll-show.svelte';
export * from './components/ui/discord-count.svelte';
export * from './components/ui/scroll-up.svelte';
export * from './components/ui/hi-mom.svelte';

// Search
export * from './components/search/algolia-search.svelte';

// Video
export * from './components/video/video-player.svelte';
export * from './components/video/autoplay-toggle.svelte'; 

export * from './components/payments/price-select.svelte';


// Shared
export * from './components/ui/loading-spinner.svelte';