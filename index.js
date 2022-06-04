//target Element
 const home = document.getElementById('home');
 const signup = document.getElementById('signup');
 const login = document.getElementById('login');

 //add event listner into home
 home.addEventListener('click',(e) => {
     e.preventDefault();
     window.location.href ='home.html';
 })

 //add event listner into signup

 signup.addEventListener('click',(e) =>{
     e.preventDefault();
     window.location.href='signup.html';
 })

 //add event listner into login

 login.addEventListener('click',(e) =>{
     e.preventDefault();
     window.location.href='login.html';
 })