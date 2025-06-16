function add(numbers: string) {
    if (numbers === '') {
        return 0
    }
    return numbers.split(',').reduce((sum, number) => {
        if (isNaN(parseInt(number))) {
            throw new Error('Invalid number')
        }
        return sum + parseInt(number)
    }, 0)
}

export { add }