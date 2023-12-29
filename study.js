
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let FirstName = document.getElementById("Fname");
  let LasttName = document.getElementById("Lname");
  let email = document.getElementById("email");
  let password = document.getElementById("password")

  if (FirstName.value == "" || password.value == ""|| LasttName.value == ""|| email.value == "") {
    alert("Ensure you fill all required fields!");
  }
  else {
    
    alert("This form has been successfully submitted!");
    console.log(
        `This form has a first name of ${FirstName.value} and last name of ${LastName.value} and password of ${password.value} and email of ${email.value}`
      );
  
      FirstName.value = "";
      LasttName.value ="";
      password.value = "";
      email.value = "";
  }
});