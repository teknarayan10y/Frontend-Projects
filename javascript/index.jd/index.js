console.log("I am a tutorial on loops")
// for loop
let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i); 
}
// for in loop
let obj={
    name:"Pawan",
    role:"Programmer",
    company:"CodeWith Pawan AI"
}

for (const key in obj) {
       const element=obj[key];
       console.log(key, element)
}
// for of loop
for (const c of "Pawan"){
    console.log(c)
}

//while loop
// let i=0;
// while (i<6){
//     console.log(i)
//     i++;
// }
// do while loop
let i=0;
do {
    console.log(i)
    i++;
} while (i<10);