const imgArr = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
];

let imageTarget = 0;
const prevBtn = document.querySelector(".slider__btn-prev");
const nextBtn = document.querySelector(".slider__btn-next");
const elemImage = document.querySelector(".slider__image");

function hiddenBtn() {
    if (imageTarget === 0) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = 0;
    } else if (imageTarget === imgArr.length-1) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = 0;
    } else {
        nextBtn.disabled = false;
        prevBtn.disabled = false;
        nextBtn.style.opacity = 1;
        prevBtn.style.opacity = 1;
    }
}

prevBtn.addEventListener("click", () => {
    imageTarget--;
    elemImage.setAttribute("src", imgArr[imageTarget]);
    hiddenBtn()
});

nextBtn.addEventListener("click", () => {
    imageTarget++;
    elemImage.setAttribute("src", imgArr[imageTarget]);
    hiddenBtn()
});

hiddenBtn();
