import { getFractionNumberFromUnknown } from './index'
import {FractionalNumbersType} from "../types/types";
import {Errors} from '../types/errors'

const exampleFracNum = {
    numerator: 1,
    denominator: 2,
} as FractionalNumbersType;

test('get FracNum from FN type', () => {
    const fn = getFractionNumberFromUnknown(exampleFracNum);
    expect(fn).toMatchObject(exampleFracNum);
})

test('get FracNum from string', () => {
    const fn = getFractionNumberFromUnknown('1/2');
    expect(fn).toMatchObject(exampleFracNum);
})

test('get FracNum from number', () => {
    const fn = getFractionNumberFromUnknown(1, 2);
    expect(fn).toMatchObject(exampleFracNum);
})

test('get Error with no valid params', () => {
    expect(() => {
        getFractionNumberFromUnknown('1 2')
    }).toThrowError(Errors.WRONG_PROPERTY);
})
