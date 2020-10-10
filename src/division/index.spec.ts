import { division } from './index'

test('1/2 division 1/2', () => {
    const fn = division({
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

test('3/5 division 3/5', () => {
    const fn = division({
        numerator: 3,
        denominator: 5,
    }, {
        numerator: 3,
        denominator: 5,
    });
    expect(fn).toMatchObject({
        numerator: 15,
        denominator: 15,
    });
})

test('2/3 division 4/5', () => {
    const fn = division({
        numerator: 2,
        denominator: 3,
    }, {
        numerator: 4,
        denominator: 5,
    });
    expect(fn).toMatchObject({
        numerator: 10,
        denominator: 12,
    });
})

test('10/15 division 40/380', () => {
    const fn = division({
        numerator: 10,
        denominator: 15,
    }, {
        numerator: 40,
        denominator: 380,
    });
    expect(fn).toMatchObject({
        numerator: 3800,
        denominator: 600,
    });
})
