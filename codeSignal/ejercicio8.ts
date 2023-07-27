function solution8(matrix: number[][]):number {
    let totalSum:number = 0;
        for(let col = 0; col <matrix[0].length; col++) {
            for(let row = 0; row < matrix.length; row++) {
                if(matrix[row][col] === 0) {
                    break;
                }
                totalSum += matrix[row][col];
            }
        }
    return totalSum;
}