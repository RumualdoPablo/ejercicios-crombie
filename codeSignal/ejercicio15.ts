function solution15(matrix: string[]): string[] {
    //Determinar las dimensiones de la matriz original.
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    //Crear una nueva matriz con dimensiones más grandes para el borde.
    const borderedMatrix: string[] = [];

    //Copiar el contenido de la matriz original a la nueva matriz con desplazamiento.
    for (let row = 0; row < numRows + 2; row++) {
        if (row === 0 || row === numRows + 1) {
            // Rellenar la primera y última fila con asteriscos.
            borderedMatrix.push('*'.repeat(numCols + 2));
        } else {
            // Rellenar las filas intermedias con el contenido de la matriz original.
            borderedMatrix.push('*' + matrix[row - 1] + '*');
        }
    }

    //Devolver la matriz con el borde de asteriscos agregado.
    return borderedMatrix;
}