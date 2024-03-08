// --- MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini 
// dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
// ma costruito dinamicamente attraverso JavaScript.

// creo array 
const arrayStringImg = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']

let imagesSlider = document.querySelector('.slider-img')
for(let i = 0; i < arrayStringImg.length; i++){
    let imageString = arrayStringImg[i]
    

    imagesSlider.innerHTML += 
    `<div class="item active">
          <img src="${imageString}" alt="">
     </div>
    `

}