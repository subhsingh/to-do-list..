const inputbox = document.getElementById(".input-box");
const listcontainer = document.getElementById(".list-container");

function addTask(){
    if(inputbox.value === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
    }
}