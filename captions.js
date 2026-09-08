// Immagini fisse nella cartella img/. Le immagini di Flow (img/flow/001.jpg, 002.jpg, ...) si caricano da sole.
window.FIXED = [
  'gif.gif','circle.jpg','bite.jpg','bus.jpg','dna.jpg','pack.jpg','phones.jpg','home.jpg','zine.jpg','dna_cph.jpg','kstudy.jpg','glitch.jpg',
  'mark_wordmark.png','mark_oneliner.png','mark_circular.png','mark_mano.jpg','mark_badge_foto.jpg','mark_triangle.png'
];

// Didascalie. La chiave è il nome del file senza estensione. Per Flow: flow001, flow002, ...
window.CAPTIONS = {
  gif: 'Il filo si disegna solo quando qualcuno lo tira. Mai da solo, mai in loop decorativo: risponde a un gesto.',
  circle: 'Il cerchio. Ovunque arriva il kendama, la gente si mette in cerchio. È la prova della frase: vendiamo l\'ingresso in una fam, non un oggetto. Facce visibili, nessun telefono.',
  bite: 'La parte di caos. La faccia vicina, il trick, il morso. Il blu è un elemento solo: la tama.',
  bus: 'La parte di quiete. Due persone, le mani, un kendama fermo. Nessuno guarda in camera.',
  dna: 'Il kendama DNA, la direzione consigliata. Faggio, tama blu con una banda chiara attorno al foro, lo scarabocchio inciso, il box logo inciso sulla base, filo blu, sigillo olografico. Tra i 35 e i 40 euro.',
  dna_cph: 'La versione Copenhagen: legno grezzo e sola incisione. Per il retailer e per chi vuole il kendama come oggetto di design.',
  pack: 'Sei scatole, un disegno. Un solo filo inciso attraversa i sei fronti. Funziona anche se le scatole sono in ordine sparso. Dentro, una fascetta blu con la data del prossimo cerchio: la scatola è il biglietto.',
  phones: 'Il sito in tre schermate. La home con una foto di persone e un bottone, lo shop con i kendama in mano in posti veri, la pagina prodotto con i dati in mono. Il blu compare solo come linea.',
  home: 'La home: il cerchio in cinque secondi. I prodotti arrivano al secondo scroll.',
  zine: 'La voce tribale su carta. Fotocopia, due colori, il filo che attraversa le pagine. Una fanzine da regalare con il kendama.',
  kstudy: 'Uno studio: la lettera K disegnata con un filo continuo. Da qui nasce la regola del filo: una linea sola, parte dal nodo e finisce nella presa.',
  glitch: 'La voce tecno. Il glitch è un accento, mai un filtro.',
  mark_wordmark: 'Il wordmark KROM KENDAMA della brand guide 2021. Resta, per gli usi istituzionali.',
  mark_oneliner: 'L\'oneliner della brand guide 2021: il kendama disegnato con una linea sola. È il vostro scarabocchio, esisteva già. Diventa il sigillo inciso sul legno e il segno del sistema.',
  mark_circular: 'Il logo circolare della brand guide 2021, solo testo. Vive sulla banda della tama.',
  mark_mano: 'KROM scritto a mano e inciso sul ken. La firma tribale: sui ken, sulle fanzine, sugli adesivi. Mai nel catalogo.',
  mark_badge_foto: 'Il badge circolare com\'è oggi sulla tama, in rosso. Nel sistema resta nello stesso posto, in nero o in bianco.',
  mark_triangle: 'Il triangolo storico resta solo sul pin metallico. Fuori dalla comunicazione. Lo smiley a tre occhi non torna: è di un altro marchio.'
};

// Didascalia usata quando un'immagine non ha la sua.
window.DEFAULT_CAPTION = 'Immagine di direzione.';

// Didascalie a blocchi per le immagini di Flow: [primo numero, ultimo numero, testo].
// Metti i file in ordine per tema, poi scrivi qui i blocchi. Esempio (da cambiare con i tuoi numeri):
window.RANGES = [
  [1, 20, 'La foto. Il caos: la sesh, il cerchio, il trick appena atterrato e la faccia dopo. Facce sempre visibili, nessuno in posa, nessun telefono. Flash o pellicola, grana vera.'],
  [21, 35, 'La foto. La quiete: le mani, la concentrazione, due persone, un kendama fermo. È il trenta per cento che fa respirare il feed.'],
  [36, 55, 'Il kendama DNA. Faggio, tama blu con la banda chiara attorno al foro, lo scarabocchio inciso che finisce nel foro, il box logo inciso sulla base. Incisione, non adesivo.'],
  [56, 70, 'Le scatole. Un solo filo inciso attraversa i sei fronti: ogni scatola ne mostra un pezzo, insieme formano il kendama e il nodo. La scatola è il biglietto.'],
  [71, 90, 'Il sito. Una foto di persone, una frase, un bottone. I prodotti in mano, in posti veri, mai su fondo bianco. Il blu solo come linea.'],
  [91, 105, 'Le card e i poster. Campo blu, urlo in maiuscolo, il filo che entra nel testo, il box logo in basso. La voce tecno sopra la voce tribale.'],
  [106, 120, 'La carta. Fanzine, adesivi, fotocopie, due colori. La voce tribale: mano, grana, nastro, marker.'],
  [121, 140, 'Studi e prove. Il filo che disegna, le firme, le varianti scartate. Restano perché spiegano come si è arrivati alla direzione.']
];

