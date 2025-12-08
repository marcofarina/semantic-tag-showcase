# Guida Interattiva HTML5 Semantico & Box Model

Questa è una web application interattiva progettata per insegnare visivamente i concetti fondamentali della struttura semantica di HTML5 e il CSS Box Model. È ideale per studenti, principianti e insegnanti che vogliono mostrare "cosa c'è sotto il cofano" di una pagina web moderna.

![Anteprima Progetto](https://via.placeholder.com/800x400?text=HTML5+Semantic+Showcase)

## 🌟 Funzionalità Principali

*   **Visualizzazione Semantica**: Blocchi interattivi per `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>` e `<footer>`. Ogni blocco mostra il tag, una descrizione e un esempio di codice.
*   **CSS Box Model Interattivo**: Una demo interattiva che scompone visivamente Margin, Border, Padding e Content quando si ispeziona un `<div>`.
*   **Tour Guidato**: Un sistema di onboarding passo-passo che spiega il ruolo di ogni elemento nella pagina.
*   **Dark Mode**: Supporto nativo per temi Chiaro/Scuro con switch manuale.
*   **Responsive**: Layout adattivo che funziona su desktop e dispositivi mobili.
*   **Developer Experience**: Pulsanti per copiare rapidamente gli snippet di codice.

## 🛠 Tecnologie Utilizzate

Il progetto è costruito con un moderno stack Frontend:

*   **React 18**: Libreria UI per la gestione dei componenti.
*   **TypeScript**: Per la sicurezza dei tipi e un codice più robusto.
*   **Vite**: Build tool di nuova generazione per uno sviluppo velocissimo.
*   **Tailwind CSS**: Framework CSS utility-first per lo styling.
*   **Lucide React**: Libreria di icone.

## 🚀 Come avviare il progetto in locale

Assicurati di avere [Node.js](https://nodejs.org/) installato (versione 18 o superiore raccomandata).

1.  **Clona la repository** (o scarica i file):
    ```bash
    git clone https://github.com/tuo-username/nome-repo.git
    cd nome-repo
    ```

2.  **Installa le dipendenze**:
    ```bash
    npm install
    ```

3.  **Avvia il server di sviluppo**:
    ```bash
    npm run dev
    ```
    Apri il browser all'indirizzo mostrato (solitamente `http://localhost:5173`).

## 📦 Build per la Produzione

Per creare una versione ottimizzata per il web (nella cartella `dist`):

```bash
npm run build
```

Puoi visualizzare l'anteprima della build locale con:

```bash
npm run preview
```

## 🌐 Deploy su GitHub Pages

Questo progetto è configurato per essere deployato automaticamente su GitHub Pages tramite GitHub Actions.

1.  Carica il codice su un repository GitHub.
2.  Vai su **Settings** > **Pages**.
3.  Imposta **Source** su **GitHub Actions**.
4.  Assicurati che il file `.github/workflows/deploy.yml` sia presente (vedi istruzioni precedenti per il contenuto corretto).
5.  Ad ogni `push` sul branch `main`, il sito verrà aggiornato automaticamente.
