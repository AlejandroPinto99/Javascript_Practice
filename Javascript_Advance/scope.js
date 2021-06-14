//Scope
var b = "Can I access this?";

function bb(){
    var a = "hello";
}

//I can only access a, inside the bb function
//But the variable b, can be accessed by the bb function. Can read it, and also change it's value.

var fun = 5; //This is in the root scope

function funFunction(){
    //child scope
    var fun = "helloo"; //Gets overwritten
    console.log(1, fun);
}

function funerFunction() {
    //child scope
    var fun = "Byee"    //Gets overwritten
    console.log(2, fun);
}

function funestFunction(){
    //child scope
    fun = "Ahhhhh";        //Modifies the root scope;
    console.log(3, fun);
}

console.log("window", fun);