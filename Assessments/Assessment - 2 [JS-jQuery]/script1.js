function validateForm() {
  // Check input fields
  var firstName = document.getElementById("firstname");
  var lastName = document.getElementById("lastname");
  var email = document.getElementById("email");
  var mobile = document.getElementById("mobile");
  var dob = document.getElementById("dob");
  var city = document.getElementById("city");
  var pincode = document.getElementById("pincode");
  var state = document.getElementById("state");
  var qualification = document.getElementById("qualification");
  var password = document.getElementById("password");

  // Validate Name field
  var nameRegex = /^[a-zA-Z]{3,6}$/;
  if (!nameRegex.test(firstName.value.trim())) {
    alert(
      "First Name must contain only alphabets, minimum 3 and maximum 6 characters"
    );
    firstName.focus();
    return false;
  }
  if (!nameRegex.test(lastName.value.trim())) {
    alert(
      "Last Name must contain only alphabets, minimum 3 and maximum 6 characters"
    );
    lastName.focus();
    return false;
  }

  if (email.value.trim() === "") {
    alert("Please fill the Email field");
    email.focus();
    return false;
  }
  if (!validateEmail(email.value.trim())) {
    alert("Please enter a valid email address");
    email.focus();
    return false;
  }
  if (mobile.value.trim() === "") {
    alert("Please fill the Mobile field");
    mobile.focus();
    return false;
  }
  if (isNaN(mobile.value.trim()) || mobile.value.trim().length !== 10) {
    alert("Please enter a valid 10-digit mobile number");
    mobile.focus();
    return false;
  }

  //   // Check radio buttons
  //   var genderMale = document.getElementById("gender_male");
  //   var genderFemale = document.getElementById("gender_female");

  //   if (!genderMale.checked && !genderFemale.checked) {
  //     alert("Please select your gender");
  //     return false;
  //   }

  if (dob.value.trim() === "") {
    alert("Please fill the Date of Birth field");
    dob.focus();
    return false;
  }

  // Check text area
  var textarea = document.getElementById("address1");
  if (textarea.value.trim() === "") {
    alert("Please fill the Address field");
    textarea.focus();
    return false;
  }

  if (city.value.trim() === "") {
    alert("Please fill the City field");
    city.focus();
    return false;
  }
  if (pincode.value.trim() === "") {
    alert("Please fill the Area PIN field");
    pincode.focus();
    return false;
  }
  if (pincode.value.trim().length !== 6) {
    alert("Please enter a valid 6-digit PIN code");
    pincode.focus();
    return false;
  }
  if (state.value.trim() === "") {
    alert("Please fill the State field");
    state.focus();
    return false;
  }
  if (qualification.value.trim() === "") {
    alert("Please select a Qualification");
    qualification.focus();
    return false;
  }
  if (!document.querySelector('input[name="specialization"]:checked')) {
    alert("Please select at least one specialization");
    return false;
  }

  if (password.value.trim() === "") {
    alert("Please fill the Password field");
    password.focus();
    return false;
  }

  return true; // Form submitted successfully
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
