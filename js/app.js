// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente
// servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
// ma costruito dinamicamente attraverso JavaScript.


// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
// che quindi verrà visualizzata al posto della precedente.

const arrayStringImg = ['./img/01.webp" alt="', './img/02.webp" alt="', './img/03.webp" alt="', './img/04.webp" alt="', './img/05.webp" alt="']

const sliderContainer = document.querySelector('.slider-img')
for(let i = 0; i < arrayStringImg.length; i++){


     sliderContainer.innerHTML += 
     `<div class="item">
     <img src="${arrayStringImg[i]}">
     </div>`

    
}

// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e 
// l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
    

let arrayItemElement = document.getElementsByClassName('item'); //array element dom
let activeImg = 0
arrayItemElement[activeImg].classList.add('active')


const next = document.querySelector('.next')
next.addEventListener('click',  function(){
        
        if(activeImg < arrayItemElement.length - 1)
        arrayItemElement[activeImg].classList.remove('active')
        activeImg++
        

        if(activeImg === arrayItemElement.length){
            arrayItemElement[4].classList.remove('active')
            activeImg = 0
            
        }
        
        arrayItemElement[activeImg].classList.add('active')
       
})


const prev = document.querySelector('.prev')
prev.addEventListener('click', function(){
        arrayItemElement[activeImg].classList.remove('active')
        activeImg--
        
        if(activeImg < 0){
            arrayItemElement[0].classList.remove('active')
            activeImg = 4
        }

        arrayItemElement[activeImg].classList.add('active')
                
        

        })







