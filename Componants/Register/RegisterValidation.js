function RegisterVildation(values) {
    let error = {};
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    let namePattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    let phonePattern = /^[0-9]+$/;
  
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
      error.email = "Invalid email format";
    } else {
      error.email = "";
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
      error.password = "Invalid password format";
    } else {
      error.password = "";
    }
  
    if (values.username === "") {
      error.username = "Username should not be empty";
    } else if (!namePattern.test(values.username)) {
      error.username = "Invalid username format";
    } else {
      error.username = "";
    }
  
    if (values.phone === "") {
      error.phone = "Phone should not be empty";
    } else if (!phonePattern.test(values.phone)) {
      error.phone = "Invalid phone format";
    } else {
      error.phone = "";
    }
  
    return error;
  }
  
  export default RegisterVildation;
  