export function leastCommonMultiple(a: number, b: number) {
    let lcm = Math.max(a, b);

    while(true) {
        if(lcm % a === 0 && lcm % b === 0) {
            return lcm;
        }
        lcm++
    }
}
