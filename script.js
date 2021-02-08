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
generateEl.addEventListener('click', () => {
    if(!lowercaseEl.checked) {
        resultEl.textContent = '';
        return;
    }
    let resultString = '';
    for (let i = 0; i < lengthEl.value; i++) {
        resultString += getRandomLower();
    }
    resultEl.textContent = resultString;
    return resultString;
    
});






