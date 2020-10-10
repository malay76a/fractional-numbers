import {FractionalNumbersType} from "..";
import {multiplication} from "../multiplication";
import {division} from "../division";
import {subtraction} from "../subtraction";
import {addition} from "../addition";
import {Errors} from "../types/errors";

const order = new Map([
    ['*', multiplication],
    ['/', division],
    ['+', addition],
    ['-', subtraction]
])

export function calc(arr: (FractionalNumbersType | string)[]): FractionalNumbersType | never {
    const resultArr = [...arr];

    for (const [key, value] of order.entries()) {
        while (resultArr.includes(key)) {
            const index = resultArr.indexOf(key);
            const calculatreNumbers = value((resultArr[index - 1] as FractionalNumbersType), (resultArr[index + 1] as FractionalNumbersType))
            resultArr.splice(index - 1, 3, calculatreNumbers);
        }
    }
    const [result] = resultArr;
    if(typeof result === 'string') throw new Error(Errors.WRONG_COMPUTED)

    return result;
}