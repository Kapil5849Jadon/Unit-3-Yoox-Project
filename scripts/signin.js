document.getElementById("loginForm").addEventListener("submit", signin);

var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));
console.log(regdUsers);

function signin(event) {
  event.preventDefault();
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;
  // console.log(name, email, pass);

  var flag_Valid = false;

  for (let i = 0; i < regdUsers.length; i++) {
    if (regdUsers[i].emailAddress == email && regdUsers[i].password == pass) {
      flag_Valid = true;
      break;
    }
  }
  if (flag_Valid == true) {
    alert("login successful");
    window.location.href = "./home.html";
    return;
  }
  else{
    alert("invalid Credentials")
  }
  
}

