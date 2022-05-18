function signInPopUp() {
    let text = "Hello! Welcome to Stax, ";
    let unfilled = true;
    do{

      let userId = window.prompt("Please enter your UserID:", "");
      text += userId;

      if (userId != null || userId != "") {
        unfilled = false;
      } 
      
    } while(unfilled == true);
    unfilled = true;

    do{
      let password = window.prompt("Please enter your password:", "password");
      if (password != null || password != "") {
          unfilled = false;
        } 
    }while(unfilled == true);
     window.alert(text);
     return userId;
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
        modal.style.display = "none";
  }
}

