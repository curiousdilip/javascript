// and or operator

let firstName="Dilip";
let age=23;

// and operator - if both condition is true then it is true

if(firstName[0]==="D" && age>18){
    console.log("Name starts with D and age is above 18")
}
else{
    console.log("inside else")
}

// or operator - if one of the condition is true then the true block will run

if(firstName[0]==="D" || age>18){
    console.log("inside if")
}
else{
    console.log("inside else")
}