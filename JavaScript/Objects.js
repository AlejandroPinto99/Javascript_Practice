var object = {
    username: "MrPintoS8",
    password: "secret",
}

var database = [object, {username: "Daiana", password: "123"}, {username: "Rodrigo", password: "777"}];

var newsFeed = [
{name: "Diana", timeline: "New post!!"}, 
{name: "Enrique", timeline: "New video published"}, 
{name: "Rodrigo", timeline: "New Job!"}];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function validUser(username, password) {
    for(i = 0; i<database.length; i++) {
        if(username == database[i].username && password == database[i].password){
            return true;
        }
    }
    return false
}

function signIn(username, password) {
    if(validUser(username, password))
        console.log(newsFeed);
    else 
        alert("Sorry, wrong information");
}

signIn(userNamePrompt, passwordPrompt);