/* Consider the situation in which you are required
 to check if a number is 1 or 0. If it’s 1 you need to print true. 
 Otherwise, you should print false.
*/

let num = 0 ;
while(num<=1) {
if(num == 0) {
    console.log("Its a 0, hence false");
    num++;
}
else {
    console.log("Its a 1, hence true");
    break;
}
}