"use strict"

function addTouchClass() {
	// Добавление класса _touch для HTML если браузер мобильный
	if (isMobile.any()) document.documentElement.classList.add('touch');
}
addTouchClass()
const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slids = document.querySelectorAll('.slide'),
    dotWrapper = document.querySelector('.dots-wrapper');


let index = 0;
let outPut = '';

slids.forEach((data, index) => {
    if (data && index === 0) {
        outPut += `
        <p class="dot active"></p>`
    } else {
        outPut += `
        <p class="dot"></p>`
    }
});

dotWrapper.innerHTML = outPut;

const dots = document.querySelectorAll('.dot');

const activeSlide = (n) => {
    for (let slide of slids) {
        slide.classList.remove('active');
    }
    slids[n].classList.add('active');
};

const activeDot = (n) => {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};


const prepareCurrentSlide = (ind) => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if (index == slids.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
    ;
}

const prevSlide = () => {
    if (index == 0) {
        index = slids.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
    ;
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


const interval = setInterval(() => nextSlide(), 300000);
