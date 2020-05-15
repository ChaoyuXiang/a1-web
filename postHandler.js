const getUser = function(){
    return localStorage.getItem('curr');
} 

const getStoredPosts = function(){
    let curr_user = getUser();
    return JSON.parse(localStorage.getItem(curr_user)||"[]");
}

const createOnePost = function(){
    let curr_user = getUser();
    let posts = getStoredPosts();
    let onePost = {
        content: document.querySelector('.user-post').value,
        id:uuidv4(),
        date : getTime()
    };
    posts.push(onePost);
    renderOnePost(onePost)
    localStorage.setItem(curr_user,JSON.stringify(posts));
}

const removePost = function(id){
    let posts = getStoredPosts();
    const idx = posts.findIndex(function (onePost) {
        return onePost.id === id;
    })

    if (idx > -1) {
        posts.splice(idx, 1);
        localStorage.setItem(getUser(),JSON.stringify(posts));
    }
}

const renderAllPosts = function(){
    document.querySelector('.posts').innerHTML = '';
    let posts = getStoredPosts();
    const title = document.createElement('h4');
    title.textContent = "Posts history :";
    title.className = 'post-title';
    document.querySelector('.posts').appendChild(title);
    posts.forEach((onePost)=>{
        let oneDom = generateOneDom(onePost);
        document.querySelector('.posts').appendChild(oneDom);
    });
}

const renderOnePost = function(onePost){
    const title = document.createElement('h4');
    title.textContent = "Here is the result";
    title.className = 'post-title';
    const oneDom = generateOneDom(onePost);
    document.querySelector('.posts').appendChild(title);
    document.querySelector('.posts').appendChild(oneDom);
}

const generateOneDom = function(onePost){
    let post = document.createElement('div')
    let text = document.createElement('label')
    let button = document.createElement('button')
    button.className = 'post-button';
    button.textContent = 'x'
    post.appendChild(button)
    button.addEventListener('click', function () {
        removePost(onePost.id);
        renderAllPosts();
    })

    text.textContent = `${onePost.date} -- ${onePost.content}$`;
    post.appendChild(text);
    post.className = 'one-post';
    return post;
}

const getTime = function(){
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

document.querySelector('.post-submit').addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.posts').innerHTML = '';
    createOnePost();
})