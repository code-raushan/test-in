//2. Write a function groupBy that takes an array of objects and a property name as parameters. The function should group the objects based on the values of the given property and return an object where the keys are unique property values and the values are arrays of objects with matching property values.

const students = [
    {name: "Alice", age:20},
    {name: "Bob", age:21},
    {name: "Charlie", age:20},
    {name: "David", age:21}

]
const property="age";

function groupBy(students, property){
    let resultObj = {};
    let mainValues = []; // keeps the values of specified property.
    for(let i=0; i<students.length; i++){
        mainValues.push(students[i][property]) // pushing the specified property's values;
    }
    const uniqueValues = Array.from(new Set(mainValues)); // filtering out unique values;
    for(let i=0; i<uniqueValues.length; i++){
        let part=[]; //array to push with unique property value in the final object
        for(let j=0; j<students.length; j++){
            if(students[j][property]===uniqueValues[i]){
                part.push(students[j]);
            }
        }
        resultObj[uniqueValues[i]]=part;
    }
    console.log(resultObj)
}
groupBy(students, property)

