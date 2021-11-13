let user = document.getElementById("user");
let Pass = document.getElementById("Pass");
let a= document.getElementById("mobile");




function check()
{
    
    if(user.value.trim()==""||Pass.value.trim()==""||a.value.trim()=="")
    {
        alert("Fields cannot be empty");
        return false;
    }
    
    else if(Pass.value.length<=4)
    {
        alert("Too short password");
        Pass.style.border ="2px solid red";
        return false;
    }
    else if(a.value.length<=9)
    {
        alert("Enter 10 digit valid number");
        a.style.border ="2px solid red";
        return false; 
    }
    else if(isNaN(a))
    {
    alert("Only digits are allowed");
    return false;  
    }
else
{
    return true;
}
}