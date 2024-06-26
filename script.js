// Author: soukaina assou
// Let's create some variables for the html input and button.

// Getting the input-box id from html row class. Also, the list-container id.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// see this awesome reference : https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/
// Function after clicking the button: if empty: tell uer to enter text, otherwise, read input as html & add/display to the list.
// We also want to clear the input box & remove duplicate entreid (me)
function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // The <span> tag is an INLINE container used to mark up a part of a text, or a part of a document
        // this line: span.innerHTML = "\u00d7"; the code is for "cross sumbol x" \. Now needs CSS styling!
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = "";
    saveData();
}

// Action when Task is clicked. Also, Action when clicking the cross x to delete the Task.
// Notice ALL THE CODE is inside the adEventListener function PARENTHESES!
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// We want to store the data on the browser. When we refresh the page it doesn't disappear!
// 1-save the data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// 2-display the data that was stored/saved in our list all along.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();