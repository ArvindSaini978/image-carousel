// defining the constabts and variables
const slide = document.querySelectorAll('.slide');
const caption = document.querySelectorAll('.caption');
let counter = 1;

// 1st image show on reload
slide[0].style.display = "block";
slide[0].style.opacity = 1;
caption[0].innerHTML = `${counter}/${slide.length}`;

// functioning of prev button

const goPrev = () => {
    counter--;
    if (counter >= 1) {
        showSlide();
    }
    else {
        counter = slide.length;
        showSlide();
    }
}

// functioning of next button
const goNext = () => {
    counter++;
    if (counter <= slide.length) {
        showSlide();
    }
    else {
        counter = 1;
        showSlide();
    }
}

// showing image

const showSlide = () => {
    let i;
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[counter - 1].style.display = 'block';
    caption[counter - 1].innerHTML = `${counter}/${slide.length}`;
}

//for automatic shange

// setInterval(() => {
//     goNext();
// }, 5000);
