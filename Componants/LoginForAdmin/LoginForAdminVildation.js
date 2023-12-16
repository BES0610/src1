
function LoginVildation (values) {
    let error = {};
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ 


    if (values.email === "") {
        error.email = "Email Shoude Not Be Empaty";
    }else if (!emailPattern.test(values.email)) {
        error.email = "Email Didnt Match"; 
    }else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "PassWord Shoude Not Be Empaty";
    }else if (!passwordPattern.test(values.password)) {
        error.password = "Password Didnt Match"; 
    }else {
        error.password = ""
    }
    return error
    
}

export default LoginVildation