const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('Значение в диапазоне', () => {
        expect(validateValue(50)).toBe(true);
    })

    test('Значение на границе снизу', () => {
        expect(validateValue(0)).toBe(true);
    })

    test('Значение на границе сверху', () => {
        expect(validateValue(100)).toBe(true);
    })

    test('Значение меньше', () => {
        expect(validateValue(-1)).toBe(false);
    })

    test('Значение больше', () => {
        expect(validateValue(101)).toBe(false);
    })
});