function solution9(inputArray: string[]): string[] {
    const largoMayor = Math.max(...inputArray.map(str => str.length));
    
    const cadenaLarga = inputArray.filter(str => str.length === largoMayor)
    
    return cadenaLarga;
}