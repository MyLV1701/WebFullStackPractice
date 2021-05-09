function AccountRegisterHandle(){
    // alert("hello guys");

    /*
    * Perform to input content inspection
    *   if (email field) || (pwd field) || (repeat pwd field)  -> empty
    *       show alert to user
    *   else 
    *       do nothing
    */

    let email_val           = document.getElementById("email_address").value;
    let Password_val        = document.getElementById("Password").value;
    let Repeat_Password_val = document.getElementById("Repeat_Password").value;
    let confirm_conditions  = document.getElementById("confirm_conditions").checked;

    if((email_val === "") || (Password_val === "") || (Repeat_Password_val === ""))
    {
        alert("Please check again, required filed is empty!");
    }
    else if(confirm_conditions != true){
        alert("You must to agree iterms and condition above!")
    }
    else{
        // do nothing
    }

}



