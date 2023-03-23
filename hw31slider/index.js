const prevBtn = document.querySelector(".slider__btn-prev");
const nextBtn = document.querySelector(".slider__btn-next");
const elemImage = document.querySelector(".slider__image");

function sliderLogic(callbackPrev, callbackNext) {
    if(elemImage.getAttribute("src").includes("1.jpg")) {
        prevBtn.style = "opacity: 0;"
        prevBtn.setAttribute("disabled", '');
    } else if (elemImage.getAttribute("src").includes("4.jpg")) {
        nextBtn.style = "opacity: 0;"
        nextBtn.setAttribute("disabled", '');
    }

    prevBtn.addEventListener("click", callbackPrev);
    nextBtn.addEventListener("click", callbackNext);
}

function prevBtnLogic(event) {
    if(elemImage.getAttribute("src").includes("2")) {
        event.target.style = "opacity: 0";
        event.target.setAttribute("disabled", '')
    } else if(elemImage.getAttribute("src").includes("4")) {
        nextBtn.style = "";
        nextBtn.removeAttribute("disabled");
    }

    const imgNumber = +document.querySelector(".slider__image").getAttribute("src").charAt(9);
    document.querySelector(".slider__image").setAttribute("src", `./images/${imgNumber-1}.jpg`)
}

function nextBtnLogic(event) {
    if(elemImage.getAttribute("src").includes("3")) {
        event.target.style = "opacity: 0";
        event.target.setAttribute("disabled", '');
    } else if (elemImage.getAttribute("src").includes("1")) {
        prevBtn.style = "";
        prevBtn.removeAttribute("disabled");
    }

    const imgNumber = +document.querySelector(".slider__image").getAttribute("src").charAt(9);
    document.querySelector(".slider__image").setAttribute("src", `./images/${imgNumber+1}.jpg`)
}

sliderLogic(prevBtnLogic, nextBtnLogic);
