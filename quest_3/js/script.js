//'use strict';


// sayHello('asd') 

// function sayHello(name) {
    
//    return (console.log(`hello ${name}`));
// }

returnNeighboringNumbers(8);
function returnNeighboringNumbers(a) {
    let arr = [];    
     arr[0] = a - 1;
     arr[1] = a;
     arr[2] = a + 1;
    return(arr);
}

getMathResult(3, "a");
function getMathResult(a, b) {
    if (/*typeof(b) != "string" || */b > 0) {
        let arr = [];
        for(let i = 0; i < b; i++) {        
            let tmp = a;
            arr[i] = a;
            tmp = (i + 1) * a;
            arr[i] = tmp;
        }
        let str = arr.join('---');
        console.log (str);
        return(str);        
    } else {    
        console.log (a);
        return(a);
    }
}