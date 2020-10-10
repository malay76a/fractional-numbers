import {FractionalNumbersType} from "../types/types";

export function multiplication(a: FractionalNumbersType, b: FractionalNumbersType): FractionalNumbersType {
    const {numerator: numeratorA, denominator: denominatorA} = a;
    const {numerator: numeratorB, denominator: denominatorB} = b;

    const isBigIntNumerator = typeof numeratorA === 'bigint' || typeof numeratorB === 'bigint';
    const isBigIntDenominator = typeof denominatorA === 'bigint' || typeof denominatorB === 'bigint';

    return {
        numerator: isBigIntNumerator ?
            BigInt(numeratorA) * BigInt(numeratorB) :
            (numeratorA as number) * (numeratorB as number),
        denominator: isBigIntDenominator ?
            BigInt(denominatorA) * BigInt(denominatorB) :
            (denominatorA as number) * (denominatorB as number)
    }
}
