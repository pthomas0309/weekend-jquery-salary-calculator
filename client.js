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
    $("#displayEmployee").append(`
    <tr>
        <td>${employee.fName}</td>
        <td>${employee.lName}</td>
        <td>${employee.empID}</td>
        <td>${employee.jTitle}</td>
        <td>${employee.aSalary}</td>
    </tr>
    `)
    console.log(employeeSheet);
}
