//target Element
const username = document.getElementById('username');
const password = document.getElementById('pass');
const submit = document.getElementById('submit');

const signuparr = JSON.parse(localStorage.getItem('signuparr'));

const loginarr = [];

submit.addEventListener('click', (e) => {
    e.preventDefault();
    //create user
    const user = {
        name: username.value,
        password: password.value
    }
    //check for valid user
    var valid = false;
    for (var i = 0; i < signuparr.length; i++) {
        if (user.name == signuparr[i].name && user.password == signuparr[i].password) {
            valid = true;
        }

    }
    if (valid) {
        //push in array
        loginarr.push(user)


        //store array in local storage
        localStorage.setItem("loginarr", JSON.stringify(loginarr));
        //redirect to home.html
        window.location.href = "home.html";
    }
    else {
        console.log('user is not valid');
    }
})
