import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({

	resolve: {
		alias: {
			$image: resolve('./src/assets/img')
		}
	},
	
	css: {
  	preprocessorOptions: {
    	scss: {
      	api: 'modern-compiler',
    	}
  	}
	},
	plugins: [react()],
	base: '/'
})
