//function declaration
function sing(){
    console.log("Happpy birthday to me!")
}

// sing();
// sing();
// sing();
// sing();
// sing();
// sing();

// function sum(){
//     return 2+4;
// }

// sum();//call, invoke, run

// // DRY-dont repeat yourself

// const returnedValue=sum()
// console.log(returnedValue)

// function sum2no(a,b){ //reusable function
//     return a+b;
// }

// console.log(sum2no(23,45))

// odd even

// function oddeven(a){
//     if(a%2===0){
//         console.log(`${a} is a Even Number `)
//     }else{
//         console.log(`${a} is a odd Number `)
//     }
// }

// function oddeven(a){
//     a=a%2===0?console.log(true):console.log(false)
// }

// function oddeven(a){
// return a%2==0;
// }

// console.log(oddeven(10))

//function, input:string, output:fisrt character

// function char(abc){
//     return abc[0];
// }

// console.log(char("dilip"))

// function, input: array, target (number), output:index of traget if present in the array

// [1,2,3,4,45,56,4],4


function target(array,target){
for(let i=0;i<array.length;i++){
    if(array[i]===target){
        return i;
    }
    
    
}return -1;
}
marray=[1,2,3,4,45,56,4]
const ans=target(marray, 0)
console.log(ans)