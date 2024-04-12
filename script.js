// Author: soukaina assou
// Let's create some variables for the html input and button.

// Getting the input-box id from html row class. Also, the list-container id.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// see this awesome reference : https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/
// Function after clicking the button: if empty: tell uer to enter text, otherwise, read input as html & add to the list.
function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}