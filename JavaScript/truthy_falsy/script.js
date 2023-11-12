// Falsy values
let falsyValues = [false, 0, "", null, undefined, NaN];

// Truthy values
let truthyValues = [true, 1, "Hello", [], {}, function() {}];

// Function to check and display truthiness
function checkTruthiness(value, valueType) {
    if (value) {
        console.log(`${valueType} "${value}" is truthy.`);
    } else {
        console.log(`${valueType} "${value}" is falsy.`);
    }
}

// Check and display truthiness for falsy values
console.log("=== Falsy Values ===");
falsyValues.forEach(value => checkTruthiness(value, "Value"));

// Check and display truthiness for truthy values
console.log("\n=== Truthy Values ===");
truthyValues.forEach(value => checkTruthiness(value, "Value"));
