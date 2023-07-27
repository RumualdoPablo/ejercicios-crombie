function solution4(inputArray: number[]): number {
    let arr = inputArray;
    let x = 0;
    let y = 0;
    let product = -Infinity;
    for(let i = 0; i < arr.length; i++){
        x = arr[i];
        y = arr[i + 1];
        if(x * y > product){
            product = x * y            
        }
    }
    return product
}