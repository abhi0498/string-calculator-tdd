function add(numbers: string) {
    if (numbers === '') {
        return 0
    }

    let numbersArray: string[];
    if (numbers.startsWith('//')) {
        const newLineIndex = numbers.indexOf('\n');
        const delimiterPart = numbers.substring(2, newLineIndex);

        // Check if delimiter is in square brackets
        if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
            const customDelimiter = delimiterPart.slice(1, -1); // Remove [ and ]
            const numbersPart = numbers.substring(newLineIndex + 1);
            numbersArray = numbersPart.split(customDelimiter);
        } else {
            const customDelimiter = delimiterPart;
            const numbersPart = numbers.substring(newLineIndex + 1);
            numbersArray = numbersPart.split(customDelimiter);
        }
    } else {
        numbersArray = numbers.split(/[,\n]/);
    }

    const negativeNumbers = numbersArray.filter(number => parseInt(number) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`)
    }


    return numbersArray.reduce((sum, numberString) => {
        const number = parseInt(numberString)
        if (isNaN(number)) {
            throw new Error('Invalid number')
        }
        if (number > 1000) {
            return sum
        }
        return sum + number
    }, 0)
}

export { add }