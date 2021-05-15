$(document).ready(readyNow);

function readyNow(){
    $('#submitBtn').on('click', appendEmployeeInfo)
}

let employeeSheet = []

function appendEmployeeInfo(){
    let employee = {
        fName: $('#firstName').val(),
        lName: $('#lastName').val(),
        empID: $('#employeeId').val(),
        jTitle: $('#jobTitle').val(),
        aSalary: $('#annualSalary').val(),
    }
    employeeSheet.push(employee);
    console.log(employeeSheet);
}