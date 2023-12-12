function loginSubmit() {
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var otp = document.getElementById("otp").value;
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;
  var level = document.getElementById("level").value;
  var sd = document.getElementById("sd").value;
  var pi = document.getElementById("pi").value;

  if (name == "") {
    document.getElementById("nameerror").innerHTML = "Enter Your Name!";
    return false;
  }
  if (email == "") {
    document.getElementById("emailerror").innerHTML = "Enter Your Email!";
    return false;
  }
  if (mobile == "") {
    document.getElementById("mobileerror").innerHTML =
      "Enter Your Mobile Number!";
    return false;
  }
  if (otp == "") {
    document.getElementById("otperror").innerHTML = "Enter OTP!";
    return false;
  }
  if (state == "") {
    document.getElementById("stateerror").innerHTML = "Enter Your State!";
    return false;
  }
  if (city == "") {
    document.getElementById("cityerror").innerHTML = "Enter Your City!";
    return false;
  }
  if (level == "") {
    document.getElementById("levelerror").innerHTML =
      "Enter Your Qualification Level!";
    return false;
  }
  if (sd == "") {
    document.getElementById("sderror").innerHTML = "Enter Your Discipline!";
    return false;
  }
  if (pi == "") {
    document.getElementById("pierror").innerHTML =
      "Enter Your Programme Interested!";
    return false;
  }

  var userdata = {
    name: name,
    email: email,
    mobile: mobile,
    otp: otp,
    state: state,
    city: city,
    level: level,
    sd: sd,
    pi: pi,
  };

  localStorage.setItem("user", JSON.stringify(userdata));

  alert("data saved");
  window.location.reload();

  return false;
}

function clrmsg() {
  document.getElementById("nameerror").innerHTML = "";
  document.getElementById("emailerror").innerHTML = "";
  document.getElementById("mobileerror").innerHTML = "";
  document.getElementById("otperror").innerHTML = "";
  document.getElementById("stateerror").innerHTML = "";
  document.getElementById("cityerror").innerHTML = "";
  document.getElementById("levelerror").innerHTML = "";
  document.getElementById("sderror").innerHTML = "";
  document.getElementById("pierror").innerHTML = "";
}

 console.log(localStorage.getItem("user"));

function showinput() {
  var userdata = localStorage.getItem("user");

  return false;
}

const user = localStorage.getItem("user");
const data = JSON.parse(user);
document.getElementById("name").innerHTML = data.name;
document.getElementById("email").innerHTML = data.email;
document.getElementById("mobile").innerHTML = data.mobile;
document.getElementById("otp").innerHTML = data.otp;
document.getElementById("state").innerHTML = data.state;
document.getElementById("city").innerHTML = data.city;
document.getElementById("level").innerHTML = data.level;
document.getElementById("sd").innerHTML = data.sd;
document.getElementById("pi").innerHTML = data.pi;
