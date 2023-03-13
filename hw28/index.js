function insertTable(elem) {
    let table = "<table>";
    let j = 1;

    for(let i = 0; i < 10; i++){
        table += "<tr>";

        for( ; j <= 100; j++){
            table += `<td>${j}</td>`;

            if(j % 10 === 0) {
                table += "</tr>";
                j++;
                break;
            }
        }
    }

    table += "</table>";

    elem.innerHTML = table;
}

let t = document.getElementById("table-wrapper");
insertTable(t);