// Await and async it help to easy code 
// async function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         }, 3500);
//     })
// } 
      // fetch API
async function getData() {
    // simulate getting data from a server
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data= await x.json()
   console.log(x)
   return 455
}
// settle means resolve or reject
      // resolve means promise has settled successfully
      // reject means promise has settled successfully
// fetch API
async function main(){
console.log("Loading modules")

console.log("do something else")

console.log("Load data")
let data = await getData()


console.log("data")
console.log("process data")

console.log("task 2")
}
main()
