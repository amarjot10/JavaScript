function loginSubmit() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "") {
    document.getElementById("emailerror").innerHTML = "Enter Your Email!";
    return false;
  }

  if (password == "") {
    document.getElementById("passworderror").innerHTML = "Enter Your Password!";
    return false;
  }

  var userdata = {
    email: email,
    password: password,
  };

  localStorage.setItem("user1", JSON.stringify(userdata));

  alert("data saved");
  window.location.reload();
  return false;
}

function clrmsg() {
  document.getElementById("emailerror").innerHTML = "";
  document.getElementById("passworderror").innerHTML = "";
}

console.log(localStorage.getItem("user1"));

function showoutput() {
  var userdata = localStorage.getItem("user1");

  return false;
}

const user = localStorage.getItem("user1");
const data = JSON.parse(user);
document.getElementById("email").innerHTML = data.email;
document.getElementById("password").innerHTML = data.password;
