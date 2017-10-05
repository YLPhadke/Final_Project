$(document).ready(function() {
  $('#contactus').submit(saveFormData);

  function saveFormData(event) {
    event.preventDefault();

    var firstName = $('#firstname').val();
    var lastName = $('#lastname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var comments = $('#comments').val();


    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('bio', bio);
  }

  function populateForm() {
    var firstName = localStorage.getItem('firstName');
    var lastName = localStorage.getItem('lastName');
    var email = localStorage.getItem('email');
    var phone = localStorage.getItem('phone');
    var bio = localStorage.getItem('bio');
    $('#first-name').val(firstName);
    $('#last-name').val(lastName);
    $('#email').val(email);
    $('#phone').val(phone);
    $('#bio').val(bio);

  }

  populateForm();
});
