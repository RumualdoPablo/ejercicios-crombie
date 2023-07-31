function solution3(inputString: string): boolean {
    let j = inputString.length - 1;
    for(let i = 0; i < j / 2; i++){
        let x = inputString[i];
        let y = inputString[j - i];
        if(x != y){
            return false;
        }
    }
    return true;
    }