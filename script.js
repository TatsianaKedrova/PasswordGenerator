const generateEl = document.querySelector("#generate");
const resultEl = document.querySelector("#result");
const clipboardEl = document.querySelector("#clipboard");
const lengthEl = document.querySelector("#length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols"); 



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumbers,
    symbol: getRandomSymbol
};


// Generator functions - http://www.net-comber.com/charset.html

function getRandomLower() { //generates random lower case letters
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() { //generates random upper case letters
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];    
}

//EVENTS
generateEl.addEventListener('click', (length) => {

    length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


//GENERATE PASSWORD FUNCTION
function generatePassword(lower, upper, number, symbol, length) {
    //1. initialise password variable
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol; //number
    console.log('typesCount: ', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter( 
    item => Object.values(item)[0]); //array of objects
    
    //console.log(typesArr);
    //console.log(typesArr.filter(Boolean));
    
    if(typesCount === 0) {//typesCount is a number
        return '';
    }

    for(let i = 0; i < length; i += typesCount){ //length is lengthEl.value
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            
            generatedPassword += randomFunc[funcName]();

        });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
    //2. filter out unchecked types
    //Loop over the length call a generator function for each type
    // Add the final password to the pw and return it
}


clipboardEl.addEventListener('click', copy);

function copy() {
    const textArea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) {
        return;
    }
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    alert('Password copied to clipboard!');
}






  

  

  




  
  















