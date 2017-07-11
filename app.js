window.addEventListener('DOMContentLoaded', () => {

let firstLast;
let empImage;
let email;
let city;
let username;
let phone;
let street;
let country;
let zip;
let birthday;
let employees = [];

const name = document.getElementsByClassName('name');
const eMail = document.getElementsByClassName('email');
const domCity = document.getElementsByClassName('city');

  $('#employeeOverlay').hide();

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=US',
  dataType: 'json',
  success: function (data) {
    let employee = data.results;
    console.log(data);
    $.each(employee, function (index, info) {
      empImage = employee[index].picture.large;
      firstLast = employee[index].name.first+' '+employee[index].name.last;
      email = employee[index].email;
      city = employee[index].location.city;
      username = employee[index].login.username;
      phone = employee[index].cell;
      birthday = employee[index].dob;
      fullAddress = employee[index].location.street+' '+employee[index].location.city+', '+employee[index].location.state+' '+employee[index].location.postcode;
      


      employees.push(fullAddress);

   });

   }
  });
console.log(employees);


 });