// Video: si caricano da soli se esistono in img/. video.mp4 con audio, gif.mp4 muto.
window.VIDEOS = [
  { src: 'img/video.mp4', key: 'video', sound: true, caption: 'La direzione in movimento. Il filo si disegna solo in risposta a un gesto, mai da solo.' }
];

// Le dieci card di testo che compaiono nella spirale.
window.TEXTS = [
  { title: 'Vendiamo l\'ingresso in una fam. Non un oggetto.', body: 'KROM è l\'unico brand di kendama che vende l\'ingresso in una fam invece di un oggetto, per ragazzi che vogliono stare insieme senza schermo, e che rifiuta di essere un giocattolo.', tag: 'La frase' },
  { white: true, title: 'It\'s not a toy.', body: 'L\'avete scritto voi: KROM combatte l\'idea che il kendama sia solo un giocattolo. Ogni pezzo deve dimostrarlo. Mani, sudore, la faccia dopo lo spike, la fam. Se un\'immagine potrebbe stare nel reparto giochi di un grande magazzino, non è KROM.', tag: 'Il nemico' },
  { title: 'Il blu è l\'oggetto. Il logo è il nome.', body: 'Il box logo resta nero, perché è un nome e si legge da vicino. Il blu è la tama in mano a qualcuno: si vede a cinquanta metri. Il sistema usa tre colori, bianco, nero e blu. Il prodotto tiene il suo colore.', tag: 'Il colore' },
  { white: true, title: 'Logo più una frase.', body: 'KROM non ha uno slogan. Ha una frase per ogni pezzo, minuscola, con il punto, sotto il logo. Cambia il contenuto, non la forma. Per esempio: it\'s not a toy. we don\'t play, we sesh. nothing to charge. pull up.', tag: 'Il lockup' },
  { title: 'Trenta quiete, settanta caos.', body: 'Facce sempre visibili. Nessuno guarda in camera, nessuno in posa, mai da solo. Niente telefoni, niente schermi. Flash o pellicola, grana vera. Le immagini che vedete qui sono generate per mostrare la direzione: le foto vere si fanno con i player.', tag: 'La foto' },
  { white: true, title: 'Il feed dei nove.', body: 'Cinque formati che tornano: la sesh, la quiete, la card blu, l\'oggetto in mano, la fam. Nove post sono due settimane. Quattro post e tre reel a settimana, storie ogni giorno. Lo stesso sistema vale per TikTok, YouTube e X.', tag: 'I social' },
  { title: 'Le firme, in ordine.', body: 'Il box logo è la firma principale. L\'oneliner, il kendama in una linea sola, diventa il sigillo inciso e il segno del sistema. Il circolare solo testo va sulla tama. KROM scritto a mano va sui ken, sulle fanzine e sugli adesivi. Il triangolo resta sul pin. Lo smiley non torna.', tag: 'Le firme' },
  { white: true, title: 'Sei scatole, un disegno.', body: 'Un solo filo inciso attraversa i sei fronti. Ogni scatola ne mostra un pezzo, insieme formano il kendama e il nodo. In Europa il kendama è un giocattolo: sul pack vanno CE, EN 71, età, fabbricante e lingue. Le diciture le date voi, prima del layout.', tag: 'Il packaging' },
  { title: 'Un drop, tre post.', body: 'Prendiamo il drop con Remus. Il giorno prima, le mani con la tama. Il giorno del drop, il kendama in mano in un posto vero. Il giorno dopo, la sesh con chi l\'ha comprato. Il sistema non inventa cose da dire: dice meglio quelle che già succedono.', tag: 'Il piano editoriale' },
  { white: true, title: 'Dopo.', body: 'Settembre: la direzione, i font e i vettoriali, chi approva. Ottobre: le linee guida per ogni canale. Novembre: il sito e lo shooting. Dicembre: kendama e scatole in fabbrica. Gennaio: Roma. Questo è il due o tre per cento del lavoro.', tag: 'Fase 2' }
];
