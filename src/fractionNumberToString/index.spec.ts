import { fractionNumberToString } from './index'
import {FractionalNumbersType} from "..";
import {Errors} from "../types/errors";

test('convert FuncNum ro string', () => {
    const fn = fractionNumberToString({
        numerator: 1,
        denominator: 2,
    } as FractionalNumbersType);
    expect(fn).toBe('1/2');
})

test('convert negative FuncNum ro string', () => {
    const fn = fractionNumberToString({
        numerator: 1,
        denominator: 2,
        negative: true
    } as FractionalNumbersType);
    expect(fn).toBe('-(1/2)');
})

test('get Error with no valid params', () => {
    expect(() => {
        // @ts-ignore
        fractionNumberToString({
            numerator: 1,
        })
    }).toThrowError(Errors.WRONG_PROPERTY);
})
