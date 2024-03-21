

// QUESTION NO 1
let a=10;

document.write(`Result: <br>`);
document.write(`The value of a is ${a} <br>`);
document.write(`-------------------------------------------- <br>`);

++a;
document.write(`The value of ++a is: ${a} <br>`);
document.write(`Now the value of a is: ${a} <br> <br>`);


document.write(`The value of a++ is: ${a} <br>`);
a++;
document.write(`Now the value of a is: ${a} <br> <br>`);

--a;
document.write(`The value of --a is: ${a} <br>`);
document.write(`Now the value of a is: ${a} <br> <br>`);

document.write(`The value of a-- is: ${a} <br>`);
a--;
document.write(`Now the value of a is: ${a} <br> <br>`);

// QUESTION NO 2
var A = 2, B = 1;
document.write(`A = ${A} <br>`);
document.write(`B = ${B} <br>`);

var result = --A - --B + ++B + B--;
         //    1 - 0 + 1 + 1
        //    1+1+1
        //    3
document.write(`RESULT = ${result} <br> <br>`);

// QUESTION NO 3
let input=prompt("Enter your name:");
document.write(`Hello ${input}!!! <br> <br>`);

let table=parseInt(prompt("Enter table to print: "));
if(table){
    document.write(`Table of ${ table} <br> <br>`);
    document.write(`${table} x 1 = ${table*1}<br>`);
    document.write(`${table} x 2 = ${table*2}<br>`);
    document.write(`${table} x 3 = ${table*3}<br>`);
    document.write(`${table} x 4 = ${table*4}<br>`);
    document.write(`${table} x 5 = ${table*5}<br>`);
    document.write(`${table} x 6 = ${table*6}<br>`);
    document.write(`${table} x 7 = ${table*7}<br>`);
    document.write(`${table} x 8 = ${table*8}<br>`);
    document.write(`${table} x 9 = ${table*9}<br>`);
    document.write(`${table} x 10 = ${table*10}<br>`);
}
else {
    document.write(`Table of 5 <br> <br>`);
    document.write(`5 x 1 = ${5*1}<br>`);
    document.write(`5 x 2 = ${5*2}<br>`);
    document.write(`5 x 3 = ${5*3}<br>`);
    document.write(`5 x 4 = ${5*4}<br>`);
    document.write(`5 x 5 = ${5*5}<br>`);
    document.write(`5 x 6 = ${5*6}<br>`);
    document.write(`5 x 7 = ${5*7}<br>`);
    document.write(`5 x 8 = ${5*8}<br>`);
    document.write(`5 x 9 = ${5*9}<br>`);
    document.write(`5 x 10 = ${5*10}<br>`);
    
    
}
















