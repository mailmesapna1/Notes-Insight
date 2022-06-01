//for checking code is running
console.log("js is running");
shownotes();

//target elements
var title = document.getElementById('title').value;
var disc = document.getElementById('disc').value;
var btn = document.getElementById('btn');
var secDiv = document.getElementById('secDiv');
var clearBtn = document.getElementById('clearBtn');

//creating arrays
var titleArr = [];
var discArr = [];

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
    var disc = document.getElementById('disc').value;
    discArr.push(disc);
    // console.log(discArr);
    //check if empty
    if (title == '' || disc == '') {
        alert("please fill all fields");
    }
    else {
        //save to local storage
        localStorage.setItem("title", JSON.stringify(titleArr));
        localStorage.setItem("disc", JSON.stringify(discArr));
        //show alert
        alert("note saved successfully");
        //clear fields
        document.getElementById('title').value = "";
        document.getElementById('disc').value = "";
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
    //clear 
    document.getElementById('title').value = "";
    document.getElementById('disc').value = "";
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
    var localdiscArr = JSON.parse(localStorage.getItem("disc"));
    localdiscArr.splice(index, 1);
    localStorage.setItem("disc", JSON.stringify(localdiscArr));
    shownotes();
    if (localtitleArr.length == 0) {
        console.log("notes are empty");
        localStorage.removeItem("title");
        localStorage.removeItem("disc");
        titleArr = [];
        secDiv.innerHTML = `<h4>you have cleared all notes . Please add first !</h4>`;
    }
}
//end delete note function
//Show notes 
function shownotes() {
    var localTitleArr = JSON.parse(localStorage.getItem("title"));

    var localDiscArr = JSON.parse(localStorage.getItem("disc"));
    var noteEle = '';
    if (localTitleArr == null || localDiscArr == null) {
        noteEle = '<h3>No notes found</h3>';
    }
    else {
        for (var i = 0; i < localTitleArr.length; i++) {
            noteEle += `<div class="noteDiv">
        <div class="titleDiv">
        <h3>Your title</h3>
        <p>${localTitleArr[i]}<p>
        </div>
        <div class="discDiv">
        <h3>Your Description</h3>
        <p>${localDiscArr[i]}</p>
        </div>
        <div>
        <button id="${i}" onclick="deleteNote(this.id)">Delete</button>
        </div>
        </div>`
        } //end for loop
    }
    var secDiv = document.getElementById('secDiv');
    secDiv.innerHTML = noteEle;
} //end shownotes function