// Write your solution in this file!
let employee = {
    name:"Lincoln", 
    streetAddress:"19 Yahoo Ave"
};



function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");

console.log(employee);
console.log(newEmployee);


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

console.log(employee);


function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key] 
     return employee
 }