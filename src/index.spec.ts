import {FractionalNumbers} from './index';
import {getFractionNumberFromUnknown} from "./getFractionNumberFromUnknown";

test('1/2 plus 1/2', () => {
    const fn = new FractionalNumbers('1/2').addition(new FractionalNumbers(1, 2));
    expect(fn.toString()).toBe('2/2');
})

test('1/4 minus 1/2', () => {
    const fn = new FractionalNumbers('1/4').subtraction(new FractionalNumbers(1, 2));
    expect(fn.toString()).toBe('-1/4');
})

test('5/20 div 2/3', () => {
    const fn = new FractionalNumbers('5/20').division(new FractionalNumbers(2, 3));
    expect(fn.toString()).toBe('15/40');
})

test('5/20 mult 2/3', () => {
    const fn = new FractionalNumbers('5/20').multiplication(new FractionalNumbers(2, 3));
    expect(fn.toString()).toBe('10/60');
})

test('1/5 + 1/4', () => {
    const fn = new FractionalNumbers('1/5 + 1/4');
    expect(fn.toString()).toBe('9/20');
})

test('1/2 + 1/2 * 3', () => {
    const fn = new FractionalNumbers('1/2 + 1/2 * 3');
    expect(fn.toString()).toBe('4/2');
})

test('5/2 + 1/3 - 8/6 * 9/3', () => {
    const fn = new FractionalNumbers('5/2 + 1/3 - 8/6 * 9/3');
    expect(fn.toString()).toBe('-21/18');
})

test('23742376423764234223123124/65876796788657653423456374 div 353464563452353453453453/123124346534763454352465234521', () => {
    const fn = new FractionalNumbers('23742376423764234223123124/65876796788657653423456374').division(new FractionalNumbers(353464563452353453453453, 123124346534763454352465234521));
    expect(fn.toString()).toBe('2923264582358345473934027491586767526892096472104304640/23285113218542278098723188435861869556913124933632');
})