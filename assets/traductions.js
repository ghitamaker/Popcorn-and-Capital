/* ==========================================================================
   POPCORN & CAPITAL — TRADUCTIONS DE L'INTERFACE
   --------------------------------------------------------------------------
   Le site existe en 2 langues : français (fr) et anglais (en). Le lecteur
   choisit sa langue avec le sélecteur « FR · EN » en haut à gauche ;
   son choix est mémorisé.
   (Pour ajouter une langue plus tard : voir LANGUES dans assets/site.js et
   la liste des langues dans assets/tailwind-config.js.)

   Ce fichier contient les textes COMMUNS à plusieurs pages (menu, boutons,
   pied de page...). Dans le HTML, un élément qui porte data-t="cle" est
   remplacé par la traduction de "cle" ci-dessous. Le texte français reste
   écrit dans le HTML : c'est lui qui s'affiche en français.

   ✏️ TROIS FAÇONS DE TRADUIRE, selon la taille du texte :

     1. Un texte commun à plusieurs pages → une entrée dans ce fichier
        + data-t="cle" sur l'élément.

     2. Un petit texte propre à une page (titre de l'onglet, intro...) →
        directement dans la balise, avec data-en :
          <h1 data-en="About">À propos</h1>

     3. Un long texte (le corps d'un article) → un bloc par langue,
        côte à côte, chacun avec data-lang :
          <article data-lang="fr"> ... version française ... </article>
          <article data-lang="en"> ... English version ... </article>
        Seul le bloc de la langue choisie s'affiche. S'il manque une langue,
        la version française s'affiche, avec une petite note pour le dire.
        ⚠️ Dans les copies traduites, changez les id (ex : id="mot-cnc-en")
        et les liens qui pointent dessus (href="#mot-cnc-en").

   Les titres des cartes se traduisent dans contenus.js (titre_en).
   ========================================================================== */

var TRADUCTIONS = {

  // ---------- Menu ----------
  'nav.accueil':  { en: 'Home' },
  'nav.etudes':   { en: 'Case studies' },
  'nav.fiches':   { en: 'Fact sheets' },
  'nav.apropos':  { en: 'About' },
  'nav.aria':     { en: 'Main navigation' },
  'logo.alt':     { en: 'Popcorn & Capital logo' },

  // ---------- Bouton mode clair / sombre ----------
  'theme.sombre': { en: 'Dark mode' },
  'theme.clair':  { en: 'Light mode' },
  'theme.aria':   { en: 'Switch between light and dark mode' },

  // ---------- Pied de page ----------
  'pied.prive':   { en: 'Private research notebook · Do not share' },

  // ---------- Listes de contenus (Accueil, rubriques) ----------
  'liste.tous':      { en: 'All content' },
  'liste.rubrique':  { en: 'Section' },
  'tri.label':       { en: 'Sort:' },
  'tri.aria':        { en: 'Display order' },
  'tri.recent':      { en: 'Newest' },
  'tri.ancien':      { en: 'Oldest' },
  'filtre.aria':     { en: 'Filter by type' },
  'filtre.toutes':   { fr: 'Toutes', en: 'All' },
  'vide.tout':       { en: 'No content yet.' },
  'vide.etudes':     { en: 'No case studies yet.' },
  'vide.fiches':     { en: 'No fact sheets in this category yet.' },
  'noscript':        { en: 'Enable JavaScript to display the content.' },

  // ---------- Cartes (textes fabriqués par assets/site.js) ----------
  'type.article':         { fr: 'Article', en: 'Article' },
  'type.etude-de-cas':    { fr: 'Étude de cas', en: 'Case study' },
  'type.fiche-technique': { fr: 'Fiche technique', en: 'Fact sheet' },
  'carte.fiche':          { fr: 'Fiche', en: 'Fact sheet' },
  'carte.bientot':        { fr: 'Bientôt disponible', en: 'Coming soon' },
  'carte.avenir':         { fr: 'À venir', en: 'Upcoming' },
  'genre.Schéma':         { fr: 'Schéma', en: 'Diagram' },
  'genre.Résumé':         { fr: 'Résumé', en: 'Summary' },
  'genre.Définition':     { fr: 'Définition', en: 'Definition' },
  'genre.Explication':    { fr: 'Explication', en: 'Explainer' },

  // ---------- Articles et fiches ----------
  'article.retour':   { en: '← Back to the notebook' },
  'article.fiches':   { en: '← All fact sheets' },
  'article.lecture':  { en: 'min read' },

  // ---------- Sélecteur de langue ----------
  'langue.aria':      { fr: 'Choisir la langue', en: 'Choose language' },
  'langue.pas-traduit': {
    en: 'This page has not been translated into English yet: here is the French version.'
  }
};
