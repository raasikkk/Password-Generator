let generator = document.getElementById('generator-el');
let buttonEl = document.getElementById('open-button');

buttonEl.addEventListener('click', function () {
    generator.classList.toggle('active')
})



const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword = document.getElementById('firstPassword')
let secondPassword = document.getElementById('secondPassword')



function passwordGenerator() {
    let inputNumber = document.getElementById('passwordGeneratorLength')
    let inputValue = inputNumber.value

    for (let i = 0; i < inputValue; i++) {
        if (firstPassword.textContent.length < inputValue && secondPassword.textContent.length < inputValue ) {
            let firstRandomizer = Math.floor( Math.random() * characters.length )  
            firstPassword.textContent += characters[firstRandomizer]
            let secondRandomizer = Math.floor( Math.random() * characters.length )  
            secondPassword.textContent += characters[secondRandomizer]
        } else {
            let firstRandomizer = Math.floor( Math.random() * characters.length )  
            firstPassword.textContent = characters[firstRandomizer]
            let secondRandomizer = Math.floor( Math.random() * characters.length )  
            secondPassword.textContent = characters[secondRandomizer]
        }

        
        
    }
    

}

firstPassword.addEventListener('click', function () {
    copyToClipboard(firstPassword.textContent);
});

secondPassword.addEventListener('click', function () {
    copyToClipboard(secondPassword.textContent);
});


function copyToClipboard(text) {
    let textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px'; 

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    let hiddenPassword = []

    for (let i = 0; i < text.length; i++) {
        hiddenPassword.push('*')
    }

    alert('Copied the password: ' + hiddenPassword.join(''));
}

