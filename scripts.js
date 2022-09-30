let firstPass = document.getElementById("pass1")
let secondPass = document.getElementById("pass2")
let copyPassEl1 = document.getElementById("copy-pass-field-1")
let copyPassEl2 = document.getElementById("copy-pass-fielf-2")
let copyText = document.getElementById("copy-text")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function passGen() {
    let firstRandomString = ""
    let secondRandomString = ""
    for (let i=0; i < 15; i++){
        firstRandomString += characters[(Math.floor(Math.random()*characters.length))] 
        secondRandomString += characters[(Math.floor(Math.random()*characters.length))]
    }
    firstPass.textContent = firstRandomString
    secondPass.textContent = secondRandomString
    copyText.textContent = "[Click on any password to copy it]"
    setTimeout(() => {
        copyText.textContent = ""
    }, 3000);
}

copyPassEl1.addEventListener("click", copyFirstPass())
copyPassEl2.addEventListener("click", copySecondPass())

function copyFirstPass(){
    var tempCopy1 = firstPass.innerHTML
    navigator.clipboard.writeText(tempCopy1)
    copyText.textContent = "[Password Copied]"
    setTimeout(() => {
        copyText.textContent = ""
    }, 700);

}
function copySecondPass(){
    var tempCopy2 = secondPass.innerHTML
    navigator.clipboard.writeText(tempCopy2)
    copyText.textContent = "[Password Copied]"
    setTimeout(() => {
        copyText.textContent = ""
    }, 700);
}

