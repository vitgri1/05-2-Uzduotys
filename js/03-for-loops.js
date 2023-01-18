console.clear();

//1
// - a
let sumA = 0;
for (i = 0; i <= 0; i++) {
    sumA += i;
}

console.log(sumA);

// - b
let sumB = 0;
for (i = 0; i <= 4; i++) {
    sumB += i;
}

console.log(sumB);

// - c
let sumC = 0;
for (i = 0; i <= 100; i++) {
    sumC += i;
}

console.log(sumC);

// - d
let sumD = 0;
for (i = 574; i <= 815; i++) {
    sumD += i;
}

console.log(sumD);

// - e
let sumE = 0;
for (i = -50; i <= 50; i++) {
    sumE += i;
}

console.log(sumE);

// - f
let sumF = 0;
for (i = -70; i <= 30; i++) {
    sumF += i;
}

console.log(sumF);

//2

const textOrigin = 'qwertyuiopasd';
let textReversed = '';
for (let i = 0; i < textOrigin.length ; i++) {
    textReversed += textOrigin[textOrigin.length - i - 1];
}

console.log(textOrigin, textReversed);

//3
// - a

let num3 = 0;
let num5 = 0;
let num7 = 0;

for (i = 0; i <= 11; i++) {
    if (i % 3 === 0) {
        num3++;
    }
    if (i % 5 === 0) {
        num5++;
    }
    if (i % 7 === 0) {
        num7++;
    }
}

console.log(num3, num5, num7);

// - b

num3 = 0;
num5 = 0;
num7 = 0;

for (i = 8; i <= 31; i++) {
    if (i % 3 === 0) {
        num3++;
    }
    if (i % 5 === 0) {
        num5++;
    }
    if (i % 7 === 0) {
        num7++;
    }
}

console.log(num3, num5, num7);

// - c

num3 = 0;
num5 = 0;
num7 = 0;

for (i = -18; i <= 18; i++) {
    if (i % 3 === 0) {
        num3++;
    }
    if (i % 5 === 0) {
        num5++;
    }
    if (i % 7 === 0) {
        num7++;
    }
}

console.log(num3, num5, num7);

// - d

num3 = 0;
num5 = 0;
num7 = 0;

for (i = 0; i <= 11; i++) {
    if (i % 3 === 0) {
        num3++;
    }
    if (i % 5 === 0) {
        num5++;
    }
    if (i % 7 === 0) {
        num7++;
    }
}

for (i = 3; i <= 7; i+=2) {
    console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${i} yra ${num3} vienetai.`);
}