let a = 0; 
let array=[];
let tap;


document.querySelector('.calculator').addEventListener('click' , (e) => { 
    tap = e.target.textContent 
    if (tap == "+" || tap == "-" || tap == "/" || tap == "x" || tap == "=") {


        return


    }
    
    array.push(tap)

    a = Number (array.join(""))
    console.log(a)
    

});

import {addition, division,} from "./script.js"

