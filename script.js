// Question:no:01:
function power(a, b) {
        let result = 1;
        switch (true) {
            case b === 0:
                result = 1;
                break;
            
            case b > 0:
                let count = 0;
                while (count < b) {
                    result *= a;
                    count++;
                }
                break;
    
            case b < 0:
                let absCount = 0;
                while (absCount < Math.abs(b)) {
                    result *= a;
                    absCount++;
                }
                result = 1 / result;
                break;
        }return result;
    }
    console.log(power(2, 3));

    // Queston:no:02:
    function isLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return true; 
        } else {
            return false; 
        }
    }
    const year = parseInt(prompt("Enter a year: "), 10);
    if (isLeapYear(year)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
    
    // Question:no:03:
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateArea(a, b, c) {
    const S = calculateSemiPerimeter(a, b, c); 
    return Math.sqrt(S * (S - a) * (S - b) * (S - c)); 
}
const a = parseFloat(prompt("Enter the length of side a: "));
const b = parseFloat(prompt("Enter the length of side b: "));
const c = parseFloat(prompt("Enter the length of side c: "));
if (a + b > c && a + c > b && b + c > a) {
    const area = calculateArea(a, b, c);
    console.log(`The area of the triangle is: ${area.toFixed(2)}`);
} else {
    console.log("The given sides do not form a valid triangle.");
}

// Question:no:04:
function customIndexOf(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    }
    return -1;
}
const str = "hello world";
const charToFind = "o";

const result = customIndexOf(str, charToFind);
if (result !== -1) {
    console.log(`Character '${charToFind}' found at index: ${result}`);
} else {
    console.log(`Character '${charToFind}' not found in the string.`);
}

// Question:no:05:
function removeVowels(sentence) {
    const vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    
    return result;
}
const sentence = prompt("Enter a sentence (max 25 characters): ");
if (sentence.length <= 25) {
    const result = removeVowels(sentence);
    console.log(`Sentence without vowels: "${result}"`);
} else {
    console.log("The sentence exceeds 25 characters!");
}

// Question:no:07:
function countSuccessiveVowels(text) {
    const vowels = "aeiouAEIOU"; 
    let count = 0;
    let successiveVowels = [];
    for (let i = 0; i < text.length - 1; i++) {
        const currentChar = text[i];
        const nextChar = text[i + 1];
        switch (true) {
            case vowels.includes(currentChar) && vowels.includes(nextChar):
                count++;
                successiveVowels.push(currentChar + nextChar); 
                break;
            default:
                break;
        }
    }

    return { count, successiveVowels };
}
const sentence2 = "Pleases read this application and give me gratuity";
const result2 = countSuccessiveVowels(sentence2);

console.log(`The number of occurrences of two successive vowels is: ${result2.count}`);
console.log(`The successive vowel pairs are: ${result.successiveVowels.join(", ")}`);


// Question:no:08:
function convertToMeters(distanceInKm) {
    return distanceInKm * 1000;
}
function convertToFeet(distanceInKm) {
    return distanceInKm * 3280.84;
}
function convertToInches(distanceInKm) {
    return distanceInKm * 39370.1;
}
function convertToCentimeters(distanceInKm) {
    return distanceInKm * 100000;
}
const distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

if (!isNaN(distanceInKm) && distanceInKm >= 0) {
    console.log(`Distance in meters: ${convertToMeters(distanceInKm)} m`);
    console.log(`Distance in feet: ${convertToFeet(distanceInKm).toFixed(2)} ft`);
    console.log(`Distance in inches: ${convertToInches(distanceInKm).toFixed(2)} in`);
    console.log(`Distance in centimeters: ${convertToCentimeters(distanceInKm)} cm`);
} else {
    console.log("Please enter a valid non-negative number for the distance.");
}

// Question:no:09:
// Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12;  // Rs. 12 per hour

    // If the employee worked more than 40 hours, calculate overtime pay
    if (hoursWorked > regularHours) {
        const overtimeHours = hoursWorked - regularHours;
        return overtimeHours * overtimeRate;
    } else {
        return 0;  // No overtime pay if hours worked are less than or equal to 40
    }
}

// Example usage
const hoursWorked = parseInt(prompt("Enter the number of hours worked by the employee:"));

if (!isNaN(hoursWorked) && hoursWorked >= 0) {
    const overtimePay = calculateOvertimePay(hoursWorked);
    if (overtimePay > 0) {
        console.log(`The overtime pay is Rs. ${overtimePay.toFixed(2)}`);
    } else {
        console.log("No overtime pay as the employee worked 40 hours or less.");
    }
} else {
    console.log("Please enter a valid number of hours.");
}

// Question:no:10:
// Function to calculate the number of currency notes of each denomination
function calculateNotes(amount) {
    const denomination100 = 100;
    const denomination50 = 50;
    const denomination10 = 10;

    // Calculate the number of 100 Rs. notes
    const notes100 = Math.floor(amount / denomination100);
    amount %= denomination100; // Update the remaining amount

    // Calculate the number of 50 Rs. notes
    const notes50 = Math.floor(amount / denomination50);
    amount %= denomination50; // Update the remaining amount

    // Calculate the number of 10 Rs. notes
    const notes10 = Math.floor(amount / denomination10);

    // Return the result as an object
    return {
        notes100,
        notes50,
        notes10
    };
}

// Example usage
const withdrawalAmount = parseInt(prompt("Enter the amount to be withdrawn in hundreds (e.g., 100 for 100 Rs):"), 10);

if (!isNaN(withdrawalAmount) && withdrawalAmount > 0) {
    // Convert the withdrawal amount from hundreds to actual amount
    const amount = withdrawalAmount * 100;

    const notes = calculateNotes(amount);

    console.log(`For Rs. ${amount}, the cashier will give:`);
    console.log(`- ${notes.notes100} notes of Rs. 100`);
    console.log(`- ${notes.notes50} notes of Rs. 50`);
    console.log(`- ${notes.notes10} notes of Rs. 10`);
} else {
    console.log("Please enter a valid positive number for the amount.");
}



    
    