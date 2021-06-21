
for (let i = 0; i <= 2; i++) {
    console.log("- First level loop");
    for (let j = 0; j <= 3; j++) {
      console.log("-- Second level loop");
    }
  }

//   While Nested Loop

//   let i = 0;
// while (i <= 2) {
//   console.log("- First level loop");
//   i++;
//   let j = 0;
//   while (j <= 3) {
//     console.log("-- Second level loop");
//     j++;
//   }
// }

let arr = [
    [1, 2],
    [3, 4,5,6],
    ['sumbul' , 'rafiq'],
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }