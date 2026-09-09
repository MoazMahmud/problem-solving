function countCommas(n: number): number {
    let lo = 1, hi = 1000, stdCommas = 0, totalCommas = 0;;
    for (; hi <= n * 1000; lo = hi, hi *= 1000, stdCommas++) {
        const rangeHigh = Math.min(n, hi - 1);
        const commaCount = (rangeHigh - lo + 1) * stdCommas;
        totalCommas += commaCount;
    }
    return totalCommas;
}
