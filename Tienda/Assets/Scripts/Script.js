//Cambio de imagen en slider
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItems[0]);

//funcion para el boton siguiente
nextBtn.onclick = function(){
    moveSlider('next');
}

//funcion para el boton atras
prevBtn.onclick = function(){
    moveSlider('prev');
}

function moveSlider(direction){
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');

    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    }
    else{
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationed', function(){
        if(direction === 'next'){
            slider.classList.remove('next');
        }
        else{
            slider.classList.remove('prev');
        }
    }, {once: true})
}

//Funciones en el texto, titulos, etc
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.Texto'); // Selecciona todos los elementos con la clase T1

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Agrega la clase para iniciar la animación
                observer.unobserve(entry.target); // Deja de observar el elemento
            }
        });
    }, {
        threshold: 0.3 // El porcentaje visible del elemento requerido para activar la animación
    });

    elements.forEach(element => observer.observe(element));
});

