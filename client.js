$(document).ready(onReady);

function onReady(params) {
    console.log('Hi from jQuery');
}

// store employee information here
let employeeArray = [];

// take in information and push to employeeArray
function addEmployee() {
    // turn inputs to value
    let firstName = $('#in-firstName').val();
    let lastName = $('#in-lastName').val();
    let id = $('#in-id').val();
    let title = $('in-title').val();
    let annualSalary = $('#in-annualSalary').val();
    // push to employeeArray
    employeeArray.push( {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        annualSalary: annualSalary 
    })// end object literal
    // run math function

    // run append function
}// end function


 // empty the inputs
//  $('#in-firstName').empty();
//  $('#in-lastName').empty();
//  $('#in-id').empty();
//  $('in-title').empty();
//  $('#in-annualSalary').empty();