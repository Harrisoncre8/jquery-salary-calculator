$(document).ready(onReady);

// fires when document is ready
function onReady() {
    console.log('Hi from jQuery');
    $('#add-employeeBtn').on('click', addEmployee);
}// end ready function

// store employee information here
let employeeArray = [];

// take in information and push to employeeArray
function addEmployee() {
    event.preventDefault();
    // turn inputs to value
    let firstName = $('#in-firstName').val();
    let lastName = $('#in-lastName').val();
    let id = $('#in-id').val();
    let title = $('#in-title').val();
    let annualSalary = $('#in-annualSalary').val();
    // push to employeeArray
    employeeArray.push( {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        annualSalary: annualSalary 
    })// end object literal
    // clears out inputs
    $('#in-firstName').val('');
    $('#in-lastName').val('');
    $('#in-id').val('');
    $('#in-title').val('');
    $('#in-annualSalary').val('');
    // run math function
    calculateAnnualSalary(employeeArray);
    // run append function
    appendEmployeeInfo(employeeArray);
}// end addEmployee function

// append inputs to DOM function
function appendEmployeeInfo(array) {
    // empty out tabler
    $('#salary-table').empty();
    // loop through array for values and append them
    for (employee of array){
        $('#salary-table').append(
            `<tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
            </tr>`
        );
    }// stop looping
}// end append function

// calculates annual salary
function calculateAnnualSalary(array){
    let monthlyTotal = 0;
    for ( let i=0; i<array.length; i++){
        monthlyTotal += Number(array[i].annualSalary)
        console.log(monthlyTotal);
    }// end for loop
    $('#monthly-salary').empty();
    $('#monthly-salary').append('Total Monthly: ', monthlyTotal);
}// end calculateAnnualSalary function

