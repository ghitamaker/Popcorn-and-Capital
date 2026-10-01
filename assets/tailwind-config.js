/* ==========================================================================
   POPCORN & CAPITAL — Réglages communs à toutes les pages
   --------------------------------------------------------------------------
   Ce fichier est chargé dans le <head> de chaque page, juste après Tailwind.
   Il contient :
     1. le choix du mode clair / sombre (appliqué avant l'affichage)
     2. la configuration de Tailwind (polices et couleurs)
   Les COULEURS elles-mêmes se règlent dans assets/style.css.
   ========================================================================== */

// 1. MODE CLAIR / SOMBRE : reprend le dernier choix du lecteur,
//    sinon suit le réglage de son appareil.
(function () {
  var choix = null;
  try { choix = localStorage.getItem('theme'); } catch (e) {}
  if (choix === 'dark' || (!choix && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
})();

// 2. CONFIGURATION DE TAILWIND
tailwind.config = {
  darkMode: 'class', // le mode sombre s'active avec la classe "dark" sur <html>
  theme: {
    extend: {
      // Ces noms renvoient aux couleurs définies dans assets/style.css
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)', // fond de page
        ink:   'rgb(var(--ink) / <alpha-value>)',   // texte principal et filets
        muted: 'rgb(var(--muted) / <alpha-value>)', // texte secondaire
        cream: 'rgb(var(--cream) / <alpha-value>)', // fond des encadrés
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
};
