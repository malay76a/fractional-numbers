import {FractionalNumbersType} from "..";
import {Errors} from "../types/errors";
import {parseString} from "./parseString";
import {parseObject} from "./parseObject";
import {parseNumber} from "./parseNumber";

type InputParams = number | string | bigint | FractionalNumbersType;

export function getFractionNumberFromUnknown(...params: InputParams[]): FractionalNumbersType | never {
    let [first, second] = params.map((param:InputParams) : number | bigint | FractionalNumbersType  => {
        const paramType = typeof param;
        switch (paramType) {
            case "object":
                return parseObject(param as object)
            case "string":
                return parseString(param as string)
            case "number":
                return parseNumber(param as number)
            case "bigint":
                return (param as bigint);
            default:
                throw new Error(Errors.WRONG_PROPERTY);
        }
    })

    if(typeof first === 'object') {
        return {
            ...first
        }
    } else if((typeof first === 'number' || typeof first === 'bigint') && !second) {
        return {
            numerator: first,
            denominator: 1,
        }
    } else if (typeof second !== 'object') {
        return {
            numerator: first,
            denominator: second,
        }
    } else {
        throw new Error(Errors.WRONG_COMPUTED);
    }
}
