
     
    function loginsubmit() {
        var fname = document.getElementById("fname").value 
        var lname = document.getElementById("lname").value 
        var mother = document.getElementById("mother").value 
        var father = document.getElementById("father").value 
        var email = document.getElementById("email").value 
        var phone = document.getElementById("phone").value 
        var month = document.getElementById("month").value 
        var day = document.getElementById("day").value 
        var year = document.getElementById("year").value 
        var address = document.getElementById("address").value 
        var state = document.getElementById("state").value 
        var city = document.getElementById("city").value 
        var male = document.getElementById("male").checked
        

        if (fname=="") {
            document.getElementById("fnameerror").innerHTML = "Enter Your First Name!"
            return false
        }
        if (lname=="") {
            document.getElementById("lnameerror").innerHTML = "Enter Your Last Name!"
            return false
        }
        if (mother=="") {
            document.getElementById("mothererror").innerHTML = "Enter Your Mother Name!"
            return false
        }
        if (father=="") {
            document.getElementById("fathererror").innerHTML = "Enter Your Father Name!"
            return false
        }
        if (email=="") {
            document.getElementById("emailerror").innerHTML = "Enter Your Email!"
            return false
        }

        if (phone=="") {
            document.getElementById("phoneerror").innerHTML = "Enter Your Phone!"
            return false
        }
        var regEx=/^\d{10}$/;
        if (!regEx.test(phone)) {
            document.getElementById("phoneerror").innerHTML = "Enter valid Phone!"
            return false
        }
        if (month=="") {
            document.getElementById("montherror").innerHTML = "Enter Your Birth Month!"
            return false
        }
        if (day=="") {
            document.getElementById("dayerror").innerHTML = "Enter Your Birth Day!"
            return false
        }
        if (year=="") {
            document.getElementById("yearerror").innerHTML = "Enter Your Birth Year!"
            return false
        }
        if (address=="") {
            document.getElementById("addresserror").innerHTML = "Enter Your Address!"
            return false
        }
        if (state=="") {
            document.getElementById("stateerror").innerHTML = "Enter Your State!"
            return false
        }
        if (city=="") {
            document.getElementById("cityerror").innerHTML = "Enter Your City!"
            return false
        }
        if (male==false) {
            document.getElementById("maleerror").innerHTML = "Enter Your Gender!"
            return false
        }

        return false;
    }

    function clrmsg() {
        var fname = document.getElementById("fnameerror").innerHTML = ""
        var lname = document.getElementById("lnameerror").innerHTML = ""
        var mother = document.getElementById("mothererror").innerHTML = ""
        var father = document.getElementById("fathererror").innerHTML = ""
        var email = document.getElementById("emailerror").innerHTML = ""
        var phone = document.getElementById("phoneerror").innerHTML = ""
        var month = document.getElementById("montherror").innerHTML = ""
        var day = document.getElementById("dayerror").innerHTML = ""
        var year = document.getElementById("yearerror").innerHTML = ""
        var address = document.getElementById("addresserror").innerHTML = ""
        var state = document.getElementById("stateerror").innerHTML = ""
        var city = document.getElementById("cityerror").innerHTML = ""
        var male = document.getElementById("maleerror").innerHTML = ""
    }

