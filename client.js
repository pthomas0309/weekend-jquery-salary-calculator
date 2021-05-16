$(document).ready(readyNow);

function readyNow(){
    $('#submitBtn').on('click', appendEmployeeInfo);
    $('#displayEmployee').on('click', '.deleteBtn', removeEmployeeInfo)
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
    if (inputCheck()){
        $("#displayEmployee").append(`
        <tr class="empData">
            <td>${employee.fName}</td>
            <td>${employee.lName}</td>
            <td>${employee.empID}</td>
            <td>${employee.jTitle}</td>
            <td>$${employee.aSalary}</td>
            <td><button class="deleteBtn">DELETE</button></td>
        </tr>
        `);
        $('.employeeTableData').val('');
        calculateMonthly();
    }
    else {
        alert("All Fields Required.");
    }
}

function calculateMonthly(){
    let annualCost = 0;
    for (let employee of employeeSheet){
        if (employee.aSalary.length > 7){
            annualCost += parseFloat(employee.aSalary) * 1000000;
        }
        else if (employee.aSalary.length <= 7 && employee.aSalary.length > 3){
            annualCost += parseFloat(employee.aSalary) * 1000;
        }
        else {
            annualCost += Number(employee.aSalary);
        }
    }
    let monthlyCost = annualCost / 12;
    $('#monthlyCost').empty();
    $('#monthlyCost').append(`${monthlyCost}`);
    if (monthlyCost > 20000){
        $('#displayCosts').addClass('inTheRed');
    }
}

function removeEmployeeInfo(){
    console.log('click');
    $(this).closest('.empData').remove();
}

function inputCheck(){
    let expandedEmployeeSheet = [];
    for (let employee of employeeSheet){
        expandedEmployeeSheet = Object.values(employee);
        console.log(expandedEmployeeSheet);
    }
    if (expandedEmployeeSheet[0] === ''){
        $('#firstName').addClass('missingInput');
        employeeSheet.pop();
    }
    else {
        $('#firstName').removeClass('missingInput');
    }
    if (expandedEmployeeSheet[1] === ''){
        $('#lastName').addClass('missingInput');
        employeeSheet.pop();
    }
    else {
        $('#lastName').removeClass('missingInput');
    }
    if (expandedEmployeeSheet[2] === ''){
        $('#employeeId').addClass('missingInput');
        employeeSheet.pop();
    }
    else {
        $('#employeeId').removeClass('missingInput');
    }
    if (expandedEmployeeSheet[3] === ''){
        $('#jobTitle').addClass('missingInput');
        employeeSheet.pop();
    }
    else {
        $('#jobTitle').removeClass('missingInput');
    }
    if (expandedEmployeeSheet[4] === ''){
        $('#annualSalary').addClass('missingInput');
        employeeSheet.pop();
    }
    else {
        $('#annualSalary').removeClass('missingInput');
    }
    for (let employeeData of expandedEmployeeSheet){
        return expandedEmployeeSheet[0] != '' && expandedEmployeeSheet[1] != '' && expandedEmployeeSheet[2] != '' && expandedEmployeeSheet[3] != '' && expandedEmployeeSheet[4] != '';
    }
}