//-----CONDITIONAL STATEMENTS------

//1. Write a JavaScript program that checks if a number is even or odd using if-else statements.

let parity = (num) => {
    // check remainder with 2
    if(num % 2 == 0) {
        return 'Even';
    } else if (num % 2 == 1) {
        return 'Odd';
    } else {
        return "Invalid Input"
    }
}

//2. Create a function that determines whether a given year is a leap year using if-else statements.

let leapYear = (year) => {
    // if year is divisible by 100, check divisibility by 400, otherwise divisibility by 4 is sufficient
    if( year % 100 == 0) {
        if( year % 400 == 0) {
            return 'Leap Year';
        } else {
            return 'Not Leap Year'
        }
    } else if( year % 4 == 0) {
        return 'Leap Year';
    } else {
        return 'Not Leap Year'
    }
}

//3. Implement a JavaScript function that calculates the grade of a student based on their score using if-else statements.

let grade = (score) => {
    if( score >= 80) {
        return 'A';
    } else if( score >= 60 ) {
        return 'B';
    } else if( score >= 40 ) {
        return 'C';
    } else {
        return 'D'
    }
}

//4. Write a program that determines the type of a triangle (equilateral, isosceles, or scalene) based on the lengths of its sides using if-else statements.

let triangleType = (a, b, c) => {
    if( a == b && b == c) {
        return 'Equilateral'
    } else if( a == b || b == c || c == a) {
            return 'Isosceles'
    } else {
        return 'Scalene'
    }
}

//5. Develop a JavaScript function that converts a numerical grade into a letter grade (A, B, C, D, F) using if-else statements.

let toGrade = (score) => {
    if( score >= 80) {
        return 'A';
    } else if( score >= 60 ) {
        return 'B';
    } else if( score >= 40 ) {
        return 'C';
    } else if(score >= 20) {
        return 'D'
    } else {
        return 'F'
    }
}

//6. Implement a switch statement in JavaScript to determine the name of the day based on its number representation (1 for Monday, 2 for Tuesday, etc.).

let day = ( dayNo ) => {
    let name = '';
    switch(dayNo) {
        case 0: {
            name = 'Sunday';
            break;
        }
        case 1: {
            name = 'Monday';
            break;
        }
        case 2: {
            name = 'Tuesday';
            break;
        }
        case 3: {
            name = 'Wednesday';
            break;
        }
        case 4: {
            name = 'Thursday';
            break;
        }
        case 5: {
            name = 'Friday';
            break;
        }
        case 6: {
            name = 'Saturday';
            break;
        }
    }
    //return name
    return name;
}

//7. Write a program that categorizes a given month into seasons (spring, summer, autumn, winter) using switch statements.

let season = ( month ) => {
    let name = '';
    switch(month) {
        case 'January' {
            name = 'Winter';
            break;
        }
        case 'February' {
            name = 'Spring';
            break;
        }
        case 'March' {
            name = 'Spring';
            break;
        }
        case 'April' {
            name = 'Summer';
            break;
        }
        case 'May' {
            name = 'Summer';
            break;
        }
        case 'June' {
            name = 'Summer';
            break;
        }
        case 'July' {
            name = 'Autumn';
            break;
        }
        case 'August' {
            name = 'Autumn';
            break;
        }
        case 'September' {
            name = 'Autumn';
            break;
        }
        case 'October' {
            name = 'Autumn';
            break;
        }
        case 'November' {
            name = 'Winter';
            break;
        }
        case 'December' {
            name = 'Winter';
            break;
        }
    }
    return name;
}

//8. Create a function that determines the discount percentage based on the total purchase amount using a switch statement (e.g., 0-100: no discount, 101-500: 10% discount, etc.).

let discount = (amount) => {
    let discount = 0;
    switch(amount) {
        case (amount >= 0) && (amount <= 100): {
            discount = 0;
            break;
        } 
        case (amount >= 101) && (amount <= 500): {
            discount = 10;
            break;
        } 
        case (amount >= 501) && (amount < 1000): {
            discount = 20;
            break;
        } 
        case (amount >= 1001): {
            discount = 30;
            break;
        } 
    }
    return discount;
}

//9. Write a JavaScript program that converts a given month number into its corresponding name (e.g., 1 for January) using a switch statement.

