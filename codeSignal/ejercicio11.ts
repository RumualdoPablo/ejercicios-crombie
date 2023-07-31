function solution11(n: number): boolean {
    const ticketStr = n.toString();
    const half = ticketStr.length / 2;
    
    const firstHalf = ticketStr.slice(0, half);
    const secondHalf = ticketStr.slice(half);
    
    const sumFirst = firstHalf.split("").reduce((sum, digit) => sum + Number(digit), 0);
    const sumSecond = secondHalf.split("").reduce((sum, digit) => sum + Number(digit), 0);
    
    return sumFirst === sumSecond;
}

solution11(1230)