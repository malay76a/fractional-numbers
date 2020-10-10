import {leastCommonMultiple} from "../leastCommonMultiple";
import {FractionalNumbersType} from "../types/types";

export function logicOfAdditionAndSubtraction(a: FractionalNumbersType, b: FractionalNumbersType, cb: (v1: number, v2: number) => number): FractionalNumbersType {
    const {numerator: numeratorA, denominator: denominatorA} = a;
    const {numerator: numeratorB, denominator: denominatorB} = b;

    if (denominatorA === denominatorB) {
        return {
            numerator: cb(numeratorA, numeratorB),
            denominator: denominatorA
        }
    } else {
        const LCM = leastCommonMultiple(denominatorA, denominatorB);
        return logicOfAdditionAndSubtraction({
            numerator: numeratorA * (LCM / denominatorA),
            denominator: LCM
        }, {
            numerator: numeratorB * (LCM / denominatorB),
            denominator: LCM
        }, cb)
    }
}
