// This program *converts* **number** to **letter**

let number = 62;

let letter = "F";

if (number >= 90){
    letter = "A+";
}   else if (number >= 80){
    letter = "A";
}   else if (number >= 70){
    letter = "B";
}   else if (number >= 60){
    letter = "C";
}   else if (number >= 50){
    letter = "D";
}

console.log(`${number} is ${letter}`);

    