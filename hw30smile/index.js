function setMark(event) {
    event.preventDefault();
    let elemNumber = +event.target.nextElementSibling.textContent;
    event.target.nextElementSibling.textContent = elemNumber+1;
}

for(let elem of document.querySelectorAll(".smile-block__btn")) {
    elem.addEventListener("click", setMark);
}