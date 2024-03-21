//start boolean ---------------------------
console.log('---------booleans----------------')
let booleano1 = true;
let booleano2 = false;
let booleanoAnd = booleano1 && booleano2;
let booleanoOr = booleano1 || booleano2;
let booleanoNot = !booleano1;
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && booleano2));
console.log('Booleans resoult :', 'booleanoAnd: ' + booleanoAnd + '| booleanoOr : ' + booleanoOr + '| booleanoNot :' + booleanoNot + '| booleanoMix0 : ' + booleanoMix0)
//Operadores ---------------------------
console.log('--------- operadores----------------');
const valorDivision = (17 / 3).toPrecision(3)
const valorResto = 17 % 7;
console.log('Operadores resoult :', 'valorDivision: ' + valorDivision + '| valorResto: ' + valorResto);
//Lógica de programacion ---------------------------
console.log('---------lógica de programación----------------');
const A = 9;
const B = "9";
if (A == B) { console.log('Lógica : ', ' A con valor de ' + A + ' es igual a B con valore de : ' + B); };
if (A === B) {
    console.log('Lógica : ', ' A con valor de ' + A + ' es igual a B con valore de : ' + B);
} else {
    console.log('Lógica : ', ' A con valor de ' + A + ' no es igual a B con valore de : ' + B + ' o el tipo de variable de A (' + typeof (A) + ') y el de B(' + typeof (B) + ') no coinciden');
};
const mochila = ['lapiz', 'boli', 'portatil', 'libro1', 'libro2', 'libro3', 'libro4', 'libro5', 'libro6', 'libro7'];
if (mochila.length > 10) {
    console.log('Lógica mochila : ', 'No puedo cargar con tantas cosas. Cosas:' + mochila.length)
} else if (mochila.length > 2) {
    console.log('Lógica mochila : ', 'Que bien voy con mi mochila. Cosas:' + mochila.length)
} else {
    console.log('Lógica mochila : ', 'Creo que no necesito una mochila. Cosas:' + mochila.length)
}

for (let contarHasta10 = 0; contarHasta10 <= 10; contarHasta10++) {
    console.log('Logica contarHasta10 ' + contarHasta10);
}

const diaFestivo = false;
diaFestivo ? console.log('Lógica terniaria', 'Hoy no trabajo') : console.log('Lógica terniaria', 'Hoy trabajo')

const arrayBucle = [];

for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);
}
console.log('Lógica Array: ', arrayBucle)

let totalInArray = 0;
for (let i of arrayBucle) {
    totalInArray = totalInArray + i
}
console.log('Lógica Total en el Arry: ', totalInArray)

const arraySofia = ['Con', 'Sofia', 'aprendiendo', 'bucles'];
for (let i of arraySofia) {
    console.log('Lógica Elemento del arrySofia con for of: ', i)
}

for (let i in arraySofia) {
    console.log('Lógica Elemento del arrySofia con for in : ', arraySofia[i])
}

let i = 0;
while (i < 20) {
    if (i % 3 == 0 && i != 0) {
        console.log('Lógica while ', 'Patata : ' + i)
    }
    i++;
}
//Extra ---------------------------
console.log('-------------Extra------------------')
let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

let nombre4Char = [];
let menorCuarentaJ = []
for (let i of gente) {
    //onsole.log ('test: ', i )
    if (i.nombre.length == 4) {
        nombre4Char.push(i)
    }
    if (i.nombre.substring(0, 1) == 'J' && i.edad < 40) {
        menorCuarentaJ.push(i)
    }
}
console.log('Extra Array nombres 4 letras : ', nombre4Char);
console.log('Extra Array nombres  con J y menos de 40: ', menorCuarentaJ)


const ordenador = {
    marca: 'La pava',
    tipo: 'portátil',
    perifericos: ['test', 'touchPad'],
    almacenamiento: {
        discos: ['test', 'HDD'],
        maestro: 0,
    }
};

// TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

console.log('-------------Extra 2------------------')

const arr = [{
    name: 'pepito',
    age: 25,
},
{
    name: 'pepito',
    age: 7,
},
{
    name: 'Jacinto',
    age: 5,
}];
// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6.1
if (arr[1].name === "pepito") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 7
if (arr[1].age > arr[2].age) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
 // TEST 8
 if (arr[0].age === 25) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
// TEST 9
if (typeof arr[2].name === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
// TEST 10
if (arr[2].name[0] === "J") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

