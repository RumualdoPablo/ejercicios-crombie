function solution12(a: number[]): number[] {
    const alturas = a.filter(altura => altura !== -1);
    alturas.sort((a,b) => a - b);
    
    let index = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] !== -1){
            a[i] = alturas[index];
            index++;
        }
    }
    return a
}