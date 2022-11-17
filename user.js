console.log(localStorage.getItem('id'))

async function main(){
    
    const id = localStorage.getItem('id')
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postData = await posts.json();
    console.log(postData)

    const x = document.querySelector('.post-list')
    const z = postData.map((element) =>{
         return `
         <div class="post">
            <div class="post_title">
                ${element.title}
            </div>
            <hr>
            <p class="post_body">
                ${element.body}
            </p>
        </div>
         `
    }).join(" ");
    x.innerHTML = z;
}

async function onSearchChange(event){
    const id = event.target.value;
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postData = await posts.json();
    console.log(postData)

    const x = document.querySelector('.post-list')
    const z = postData.map((element) =>{
         return `
         <div class="post">
            <div class="post_title">
                ${element.title}
            </div>
            <hr>
            <p class="post_body">
                ${element.body}
            </p>
        </div>
         `

    }).join(" ");
    x.innerHTML = z;

}

main();