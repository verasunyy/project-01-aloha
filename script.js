
// validating email and display alart box
const emailSubscribe = document.getElementById("emailSubscribe");
const emailInput = document.getElementById("emailInput");

emailSubscribe.addEventListener("submit", function(event){
    event.preventDefault();
    if(emailInput.value != ""){
        alert("Thank You for Subscribe!");
        emailInput.value = "";
    }
    else{
        alert("Please Enter a Valid Email");
    }
})

