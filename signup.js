//target Element
const username =document.getElementById('username');
const password=document.getElementById('pass');
const submit=document.getElementById('submit'); 


if(localStorage.getItem('signuparr')==null)
{
    var signuparr = [];
}
else
{
    signuparr = JSON.parse(localStorage.getItem('signuparr'));
}
//event listner of submit btn
submit.addEventListener('click',(e) => {
    e.preventDefault();
    //user creat
    const user = {
        name: username.value, 
        password:pass.value 

    }
    signuparr.push(user);

    //array store into local storage
    localStorage.setItem('signuparr',JSON.stringify(signuparr));

    //redirect to index.html
    window.location.href='index.html'
}) 