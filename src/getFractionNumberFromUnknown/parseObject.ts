import {FractionalNumbersType} from "..";
import {Errors} from "../types/errors";

export function parseObject(obj: object): FractionalNumbersType | never  {
    if('numerator' in obj && 'denominator' in obj) {
        return {
            ...(obj as FractionalNumbersType)
        }
    } else throw new Error(Errors.WRONG_PROPERTY);
}