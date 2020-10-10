import { leastCommonMultiple } from './index'

test('get LCM from 3 and 5', () => {
    const fn = leastCommonMultiple(3, 5);
    expect(fn).toBe(15);
})

test('get LCM from 12 and 24', () => {
    const fn = leastCommonMultiple(12, 24);
    expect(fn).toBe(24);
})

test('get LCM from 13 and 15', () => {
    const fn = leastCommonMultiple(13, 15);
    expect(fn).toBe(195);
})
