function add(numbers: string) {
    if (numbers === '') {
        return 0
    }

    let numbersArray: string[];
    if (numbers.startsWith('//')) {
        const newLineIndex = numbers.indexOf('\n');
        const delimiterPart = numbers.substring(2, newLineIndex);
        const numbersPart = numbers.substring(newLineIndex + 1);

        // Check if delimiter part contains multiple delimiters in brackets
        if (delimiterPart.includes('][')) {
            // Extract all delimiters between brackets
            const delimiters = delimiterPart.match(/\[(.*?)\]/g)?.map(d => d.slice(1, -1)) || [];
            // Create a regex pattern that matches any of the delimiters
            const delimiterPattern = new RegExp(delimiters.map(d => escapeRegExp(d)).join('|'));
            numbersArray = numbersPart.split(delimiterPattern);
        } else if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
            // Single delimiter in brackets
            const customDelimiter = delimiterPart.slice(1, -1);
            numbersArray = numbersPart.split(customDelimiter);
        } else {
            // Simple delimiter format (backward compatibility)
            const customDelimiter = delimiterPart;
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

// Helper function to escape special regex characters in delimiters
function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export { add }