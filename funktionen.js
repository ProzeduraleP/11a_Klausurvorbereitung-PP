/* DATENSTRUKTUREN */

/* Primitives */

// let a; // Definition oder Deklaration

// Wertzuweisung / Assignment 
// a = 2; // number 
// a = true; // boolean (true, false)
// a = "Hallo"; // string 

//  console.log(typeof a);
//  console.log(a);

/* Arrays */
// Navigation über INDEX

// let arr;
// // // // // arr = new Array();  // Möglichkeit
// arr = [false,true,true,false];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);
// console.log(arr[5]);


/* Daten-Objekte */
// Navigation über Bezeichner (keys)

// let obj = {x:"Hi", y:20};
// console.log(obj);
// console.log(obj.x);
// console.log(obj.y);

// let obj = {
//         val0: 10,
//         sub1:{
//             val1: "hi",
//             val2: 2
//             }
//     };

// console.log(obj);
// console.log(obj.val0);
// console.log(obj.sub1.val2);
// console.log(obj.sub1.val1);
// console.log(obj.sub1);
// {{{{}}}} nested object

/*DOM*/
// DOM  --> Modell der HTMl-Struktur
// DOM --> Document Object Model
// DOM --> nach dem Parsen / Laden der HTML-Seite  
// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"

/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/

 // https://github.com/01-PP-ComCaveDD/Themen_01/blob/main/src/06_controlflow.js

/* FUNKTIONEN */

// 
// https://github.com/01-PP-ComCaveDD/Themen_01/blob/main/src/08_funktionen_I.js
// https://github.com/01-PP-ComCaveDD/Themen_01/blob/main/src/09_funktionen_II.js



// rechner();


// Test
// let arrCity;
// arrCity = ["Berlin","Paris","London","New York"];

// console.log(arrCity[arrCity.length-1]);


// var struc =
// {
//  level1:
//  {
//  level2:
//  {
// param1: 3.14,
// param2: 10.01
//  }
//  }
// };

// console.log(struc.level1.level2.param1);
// console.log(struc.level1.level2.param2);


const ERROR_S_GEN = "Irgendwas ist schief gegangen!";

function rechner(nr1, nr2, op){

    switch (op) {
        case "+": 
            return "Das Ergebnis lautet: " + summe(nr1, nr2);	
        case "-": 
            return "Das Ergebnis lautet: " + different(nr1, nr2);
        default:
            return ERROR_S_GEN;
    }
    
}

function summe(nr1, nr2) {
	return nr1 + nr2;
}

function different(nr1, nr2) {
	return nr1 - nr2;

}

console.log(rechner(10, 4, '-')); // Subtraktion
console.log(rechner(10, 4, '+')); // Addition

