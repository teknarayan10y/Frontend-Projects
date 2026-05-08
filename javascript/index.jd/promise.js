// promise
console.log("This is Promises")

let prom1 = new Promise((resolve, reject) =>{
    let a=Math.random();
        if (a<0.5){
            reject("No random number was not supporting you")
        }
        else{
            setTimeout(() => {
                console.log("Yes I am done")
                resolve("Pawan")
            }, 3000)
         }
})

let prom2 = new Promise((resolve, reject) =>{
    let a=Math.random2();
        if (a<0.5){
            reject("No random number was not supporting you 2")
        }
        else{
            setTimeout(() => {
                console.log("Yes I am done 2")
                resolve("Pawan2")
            }, 3000)
         }
})

let p3=Promise.all([prom1,prom2])
p3.then((a) =>{
        console.log(a)
     }).catch((err) =>{
        console.log(err)
     })
// Promise API




// prom1.then((a) =>{
//     console.log(a)
// }).catch((err) =>{
//     console.log(err)
// })
