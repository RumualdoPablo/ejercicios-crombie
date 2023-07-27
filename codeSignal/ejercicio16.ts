function solution16(a: number[], b: number[]): boolean {
    if (a.length !== b.length) {
        return false;
    }

    const diferencias: number[] = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diferencias.push(i);
        }
    }

    if (diferencias.length === 0) {
        return true; // Los arreglos son iguales
    } else if (diferencias.length === 2) {
        // Verificar si los elementos en las posiciones diferentes son intercambiables
        const [pos1, pos2] = diferencias;
        return a[pos1] === b[pos2] && a[pos2] === b[pos1];
    }

    return false; // Hay más de dos posiciones diferentes
}