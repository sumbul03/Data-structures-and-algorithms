/*
Suppose you are given a number and you need to check whether it’s even or odd. How'd you do that?
*/

let num = 5005;


switch (true){

case (num % 2 == 0):
        console.log(num, " - EVEN number");
        break;
    
default:
        console.log(num, " - ODD number");
        break;

}