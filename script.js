//for checking code is running
console.log("js is running");
shownotes();

//target elements
var title = document.getElementById('title').value;
var desc = document.getElementById('desc').value;
var btn = document.getElementById('btn');
var secDiv = document.getElementById('secDiv');
var clearBtn = document.getElementById('clearBtn');

//creating arrays
var titleArr = [];
var descArr = [];

//add event listner
btn.addEventListener('click', (e) => {
    // console.log(e.target);
    e.preventDefault();
    console.log("submit is running");
    //get values
    var title = document.getElementById('title').value;
    titleArr.push(title);
    // console.log(titleArr);
    // console.log(title);
    var desc = document.getElementById('desc').value;
    descArr.push(desc);
    // console.log(descArr);
    //check if empty
    if (title == '' || desc == '') {
        alert("please fill all fields");
    }
    else {
        //save to local storage
        localStorage.setItem("title", JSON.stringify(titleArr));
        localStorage.setItem("desc", JSON.stringify(descArr));
        //show alert
        alert("note saved successfully");
        //clear fields
        document.getElementById('title').value = "";
        document.getElementById('desc').value = "";
    }
    shownotes();
}
);

//add event listner to clear btn
clearBtn.addEventListener('click', (e) => {
    // console.log(e.target);
    e.preventDefault();
    console.log("clear is running");
    //clear local storage
    localStorage.clear();
    //show alert
    alert("all notes cleared");
    //clear fields
    document.getElementById('title').value = "";
    document.getElementById('desc').value = "";
    //show notes
    shownotes();
}
);

//delete note function
function deleteNote(id) {
    var localtitleArr = JSON.parse(localStorage.getItem("title"));
    var index = id;
    localtitleArr.splice(index, 1);
    localStorage.setItem("title", JSON.stringify(localtitleArr));
    var localdescArr = JSON.parse(localStorage.getItem("desc"));
    localdescArr.splice(index, 1);
    localStorage.setItem("desc", JSON.stringify(localdescArr));
    shownotes();
    if (localtitleArr.length == 0) {
        console.log("notes are empty");
        localStorage.removeItem("title");
        localStorage.removeItem("desc");
        titleArr = [];
        secDiv.innerHTML = `<h4>you have cleared all notes . Please add first !</h4>`;
    }
}
//end of delete note function
//Show notes function
function shownotes() {
    var localTitleArr = JSON.parse(localStorage.getItem("title"));
    // console.log(localTitleArr);
    var localDescArr = JSON.parse(localStorage.getItem("desc"));
    var noteEle = '';
    if (localTitleArr == null || localDescArr == null) {
        noteEle = '<h3>No notes found</h3>';
    }
    else {
        for (var i = 0; i < localTitleArr.length; i++) {
            noteEle += `<div class="noteDiv">
        <div class="titleDiv">
        <h3>Your title</h3>
        <p>${localTitleArr[i]}<p>
        </div>
        <div class="descDiv">
        <h3>Your Description</h3>
        <p>${localDescArr[i]}</p>
        </div>
        <div>
        <button id="${i}" onclick="deleteNote(this.id)">Delete</button>
        </div>
        </div>`
        } //end of for loop
    }
    var secDiv = document.getElementById('secDiv');
    secDiv.innerHTML = noteEle;
} //end of shownotes function