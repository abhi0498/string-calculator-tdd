import { expect, test, describe } from 'vitest'
import { add } from './calculator.ts'


describe('String Calculator - Step 1', () => {
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