// Variable Declaration in JavaScript Var, Let, Const


// var
var myName = 12;
console.log(myName);


//let

let rafay = "hello World";
console.log(rafay);


//const not be changed 

const pi = 3.14;  // const we can use onky one time secont time same name errror
console.log(pi);



// now we can learn the second deceleration, and Intilization

var a; // decelare kana means decleare kiya hai initialize nahi kiya hai

var b = 10; // decelare and  banaaya or value di dono main decelaration and initilzation


// var pronlem


//1- window main add ota hai.
//2- Function scoped hota hai.
//3- app fir sy declear kar sakty ho error nahi ay ga same name sy.



// var exmaple 
var a = 45;
var a = "Testing Rafay";

console.log(a);// output Testing Rafay

console.log(a); // output Testing Rafay



// const example

const data = 3.14;
console.log(data);  // the value doesnot change we can declare only one time



function abcd() {
    if(true) {
        var a = 12;
    }
}




// scoped (gloabal, block, functional)


// first we cna see the example of gloabal scope in a example 

// start example start for global scope

var a = 45;

function myFunction() {
    console.log(a); // output 45
}
myFunction();

// end example for global scope


// fucntional scope example start

function rafayFunc() {
  var b = 9090;
  console.log(b);
}





// funcitonal scope example end




// block scope example start
// blocked scope ky jahan {} curly braket we can use let.
{
    let c = 100;
    console.log(c); // output 100
}



// next topic

// Reassignment and Redeclaration



var a = 45;
a = 32
console.log(a); // output 32



// Temperal Dead Zone (TDZ)

// UTNA AREA JITNE MAIN JS KO PATA HAI KY VARIABLE EXIST KARTA HAI PAR AP KO VO VALUE NAHI DE SAKHTA HAI 

// console.log(alishah);

// let alishah = "hello world";


// NEXT TOPIC HOISTING IMPACT PER Type


// Hoisting aik variable ko jab js main banante hai to  wo variable do hisso main toot jata hai and uska declare part uppar chala jata hai uska initilization neeche reh jata hai

console.log(of); // output undefined

var of = 12;

// var of = undefined; // ye hoisting main hota hai
// of = 12; // ye initilization hota hai



// var - hoist - undefined
// let - hoist - X
// const - hoist - X




// common issue 

console.log(nm); // output undefined
var nm = "Harsh"


// // next output guess
// console.log(age); // output error
// let age = 25;



// next one is var

var x = 1    // global scope

{
    var x = 2; //global scope
}

console.log(x); // output 2



// next one is let


let o = 10;          // block scope  global scope

{
    let o = 20;                      
    console.log( "Inside block: " + o); // output 20
}

console.log("Outside block: " + o); // output 10