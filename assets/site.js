/* ==========================================================================
   POPCORN & CAPITAL — Fonctionnement des pages (aucune modification nécessaire)
   --------------------------------------------------------------------------
     1. Bouton mode clair / sombre
     2. Affichage des cartes à partir de contenus.js, avec :
        - le tri (plus récents / plus anciens d'abord)
        - le filtre par genre sur la page Fiches techniques
   ========================================================================== */
(function () {

  // ---------- 1. MODE CLAIR / SOMBRE ----------
  var boutonTheme = document.getElementById('theme-toggle');
  if (boutonTheme) {
    boutonTheme.addEventListener('click', function () {
      var sombre = document.documentElement.classList.toggle('dark');
      try { localStorage.setItem('theme', sombre ? 'dark' : 'light'); } catch (e) {}
    });
  }

  // ---------- 2. GRILLE DES CONTENUS ----------
  var grille = document.getElementById('grille');
  if (!grille || typeof CONTENUS === 'undefined') return;

  var NOMS_TYPE = {
    'article': 'Article',
    'etude-de-cas': 'Étude de cas',
    'fiche-technique': 'Fiche technique'
  };

  // Quels contenus afficher sur cette page ? (attribut data-type de la grille)
  var typePage = grille.dataset.type || 'tout';
  var contenus = CONTENUS.filter(function (c) {
    return typePage === 'tout' || c.type === typePage;
  });

  var ordre = 'recent';  // tri par défaut : du plus récent au plus ancien
  var genre = null;      // filtre de genre (fiches techniques)

  var compteur = document.getElementById('compteur');
  var vide = document.getElementById('grille-vide');
  var boutonsTri = document.querySelectorAll('[data-ordre]');
  var zoneGenres = document.getElementById('filtres-genre');

  function dateEnFrancais(iso) {
    var d = new Date(iso + 'T12:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function creer(balise, classes, texte) {
    var el = document.createElement(balise);
    if (classes) el.className = classes;
    if (texte) el.textContent = texte;
    return el;
  }

  // Fabrique une carte : image + étiquette + titre + type et date
  function carte(c) {
    var article = creer('article');
    var lien = creer('a', 'group block');
    lien.href = c.lien;

    var cadre = creer('div', 'relative overflow-hidden');
    var img = creer('img', 'w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105');
    img.src = c.image || 'images/etudes-de-cas.svg';
    img.alt = '';
    img.loading = 'lazy';
    var etiquette = c.etiquette || (c.genre ? 'Fiche · ' + c.genre : NOMS_TYPE[c.type] || '');
    cadre.append(img, creer('span',
      'absolute bottom-0 left-1/2 -translate-x-1/2 bg-paper px-6 pt-3 pb-2 text-[10px] font-medium uppercase tracking-[0.25em] whitespace-nowrap',
      etiquette));

    var titre = creer('h3',
      'mt-5 px-4 text-center font-serif text-2xl leading-snug group-hover:underline underline-offset-4 decoration-1',
      c.titre);
    // Espaces insécables avant ? ! : ; (typographie française)
    titre.textContent = (c.titre || '').replace(/ ([?!:;])/g, ' $1');

    var meta = creer('p', 'mt-2 text-center text-[11px] uppercase tracking-[0.2em] text-muted',
      (NOMS_TYPE[c.type] || '') + ' · ' + dateEnFrancais(c.date));

    lien.append(cadre, titre, meta);
    article.append(lien);
    return article;
  }

  function afficher() {
    var liste = contenus
      .filter(function (c) { return !genre || c.genre === genre; })
      .slice()
      .sort(function (a, b) {
        return ordre === 'recent' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date);
      });

    grille.replaceChildren.apply(grille, liste.map(carte));
    if (vide) vide.hidden = liste.length > 0;
    if (compteur) compteur.textContent = liste.length + (liste.length > 1 ? ' contenus' : ' contenu');

    boutonsTri.forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.ordre === ordre ? 'true' : 'false');
    });
    if (zoneGenres) {
      zoneGenres.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', (b.dataset.genre || null) === genre ? 'true' : 'false');
      });
    }
  }

  // Boutons de tri
  boutonsTri.forEach(function (b) {
    b.addEventListener('click', function () { ordre = b.dataset.ordre; afficher(); });
  });

  // Filtres de genre : créés automatiquement à partir des genres présents
  if (zoneGenres) {
    var genres = [];
    contenus.forEach(function (c) { if (c.genre && genres.indexOf(c.genre) === -1) genres.push(c.genre); });
    if (genres.length) {
      [''].concat(genres.sort()).forEach(function (g) {
        var b = creer('button', 'choix', g || 'Toutes');
        b.type = 'button';
        if (g) b.dataset.genre = g;
        b.addEventListener('click', function () { genre = g || null; afficher(); });
        zoneGenres.append(b);
      });
    } else {
      zoneGenres.hidden = true;
    }
  }

  afficher();
})();
