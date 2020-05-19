const getCurr = function(){
    return localStorage.getItem('cur');
} 

const loadUser = function(){
    const user = document.getElementById('user');
    user.innerHTML = '';
    let curr = getCurr();
    user.textContent = `User: ${curr}`;
}