let test = [1,2,[10,20,30,[100,200]],0];

function generateList(arr) {
    let ul = document.createElement('ul');
    
    arr.forEach(item => {
        let li = document.createElement('li');

        if(Array.isArray(item)){
            const list = generateList(item);
            li.append(list);
        } else {
            li.textContent = item;
        }

        ul.append(li);
    })

    return ul;
}

document.body.append(generateList(test));