let scrore = 3;
console.log(typeof scrore);  // number
 
let myscore = "33";
console.log(typeof myscore); // string

console.log(typeof (Number(myscore))); // number  --- here myscore string is converted into number data type 

let VarCharValue = "33abc";
console.log(typeof (Number(VarCharValue)));  // number  
// Note : the datatype of VarCharValue is giving as number after conversion but ideally this should not have been a number

// lets see the value the out put is giving ;

console.log(Number(VarCharValue));   // NaN 
// here the output of VarChaevalue is NaN and Nan is of datatype number

let nullValue = null;
console.log(Number(nullValue));    // 0
console.log(typeof(Number(nullValue)));     // number

let undefinedValue = undefined;
console.log(Number(undefinedValue));    //NaN
console.log(typeof(Number(undefinedValue)));    //number


// --------Notes for Number Conversion--------------
/*
    "33" = 33 
    "33abc" = Nan
    null = 0
    undefined = Nan
*/

let boolean1 = 1
console.log(Boolean(boolean1));    // true

let boolean0 = 0
console.log(Boolean(boolean0));     // false

let booleanEmptyString = "";
console.log(Boolean(booleanEmptyString));   // false

let booleanString = "abc";
console.log(Boolean(booleanString));   // true

//--------------- Notes for Boolean-------------
/*
    1 = true 
    0 = false
    "" = false
    "abc" = true
*/







