// function func(name,callback)
// {
//     console.log("Hi "+name);
//     callback();    
// }

// function wish()
// {
//     console.log("From another function");
// }

// func("Shiyaam",wish)

// function Time()
// {
//     setTimeout(()=>{
//         console.log("From Timeout");
//     },2000)
//     console.log("Outside Timeout");
// }

// const promise= new Promise((resolve,reject)=>{
//     const api=true
//     if(api) resolve("Data Fetched")
//     else reject("Error while Fetching")
// })

// promise
//     .then((msg)=>console.log("Success",msg))
//     .catch((error)=>console.log("Error",error))


const fetchApi= new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=>{return response.json()})
        .then((data)=>resolve(data))
        .catch((error)=>reject(error.message))
})

fetchApi
    .then((msg)=>console.log("Data fetched: ",msg))
    .catch((error)=>console.log(error))