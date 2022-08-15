//'use strict';


// sayHello('asd') 

// function sayHello(name) {
    
//    return (console.log(`hello ${name}`));
// }

// returnNeighboringNumbers(8)
// function returnNeighboringNumbers(a) {
//     let arr = [];    
//      arr[0] = a - 1;
//      arr[1] = a;
//      arr[2] = a + 1;
//     return(console.log(arr))
// }

getMathResult(5.5, 10);
function getMathResult(a, b) {
    let arr = [];
    for(let i = 0; i < b; i++) {        
        let tmp = a;
        arr[i] = a;
        tmp = (i + 1) * a;
        arr[i] = tmp;

    }
    console.log(arr);
}