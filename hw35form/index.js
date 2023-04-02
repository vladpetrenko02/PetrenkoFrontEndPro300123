document.querySelector(".form").addEventListener("submit", setLogicForm);

function setLogicForm(event) {
    event.preventDefault();
    const table = document.createElement("table");
    table.className = "table_theme";
    
    const formData = new FormData(this);

    for(let obj of formData.entries()) {
        table.append(addTr(obj[0], obj[1]));
    }

    if(document.querySelector(".table_theme")) {
        document.querySelector(".table_theme").replaceWith(table);
    } else {
        this.after(table);
    }
}

function addTr(name, value) {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdValue = document.createElement("td");
    tdName.innerText = name;
    tr.append(tdName);
    tdValue.innerText = value;
    tr.append(tdValue);
    return tr;
}