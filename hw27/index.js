let img = document.body.querySelector('[alt="test-photo"]');
let btn = document.getElementsByTagName('a');

btn[0].onclick = () => {
    img.setAttribute(`src`,`./images/${Math.floor(Math.random() * 9) + 1}.jpg`);
}