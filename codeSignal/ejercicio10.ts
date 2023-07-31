function solution10(s1: string, s2: string): number {
    let commonChars:number = 0;
    
    for(const char of s1){
        const index = s2.indexOf(char);
        if(index !== -1) {
            commonChars++;
            s2 = s2.slice(0,index) + s2.slice(index + 1);
        }
    }
    
    return commonChars
}