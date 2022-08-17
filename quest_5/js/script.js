'use strict';

// function calculateVolumeAndArea(a) {
//     if (a < 0 || !Number.isInteger(a) || typeof(a) !== 'number') {    
        
//         return ("При вычислении произошла ошибка");
//     } else {        
        
//         let v, s;
//         v = a * a * a;
//         s = 6 * a * a;
//         let f = `Объем куба: ${v}, площадь всей поверхности: ${s}`;
          
//         return (f);
        
//     }
// }
// calculateVolumeAndArea(15);
function getCoupeNumber(a) {
    if (a === 0 || a > 36) {    
        
        return ("Таких мест в вагоне не существует");
    } else if (!Number.isInteger(a) || a < 0 || typeof(a) !== 'number') { 
        
        return ("Ошибка. Проверьте правильность введенного номера места");
    } else {   
        if (a >= 1 && a <= 4) {
            return(1);
        } else if (a >= 5 && a <= 8) {
            return(2);
        } else if (a >= 9 && a <= 12) {
            return(3);
        } else if (a >= 13 && a <= 16) {
            return(4);
        } else if (a >= 17 && a <= 20) {
            return(5);
        } else if (a >= 21 && a <= 24) {
            return(6);
        } else if (a >= 25 && a <= 28) {
            return(7);
        } else if (a >= 29 && a <= 32) {
            return(8);
        } else if (a >= 33 && a <= 36) {
            return(9);
        }
    }
}
getCoupeNumber(-1);
