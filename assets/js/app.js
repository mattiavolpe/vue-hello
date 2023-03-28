/*
Stampare a schermo un messaggio all’interno di un h1 utilizzando una proprietá nell'oggetto restituito dalla funzione data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue;

  createApp({
    data() {
      return {
        myText: "This is my first printed message",
        imagePath: "https://picsum.photos/400"
      }
    }
  }).mount('#app');