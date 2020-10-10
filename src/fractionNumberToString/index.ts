import {FractionalNumbersType} from "..";
import {Errors} from "../types/errors";

export function fractionNumberToString(FrNum: FractionalNumbersType): string {
    if (!('numerator' in FrNum) || !('denominator' in FrNum)) {
        throw new Error(Errors.WRONG_PROPERTY);
    }

    return FrNum.negative ?
        `-(${FrNum.numerator}/${FrNum.denominator})` :
        `${FrNum.numerator}/${FrNum.denominator}`;
}
