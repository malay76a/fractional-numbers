import {FractionalNumbersType} from "../types/types";

export function multiplication(a: FractionalNumbersType, b: FractionalNumbersType): FractionalNumbersType {
    const {numerator: numeratorA, denominator: denominatorA} = a;
    const {numerator: numeratorB, denominator: denominatorB} = b;

    return {
        numerator: numeratorA * numeratorB,
        denominator: denominatorA * denominatorB
    }
}
