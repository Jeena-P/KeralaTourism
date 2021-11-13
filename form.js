let username = document.getElementById("username");
let password = document.getElementById("password");



function validate()
{
    if(username.value.trim()==""||password.value.trim()=="")
    {
        alert("Fields cannot be empty");
        return false;
    }
    
    else if(password.value.length<=5)
    {
        alert("Password is too short")
        password.style.border ="2px solid red";
        return false;
    }
    else
    {
        alert("Validation is proper");
        return true;
    }
}



