console.clear();

//INIT

//1
const a = 42;
console.log(a);

const b = 6;
console.log(b);

const c = 420;
console.log(c);

//2
const aa = 'labas';
console.log(aa);

const bb = "medis";
console.log(bb);

const cc = `takas`;
console.log(cc);


//3
const aA = [5, 89, 46, 787, 28495];
console.log(aA);

const bB = [-81, 9.5, 4871, 6.66, 0];
console.log(bB);

const cC = [191, 484, 431, -8, 9999999999];
console.log(cC);

//4
const aAa = ['lempa', 'laidas', 'kede', 'sukos', 'langas'];
console.log(aAa);

const bBb = ["mano", "vardas", "auksinis", "kardas", "tiesa"];
console.log(bBb);

const cCc = [`penki`, 'trys', "astuoni", 'tuscias', 'begalybe'];
console.log(cCc);

//OPERATE

console.clear();
//1
const sum = a + b + c;
console.log(sum);

//2
const textSum = `${aa}, ${bb}, ${cc}`;
console.log(textSum);

//3
// - a
const arraySumA = aA[0] - aA[1] + aA[2] - aA[3] + aA[4];
const arraySumB = bB[0] - bB[1] + bB[2] - bB[3] + bB[4];
const arraySumC = cC[0] - cC[1] + cC[2] - cC[3] + cC[4];

// - b
console.log(arraySumA);
console.log(arraySumB);
console.log(arraySumC);

//4
const textArraySumA = `${aAa[4]}, ${aAa[3]}, ${aAa[2]}, ${aAa[1]}, ${aAa[0]}`;
const textArraySumB = `${bBb[4]}, ${bBb[3]}, ${bBb[2]}, ${bBb[1]}, ${bBb[0]}`;
const textArraySumC = `${cCc[4]}, ${cCc[3]}, ${cCc[2]}, ${cCc[1]}, ${cCc[0]}`;

const textArraySumABC = `${textArraySumA}, ${textArraySumB}, ${textArraySumC}`

console.log(textArraySumA);
console.log(textArraySumB);
console.log(textArraySumC);
console.log(textArraySumABC);