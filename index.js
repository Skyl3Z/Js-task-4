// Task 1

// let fullname = "John Doe" ;
// let result = fullname.charAt(0) ;
// let result1 = fullname.charAt(5) ;

// console.log(result, result1) ;

//Task 2

// let string = "7";
// let y = string.charCodeAt(0) ;

// if(y>=65 && y<90){
//     console.log("uppercase")
// }

// else if(y>=97 && y<122){
//     console.log("lowercase")
// }

// else if(y>=48 && y<57){
//     console.log("Digits") 
// }

// else{
//     console.log("wrong number sir")
// }


// let num= 972.583 ;
// let result = num.toPrecision(3) ;
// console.log(result);


// let num= "972.583" ;
// let result = num.Tofixed() ;
// console.log(result);


//task 3

// let x = "hello" ;

// let result = x.charAt(1) ;

// if (result === 'a' || result === 'e' || result === 'i' || result === 'o' || result === 'u') {
//     console.log("vowel");

// } else {
//     console.log("consonant");
// }

// let text = "KRISHWIANU" ;

// let result = text.slice(-1,1) ;
// console.log(result) ; ????????????????????????

//Task 4

let str = "hello";
let reversed = "";

for (let i = str.length-1 ; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed) ;

// switch (true){
//     case(reversed.length<=5) :
//     console.log("Short string") ;
//     break ;

//     case(reversed.length>6 || reversed.length<10) :
//     console.log("medium string") ;
//     break ;


//     case(reversed.length<10) :
//     console.log("Long string") ;
//     break ;
// }

