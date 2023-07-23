// 1. Scrieți o funcție care returnează pătratul unui număr

// Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).
// Exemplu 1:

// Input: num = 6

// Output: 36

// Exemplu 2:

// Input: num = 0

// Output: 0

// Exemplu 3:

// Input: num = -12

// Output: 144

// function findSquare(num) {
//   return num * num; //inmultim numarul
// }

// console.log(findSquare(6));
// console.log(findSquare(10));
// console.log(findSquare(0));
// console.log(findSquare(-12));


// 2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)

// Funcția getRandom(start, end) returnează un număr întreg aleator generat în intervalul definit de variabilele de început și sfârșit furnizate.

// Exemplu 1:

// Input: start = 3, end = 5

// Output: < un num**ă**r mai ≥ 3 și < 5>


// function getRandom(start, end) {
//   return Math.floor(Math.random() * (end - start)) + start;
// }

// console.log(getRandom(3, 5));
// console.log(getRandom(5, 12));


// 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

// Exemplu 1:

// Input: sir = “Îmi place programarea” litera = “a”

// Output: 4

// Exemplu 2:

// Input: sir = “Vreau să lucrez în IT”, litera = “r”

// Output: 2

// function letterCount(str, letter) {
//   let count = 0;

//   for(let i = 0; i < str.length; i++) {
    
//     // verificam dacă caracterul este în acea poziție

//     if (str.charAt(i) === letter) {
//       count += 1;
//     }
//   }
//   return count;
// }

// // imput pentru utilizator
// const string = prompt('Introdu un string: ');
// const letterToCount = prompt('Introdu o litera pentru numarare: ');

// //introducere parametrii si intializare functie
// const result = letterCount(string, letterToCount);

// console.log(result);


// 4. Scrieți o funcție pentru a adăuga numere nelimitate

// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

// Exemplu 1:

// Input: addNumber(1, 2, 3)

// Output: 6

// Exemplu 2:

// Input: addNumber(1, 2, 3, 4, 5)

// Output: 15

// const numbers = [4, 4, 5, 6]; // 19

// const sum = numbers.reduce((accumulator, curentValue) => accumulator + curentValue, 0);

// console.log(sum);



// Hint: Pentru a rezolva problema, vom folosi operatorul spread / rest (...) pentru a defini argumentele funcției:
// const addNumber = (…argumente) ⇒ {}  ???????


// function addNumber(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// } 

// console.log(addNumber(1, 2, 3)); // 6
// console.log(addNumber(1, 2, 3, 4, 5)); // 15
// console.log(addNumber(4, 4, 5, 6)); // 19