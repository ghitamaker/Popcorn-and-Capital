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

   ⚠️ Gardez bien les guillemets "..." autour des textes. Si un titre contient
      lui-même des guillemets, utilisez « ... » à la place.
   ========================================================================== */

var CONTENUS = [

  // ▼▼▼ AJOUTER UN NOUVEAU CONTENU ICI (copiez-collez un bloc ci-dessous) ▼▼▼

  // ---------- EXEMPLES : à remplacer ou supprimer au fur et à mesure ----------

  {
    type: "article",
    titre: "Ce que le box-office ne dit pas",
    date: "2026-09-30",
    lien: "template-article.html",
    image: "images/data-strategie.svg",
    etiquette: "Data & Stratégie",
  },

  {
    type: "etude-de-cas",
    titre: "Anatomie du plan de financement d'un film d'auteur",
    date: "2026-09-26",
    lien: "template-article.html",
    image: "images/etudes-de-cas.svg",
  },

  {
    type: "fiche-technique",
    genre: "Schéma",
    titre: "La remontée des recettes, du guichet au producteur",
    date: "2026-09-22",
    lien: "template-fiche.html",
    image: "images/ticket.svg",
  },

  {
    type: "fiche-technique",
    genre: "Définition",
    titre: "Gap financing : la définition",
    date: "2026-09-18",
    lien: "template-fiche.html",
    image: "images/ingenierie-financiere.svg",
  },

  {
    type: "etude-de-cas",
    titre: "Le pop-corn, vraie économie des salles ?",
    date: "2026-09-12",
    lien: "template-article.html",
    image: "images/popcorn.svg",
  },

  {
    type: "article",
    titre: "Préventes : vendre un film avant qu'il existe",
    date: "2026-09-05",
    lien: "template-article.html",
    image: "images/camera.svg",
    etiquette: "Ingénierie financière",
  },

];
