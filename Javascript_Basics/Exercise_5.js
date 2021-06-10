function checkDriverAge(){
    var age = prompt("Type your age, please...");
    if(age < 18){
        alert("Sorry, you are too youg to drive this car. Powering off");
    } else {
        if(age == 18){
            alert("Congratulations on your first year of driving.     Enjoy the ride!");
        } else{
            alert("Powering On. Enjoy the ride!");
        }
    }
}

var checkDriverAge2 = function(){
    var age = prompt("Type your age, please...");
    if(age < 18){
        alert("Sorry, you are too youg to drive this car. Powering off");
    } else {
        if(age == 18){
            alert("Congratulations on your first year of driving.     Enjoy the ride!");
        } else{
            alert("Powering On. Enjoy the ride!");
        }
    }
}

function checkDriverAge3(age){
    if(age < 18){
        console.log("Sorry, you are too youg to drive this car. Powering off");
    } else {
        if(age == 18){
            console.log("Congratulations on your first year of driving. Enjoy the ride!");
        } else{
            console.log("Powering On. Enjoy the ride!");
        }
    }
}

checkDriverAge();

checkDriverAge2();

checkDriverAge3(50);
