import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        invest: resolve(__dirname, 'invest/index.html'),
        provider: resolve(__dirname, 'provider/index.html'),
        deleteData: resolve(__dirname, 'delete-data/index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy/index.html'),
        termsOfService: resolve(__dirname, 'terms-of-service/index.html'),
        thankyou: resolve(__dirname, 'thankyou/index.html'),
        investSuccess: resolve(__dirname, 'invest-success/index.html'),
        providerThankyou: resolve(__dirname, 'provider-thankyou/index.html'),
        deleteDataSuccess: resolve(__dirname, 'delete-data-success/index.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
        }
      }
    }
  }
})
