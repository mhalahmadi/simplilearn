el = document.querySelector('#signup')


if (el) {
    el.addEventListener('submit', (e) => {
        let user = document.querySelector('#username').value;
        let pass = document.querySelector('#password').value;
        let eml = document.querySelector('#email').value;

        localStorage.setItem('username', JSON.stringify(user));
        localStorage.setItem('email', JSON.stringify(eml));
        localStorage.setItem('password', JSON.stringify(pass));
        document.querySelector('#register').reset();
        console.log(userNam)
        console.log(passWor)
        e.preventDefault()

    });
}


loginn = () => {
    let storeUser = JSON.parse(localStorage.getItem('username'));
    let storePw = JSON.parse(localStorage.getItem('password'));
    let userNam = document.querySelector('#username1').value;
    let passWor = document.querySelector('#passwodrd1').value;

    if (userNam == storeUser && passWor == storePw) {
        alert('login');
        var change = document.querySelector('#active').innerHTML = "mona";
        document.querySelector('#active').appendChild(change);



    } else {
        alert('Username or Password Incorrect');
    }
}