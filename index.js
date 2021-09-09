//ex 1


var a = 5,
b=9;

var c = b;
b = a,
a = c

console.log(a,b);

//ex2:
// exemple 1

function puissance(a){
return a**a
}
console.log(puissance(2))

//exemple 2
console.log(Math.pow(2, 2));

//ex3
// exemple 1

var sum = [ 5, 6];
var i = 0;
var h = sum.map((el) => i += el);

console.log(i);
//exemple 2
const arr = [5, 6,7,8];
const som = arr.reduce((a, b) => a + b);
console.log(som);


//ex4
function convert(a){
    return a * 60;
}
console.log(convert(6))

//ex5
function increment(a){
    
    return a + 1;
}
console.log(increment(6))

//ex6
function  surface(base , hauteur){
    return (base * hauteur) / 2;
}
console.log(surface(2,2))

//ex7
 
var text = 'Innova Academy'
console.log(text.split("").reverse().join(""))

//ex 8
var bigest = [8,2,5];

console.log(Math.max(...bigest));


//ex9
//exemple 1

var tab = [1,2,3,4,5,6] ;
function first(){
    return tab[0];
}

//exemple 2

console.log(first())
function lowel(){
    return tab.shift() 
}

console.log(lowel())

//ex10 

var sum = [ 13, 42];
var i = 0;
function chek(){
var h = sum.map((el) => i = i + el);
    return i < 100
}
console.log(chek())

//ex11

function convert2(a){
    return a * 3600;
}
console.log(convert2(1))



