// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente
// servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
// ma costruito dinamicamente attraverso JavaScript.




const arrayStringImg = ['./img/01.webp" alt="', './img/02.webp" alt="', './img/03.webp" alt="', './img/04.webp" alt="', './img/05.webp" alt="']

const sliderContainer = document.querySelector('.slider-img')
for(let i = 0; i < arrayStringImg.length; i++){

    
     
    sliderContainer.innerHTML += 
     `<div class="item">
     <img src="${arrayStringImg[i]}">
     </div>`

    
}
    

let activeImg = document.querySelector('.item')
activeImg.classList.add('active')







