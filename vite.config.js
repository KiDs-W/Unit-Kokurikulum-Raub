// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        kertasKerja: './kertasKerja.html',
        borang: './borang.html',
        jadual: './jadual.html',
        surat: './surat.html',
        manual: './manual.html'
      }
    }
  }
}