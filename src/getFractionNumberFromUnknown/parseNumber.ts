import {Errors} from "../types/errors";

export function parseNumber(num: number): number | bigint | never {
    if(num === 0) {
        throw new Error(Errors.ZERO_NUMBER);
    }

    return num >= Number.MAX_SAFE_INTEGER ? BigInt(num) : num;
}