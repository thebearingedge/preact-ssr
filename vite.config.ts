import { defineConfig } from "vite";
import ssr from 'vite-plugin-ssr/plugin'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [ssr(), preact()]
})
