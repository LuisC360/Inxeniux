export function validateInputs(inputs: (string | number)[]) {
    for (let i = 0; i < inputs.length; i += 1) {
        if (typeof inputs[i] === 'string' && inputs[i] === '') {
            return false;
        } else if (typeof inputs[i] === 'number' && inputs[i] === 0) {
            return false;
        }
    }

    return true;
}

export function valitateArrays(values: string[][]) {
    for (let i = 0; i < values.length; i += 1) {
        if (values[i].length === 0) {
            return false;
        }
    }

    return true;
}
