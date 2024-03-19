
const userinput = document.getElementById("text-input");
const checkanswer = document.getElementById('check-btn');
const showresult = document.getElementById('result');


checkanswer.addEventListener("click", CheckEntry);
function CheckEntry() { // Edge case for if user submits nothing
    if (!userinput.value) {
        alert("Please input a value");
    } else {
        isInputPalindrome();
    }
}

function isInputPalindrome() {

    const inputString = userinput.value.toLowerCase();

    // We need to remove non-alphabetical characters from the string using regex
    const regex = /[\s\W_]/g;
    const cleanString = inputString.replace(regex, "");

    // Cleaned string will turn into array, reversed and then turned into string again
    const cleanArray = cleanString.split("").reverse().join("");


    // Here I want to check if these 2 strings are the same, O is in this example equal to 1, no matter the string length, we need 1 step to check
    if (cleanString == cleanArray) {
        return IsAPalindrome();
    }   
    else {
        return NotAPalindrome();
    }
}
    // Display the result if a given input is or is not a palindrome
function NotAPalindrome() {
    const inputNotPalindrome = `${userinput.value} is not a palindrome.`;
    showresult.innerHTML = inputNotPalindrome;
}
function IsAPalindrome() {
    const inputIsPalindrome = `${userinput.value} is a palindrome.`;
    showresult.innerHTML = inputIsPalindrome;
}