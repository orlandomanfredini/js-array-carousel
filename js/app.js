// --- MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini 
// dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
// ma costruito dinamicamente attraverso JavaScript.

// creo array 
const arrayStringImg = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']
//creao collegamento con elemento DOM dove andrò ad inserire al suo interno 


 //  MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine
//  attiva, che quindi verrà visualizzata al posto della precedente.
let imagesSlider = document.querySelector('.slider-img')
for(let i = 0; i < arrayStringImg.length; i++){
    let imageString = arrayStringImg[i]

    imagesSlider.innerHTML += 
    `<div class="item">
          <img src="${imageString}" alt="">
     </div>
    `

    
}

const activeImg = document.getElementsByClassName('item'); //array collection
    activeImg[0].classList.add('active')


let next = document.querySelector('.next')
    next.addEventListener('click', function(){
        for(let i = 0; i < activeImg.length; i++){
            let activeImgIndex = activeImg[i]
            activeImgIndex.classList.add('active')
        }
    })
    

 







