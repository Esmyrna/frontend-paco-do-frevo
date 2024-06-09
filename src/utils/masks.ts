export function separateCamelCase(word: string) {

    return word.replace(/([a-z])([A-Z])/g, '$1 $2');
}