// Loops in js:
    // for loop:
        {
            for(let count = 1; count <= 5; count++) {
                console.log('Mujahid Mahi');
            }; // (initialisation, verification, increment)
            console.log('Loop has ended!');
            // Calculate the sum of 1-10:
            let sum = 0;
            for(let num = 1; num<=10; num++){
                sum = sum + num;
            }
            console.log('Sum of 1-10 is', sum);
        }
    // while loop:
        {
            let i = 1;
            while(i<=5) {
                console.log('i = ',  i);
                i++; // increment or decrement is must and should be in the last
            }; // (condition/ verification)
            console.log('loop ends here');
        }
    // do while loop:
        {
            let i = 1;
            do {
                console.log('i = ', i);
                i++;
            }while(i <= 5);
            // do = does the work 
            // while = gives the condition
        }
    // for of loop:
        {
            let name = 'Mujahid';
            for (let charecter of name) {
                console.log(charecter);
            }; // shows every items separately
            // only applicable in string and array. not in object
        }
    // for in loop:
        {
            let user = {
                name: 'alex',
                id: 12121,
                roll: 12,
            };
            for (let key in user) {
                console.log('Key = ', key, ', value = ', user[key]);
            }; // picks the keys of an object
            // only applicable for objects
        }
    // Practice questions:
        {
            // QS1: Print all even numbers from 0 to 100;
            let even;
            for (even = 2; even <= 100; even+=2) {
                console.log('even = ', even);
            };
            console.log('Loops ends here');
        }
        {
            // QS2: Create a game where you start with any random game number. Ask the user to keep guessing the game number untill the user enters correct value
            let guessNumber = 23;
            let inputNumber;
            do {
                inputNumber = prompt("Enter the correct Number here: ");
            }while(inputNumber != guessNumber);
            alert('Congrats');
        }
// Loop ends here!!

// Strings in js:
    // Properties of string: [object keys]
        {
            let str = 'Mujahid';
            console.log(str.length);
            console.log(str[4]);
        }
    // Template literates:
        {   
            let user = {
                name: 'Mujahid',
                age: 20,
                roll: 121
            }
            let sentence = `Hey, my name is ${user.name}. My age is ${user.age}. My roll is ${user.roll}`;
            console.log(sentence);
        }
    // Escape character: [\n, \t]
        {
            console.log('Mujahid\nMahi'); // line break
            console.log('Mujahid\t\t\t\t\tMahi'); // gives a tab space
        }
    // String methods: [string function = does something]
        {
            let userName = 'MUJAHID mahi'; // Original strings are immutable or unchangable
            let userID = '   22222   '
            console.log(userName.toUpperCase()); // wont' change original
            console.log(userName.toLowerCase()); // won't change original
            console.log(userID.trim()); // removes white space
            console.log(userName.slice(2,5)) // returns part of string (start index, end index + 1)
            console.log(userName.concat(userID)); // joins 2 strings
            console.log(userName.replace('MUJAHID', 'Jahid')); // (searchValue, newValue)
            console.log(userName.charAt(4)); // shows the value of an index
        }
    // Practice Questions:
        {
            // QS1: Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.
            let fullName = prompt('Enter your full name: ');
            fullName = fullName.replaceAll(' ', '_');
            let username = `@${fullName.toLowerCase()}${fullName.length}`;
            console.log(username);
            alert(username);
        }
// Strings End here!!!! 
// P.O.V = don't run it in node. run it in browser cuz node doesn't support alert and prompt

// Thank you for learning at 2nd March, 2025. It took 2 hours to learn. Worth it. 