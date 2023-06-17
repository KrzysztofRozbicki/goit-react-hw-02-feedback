import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://krzysztofrozbicki.github.io/goit-react-hw-02-feedback/',
});
