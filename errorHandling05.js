//5. How do you handle errors properly in NodeJS/ExpressJS applications?

/*
To handle the errors properly in NodeJS/Express applications, we can make use of try...catch block.
In this method, we wrap the code piece that is prone to produce errors in the try block and if it produces any error and it is caught by the catch block.
/*
    For example;
*/
function errorHandling(){
    try {
        // code that can produce error, and if it produces error, it will be caught by the catch block that will save the error details in the error object.
    } catch (error) {
        // we can handle the error using this 'error' object. 
        console.log(error.message); // consoling the error message
    }
}
// If necessary, we can produce our own custom errors using throw new Error('error message') in the try block and this error will be caught by the catch block. For example,

function errorThrowing(){
    try{
        // some code we intend to throw error from
        throw new Error('custom error')
    }catch(error){
        console.log(error.message)
    }
}
errorThrowing() // console loggs: custom error