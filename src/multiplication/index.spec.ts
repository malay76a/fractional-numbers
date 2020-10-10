import { multiplication } from './index'

test('1/2 multiply 1/2', () => {
    const fn = multiplication({
        numerator: 1,
        denominator: 2,
    }, {
        numerator: 1,
        denominator: 2,
    });
    expect(fn).toMatchObject({
        numerator: 1,
        denominator: 4,
    });
})

test('3/5 multiply 3/5', () => {
    const fn = multiplication({
        numerator: 3,
        denominator: 5,
    }, {
        numerator: 3,
        denominator: 5,
    });
    expect(fn).toMatchObject({
        numerator: 9,
        denominator: 25,
    });
})

test('2/3 multiply 4/5', () => {
    const fn = multiplication({
        numerator: 2,
        denominator: 3,
    }, {
        numerator: 4,
        denominator: 5,
    });
    expect(fn).toMatchObject({
        numerator: 8,
        denominator: 15,
    });
})

test('10/15 multiply 40/380', () => {
    const fn = multiplication({
        numerator: 10,
        denominator: 15,
    }, {
        numerator: 40,
        denominator: 380,
    });
    expect(fn).toMatchObject({
        numerator: 400,
        denominator: 5700,
    });
})