let monthNumber = (month) => {
    let monthName = '';
    switch(month) {
        case 1: {
            monthName = 'January';
            break; 
        }
        case 2: {
            monthName = 'February';
            break; 
        }
        case 3: {
            monthName = 'March';
            break; 
        }
        case 4: {
            monthName = 'April';
            break; 
        }
        case 5: {
            monthName = 'May';
            break; 
        }
        case 6: {
            monthName = 'June';
            break; 
        }
        case 7: {
            monthName = 'July';
            break; 
        }
        case 8: {
            monthName = 'August';
            break; 
        }
        case 9: {
            monthName = 'September';
            break; 
        }
        case 10: {
            monthName = 'October';
            break; 
        }
        case 11: {
            monthName = 'November';
            break; 
        }
        case 12: {
            monthName = 'December';
            break; 
        }
    }
    return monthName;
}

//10. Implement a function that calculates the area of a shape (circle, square, triangle) based on user input and using a switch statement to determine the shape type.

let area = (shape, sides) => {
    //assume that sides is an array
    switch(shape) {
        case 'Circle': {
            //assume that sides is [r] where r is the radius
            return Math.PI * sides[0] * sides[0];
        }
        case 'Square': {
            //assume that sides is [a] where a is the side of the square
            return sides[0] * sides[0]
        }
        case 'Triangle': {
            //assume that sides is [a, b, c] where a, b, c are three sides
            //use Heron's formula 
            let a = sides[0];
            let b = sides[1];
            let c = sides[2];
            let s = (a + b + c) / 2
            return Math.sqrt(s * (s - a) * (s - b) * (s - c))
        }
    }
}

//-----CONDITIONAL STATEMENTS------

//1. Write a JavaScript program that prints numbers from 1 to 10 using a for loop.

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Create a function that calculates the factorial of a given number using a for loop.

let factorial = (n) => {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

//3. Implement a JavaScript function to find the sum of all numbers between 1 and 100 using a while loop.

let sum = (n) => {
    let i = 1;
    let s = 0;
    while(i <= n) {
        s = s + i;
        i++; // make sure to increment the counter
    }
    return s;
}

//4. Write a program that prints the multiplication table of a given number using a for loop.

let mult = (n) => {
    let table = [];
    for(let i = 1; i <= 10; i++) {
        table.push(n * i);
    }
    return table;
}

//5. Develop a function that checks if a given number is prime using a for loop.

let prime = (n) => {
    //simple algorithm that checks divisibility by every number till the square of the number is less than n
    
    for(let i = 2; i * i < n; i++) {
        if( n * i == 0) {
            return 'Not prime';
        }
    }
    // if the above loop did not return, then the number was not divisible by any number, hence must be prime.
    return 'Prime';
}

//6. Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.

let fib = (n) => {
    // Fibonacci sequence is 1, 1, 2, 3, 4, ...
    // that is, next number is sum of previous two numbers
    let seq = [];// initialize
    if(n == 0) seq = [];
    if(n == 1) seq = [1];
    if(n == 2) seq = [1, 1];
    let i = 2;
    while(i < n) {
        seq.push(seq[i - 2] + seq[i - 1]);
        i++;
    }
    return seq;
}

//7. Implement a function to find the largest element in an array using a for loop.

let max = (a) => {
    //if array is empty
    if(a.length == 0) {
        return 'No Largest Number'
    }
    let largest = a[0];//set largest to first number
    for(let i = 1; i < a.length; i++) {
        if(a[i] > largest) {
            largest = a[i];
        }
    }
    return largest;
}

//8. Write a program that counts the number of vowels in a given string using a for loop.

let vowels = (str) => {
    let n = 0;
    for(let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u': {
                n++;
                break;
            }
        }
    }
    return n;
}

//9. Create a JavaScript function that calculates the sum of digits of a given number using a while loop.

let nDigits = (num) => {
    let nStr = num + '';// convert number to string
    let sum = 0;
    for(let i = 0; i < nStr.length; i++) {
        sum = sum + Number(nStr[i]);
    }
    return sum;
}

//10. Implement a program that checks if a given string is a palindrome using a for loop.

let palindrome = (str) => {
    //reverse the string and check the given str and the reversed string are equal
    let revStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    if(str == revStr) {
        return true
    } else return false;
}