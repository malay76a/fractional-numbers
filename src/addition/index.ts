import {FractionalNumbersType} from "../types/types";
import {logicOfAdditionAndSubtraction} from "../logicOfAdditionAndSubtraction";

export function addition(a: FractionalNumbersType, b: FractionalNumbersType): FractionalNumbersType {
    return logicOfAdditionAndSubtraction(a, b, (v1, v2) => (v1 as number) + (v2 as number))
}
