// This is a single line comment

/*This
is a multiline
comment*/

// Operators in js:
    // Arithmetic operators: [+, -, *, /, %, **, ++, --]
        {
            let a = 5;
            let b = 2;
            console.log('a = ', a, 'b = ', b);
            console.log('a+b = ', a+b); // addition
            console.log('a-b = ', a-b); // substraction
            console.log('a*b = ', a*b); // multiplication
            console.log('a/b = ', a/b); // division
            console.log('a%b = ', a%b); // reminder
            console.log('a**b = ', a**b); // exponentiation
            console.log('a = a+1', a++); //post increment (changes value later, print first)
            console.log('++a', ++a); // pre increment(changes value first then print)
            console.log('a = a-1', a--); // post decrement (same as post increment)
            console.log('--a', --a); // pre decrement (same as pre increment)
        }
    // Assignment Operators: [=, +=, -=, *=, /=, %=, **=]
        {
            let a = 3;
            let b = 2;
            console.log('a = ', a, ', b = ', b);
            console.log('a = a + b: ', a+=b);
            console.log('a = a - b: ', a-=b);
            console.log('a = a * b: ', a*=b);
            console.log('a = a / b: ', a/=b);
            console.log('a = a % b: ', a%=b);
            console.log('a = a ** b: ', a**=b);
        }
    // Comparison Operators: [==, ===, !=, !==, >, >=, <, <=]
        {
            let a = 5;
            let b = 2;
            console.log('a = ',a, ', b = ',b);
            console.log('a == b: ', a==b); // checks equality without datatype
            console.log('a === b: ', a===b); // checks equality with datatype
            console.log('a != b:', a!=b); // checks inequality without datatype
            console.log('a !== b: ', a!==b); // checks inequality with datatype
            console.log('a > b:', a>b); // checks greater than or not
            console.log('a >= b: ', a>=b); // checks greater than or equal to or not
            console.log('a < b: ', a<b); // checks less than or not 
            console.log('a <= b: ', a<=b); // checks less than or equal to or not
        }
    // Logical operators: [&&(logical and), ||(logical or), !(logical not)]
        {
            let cond1 = true;
            let cond2 = false;
            let cond3 = true;
            console.log('true &&(and) true: ', cond1&&cond3); // all needs to be true
            console.log('true &&(and) false: ', cond1&&cond2);
            console.log('true ||(or) true: ', cond1||cond3); // just one need to be true
            console.log('true ||(or) false: ', cond1||cond2);
            console.log('!true = ', !cond1); // reverses
            console.log('!false = ', !cond2); // reverses
        }
    // Ternary Operators [compact if-else]: 
        {
            let age = 18;
            let syntex = age > 18? 'adult':'not adult'; // condition? execute_if_true: execute_if_false
            console.log(syntex); // will show not adult cuz condition is false
        }
// Operators ends here!!

// Conditional statements in js:
    // if statement:
        {
            let age = 25;
            if (age > 18) {
                console.log('Yes, an adult');
            }; // will execute cuz it's true
            if (age < 18) {
                console.log('nah, a kid');
            }; // will not execute cuz it's false
            let mode = 'light';
            let color;
            if (mode === 'dark') {
                color = 'white';
                console.log(color);
            }; // will not execute
            if (mode === 'light') {
                color = 'black';
                console.log(color);
            }; // will execute
        }
    // if-else statement:
        {
            let mode = 'dark';
            let color;
            if (mode === 'dark') {
                color = 'white';
                console.log(color);
            }
            else{
                color = 'black';
                console.log(color);
            }; // will show white
            let num = 11;
            if (num%2 === 0) {
                console.log('11 even number');
            }
            else {
                console.log('11 is odd');
            }; // will show odd
        }
    // else-if statement: 
        {
            let mode = 'pink';
            let color;
            if (mode === 'dark'){
                color = 'white';
            }
            else if (mode === 'blue') {
                color = 'majenta';
            }
            else if (mode === 'pink') {
                color = 'sky-blue';
            }
            else {
                color = 'black';
            }; // will show sky-blue
            console.log(color);
        }
    // switch statement: 
        {
            let mode = 'blue';
            let color;
            switch(mode) {
                case 'dark':
                    color = 'white';
                    break;
                case 'pink':
                    color = 'sky-blue';
                    break;
                case 'blue':
                    color = 'pink';
                    break;
                default:
                    color = 'white';
            }; // which matches will be executed
            console.log(color); // will show pink
        }
// Conditionals end here !!

// Practice:
    // Qs1: Get user to input a number using promt('Enter a number: '). Check if the number is a multiple of 5 or not.
        /*{
            alert('Hello'); // one time pop up
            prompt('hello'); // pop up that takes input
            let input = prompt('Enter a number: ');
            if (input%5 ===0){
                console.log(input, ' is a multiple of 5')
            }
            else{
                console.log(input, ' is not a multilple of 5')
            }
        }*/ // Commented this because prompt, alert isn't allowed in nodejs
    // Qs2: Write a code which can give grades to students according to their scores:
        {
            let score = 53;
            switch(true) {
                case ((score>=80)&&(score<=100)):
                    console.log('You got A');
                    break;
                case 70<=score&&score<=79:
                    console.log('You got B');
                    break;
                case 60<=score&&score<=69:
                    console.log('You got C');
                    break;
                case 50<=score&&score<=59:
                    console.log('You got D');
                    break;
                default:
                    console.log('You failed');
            };
            // shouldn't have used switch. It checks value not conditions. One way to do with switch is making the arguement of switch to true. Should have used else if statements
        }
// Practice ends here!!

// Thank you for learning at 1st March, 2025. It took 2 hours to learn. Worth it.