function getTemperatureFeedback(temp) {
    if (temp < 0) {
        return "It's freezing!";
    } else if (temp >= 0 && temp <= 15) {
        return "It's cold!";
    } else if (temp >= 16 && temp <= 25) {
        return "It's comfortable!";
    } else {
        return "It's hot!";
    }
}
console.log(getTemperatureFeedback(-9));

function checkGuess(number, guess) {
    if (number > guess) {
        return "Too high!";
    } else if (number < guess) {
        return "Too low!";
    } else {
        return "Correct!";
    }
} console.log(checkGuess(50,90))


function isEligibleForDiscount(age, isStudent) {
    return (age < 18 || age > 60) && isStudent;
}
console.log(isEligibleForDiscount(18,true))
console.log(isEligibleForDiscount(18,false))


function canLogin(username, password, isAdmin) {
    if (username === "admin" && password === "12345" && isAdmin) {
        return "Access granted for admin";
    } else if (username !== "admin" && password === "12345") {
        return "Access granted for user";
    } else {
        return "Access denied";
    }
}
console.log(canLogin("admin","12345",true))


function classifyNumber(num) {
    if (num === 0) {
        return "Zero";
    } else if (num > 0 && num % 2 === 0) {
        return "Positive and even";
    } else if (num > 0 && num % 2 !== 0) {
        return "Positive and odd";
    } else if (num < 0 && num % 2 === 0) {
        return "Negative and even";
    } else {
        return "Negative and odd";
    }
}
console.log(classifyNumber(8))


function countVowels(str) {
    if (str.includes("a") ||str.includes("e")){
        return true ;
    }else{
        return false;
    }
}
console.log(countVowels("cat"));


function replaceWord(sentence, wordToReplace, replacement) {
    return sentence.replaceAll(wordToReplace, replacement);
}
console.log(replaceWord("hello my name is aya","aya","iyed"));


function emphasize(word, times) {
    return (word + " ").repeat(times).trim();
}
console.log(emphasize("aya",4));


function generateDiscount() {
    return Math.floor(Math.random() * (30 - 5 + 1)) + 5;
}
console.log(generateDiscount());


function formatBalance(balance) {
    return balance.toFixed(2);
}
console.log(formatBalance(2.58931752245144));