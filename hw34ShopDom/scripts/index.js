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

let activeCategory = "";
let activeProduct = "";
let targetProduct = "";

categoriesHolder.addEventListener("click", handleCategory);
productsHolder.addEventListener("click", handleProduct);
detailsHolder.addEventListener("click", handlePurchase);

function renderCategories() {
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
        alert(`${objNameValue.pib} замовив ${targetProduct} у кількості ${objNameValue.amount}шт. у місто ${objNameValue.city} на склад НП ${objNameValue.storage}. Обраний метод оплати: ${objNameValue.typeOfPay}`);
        document.querySelector(".order-section").classList.remove("order-section_show");
        renderCategories();
    }
}