/* ==========================================================================
   POPCORN & CAPITAL — LA LISTE DE TOUS VOS CONTENUS
   --------------------------------------------------------------------------
   C'est LE SEUL ENDROIT à modifier pour faire apparaître un contenu sur le site.
   Chaque contenu ajouté ici s'affiche automatiquement :
     - sur l'Accueil (qui montre TOUT, trié par date),
     - ET dans son onglet (Études de cas ou Fiches techniques).
   Le tri par date est automatique : l'ordre dans ce fichier n'a pas d'importance.

   POUR AJOUTER UN CONTENU :
     1. Créez sa page (copie de template-article.html ou template-fiche.html).
     2. Copiez-collez un bloc { ... }, ci-dessous, en gardant la virgule
        après l'accolade fermante "},".
     3. Remplissez les champs :

        type      : "article"          → visible seulement sur l'Accueil
                    "etude-de-cas"     → Accueil + onglet Études de cas
                    "fiche-technique"  → Accueil + onglet Fiches techniques
        titre     : le titre affiché sous l'image
        date      : au format "AAAA-MM-JJ" (ex : "2026-10-01" = 1er octobre 2026)
        lien      : le nom du fichier de la page (ex : "etude-a24.html")
        image     : l'image de la carte, rangée dans le dossier images/
                    (ex : "images/ma-photo.jpg"), idéalement au format paysage
        etiquette : (facultatif) le petit texte posé sur l'image.
                    Si vous l'omettez, le type s'affiche à la place.
        genre     : (fiches techniques uniquement) "Schéma", "Résumé",
                    "Définition" ou "Explication" — sert de filtre dans l'onglet.
        bientot   : true → contenu annoncé mais pas encore écrit : la carte
                    affiche « Bientôt disponible », n'est pas cliquable et se
                    range après les contenus publiés. Pas besoin de lien ni de date.
                    Quand le contenu est prêt : supprimez cette ligne et
                    ajoutez son lien et sa date.

   ⚠️ Gardez bien les guillemets "..." autour des textes. Si un titre contient
      lui-même des guillemets, utilisez « ... » à la place.
   ========================================================================== */

var CONTENUS = [

  // ▼▼▼ AJOUTER UN NOUVEAU CONTENU ICI (copiez-collez un bloc ci-dessous) ▼▼▼

  {
    type: "fiche-technique",
    genre: "Explication",
    titre: "Les Sofica : quand tes impôts financent le cinéma français",
    date: "2026-10-24",
    lien: "sofica.html",
    image: "images/ingenierie-financiere.svg",
  },

  {
    type: "etude-de-cas",
    titre: "Resident Evil et Constantin Film",
    date: "2026-10-01",
    lien: "resident-evil-constantin-film.html",
    image: "images/resident-evil.svg",
  },

  // ---------- À VENIR : contenus annoncés, pas encore écrits ----------
  // (ils s'affichent dans cet ordre, après les contenus publiés)

  {
    type: "etude-de-cas",
    titre: "A24 : le petit studio qui a fait de l'indé une marque",
    image: "images/etudes-de-cas.svg",
    bientot: true,
  },

  {
    type: "etude-de-cas",
    titre: "Obsession et Blumhouse : la peur à petit budget, une machine à cash",
    image: "images/blumhouse.svg",
    bientot: true,
  },

  {
    type: "article",
    titre: "Ton ticket de ciné : qui empoche vraiment l'argent ?",
    image: "images/ticket.svg",
    bientot: true,
  },

  {
    type: "article",
    titre: "Box-office : pourquoi un carton peut quand même perdre de l'argent",
    image: "images/data-strategie.svg",
    bientot: true,
  },

  {
    type: "fiche-technique",
    genre: "Définition",
    titre: "Gap financing : combler le dernier trou du budget",
    image: "images/popcorn.svg",
    bientot: true,
  },

  {
    type: "article",
    titre: "Préventes : vendre un film avant qu'il existe",
    image: "images/camera.svg",
    bientot: true,
  },

];
