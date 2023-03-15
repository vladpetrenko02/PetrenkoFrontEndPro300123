const link = {
    href: ""
}

const btnsCollection = document.querySelectorAll(".btn");

btnsCollection[0].onclick = () => {
    if(!link.href){
        alert("Спочатку задайте посилання на сайт з вказаним протоколом https");
    } else{
        location.href = link.href;
    }
};

btnsCollection[1].onclick = () => {
    link.href = prompt('Введіть посилання на сайт');

    if(!link.href.includes("https://")) {
        link.href = "https://" + link.href;
        alert("Оскільки не було вказано протоколу https, його було автоматично додано");
    }
    
    alert("Посилання додано");
};