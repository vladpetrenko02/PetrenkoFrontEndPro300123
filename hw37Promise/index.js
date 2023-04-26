form.addEventListener("submit", getPost);

async function getPost(event) {
    event.preventDefault();

    const ul = document.createElement('ul');

    try {
        const contentPost = await getPostPromise();

        for (let key in contentPost) {
            const li = document.createElement('li');
            li.textContent = contentPost[key];
            ul.append(li);
        }

        main.append(ul);

        const btnShowComment = document.createElement('button');
        btnShowComment.setAttribute('data-post-id', contentPost.id);
        btnShowComment.textContent = 'Show comments';

        main.append(btnShowComment);
        btnShowComment.addEventListener("click", getComments);

    } catch (error) {
        alert(`Перехопили помилку на верхньому рівні ${error}`);
        return;
    }
}

async function getPostPromise() {
    try {
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${form.number.value}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong");
                }
            });

        return post;
    } catch (error) {
        throw error;
    }
}

function getComments(event) {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => response.json())
        .then(data => {
            let arrComments = data.reduce((accumArr, item) => {
                if (item[`postId`] == event.target.dataset.postId) {
                    accumArr.push(item[`body`]);
                }

                return accumArr;
            }, []);

            return arrComments;
        })
        .then(comments => {
            const ol = document.createElement('ol');
            comments.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ol.append(li);
            })

            main.append(ol);
        })
        .catch(error => {
            alert(error.message);
            return [];
        })
}