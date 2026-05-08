function nike(name) {
    console.log("Hey " + name +"you are nice")
    console.log("Hey " + name +"you are good")
    console.log("Hey " + name +"you are strong")
}
function sum(a,b,c=3) {
    // 
    return a+b+c
}
result1= sum(3,5)
result2= sum(5,5,3)
result3= sum(10,5,4)
console.log("The sum of these numvber is:", result1)
console.log("The sum of these numvber is:", result2)
console.log("The sum of these numvber is:", result3)
nike("Pawan")

nike("vinit")
// This is arrow function
const func1 =(x)=>{
    console.log("I am an arrow function",x)
}
func1(34);
func1(56);
func1(65);