function validateForm() {
  // Check if any required fields are empty
  var requiredFields = document.getElementsByTagName("input");
  var textarea = document.getElementsByTagName("textarea")[0];
  var select = document.getElementById("qualification");

  for (var i = 0; i < requiredFields.length; i++) {
    if (
      requiredFields[i].type !== "submit" &&
      requiredFields[i].value.trim() === ""
    ) {
      alert("Please fill in all the required fields.");
      requiredFields[i].focus();
      return false;
    }
  }

  // Check radio buttons
  var gender = document.getElementsByName("gender");
  var genderChecked = false;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderChecked = true;
      break;
    }
  }
  if (!genderChecked) {
    alert("Please select your gender.");
    return false;
  }

  // Check dropdown
  if (select.value === "") {
    alert("Please select your qualification.");
    select.focus();
    return false;
  }

  // Check checkboxes for specialization
  var specializationCheckboxes = document.querySelectorAll(
    'input[name="specialization"]:checked'
  );
  if (specializationCheckboxes.length === 0) {
    alert("Please select at least one specialization.");
    return false;
  }

  // Check if First Name field contains numbers or doesn't meet length condition
  var firstName = document.getElementById("firstname").value.trim();
  if (!/^[A-Za-z]{3,6}$/.test(firstName)) {
    alert(
      "First Name field must contain alphabets only and be between 3 to 6 characters long."
    );
    document.getElementById("firstname").focus();
    return false;
  }

  // Check if Email field is empty
  var email = document.getElementById("email").value.trim();
  if (email == "") {
    alert("Please enter your Email.");
    document.getElementById("email").focus();
    return false;
  }

  // Check if Mobile field is empty
  var mobile = document.getElementById("mobile").value.trim();
  if (mobile == "") {
    alert("Please enter your Mobile number.");
    document.getElementById("mobile").focus();
    return false;
  }

  // Check Mobile field pattern
  if (!/^\d{10}$/.test(mobile)) {
    alert("Mobile number must contain 10 digits only.");
    document.getElementById("mobile").focus();
    return false;
  }

  return true;
}
