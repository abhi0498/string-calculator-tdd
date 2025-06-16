import { expect, test, describe } from 'vitest'
import { add } from './calculator.ts'


describe('String Calculator - Step 1 - Empty string or single number', () => {
    test('should return 0 when the string is empty', () => {
        expect(add('')).toBe(0)
    })

    test('should return the number when the string is a single number', () => {
        expect(add('1')).toBe(1)
    })

    test('should return the sum of two numbers when the string is two numbers separated by a comma', () => {
        expect(add('1,2')).toBe(3)
    })

})

describe('String Calculator - Step 2 - Allowing any amount of numbers', () => {
    test('should allow the add method to handle any amount of numbers.', () => {
        expect(add('1,2,3,4,5,6,7,8,9,10')).toBe(55)
    })

    test('should throw error when any of the numbers in the string is not a number', () => {
        expect(() => add('1,2,3,4,a,6,7,8,9,10')).toThrow('Invalid number')
    })

})

describe('String Calculator - Step 3 - Allowing new lines between numbers', () => {
    test('should allow the add method to handle any amount of numbers separated by new lines', () => {
        expect(add('1,2\n3,4,5,6,7,8,9\n10')).toBe(55)
    })

    test('should throw error when any of the numbers in the string is not a number', () => {
        expect(() => add('1\n2,3,a')).toThrow('Invalid number')
    })

    test('should throw error when the string is not a number', () => {
        expect(() => add('1,\n')).toThrow('Invalid number')
    })
})

describe('String Calculator - Step 4 - Support different delimiters', () => {
    test('should allow the add method to handle any amount of numbers separated by delimiter', () => {
        expect(add('//;\n1;2')).toBe(3)
    })

    test('should allow the add  any  delimiter', () => {
        expect(add('//**\n1**2**3')).toBe(6)
    })

    test('should throw error when the string is not a number', () => {
        expect(() => add('//;\n1;a')).toThrow('Invalid number')
    })

})

describe('String Calculator - Step 5 - Negative numbers', () => {

    test('should throw error when the string is negative', () => {
        expect(() => add('1,-2')).toThrow('Negative numbers not allowed: -2')
    })

    test('should throw error with all negative numbers in the error message', () => {
        expect(() => add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3')
    })

})







