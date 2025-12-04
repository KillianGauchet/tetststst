import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Définissez le nom de domaine de votre application Render ici
// Remplacer 'react-app-s1pa.onrender.com' par votre URL si elle est différente
const RENDER_EXTERNAL_URL = 'react-app-s1pa.onrender.com';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 1. Permet au serveur Vite d'écouter toutes les interfaces réseau (nécessaire sur Render)
    host: '0.0.0.0',

    // 2. Ajoute votre nom de domaine Render à la liste blanche des hôtes autorisés
    allowedHosts: [
      RENDER_EXTERNAL_URL
    ]
  }
});