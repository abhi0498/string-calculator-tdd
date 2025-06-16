function add(numbers: string) {
    if (numbers === '') {
        return 0
    }
    return numbers.split(',').reduce((sum, number) => sum + parseInt(number), 0)
}

export { add }