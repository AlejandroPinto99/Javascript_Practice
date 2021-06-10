var userinput = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
    return userinput.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userinput.value));
    ul.appendChild(li);
    userinput.value = "";
}

function addElementAfterClick(){   
    if(inputLength() > 0){
        createListElement();
    }
}

function addElementAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

button.addEventListener("click", addElementAfterClick);

userinput.addEventListener("keypress", addElementAfterKeypress);