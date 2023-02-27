function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}
function displayPosts(posts){
    for(const post of posts){
        console.log(post);
    }
}
loadPosts();
function loadPostsone(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPostsone(data));
}
function displayPostsone(posts){
    const postcontainer = document.getElementById('posts-container');
    for(const post of posts){
        const postdiv = document.createElement('div');
        postdiv.classList.add('post');
       postdiv.innerHTML = `
                 <h4>User-${post.userId}</h4>
                 <h5>Post:${post.title}</h5>
                 <p>Post Description:${post.body}</p>
                 `;
        postcontainer.appendChild(postdiv);
    }
}
loadPostsone();

