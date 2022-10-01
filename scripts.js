let firstPass = document.getElementById("pass1")
let secondPass = document.getElementById("pass2")
let copyPassEl1 = document.getElementById("copy-pass-field-1")
let copyPassEl2 = document.getElementById("copy-pass-fielf-2")
let copyText = document.getElementById("copy-text")
let charBtn16el = document.getElementById("char-btn-16")
let charBtn14el = document.getElementById("char-btn-14")
let charBtn10el = document.getElementById("char-btn-10")
let charLength = 16
copyText.textContent = ""
isGenerated = false
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",".","?",
"/"];

charBtn16el.style.border = "2px solid #10b981"


function passGen() {
    let firstRandomString = ""
    let secondRandomString = ""
    isGenerated = true
    for (let i=0; i < charLength; i++){
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


function copyFirstPass(){
    if (isGenerated === true) {
        var tempCopy1 = firstPass.innerHTML
        navigator.clipboard.writeText(tempCopy1)
        copyText.textContent = "[Password Copied]"
        setTimeout(() => {
            copyText.textContent = ""
        }, 1000);
    } else {
        copyText.textContent = "[No password generated yet]"
        setTimeout(() => {
            copyText.textContent = ""
        }, 2000);
    }
    

}
function copySecondPass(){
    if (isGenerated === true){
        var tempCopy2 = secondPass.innerHTML
        navigator.clipboard.writeText(tempCopy2)
        copyText.textContent = "[Password Copied]"
        setTimeout(() => {
            copyText.textContent = ""
        }, 1000);
    } else {
        copyText.textContent = "[No password generated yet]"
        setTimeout(() => {
            copyText.textContent = ""
        }, 2000);
    }
}

function charlen16(){
    charBtn10el.style.border = "none"
    charBtn14el.style.border = "none"
    charBtn16el.style.border = "2px solid #10b981"
    charLength = 16
}
function charlen14(){
    charBtn10el.style.border = "none"
    charBtn16el.style.border = "none"
    charBtn14el.style.border = "2px solid #10b981"
    charLength = 14
}
function charlen10(){
    charBtn16el.style.border = "none"
    charBtn14el.style.border = "none"
    charBtn10el.style.border = "2px solid #10b981"
    charLength = 10
}
