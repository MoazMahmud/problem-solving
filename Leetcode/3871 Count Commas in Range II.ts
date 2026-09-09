function countCommas(n: number): number {
    let total = 0;
    let lo = 1;
    for (let commasPerNumber = 0; lo <= n; lo *= 1000, commasPerNumber++) {
        const hi = Math.min(n, lo * 1000 - 1);
        total += (hi - lo + 1) * commasPerNumber;
    }
    return total;
}
