// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
const characters = [0,1,2,3,4,5,6,7,8,9,'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K','k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', '!','@','#','$','%','%','^','&','*','(',')','-','+','='];


// create a global variable called "pwLength" with a number between 10 and 18

const pwLength = 11;
const password ="";

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

    function addNewPassword() {
        let characters = [0,1,2,3,4,5,6,7,8,9,'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K','k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z','!','@','#','$','%','%','^','&','*','(',')','-','+','='];
        let pwLength = 9;
        let password = [];
        let i = [];

        for(let i=0; i <= pwLength; i++) {
            let random = Math.floor(Math.random() * characters.length);
            password.push(characters[random]);
        }
        document.getElementById("password").value = password.join('');

        // eliminate call stack exceed max 
        // random not defined
        if (i < characters.length) {
            setTimeout(addNewPassword, random());
        }
    }



// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
