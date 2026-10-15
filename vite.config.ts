import {defineConfig,lazyPlugins} from 'vite-plus'
import {tanstackStart} from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import {nitro} from 'nitro/vite'
import {readFileSync} from 'node:fs'
const journals=JSON.parse(readFileSync('src/content/journal.generated.json','utf8')).map((entry:{id:string})=>({path:`/Journal/${entry.id}/`}))
export default defineConfig({resolve:{tsconfigPaths:true,dedupe:['react','react-dom']},ssr:{noExternal:true},plugins:lazyPlugins(()=>[
 tailwind(),tanstackStart({pages:[...['/','/404/','/Journal/','/about/','/credits/','/tech/','/yoga/','/art/'].map(path=>({path})),...journals],prerender:{enabled:true,failOnError:true,crawlLinks:false,filter:({path})=>!path.includes('?')&&!path.includes('#')}}),react(),nitro()
])})
