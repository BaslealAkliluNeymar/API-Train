//API1 = "https://jsonplaceholder.typicode.com/users"
//API@ = `https://jsonplaceholder.typicode.com/posts?userID=${localStorage.getItem('id')}`

async function render(){
    const get = await fetch("https://jsonplaceholder.typicode.com/users");
    const found = await get.json();
    const z = document.querySelector('.container')
    z.innerHTML = found.map((user) => getHTML(user)).join('');
}

function getHTML(user){
    return `
    <div class="row" onclick = "locate(${user.id})">
        <h2>${user.name}</h2>
        <div class="info">
                <p>Email:</p>
                <p>${user.email}</p>
            </div>
            <div class="info">
                <p>Phone:</p>
                <p>${user.phone}</p>
            </div>
            <div class="info">
                <p>Website:</p>
                <a href="#">${user.website}</a>
            </div>
    </div> 
    `
}

render()

function locate(id){
     window.location.href = `${window.location.origin}/user.html`;
     localStorage.setItem("id",id);
}

