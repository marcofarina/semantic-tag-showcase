import { SemanticElementData, TourStep } from './types';

export const SEMANTIC_DATA: Record<string, SemanticElementData> = {
  header: {
    id: 'header-block',
    tag: '<header>',
    title: 'Intestazione',
    description: 'Contiene solitamente il logo, il titolo del sito o la navigazione principale.',
    code: '<header>\n  <h1>Il Mio Sito</h1>\n</header>',
    colorClass: 'bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/40',
    textColorClass: 'text-red-900 dark:text-red-200',
    borderColorClass: 'border-red-200 dark:border-red-500/50'
  },
  nav: {
    id: 'nav-block',
    tag: '<nav>',
    title: 'Navigazione',
    description: 'Definisce una serie di link di navigazione. Destinato alla navigazione principale.',
    code: '<nav>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n</nav>',
    colorClass: 'bg-amber-50 dark:bg-amber-950/30 hover:bg-amber-100 dark:hover:bg-amber-900/40',
    textColorClass: 'text-amber-900 dark:text-amber-200',
    borderColorClass: 'border-amber-200 dark:border-amber-500/50'
  },
  main: {
    id: 'main-block',
    tag: '<main>',
    title: 'Contenuto Principale',
    description: 'Il contenuto principale del documento. Deve essere unico per la pagina.',
    code: '<main>\n  <!-- Contenuto unico -->\n</main>',
    colorClass: 'bg-white dark:bg-slate-900',
    textColorClass: 'text-slate-900 dark:text-slate-200',
    borderColorClass: 'border-slate-300 dark:border-slate-700'
  },
  section: {
    id: 'section-block',
    tag: '<section>',
    title: 'Sezione Tematica',
    description: 'Raggruppa contenuti correlati per argomento. Solitamente ha un titolo.',
    code: '<section>\n  <h2>Titolo Sezione</h2>\n  <p>Contenuto...</p>\n</section>',
    colorClass: 'bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-900/40',
    textColorClass: 'text-blue-900 dark:text-blue-200',
    borderColorClass: 'border-blue-200 dark:border-blue-500/50'
  },
  article: {
    id: 'article-block',
    tag: '<article>',
    title: 'Articolo Indipendente',
    description: 'Contenuto autonomo e riutilizzabile (es. post di un blog, commento, news).',
    code: '<article>\n  <h2>Titolo Post</h2>\n  <p>Testo del post...</p>\n</article>',
    colorClass: 'bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/40',
    textColorClass: 'text-emerald-900 dark:text-emerald-200',
    borderColorClass: 'border-emerald-200 dark:border-emerald-500/50'
  },
  aside: {
    id: 'aside-block',
    tag: '<aside>',
    title: 'Barra Laterale',
    description: 'Contenuto tangenzialmente correlato a quello principale (es. sidebar, pubblicità).',
    code: '<aside>\n  <h3>Correlati</h3>\n  <ul>...</ul>\n</aside>',
    colorClass: 'bg-violet-50 dark:bg-violet-950/30 hover:bg-violet-100 dark:hover:bg-violet-900/40',
    textColorClass: 'text-violet-900 dark:text-violet-200',
    borderColorClass: 'border-violet-200 dark:border-violet-500/50'
  },
  footer: {
    id: 'footer-block',
    tag: '<footer>',
    title: 'Piè di Pagina',
    description: 'Contiene info sul copyright, link ai contatti, sitemap, etc.',
    code: '<footer>\n  <p>&copy; 2024</p>\n</footer>',
    colorClass: 'bg-slate-200 dark:bg-slate-800/40 hover:bg-slate-300 dark:hover:bg-slate-800/60',
    textColorClass: 'text-slate-600 dark:text-slate-400',
    borderColorClass: 'border-slate-400 dark:border-slate-600'
  },
  div: {
    id: 'div-block',
    tag: '<div>',
    title: 'Divisione Generica',
    description: 'Elemento a livello di blocco senza significato semantico. Usato per layout o stili.',
    code: '<div class="card">\n  ...\n</div>',
    colorClass: 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700',
    textColorClass: 'text-slate-700 dark:text-slate-300',
    borderColorClass: 'border-slate-400 dark:border-slate-500'
  }
};

export const TOUR_STEPS: TourStep[] = [
  {
    targetId: 'root',
    title: 'Struttura Semantica HTML5',
    content: 'Benvenuto nella guida interattiva. Analizzeremo i mattoni fondamentali che compongono una pagina web moderna, essenziali per l\'accessibilità e la SEO.',
    position: 'center'
  },
  {
    targetId: 'header-block',
    title: 'Header (Intestazione)',
    content: "L'elemento <header> apre la pagina o una sezione. È fondamentale per l'accessibilità perché permette agli screen reader di identificare rapidamente l'intestazione, che solitamente contiene logo, titolo e strumenti di ricerca.",
    position: 'bottom'
  },
  {
    targetId: 'nav-block',
    title: 'Nav (Navigazione)',
    content: "Il tag <nav> è semanticamente riservato ai blocchi di navigazione *principali* (come il menu del sito). Non è necessario usarlo per ogni gruppo di link (come quelli nel footer).",
    position: 'bottom'
  },
  {
    targetId: 'main-block',
    title: 'Main (Principale)',
    content: "L'elemento <main> è il cuore della pagina: contiene il contenuto unico e centrale. Non deve contenere elementi ripetuti in altre pagine (come sidebar o menu). Dovrebbe esserci un solo <main> visibile per pagina.",
    position: 'right'
  },
  {
    targetId: 'article-block',
    title: 'Article (Articolo)',
    content: "<article> rappresenta una composizione indipendente che ha senso anche se estratta dal contesto (es. in un feed RSS). Ideale per post di blog, commenti, widget interattivi o notizie.",
    position: 'top'
  },
  {
    targetId: 'section-block',
    title: 'Section (Sezione)',
    content: "<section> serve a raggruppare contenuti tematicamente correlati. A differenza di un generico <div>, una section dovrebbe idealmente avere un titolo (h2-h6) che ne descriva l'argomento.",
    position: 'top'
  },
  {
    targetId: 'box-model-trigger',
    title: 'Box Model CSS',
    content: "Clicca qui per vedere come il browser calcola le dimensioni. Ogni elemento è una scatola composta da Margin (esterno), Border (cornice), Padding (spazio interno) e Content (contenuto reale).",
    position: 'top'
  },
  {
    targetId: 'aside-block',
    title: 'Aside (Contenuto correlato)',
    content: "<aside> ospita contenuti tangenzialmente legati a quelli principali, ma non essenziali. È il tag perfetto per sidebar, box pubblicitari, glossari o biografie dell'autore.",
    position: 'left'
  },
  {
    targetId: 'footer-block',
    title: 'Footer (Piè di pagina)',
    content: "<footer> chiude il documento o una sezione. Ospita tipicamente informazioni legali, copyright, link alla privacy policy, sitemap e contatti.",
    position: 'top'
  }
];