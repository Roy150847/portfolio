"use strict";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    // Set the main entry point for the application
    build: {
        rollupOptions: {
            input: path.resolve(__dirname, 'src/main.jsx'), // Specify the main entry
        },
    },
    server: {
        port: 3000,
    },
});
