$(document).ready(onReady);

function onReady() {
    console.log('Hi from jQuery');
    $('#add-employeeBtn').on('click', addEmployee);
}

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

    // run append function
    appendEmployeeInfo();
}// end addEmployee function

// append inputs to DOM function
function appendEmployeeInfo() {
    // empty out table
    $('#salary-table').empty();
    // loop through array for values and append them
    for (employee of employeeArray){
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