/*
Stampare a schermo un messaggio all’interno di un h1 utilizzando una proprietá nell'oggetto restituito dalla funzione data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

let counter = 0;

const { createApp } = Vue;

createApp({
  data() {
    return {
      myText: "This is my first message printed with Vue.js",
      imagePath: `https://picsum.photos/${this.generateRandomImageSideResolution()}/${this.generateRandomImageSideResolution()}`
    }
  },
  methods: {
    generateRandomImageSideResolution() {
      const sideResolution = Math.floor(Math.random() * 501) + 300;
      counter % 2 === 0 ? console.log(`Width: ${sideResolution}px`) : console.log(`Height: ${sideResolution}px`)
      counter++;
      return sideResolution;
    }
  }
}).mount('#app');