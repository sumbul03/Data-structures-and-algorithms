/*
Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10.
However, if it’s greater than 10, print ‘greater than 10’. 
Also, deal with the case in which it’s equal to 10 with an appropriate message.
*/

let num=9;


switch (true) {

    case (num < 10):
        console.log("less than 10");
        break;


    case (num > 10):
        console.log("greater than 10");
        break;


    case (num === 10):
        console.log("The number you entered is 10");
        break;
    
    default:
        console.log("The number is not equal to 10");
        break;

}