console.clear();

// 1

function tusciaFunkcija () {
    return false;
}

console.log( tusciaFunkcija () );

// 2
console.log('---------2----------');

function daugyba (x, y) {
    const multip = x*y;
    return multip;
}

console.log( daugyba( 2, 7 ) )
console.log( daugyba( 5, 7 ) )
console.log( daugyba( 2, 5 ) )

// 3
console.log('---------3----------');

function skaitmenuKiekisSkaiciuje(skaicius) {
    if (typeof skaicius !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė';
    } else {
        let digits;
        let z = '';
        z += skaicius;
        digits = z.length;
        return digits;
    }
}

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

// 4
console.log('---------4----------');

function didziausiasSkaiciusSarase(skaiciusSarase) {
    if (Array.isArray(skaiciusSarase) !== true) {
        return 'Pateikta netinkamo tipo reikšmė.';
    } else if (skaiciusSarase.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    } else {
        let didziausias = -Infinity;
        for (let i = 0; i < skaiciusSarase.length; i++) {
            if (skaiciusSarase[i] > didziausias) {
                didziausias = skaiciusSarase[i];
            }
        }
        return didziausias;
    }
}

console.log(didziausiasSkaiciusSarase( [1] ));
console.log(didziausiasSkaiciusSarase([1,2,3]));
console.log(didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ));
console.log(didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ]));
console.log(didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ));
console.log(didziausiasSkaiciusSarase("pomidoras"));
console.log(didziausiasSkaiciusSarase([]));

// 5
console.log('---------5----------');

function isrinktiRaides (tekstas, raide) {
    if (typeof tekstas !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.'
    } else if (tekstas.length === 0 || tekstas.length > 100) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio'
    } else if (typeof raide !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.'
    } else if (raide <= 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.'
    } else if (raide > tekstas.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    } else {
        let raides = '';
        for (let i = raide - 1; i < tekstas.length; i+=raide) {
            raides += tekstas[i];
        }
        return raides;
    }
}

console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( "abcdefghijkl", 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );

// 6
console.log('---------6----------');

function dalyba(dalinys, daliklis) {
    if (typeof dalinys !== 'number' || typeof daliklis !== 'number') {
        return 'Abu kintamieji turi buti skaiciai.'
    } else if (isNaN(dalinys) || isNaN(daliklis)) {
        return 'Kintamieji negali buti NaN.';
    } else if (!isFinite(dalinys) && !isFinite(daliklis)) {
        return 'Abu kintamieji negali buti Infinity vienu metu';
    } else {
        const dalmuo = dalinys / daliklis;
        return dalmuo;
    }
}

console.log( dalyba( 'aga', 'gaaw' ) );
console.log( dalyba( 'hawh', 3 ) );
console.log( dalyba( 4, 'agwa' ) );
console.log( dalyba( '8', '5') );
console.log( dalyba( 0, 2 ) );
console.log( dalyba( 70, 0) );
console.log( dalyba( NaN, 2 ) );
console.log( dalyba( 5, Infinity) );
console.log( dalyba( -Infinity, Infinity) );
console.log( dalyba( 1561, 2 ) );
console.log( dalyba( [1561, 2] ) );