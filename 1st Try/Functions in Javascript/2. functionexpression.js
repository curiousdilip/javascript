// function expression
// function sing(){
//     console.log("Happpy birthday to me!")
// }

const singHappyBday=function sing(){
    console.log("Happpy birthday to me!")
}

singHappyBday();

// function sum2no(a,b){ //reusable function
//     return a+b;
// }

const sum2number=function sum2no(a,b){ 
    return a+b;
}

console.log(sum2number(23,45))

// odd even

// function oddeven(a){
//     if(a%2===0){
//         console.log(`${a} is a Even Number `)
//     }else{
//         console.log(`${a} is a odd Number `)
//     }
// }

const isEven=function oddeven(a){
    if(a%2===0){
        console.log(`${a} is a Even Number `)
    }else{
        console.log(`${a} is a odd Number `)
    }
}

isEven(23);
