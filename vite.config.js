import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        invest: resolve(__dirname, 'invest.html'),
        provider: resolve(__dirname, 'provider.html'),
        deleteData: resolve(__dirname, 'delete-data.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        termsOfService: resolve(__dirname, 'terms-of-service.html'),
        thankyou: resolve(__dirname, 'thankyou.html'),
        investSuccess: resolve(__dirname, 'invest-success.html'),
        providerThankyou: resolve(__dirname, 'provider-thankyou.html'),
        deleteDataSuccess: resolve(__dirname, 'delete-data-success.html')
      }
    }
  }
})
