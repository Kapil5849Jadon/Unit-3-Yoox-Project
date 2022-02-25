document.getElementById("mail").addEventListener("submit", formSubmit);
//<-- storing user-details in localStorage -->
var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];

//<-- Creating a function to get all form details given by user -->
function formSubmit(event) {
  event.preventDefault();
  var fname = document.querySelector("#fname").value;
  var lname = document.querySelector("#lname").value;
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;
  var mob = document.querySelector("#mob").value;
  // console.log(name, email, pass);

  //<-- converting form input into userData(Object) -->
  var userData = {
    Fname: fname,
    Lname: lname,
    emailAddress: email,
    password: pass,
    mobile:mob,
  };
  userStack.push(userData);
  // console.log(userStack);

  localStorage.setItem("userDataBase", JSON.stringify(userStack));
  alert("Sign-Up Successfully");
  window.location.href="./signIn.html";
}
