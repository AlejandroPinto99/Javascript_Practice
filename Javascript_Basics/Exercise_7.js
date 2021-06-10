

var database = [
    {
    username: "Alejandro",
    password: "123"
    }
    ,
    {
    username: "Diana",
    password: "456"
    },
    {
    username: "Rodrigo",
    password: "789"
    }
    ];

var newsfeed = [
    {
        username: "Alfredo11",
        timeline: " I want to eat fried fish, any recomendation? "
    },
    {
        username: "Miranda",
        timeline: "I just graduate from college!",
    }, 
    {
        username: "Tomas",
        timeline: "I'm travelling to Paris next month"
    }
]

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function validUser(username, password){
    for(var i = 0; i < database.length; i++) {
        if(username == database[i].username && 
            password == database[i].password){
            return true;
            }
        }
        return false;
    }

function signIn(username, password){
    if(validUser(username, password)){
        console.log(newsfeed);
    }else{
        alert("Sorry, wrong information")
    }
}

signIn(userNamePrompt, passwordPrompt);