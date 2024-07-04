const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const errorEl = document.getElementById("error");

let passwordLength = 0;

document.getElementById("password-btn").addEventListener("click", generatePasswords);
document.getElementById("password1").addEventListener("click", function() {copyToClipboard(document.getElementById("password1").textContent)});
document.getElementById("password2").addEventListener("click", function() {copyToClipboard(document.getElementById("password2").textContent)});

function generatePasswords() {

    passwordLength = document.getElementById("password-length").value;

    // The === meant that it wasn't getting into this error
    if (passwordLength == 0) {
        errorEl.textContent = "Password length cannot be zero";
        return;
    } else if (passwordLength > 15) {
        errorEl.textContent = "Password length cannot be greater than 15";
        return;
    } else {
        errorEl.textContent = "";
    }

    let password1 = generatePassword();
    let password2 = generatePassword();

    password1El.textContent = password1;
    password2El.textContent = password2;

}

function generatePassword() {

    let password = "";
    let randomIndex = 0;

    for(let i = 0; i < passwordLength; i++) {

        randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];

    }

    return password;
}

/* This works in chrome but doesn't appear to work in the mini browser */
function copyToClipboard(copyText) {

    navigator.clipboard.writeText(copyText);

}