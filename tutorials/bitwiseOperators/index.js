// & AND 1 & 1 = 1 everything else 0
// | OR 0 | 0 = 0 everything else 1
// ^ XOR  OR case - 1 | 1 (ie 0|1, 1|0 = 1, 1|1, 0|0 = 0) SAME IS 0, DIFFERENT IS 1,
// ~ NOT
// << LEFT SHIFT
// >> RIGHT SHIFT
//

console.log(1 & 1, 0 & 0, 1 & 0, 0 & 1);
console.log(1 | 1, 0 | 0, 1 | 0, 0 | 1);
console.log(1 ^ 1, 0 ^ 0, 1 ^ 0, 0 ^ 1);
console.log(~2, ~3, ~4, ~5);
console.log(1 << 2, 1 << 3, 1 << 4, 1 << 5);
console.log(2 >> 1, 3 >> 1, 4 >> 1, 5 >> 1);
