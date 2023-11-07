"use strict";
console.log("switch.js file was loaded");
let diena = 1;
console.log("diena ===", diena);

/*switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
 */

switch (diena) {
  case 1:
    //pirmadienis
    console.log("pirmadienis");
    break;
  case 2:
    console.log("antradienis");
    break;
  case 3:
    console.log("treciadienis");
    break;
  case 4:
    console.log("ketvirtadienis");
    break;
  case 5:
    console.log("penktadienis");
    break;
  case 6:
  case 7:
    console.log("savaitgalis");
    break;
  default:
    console.log("Netinkama dienos reiksme");
}

let value2 = "hello";
value2 = 45;
value2 = true;
value2 = BigInt;

// switch statment, kad nustatytu kokio tipo yra value2

switch (typeof value2) {
  case "string":
    console.log("tekstas");
    break;
  case "number":
    console.log("skaicius");
    break;
  case "boolean":
    console.log("teisinga/neteisinga");
    break;
  default:
    console.log("netinkamas tipas");
}
