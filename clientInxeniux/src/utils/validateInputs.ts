export function validateInput(input: string | string[]) {
    if (Array.isArray(input) && input.length > 0) {
        return true;
    } else if (input !== '') {
        return true;
    }

    return false;
}
