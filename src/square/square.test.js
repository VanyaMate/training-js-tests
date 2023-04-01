const square = require('./square');

describe('square', () => {
    let mockValue;

    beforeEach(() => {
        // each time
    })

    beforeAll(() => {
        // one time
    })

    test('4 === 16', () => {
        expect(square(4)).toBe(16);
        expect(square(4)).toBeLessThan(17);
        expect(square(4)).toBeGreaterThan(15);
        expect(square(4)).not.toBeUndefined();

        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('1 === 1', () => {
        expect(square(1)).toBe(1);
        expect(square(1)).toBeLessThan(2);
        expect(square(1)).toBeGreaterThan(0);
        expect(square(1)).not.toBeUndefined();

        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    afterAll(() => {
        //
    })
})