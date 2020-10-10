import {Errors} from "../types/errors";
import {FractionalNumbersType} from "..";
import {parseNumber} from "./parseNumber";
import {parseBigInt} from "./parseBigInt";
import {calc} from "../calc";
import {getFractionNumberFromUnknown} from "./index";

export function parseString(param: string): number | bigint | FractionalNumbersType | never {
    if(param.split(' ').length > 1 && /[\+\-\/\*]/g.test(param)) {
        const splitArr = param.split(' ');
        const processedArr = splitArr.map(param => {
            return /^\d+\/\d+$/.test(param) || /^\d+$/.test(param) ? getFractionNumberFromUnknown(param) : param;
        })
        // @ts-ignore
        return calc(processedArr);
    }

    if(/^\d+$/.test(param)) {
        const num = parseInt(param, 10);
        return num >= Number.MAX_SAFE_INTEGER ? parseBigInt(param) : parseNumber(num);
    }

    if(/^\d+\/\d+$/.test(param)) {
        const [numerator, denominator] = param
            .split('/')
            .map(num => parseString(num));

        if(typeof numerator === "object" || typeof denominator === "object") {
            throw new Error(Errors.WRONG_COMPUTED)
        }

        return {
            numerator,
            denominator
        }
    };

    throw new Error(Errors.WRONG_PROPERTY)
}