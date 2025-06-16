function add(numbers: string) {
    if (numbers === '') {
        return 0
    }

    let numbersArray: string[];
    if (numbers.startsWith('//')) {
        const newLineIndex = numbers.indexOf('\n');
        const customDelimiter = numbers.substring(2, newLineIndex);
        const numbersPart = numbers.substring(newLineIndex + 1);
        numbersArray = numbersPart.split(customDelimiter);
    } else {
        numbersArray = numbers.split(/[,\n]/);
    }

    const negativeNumbers = numbersArray.filter(number => parseInt(number) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`)
    }

    return numbersArray.reduce((sum, number) => {
        if (isNaN(parseInt(number))) {
            throw new Error('Invalid number')
        }
        return sum + parseInt(number)
    }, 0)
}

export { add }