import { subtraction } from './index'

test('2/3 minus 4/5', () => {
    const fn = subtraction({
        numerator: 2,
        denominator: 3,
    }, {
        numerator: 4,
        denominator: 5,
    });
    expect(fn).toMatchObject({
        numerator: -2,
        denominator: 15,
    });
})

test('10/15 minus 40/380', () => {
    const fn = subtraction({
        numerator: 10,
        denominator: 15,
    }, {
        numerator: 40,
        denominator: 380,
    });
    expect(fn).toMatchObject({
        numerator: 640,
        denominator: 1140,
    });
})
