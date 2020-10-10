import { addition } from './index'

test('1/2 plus 1/2', () => {
    const fn = addition({
        numerator: 1,
        denominator: 2,
    }, {
        numerator: 1,
        denominator: 2,
    });
    expect(fn).toMatchObject({
        numerator: 2,
        denominator: 2,
    });
})

test('3/5 plus 3/5', () => {
    const fn = addition({
        numerator: 3,
        denominator: 5,
    }, {
        numerator: 3,
        denominator: 5,
    });
    expect(fn).toMatchObject({
        numerator: 6,
        denominator: 5,
    });
})

test('2/3 plus 4/5', () => {
    const fn = addition({
        numerator: 2,
        denominator: 3,
    }, {
        numerator: 4,
        denominator: 5,
    });
    expect(fn).toMatchObject({
        numerator: 22,
        denominator: 15,
    });
})

test('10/15 plus 40/380', () => {
    const fn = addition({
        numerator: 10,
        denominator: 15,
    }, {
        numerator: 40,
        denominator: 380,
    });
    expect(fn).toMatchObject({
        numerator: 880,
        denominator: 1140,
    });
})
