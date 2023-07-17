//4. What is callback hell? How do you overcome callback hell? Give code examples for each.


/*
    A callback in JavaScript means a function that is passed as an argument in another function.
    A callback hell is a situation when there are callback functions nested inside a callback function as argument.
*/
/*
 for example;
*/

outer(()=>{
    ()=>{
        ()=>{
            ()=>{
                ()=>{
                    console.log('callback hell')
                }
            }
        }
    }
});

// As per above code, this is a situation of callback hell, in which functions are passed as argument in which function is passed and this contines on...

// Generally such methodology is used to acheive asynchronousity in the program

// After ES6, we can use promises or async-await to achieve this

const promise = Promise((resolve, reject)=>{ 
    //statement to either resolve or reject
})
// we can use promise chain to achieve the solution

promise.then((resp)=> resp)
    .then((resp)=>resp)
    .then((resp)=>resp)
// depending the statement used inside the promise
    .catch((err)=>{
        // handling the error
    }) // to catch the error if one exist


// We can also use Async-Await to get rid of this chaining.