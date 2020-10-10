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
});

test('get Error with no valid params', () => {
    expect(() => {
        getFractionNumberFromUnknown('1 2')
    }).toThrowError(Errors.WRONG_PROPERTY);
})

describe('get from string', () => {
    it('2', () => {
        const fn = getFractionNumberFromUnknown('2');
        expect(fn).toMatchObject({
            numerator: 2,
            denominator: 1,
        });
    })

    it('1/2', () => {
        const fn = getFractionNumberFromUnknown('1/2');
        expect(fn).toMatchObject(exampleFracNum);
    })

    it('bigint', () => {
        const fn = getFractionNumberFromUnknown('1465783245873426758734657342452346576342842375634562347537428743289423652734458324759872346579623495762349756234798562394567234523/674853973625445678292847546432563453245432532454232345367435876234567347685234675678342567843267526784564578645867485675846754868');
        expect(fn).toMatchObject({
            numerator: BigInt('1465783245873426758734657342452346576342842375634562347537428743289423652734458324759872346579623495762349756234798562394567234523'),
            denominator: BigInt('674853973625445678292847546432563453245432532454232345367435876234567347685234675678342567843267526784564578645867485675846754868'),
        });

    })
});

describe('get from numbers', () => {
    it('4', () => {
        const fn = getFractionNumberFromUnknown(4);
        expect(fn).toMatchObject({
            numerator: 4,
            denominator: 1,
        });
    })

    it('1 and 2', () => {
        const fn = getFractionNumberFromUnknown(1, 2);
        expect(fn).toMatchObject(exampleFracNum);
    })

    it('0', () => {
        expect(() => {
            getFractionNumberFromUnknown(0)
        }).toThrowError(Errors.ZERO_NUMBER);
    })
});

describe('get from calc', () => {
    test('1/2 + 1/2', () => {
        const fn = getFractionNumberFromUnknown('1/2 + 1/2');
        expect(fn).toMatchObject({
            numerator: 2,
            denominator: 2,
        });
    })

    test('1/2 + 1/2 * 3', () => {
        const fn = getFractionNumberFromUnknown('1/2 + 1/2 * 3');
        expect(fn).toMatchObject({
            numerator: 4,
            denominator: 2,
        });
    })
});