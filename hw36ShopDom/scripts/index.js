import { data } from './data.js'

const productsIndexedByCategory = data.products.reduce((accumulatorObj, item) => {
    if (!Array.isArray(accumulatorObj[item.category])) {
        accumulatorObj[item.category] = [];
    }

    accumulatorObj[item.category].push(item);

    return accumulatorObj;
}, {});

const categoriesList = Object.keys(productsIndexedByCategory);
const categoriesHolder = document.querySelector(".nav-category");
const productsHolder = document.querySelector(".nav-product");
const detailsHolder = document.querySelector(".details-section");
const cartShowButton = document.querySelector(".cart-section__button");


let activeCategory = "";
let activeProduct = "";
let targetProduct = "";
let targetCategory = "";

function setLocalCounter() {
    if (!localStorage.hasOwnProperty("orderCounter")) {
        localStorage.setItem("orderCounter", 0);
    } else {
        localStorage.setItem("orderCounter", localStorage.getItem("orderCounter"));
    }
}

setLocalCounter();

categoriesHolder.addEventListener("click", handleCategory);
productsHolder.addEventListener("click", handleProduct);
detailsHolder.addEventListener("click", handlePurchase);
cartShowButton.addEventListener("click", renderOrders);
document.querySelector(`[data-return-button="true"]`).addEventListener("click", setLogicReturnBtn);

function renderCategories() {
    main.style.display = "flex";
    const ul = document.createElement("ul");
    ul.classList.add("nav-category__list");

    categoriesList.forEach((category) => {
        const li = document.createElement("li");
        const link = document.createElement("button");

        link.setAttribute("data-category", category);

        link.textContent = category;

        li.append(link);
        ul.append(li);
    })

    categoriesHolder.append(ul);
}

function handleCategory(event) {
    if (event.target.hasAttribute("data-category")) {
        const newCategory = event.target.getAttribute("data-category");

        if (newCategory === activeCategory) {
            return;
        }

        if (!activeCategory) {
            activeCategory = newCategory;
        }

        document
            .querySelector(`[data-category = "${activeCategory}"]`)
            .classList.remove("active");

        document
            .querySelector(`[data-category = "${newCategory}"]`)
            .classList.add("active");

        activeCategory = newCategory;
        activeProduct = "";

        renderProducts();
    }
}

function renderProducts() {
    const ul = document.createElement("ul");
    ul.classList.add("nav-product__list");

    productsIndexedByCategory[activeCategory].forEach(item => {
        const li = document.createElement("li");
        const link = document.createElement("button");

        link.setAttribute("data-product", item.title);
        link.textContent = item.title;

        li.append(link);
        ul.append(li);
    })

    const productListElement = document.querySelector(".nav-product__list");

    if (productListElement) {
        productListElement.replaceWith(ul);
    } else {
        productsHolder.append(ul);
    }
}

function handleProduct(event) {
    if (event.target.hasAttribute("data-product")) {
        const newProduct = event.target.dataset.product;

        if (newProduct === activeProduct) {
            return;
        }

        if (!activeProduct) {
            activeProduct = newProduct;
        }

        document
            .querySelector(`[data-product = "${activeProduct}"]`)
            .classList.remove("active");

        document
            .querySelector(`[data-product = "${newProduct}"]`)
            .classList.add("active");

        activeProduct = newProduct;

        renderDetails();
    }
}

function renderDetails() {
    const product = productsIndexedByCategory[activeCategory].find(item => item.title === activeProduct);

    detailsHolder.innerHTML = `
        <div class = "card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <div class="card__title">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
            </div>
            <ul class="product-details-list">
                <li class="product-details-list__item">
                    <strong>Price:</strong> ${product.price}$
                </li>
                <li class="product-details-list__item">
                    <strong>Discount:</strong> ${product.discountPercentage}%
                </li>
                <li class="product-details-list__item">
                    <strong>Rating:</strong> ${product.rating}⭐
                </li>
                <li class="product-details-list__item">
                    <strong>Brand:</strong> ${product.brand}🏢
                </li>
            </ul>
            <div class="card__purchase-button">
                <button class="purchase-btn" data-purchase="${product.title}">Buy</button>
            </div>
        </div>
    `;
}

function handlePurchase(event) {
    if (event.target.hasAttribute("data-purchase")) {
        targetProduct = event.target.dataset.purchase;
        targetCategory = activeCategory;

        document.querySelector(".order-section__title").textContent = targetProduct;
        document.querySelector(".order-section").classList.add("order-section_show");

        clearInterface();
    }
}

