// callback function
console.log("Pawan is a hacker")
console.log("Pawan is a hecker")

setTimeout(() => {
    console.log("I am inside settimout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimout 2")
}, 0);

console.log("The End")

const callback= (arg) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
   let sc = document.createElement("script");
   sc.src = src;
   sc.onload = callback("Pawan");
   document.head.append(sc)

}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
// Call back Function