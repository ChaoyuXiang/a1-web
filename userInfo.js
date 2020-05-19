const getCurr = function(){
    return localStorage.getItem('cur');
} 

const loadUser = function(){
    const user = document.getElementById('user');
    user.innerHTML = '';
    let curr = getCurr();
    user.textContent = `User: ${curr}`;
    if(!localStorage.getItem(curr)){
    localStorage.setItem(curr,JSON.stringify([welcome]));
    }
}

const welcome = {
    content: "Hi, I'm Chaoyu. You can post everything here at anytime. I hope you can enjoy it! 😊",
    id:0,
    state: ['happy'],
    date: '2020/05/18'
}