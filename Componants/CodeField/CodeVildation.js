
function CodeVildation (values) {
    let error = {};
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    if (values.email === "") {
        error.email = "Email Shoude Not Be Empaty";
    }else if (!emailPattern.test(values.email)) {
        error.email = "Email Didnt Match"; 
    }else {
        error.email = ""
    }    
}

export default CodeVildation