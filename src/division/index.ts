import {FractionalNumbersType} from "..";
import {multiplication} from "../multiplication";

export function division(a: FractionalNumbersType, b: FractionalNumbersType): FractionalNumbersType {
    return multiplication(a, {
        numerator: b.denominator,
        denominator: b.numerator
    })
}
