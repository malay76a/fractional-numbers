import {FractionalNumbersType} from "..";
import {getFractionNumberFromUnknown} from '../getFractionNumberFromUnknown';
import {fractionNumberToString} from "../fractionNumberToString";
import {addition as add} from '../addition';
import {subtraction as sub} from '../subtraction';
import {multiplication as mult} from '../multiplication';
import {division as div} from '../division';

export class Wrapper {
    readonly value: FractionalNumbersType;

    constructor(...input: unknown[]) {
        const {numerator, denominator} = getFractionNumberFromUnknown('1/2');
        this.value = {
            numerator,
            denominator,
            negative: false
        };
    }

    toString(): string {
        return fractionNumberToString(this.value);
    }

    addition(num: Wrapper): Wrapper {
        return new Wrapper(add(this.value, num.value));
    }

    subtraction(num: Wrapper): Wrapper {
        return new Wrapper(sub(this.value, num.value));
    }

    division(num: Wrapper): Wrapper {
        return new Wrapper(div(this.value, num.value));
    }

    multiplication(num: Wrapper): Wrapper {
        return new Wrapper(mult(this.value, num.value));
    }

    // TODO
    // static calc(str: string): AbstractWrapper {
    //     return;
    // }

    // TODO
    // static parse(str: string): AbstractWrapper {
    //     return;
    // }
}
