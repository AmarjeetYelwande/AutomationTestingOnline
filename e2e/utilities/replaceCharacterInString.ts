export function replaceCharacterInString(str: string, index: number, ch: string) {
    return str.replace(/./g, (c, i) => i == index ? ch : c);
}
