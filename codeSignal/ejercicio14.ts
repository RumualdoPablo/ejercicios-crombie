function solution14(a: number[]): number[] {
    let teamOne = 0;
    let teamTwo = 0;
    
    for(let i = 0; i < a.length; i++){
        if(i % 2 === 0){
            teamOne += a[i]
        } else {
            teamTwo += a[i]
        }
    }
    return [teamOne,teamTwo]
}