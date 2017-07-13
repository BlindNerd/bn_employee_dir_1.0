window.addEventListener('DOMContentLoaded', () => {

   // create global variables

let firstLast;
let empImage;
let email;
let city;
let username;
let phone;
let fullAddress;
let birthday;
let employees = [ ];
let index;
const info = document.getElementsByClassName('info');
const eMail = document.getElementsByClassName('email');
const domCity = document.getElementsByClassName('city');
const cardImage = document.getElementsByClassName('image');
const name = document.getElementsByClassName('name');
const employeeDiv = document.getElementsByClassName('employee');
const wrapper = document.getElementById('wrapper');
const $overlay = $('#employeeOverlay');

// Create a constructor function to capture each employees info.

function Contact (img, number, home, fullName, largeImg, mail, user, dob, town) {
    this.empImageSmall = img;
    this.phone = number;
    this.fullAddress = home;
    this.firstLast = fullName;
    this.empImageLarge = largeImg;
    this.email = mail;
    this.username = user;
    this.birthday = dob;
    this.city = town;
} // end constructor function


// hide overlay div
  $overlay.hide();
  $('#search').hide();

// create an ajax request and loop through all the info to get the info the page needs.

$.ajax({

  url: 'https://randomuser.me/api/?results=12&nat=US',
  dataType: 'json',

  success: function (data) {

    let employee = data.results;
    console.log(data);

    $.each(employee, function (index, value) {

      empImageSmall = employee[index].picture.medium;
      firstLast = employee[index].name.first+' '+employee[index].name.last;
      email = employee[index].email;
      city = employee[index].location.city+' '+employee[index].nat;
      username = employee[index].login.username;
      phone = employee[index].cell;
      birthday = employee[index].dob;
      fullAddress = employee[index].location.street+' '+employee[index].location.city+', '+employee[index].location.state+' '+employee[index].location.postcode;
      empImageLarge = employee[index].picture.large;

      // push all data to the constuctor function each time the loop runs

      employees.push(new Contact(empImageSmall, phone, fullAddress, firstLast, empImageLarge, email, username, birthday, city));
    }); //end ajax loop

    // Build the page with the employees and the info

    for (let i = 0; i < employees.length; i++) {
      cardImage[i].src = employees[i].empImageLarge;
      name[i].textContent = employees[i].firstLast;
      eMail[i].textContent = employees[i].username;
      domCity[i].textContent = employees[i].city;
   }  // end page loop

    // Build the overlay when ever the employee div is clicked

const overlayImage = document.getElementsByClassName('largeImage')[0];
const overlayName = document.getElementById('bigName');
const overlayUser = document.getElementById('bigUser');
const overlayEmail = document.getElementById('bigEmail');
const overlayCity = document.getElementById('bigCity');
const overlayPhone = document.getElementById('phone');
const overlayAddress = document.getElementById('address');
const overlayBirthday = document.getElementById('birthday');
const right = document.getElementById('right');
const left = document.getElementById('left');

// create a loop to loop though all employees and keep the index's the same when clicked



  for (let i = 0; i < employees.length; i++) {
    employeeDiv[i].addEventListener('click', (e) => {
      index = i;
      $overlay.fadeIn('slow');
        overlayImage.src = employees[i].empImageLarge;
        overlayName.textContent = employees[i].firstLast;
        overlayUser.textContent = employees[i].username;
        overlayEmail.textContent = employees[i].email;
        overlayPhone.textContent = employees[i].phone;
        overlayAddress.textContent = employees[i].fullAddress;
        overlayBirthday.textContent = employees[i].birthday;
        $('.employee').hide();
        $('#button').hide();
        $('body').toggleClass('clickOverlay');
        return index;
 });// end click on employee div

} // end loop

 // create a go forward event and try to keep the same index count

right.addEventListener('click', (e) => {
   e.preventDefault();
   if (index === 11) {
     index = -1;
   }
    index += 1;
    overlayImage.src = employees[index].empImageLarge;
    overlayName.textContent = employees[index].firstLast;
    overlayEmail.textContent = employees[index].email;
    overlayUser.textContent = employees[index].username;
    overlayPhone.textContent = employees[index].phone;
    overlayAddress.textContent = employees[index].fullAddress;
    overlayBirthday.textContent = employees[index].birthday;
}); // end of right click

 // create a go back event and try to keep the same index count

left.addEventListener('click', (e) => {
   e.preventDefault();
   if (index === 0) {
     index = 12;
   }
   index -= 1;
    overlayImage.src = employees[index].empImageLarge;
    overlayName.textContent = employees[index].firstLast;
    overlayEmail.textContent = employees[index].email;
    overlayUser.textContent = employees[index].username;
    overlayPhone.textContent = employees[index].phone;
    overlayAddress.textContent = employees[index].fullAddress;
    overlayBirthday.textContent = employees[index].birthday;
     }); // end of left click
   } //end ajax success
}); // end ajax

 $('#close').click(function (event) {
   event.preventDefault();
   $overlay.fadeOut('slow');
   $('.employee').fadeIn('slow');
   $('body').toggleClass('clickOverlay');
   $('#button').show('slow');
   $('#search').hide();
}); // end of close click

// create a search function that search the page

const searchButton = document.getElementById('button');
const searchDiv = document.getElementById('searchDiv');
const input = document.getElementById('search');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  $('#button').hide();
  $('#search').fadeIn('slow');
  input.focus();
});

   // add EventListener to the search field

   $("#search").on("keyup", function() {
       let filter1 = $(this).val().toLowerCase();
       $('.employee').each(function() {
           let filter2 = $(this).text().toLowerCase();
           $(this).closest('.employee')[ filter2.indexOf(filter1) !== -1 ? 'show' : 'hide' ]();
       });
   })

 console.log(employees);


 }); // end script
