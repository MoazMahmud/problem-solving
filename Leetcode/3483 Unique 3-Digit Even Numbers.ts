function totalNumbers(digits: number[]): number {
    const uniqueNumbers = new Set<string>();
    for (let i = 0;i < digits.length;i++) {
        if (digits[i] === 0) continue;
        for (let j = 0;j < digits.length;j++) {
            if (i === j) continue;
            for (let k = 0;k < digits.length;k++) {
                if (k === i || k === j || digits[k] % 2 === 1) continue;
                const number = [i,j,k].map(idx => digits[idx]).join("");
                uniqueNumbers.add(number);
            }
        }
    }
    return uniqueNumbers.size;    
}
