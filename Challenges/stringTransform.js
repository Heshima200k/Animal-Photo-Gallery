function transformString(input) {
    let length = input.length;

    // Check if the length is divisible by 15
    if (length % 15 === 0) {
        // Reverse the string and replace each character with its ASCII code
        let reversedString = input.split('').reverse().join('');
        return reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // Check if the length is divisible by 3
    if (length % 3 === 0) {
        // Reverse the string
        return input.split('').reverse().join('');
    }

    // Check if the length is divisible by 5
    if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If none of the conditions are met, return the original string
    return input;
}