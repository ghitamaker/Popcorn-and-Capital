/* ==========================================================================
   POPCORN & CAPITAL — Fonctionnement des pages (aucune modification nécessaire)
   --------------------------------------------------------------------------
     0. Langue : sélecteur FR · EN et traduction des textes
     1. Bouton mode clair / sombre
     2. Affichage des cartes à partir de contenus.js, avec :
        - le tri (plus récents / plus anciens d'abord)
        - le filtre par genre sur la page Fiches techniques
   ========================================================================== */
(function () {

  // ---------- 0. LANGUE ----------
  var LANGUES = [
    { code: 'fr', nom: 'Français', locale: 'fr-FR' },
    { code: 'en', nom: 'English',  locale: 'en-GB' }
  ];
  var langue = document.documentElement.lang || 'fr';
  if (!LANGUES.some(function (l) { return l.code === langue; })) langue = 'fr';
  var DICO = typeof TRADUCTIONS !== 'undefined' ? TRADUCTIONS : {};

  // Traduction d'une clé du dictionnaire (null si absente : on garde le français)
  function t(cle, defaut) {
    var entree = DICO[cle];
    if (entree && entree[langue]) return entree[langue];
    return defaut !== undefined ? defaut : null;
  }

  // Sélecteur de langue (placé dans <div id="choix-langue">, sinon en haut à gauche)
  var zoneLangue = document.getElementById('choix-langue');
  if (!zoneLangue) {
    var entete = document.querySelector('body > header');
    if (entete) {
      zoneLangue = document.createElement('div');
      zoneLangue.id = 'choix-langue';
      entete.prepend(zoneLangue);
    }
  }
  if (zoneLangue) {
    zoneLangue.className = 'absolute top-4 left-4 sm:top-6 sm:left-8 flex items-center gap-2.5 rounded-full border border-ink/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em]';
    zoneLangue.setAttribute('role', 'group');
    zoneLangue.setAttribute('aria-label', t('langue.aria', 'Choisir la langue'));
    zoneLangue.innerHTML = '<svg class="w-3.5 h-3.5 text-muted shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>';
    LANGUES.forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'choix';
      b.lang = l.code;
      b.textContent = l.code.toUpperCase();
      b.title = l.nom;
      b.setAttribute('aria-label', l.nom);
      b.setAttribute('aria-pressed', l.code === langue ? 'true' : 'false');
      b.addEventListener('click', function () {
        if (l.code === langue) return;
        try { localStorage.setItem('langue', l.code); } catch (e) {}
        location.reload();
      });
      zoneLangue.append(b);
    });
  }

  if (langue !== 'fr') {
    // Textes communs : data-t="cle" (contenu), data-t-aria, data-t-alt
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var txt = t(el.dataset.t);
      if (txt) el.textContent = txt;
    });
    document.querySelectorAll('[data-t-aria]').forEach(function (el) {
      var txt = t(el.dataset.tAria);
      if (txt) el.setAttribute('aria-label', txt);
    });
    document.querySelectorAll('[data-t-alt]').forEach(function (el) {
      var txt = t(el.dataset.tAlt);
      if (txt) el.setAttribute('alt', txt);
    });
    // Petits textes propres à une page : data-en
    document.querySelectorAll('[data-' + langue + ']').forEach(function (el) {
      el.textContent = el.getAttribute('data-' + langue);
    });
    // Longs textes : si aucun bloc data-lang n'existe dans la langue choisie,
    // on affiche la version française avec une petite note.
    document.querySelectorAll('[data-lang="fr"]').forEach(function (fr) {
      var traduit = Array.prototype.some.call(fr.parentNode.children, function (el) {
        return el.getAttribute('data-lang') === langue;
      });
      if (traduit) return;
      fr.classList.add('lang-repli');
      var note = document.createElement('p');
      note.className = 'max-w-2xl mx-auto mb-10 border border-ink/20 px-5 py-3 text-center text-[13px] italic text-muted';
      note.textContent = t('langue.pas-traduit', '');
      if (note.textContent) fr.parentNode.insertBefore(note, fr);
    });
  }

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

  function nomType(type) { return t('type.' + type, type); }
  function nomGenre(g) { return t('genre.' + g, g); }
  // Champ traduit d'un contenu (ex : titre_en), sinon la version française
  function champ(c, nom) { return c[nom + '_' + langue] || c[nom]; }

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

  function dateLisible(iso) {
    var d = new Date(iso + 'T12:00:00');
    if (isNaN(d)) return iso;
    var locale = LANGUES.filter(function (l) { return l.code === langue; })[0].locale;
    var texte = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    if (langue === 'fr' && d.getDate() === 1) texte = texte.replace(/^1 /, '1er ');  // « 1er octobre »
    return texte;
  }

  // « 2 contenus publiés · 6 à venir », dans chaque langue
  function texteCompteur(n, m) {
    var textes = {
      fr: [n > 1 ? ' contenus publiés' : ' contenu publié', ' à venir'],
      en: [' published', ' coming soon']
    }[langue];
    return n + textes[0] + (m ? ' · ' + m + textes[1] : '');
  }

  function creer(balise, classes, texte) {
    var el = document.createElement(balise);
    if (classes) el.className = classes;
    if (texte) el.textContent = texte;
    return el;
  }

  // Fabrique une carte : image + étiquette + titre + type et date
  // (contenu à venir : carte non cliquable, marquée « Bientôt disponible »)
  function carte(c) {
    var article = creer('article');
    var lien = c.bientot ? creer('div', 'block') : creer('a', 'group block');
    if (!c.bientot) lien.href = c.lien;

    var cadre = creer('div', 'relative overflow-hidden');
    var img = creer('img', 'w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105');
    img.src = c.image || 'images/etudes-de-cas.svg';
    img.alt = '';
    img.loading = 'lazy';
    if (c.bientot) img.className += ' opacity-60';
    var etiquette = c.bientot ? t('carte.bientot', 'Bientôt disponible')
      : champ(c, 'etiquette') || (c.genre ? t('carte.fiche', 'Fiche') + ' · ' + nomGenre(c.genre) : nomType(c.type));
    cadre.append(img, creer('span',
      'absolute bottom-0 left-1/2 -translate-x-1/2 bg-paper px-6 pt-3 pb-2 text-[10px] font-medium uppercase tracking-[0.25em] whitespace-nowrap',
      etiquette));

    var titre = creer('h3',
      'mt-5 px-4 text-center font-serif text-2xl leading-snug' +
      (c.bientot ? ' text-ink/60' : ' group-hover:underline underline-offset-4 decoration-1'));
    // Espaces insécables avant ? ! : ; (typographie française uniquement)
    titre.textContent = langue === 'fr' ? (c.titre || '').replace(/ ([?!:;])/g, ' $1') : champ(c, 'titre') || '';

    var meta = creer('p', 'mt-2 text-center text-[11px] uppercase tracking-[0.2em] text-muted',
      nomType(c.type) + ' · ' + (c.bientot ? t('carte.avenir', 'À venir') : dateLisible(c.date)));

    lien.append(cadre, titre, meta);
    article.append(lien);
    return article;
  }

  function afficher() {
    var choisis = contenus.filter(function (c) { return !genre || c.genre === genre; });
    // Les contenus publiés sont triés par date ; ceux à venir passent toujours après.
    var publies = choisis.filter(function (c) { return !c.bientot; }).sort(function (a, b) {
      return ordre === 'recent' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date);
    });
    var aVenir = choisis.filter(function (c) { return c.bientot; });
    var liste = publies.concat(aVenir);

    grille.replaceChildren.apply(grille, liste.map(carte));
    if (vide) vide.hidden = liste.length > 0;
    if (compteur) {
      compteur.textContent = texteCompteur(publies.length, aVenir.length);
    }

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
        var b = creer('button', 'choix', g ? nomGenre(g) : t('filtre.toutes', 'Toutes'));
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
