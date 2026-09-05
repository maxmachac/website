import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { readdir, rm, writeFile } from 'fs/promises';
import { resolve } from 'path';

const projectRoot = process.cwd();
const svelteBuild = resolve(projectRoot, 'static/svelte');

// https://vitejs.dev/config/
export default defineConfig({ 
  root: resolve(projectRoot, 'app'),
  build: {
    outDir: svelteBuild,
    emptyOutDir: true,
    assetsDir: '',
    // sourcemap: 'inline', // enable for debugging
  },
  server: {
    port: 4200,
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
  }),
    syncToHugo()
  ]
})

function syncToHugo() {

  return {
    writeBundle: async () => {
      const assets = await readdir(svelteBuild);
      const js = assets.filter(name => name.match(/(index.)(?!.*?esm)(?!.*?css).*\w+/))[0];
      const css = assets.filter(name => name.includes('.css'))[0];
      const token = Math.floor(Math.random() * 69420);
      await Promise.all([
        writeFile(resolve(projectRoot, 'data/svelte.json'), JSON.stringify({ js, css, token })),
        rm(resolve(svelteBuild, 'index.html'))
      ]);
      console.log(`wrote ${js} to hugo data`);
    }
  }
}