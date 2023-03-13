let inp = document.getElementById('test');
let b = document.querySelector('div');

inp.onfocus = () => {
    b.style.display = "inline-block";
}

inp.onblur = () => {
    b.style.display = "none";
}