function clearInterface() {
    activeCategory = "";
    activeProduct = "";
    document.querySelector(".nav-category").innerHTML = "";
    document.querySelector(".nav-product").innerHTML = "";
    document.querySelector(".details-section").innerHTML = "";
}

renderCategories();

form.onsubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    const formData = new FormData(form);
    const objNameValue = {};

    for (let obj of formData.entries()) {
        objNameValue[obj[0]] = obj[1];

        const error = document.createElement("span");
        error.textContent = "Некоректний ввід даних";
        error.classList.add("invalid-value");

        if (obj[0] === "typeOfPay") {
            continue;
        }

        if (form[obj[0]].classList.contains("invalid-input")) {
            form[obj[0]].classList.remove("invalid-input");
            form[obj[0]].nextElementSibling.remove();
        }

        if (!obj[1] || obj[1] === "choose") {
            form[obj[0]].classList.add("invalid-input");
            form[obj[0]].after(error);
            isValid = false;
        }
    }

    if (isValid) {
        localStorage.orderCounter++;
        alert(`${targetProduct} додано до кошика`);
        localStorage.setItem(localStorage.orderCounter, JSON.stringify({
            orderId: localStorage.orderCounter,
            product: targetProduct,
            productPrice: `${productsIndexedByCategory[targetCategory].find(item => item.title === targetProduct).price}$`,
            name: objNameValue.pib,
            amount: `${objNameValue.amount}шт`,
            city: objNameValue.city,
            storage: objNameValue.storage,
            typeOfPay: objNameValue.typeOfPay,
            comment: objNameValue.comment,
            data: new Date()
        }));

        document.querySelector(".order-section").classList.remove("order-section_show");
        renderCategories();
    }
}

function setLogicReturnBtn(event) {
    document.querySelector(`.orders-show-section`).remove();
    event.target.classList.add("cart-section__button_theme_hidden");
    renderCategories();
}

function renderOrders() {
    clearInterface();

    document.querySelector(`[data-return-button="true"]`).classList.remove("cart-section__button_theme_hidden");

    main.style.display = "block";
    const orders = document.createElement("div");
    orders.classList.add("orders-show-section");

    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key) || key === "orderCounter") {
            continue;
        }
        let objTemp = JSON.parse(localStorage.getItem(key));

        const outerUl = document.createElement("ul");
        outerUl.classList.add("orders-show-section__list");
        outerUl.setAttribute("data-detailorder", objTemp.orderId);

        for (let itemKey in objTemp) {
            if (itemKey === "product" || itemKey === "productPrice" || itemKey === "data") {
                const outerli = document.createElement("li");
                outerli.textContent = objTemp[itemKey];
                outerUl.append(outerli);
            }
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Видалити замовлення";
        deleteButton.setAttribute("data-targetorder", objTemp.orderId);
        deleteButton.classList.add("orders-show-section__delbtn");

        outerUl.append(deleteButton);
        orders.append(outerUl);
    }

    if (document.querySelector(".orders-show-section")) {
        document.querySelector(".orders-show-section").replaceWith(orders);
    } else {
        main.append(orders);
    }

    orders.addEventListener("click", handleOrders)
}

function handleOrders(event) {
    if (event.target.hasAttribute("data-targetorder")) {
        localStorage.removeItem(event.target.dataset.targetorder);
        document.querySelector(".orders-show-section").innerHTML = "";
        renderOrders();
        return;
    }

    if (event.target.hasAttribute("data-detailorder")) {
        const objTemp = JSON.parse(localStorage[event.target.dataset.detailorder]);

        const detailMessage = document.createElement("div");
        detailMessage.classList.add("orders-show-section__help");
        detailMessage.setAttribute("data-helporder", event.target.dataset.detailorder);
        detailMessage.textContent = `
            Номер замовлення ${objTemp.orderId}.
            Кількість ${objTemp.amount}.
            Забиратиме посилку ${objTemp.name}.
            Місто відправлення ${objTemp.city}.
            Склад НП #${objTemp.storage}.
            Тип оплати ${objTemp.typeOfPay}.
            Залишений коментар: ${objTemp.comment}.
        `;

        if (document.querySelector(`[data-helporder="${+event.target.dataset.detailorder}"]`)) {
            document.querySelector(`[data-helporder="${+event.target.dataset.detailorder}"]`).remove();
        } else {
            document.querySelector(`[data-detailorder="${+event.target.dataset.detailorder}"]`).after(detailMessage);
        }
    }
}