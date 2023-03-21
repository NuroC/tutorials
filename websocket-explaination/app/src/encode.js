
// shift to the right
function encode(inputString, numChars) {
    // Define a string with the alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // Convert the input string to lowercase
    inputString = inputString.toLowerCase();
    // Initialize an empty string to hold the shifted string
    let shiftedString = "";

    // Loop through each character in the input string
    for (let i = 0; i < inputString.length; i++) {
        // Check if the current character is a letter
        if (alphabet.includes(inputString[i])) {
            // Find the index of the current character in the alphabet string
            let charIndex = alphabet.indexOf(inputString[i]);
            // Calculate the new index of the shifted character
            let shiftedIndex = (charIndex + numChars) % 26;
            // Add the shifted character to the shifted string
            shiftedString += alphabet[shiftedIndex];
        } else {
            // If the current character is not a letter, add it to the shifted string as-is
            shiftedString += inputString[i];
        }
    }

    // Return the shifted string
    return shiftedString;
}

module.exports = encode