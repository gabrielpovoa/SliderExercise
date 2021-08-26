let slideTotal = document.querySelectorAll('.slider--item').length
let curretnSlide = 0;

document.querySelector('.slider--width').style.width = 
    `calc(100vw * ${slideTotal})`;
document.querySelector('.slider-controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`


function goPrev() {
    curretnSlide--;
    if(curretnSlide < 0) {
        curretnSlide = slideTotal - 1;
    }
    updateMargin()
};

function goNext() {
    curretnSlide++;
    if(curretnSlide > (slideTotal - 1)) {
        curretnSlide = 0
    }
    updateMargin()
}


function updateMargin() {
    let slideItemWidth = document.querySelector('.slider--item').clientWidth
    let newMargin = (curretnSlide * slideItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`
}

// setInterval(goNext, 6000)