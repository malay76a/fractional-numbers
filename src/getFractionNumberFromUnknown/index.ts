import {FractionalNumbersType} from "../types/types";
import {Errors} from "../types/errors";

type InputParams = number | string | FractionalNumbersType;

export function getFractionNumberFromUnknown(a: InputParams, b? : InputParams): FractionalNumbersType {
    let numerator;
    let denominator;

    if (typeof a === 'object' && a.numerator && a.denominator) {
        numerator = a.numerator;
        denominator = a.denominator;
    } else if (typeof a === 'string' && a.includes('/')) {
        [numerator, denominator] = a.split('/').map(num => parseInt(num, 10));
    } else if (b && typeof b === 'number' && typeof a === 'number') {
        numerator = a;
        denominator = b;
    } else {
        throw new Error(Errors.WRONG_PROPERTY);
    }

    return {
        numerator,
        denominator,
    }
}
