import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 1. Cấu hình cho Docker nhận diện tốt hơn trên Mac M3
  server: {
    host: '0.0.0.0', // Cho phép truy cập từ bên ngoài container
    port: 5173,
    watch: {
      usePolling: true, // Ép Vite quét file liên tục để Hot-Reload mượt mà trên Docker Mac
    },
  },

  // 2. Tạo đường dẫn viết tắt dấu @ thay cho src/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})