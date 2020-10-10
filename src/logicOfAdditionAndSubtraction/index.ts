import {leastCommonMultiple} from "../leastCommonMultiple";
import {FractionalNumbersType} from "..";

export function logicOfAdditionAndSubtraction(a: FractionalNumbersType, b: FractionalNumbersType, cb: (v1: number | bigint, v2: number | bigint) => number | bigint): FractionalNumbersType {
    let {numerator: numeratorA, denominator: denominatorA} = a;
    let {numerator: numeratorB, denominator: denominatorB} = b;

    const isBigNum = typeof numeratorA === 'bigint' || typeof numeratorB === 'bigint' || typeof denominatorA === 'bigint' || typeof denominatorB === 'bigint';

    if(isBigNum) {
        numeratorA = BigInt(numeratorA);
        numeratorB = BigInt(numeratorB);
        denominatorA = BigInt(denominatorA);
        denominatorB = BigInt(denominatorB);
    }

    if (denominatorA === denominatorB) {
        return {
            numerator: cb(numeratorA, numeratorB),
            denominator: denominatorA
        }
    } else {
        let LCM: number | bigint = leastCommonMultiple(denominatorA as number, denominatorB as number);
        if(isBigNum) LCM = BigInt(LCM);

        return logicOfAdditionAndSubtraction({
            // @ts-ignore
            numerator: numeratorA * (LCM / denominatorA),
            denominator: LCM
        }, {
            // @ts-ignore
            numerator: numeratorB * (LCM / denominatorB),
            denominator: LCM
        }, cb)
    }
}
