const mapArrToStringTest = require('./mapArrToString');

describe('mapArrToStringTest', () => {
    test('Только числа', () => {
        expect(mapArrToStringTest([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('Числа и строки', () => {
        expect(mapArrToStringTest([1, 2, 3, '4'])).toEqual(['1', '2', '3']);
    })
    test('Числа и объекты', () => {
        expect(mapArrToStringTest([1, , {}, 2, [], 3])).toEqual(['1', '2', '3']);
    })
    test('Пустой массив', () => {
        expect(mapArrToStringTest([])).toEqual([]);
    })
    test('Массив без чисел массив', () => {
        expect(mapArrToStringTest(['1', '2', {}, []])).toEqual([]);
    })
    test('Отрицание', () => {
        expect(mapArrToStringTest(['1'])).not.toEqual(['1']);
    })
});