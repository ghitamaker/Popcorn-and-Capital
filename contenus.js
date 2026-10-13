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
    type: "etude-de-cas",
    titre: "Resident Evil et Constantin Film",
    date: "2026-10-01",
    lien: "resident-evil-constantin-film.html",
    image: "images/resident-evil.svg",
  },

  // ---------- À VENIR : contenus annoncés, pas encore écrits ----------

  {
    type: "article",
    titre: "Ce que le box-office ne dit pas",
    bientot: true,
    image: "images/data-strategie.svg",
    etiquette: "Data & Stratégie",
  },

  {
    type: "etude-de-cas",
    titre: "Anatomie du plan de financement d'un film d'auteur",
    bientot: true,
    image: "images/etudes-de-cas.svg",
  },

  {
    type: "fiche-technique",
    genre: "Schéma",
    titre: "La remontée des recettes, du guichet au producteur",
    bientot: true,
    image: "images/ticket.svg",
  },

  {
    type: "fiche-technique",
    genre: "Définition",
    titre: "Gap financing : la définition",
    bientot: true,
    image: "images/ingenierie-financiere.svg",
  },

  {
    type: "etude-de-cas",
    titre: "Le pop-corn, vraie économie des salles ?",
    bientot: true,
    image: "images/popcorn.svg",
  },

  {
    type: "article",
    titre: "Préventes : vendre un film avant qu'il existe",
    bientot: true,
    image: "images/camera.svg",
    etiquette: "Ingénierie financière",
  },

];
