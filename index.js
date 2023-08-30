const nameID = document.getElementById("name");
const emailID = document.getElementById("email");
const passwordID = document.getElementById("password");
const passwordConfirmationID = document.getElementById("password_check");
const ageID = document.getElementById("age");
const submitID = document.getElementById("submit");

let nameCheck = true;
let passwordCheck = true;
let ageCheck = true;

/*
function nameCheckTest(name) {
    if (name.length < 5)
    {
        nameCheck = false;
    }
}
*/
function passwordCheckTest(password1, password2) {
    if (password1 != password2)
    {
        passwordCheck = false;
    }
}

submitID.onclick = function() {
    if (nameID.value.length < 5)
        alert("Name has to be 5 letters or more");
}
