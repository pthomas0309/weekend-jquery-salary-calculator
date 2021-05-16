$(document).ready(readyNow);

function readyNow(){
    $('#submitBtn').on('click', appendEmployeeInfo);
}

let employeeSheet = [];

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
        <td>$${employee.aSalary}</td>
        <td><button id='deleteBtn'>DELETE</button></td>
    </tr>
    `)
    calculateMonthly();
}

function calculateMonthly(){
    let annualCost = 0;
    for (let employee of employeeSheet){
        if (employee.aSalary.length > 7){
            annualCost += parseFloat(employee.aSalary) * 1000000;
        }
        else if (employee.aSalary.length <= 7 && employee.aSalary.length > 3){
            annualCost += parseFloat(employee.aSalary) * 1000
        }
        else {
            annualCost += Number(employee.aSalary)
        }
    }
    let monthlyCost = annualCost / 12;
    $('#monthlyCost').empty()
    $('#monthlyCost').append(`${monthlyCost}`)
    if (monthlyCost > 20000){
        $('#displayCosts').addClass('inTheRed');
    }
}