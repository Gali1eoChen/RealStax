 localStorage.user_no = 0;
   function displayClient() {
    localStorage.user_no = Number(localStorage.user_no) + 1;
    document.getElementById("test").innerHTML = localStorage.user_no;
    var nickname = document.getElementById("userInput1").value;




    //Announce Successful Sign Up 
    if (document.getElementById("userInput6").value == ""){
                  document.getElementById("message").innerHTML = "You must complete filling all the items. Please check again.";
                  return; 
                }
                document.getElementById("message").innerHTML = "You have sucessfully Signed Up!";


               setTimeout(function(){ window.alert(`Welcome ${nickname}! You will be redirected to homepage.`);
               },2000);
                setTimeout(function(){
                  document.getElementById("form").reset();
                  // document.getElementById('form').style.display='none';
               },2000);

    
    switch (Number(localStorage.user_no)) {
     case 1:
      
      var input1 =  document.getElementById("userInput1").value; // 攞 第一個user 嘅第一個 input
        localStorage.input1 = input1; // store 個 user input 落一個永久儲存嘅web storage 度
         document.getElementById("Username1").innerHTML = localStorage.getItem("input1"); //print
         
      var input2 =  document.getElementById("userInput2").value; // 攞 第一個user 嘅第二個 input
         localStorage.input2 = input2;
         document.getElementById("Contact1").innerHTML = localStorage.getItem("input2"); //print
         
      var input3 =  document.getElementById("userInput3").value;
       localStorage.input3 = input3;
       document.getElementById("Email Address1").innerHTML = localStorage.getItem("input3"); //print

      var input4 =  document.getElementById("userInput4").value;
      localStorage.input4 = input4;
       document.getElementById("Age1").innerHTML = localStorage.getItem("input4"); //print

      var input5 =  document.getElementById("userInput5").value;
      localStorage.input5 = input5;
       document.getElementById("Password1").innerHTML = localStorage.getItem("input5"); //print
      break; 
      
      case 2:
        var input1 =  document.getElementById("userInput1").value; // 攞 第一個user 嘅第一個 input
          localStorage.input1 = input1; // store 個 user input 落一個永久儲存嘅web storage 度
           document.getElementById("Username2").innerHTML = localStorage.getItem("input1"); //print
           
        var input2 =  document.getElementById("userInput2").value; // 攞 第一個user 嘅第二個 input
           localStorage.input2 = input2;
           document.getElementById("Contact2").innerHTML = localStorage.getItem("input2"); //print
           
        var input3 =  document.getElementById("userInput3").value;
           localStorage.input3 = input3;
           document.getElementById("Email Address2").innerHTML = localStorage.getItem("input3"); //print

        var input4 =  document.getElementById("userInput4").value;
        localStorage.input4 = input4;
           document.getElementById("Age2").innerHTML = localStorage.getItem("input4"); //print

        var input5 =  document.getElementById("userInput5").value;
        localStorage.input5 = input5;
           document.getElementById("Password2").innerHTML = localStorage.getItem("input5"); //print
        break; 
      
      case 3:
        var input1 =  document.getElementById("userInput1").value; // 攞 第一個user 嘅第一個 input
          localStorage.input1 = input1; // store 個 user input 落一個永久儲存嘅web storage 度
           document.getElementById("Username3").innerHTML = localStorage.getItem("input1"); //print
           
        var input2 =  document.getElementById("userInput2").value; // 攞 第一個user 嘅第二個 input
           localStorage.input2 = input2;
           document.getElementById("Contact3").innerHTML = localStorage.getItem("input2"); //print
           
        var input3 =  document.getElementById("userInput3").value;
           localStorage.input3 = input3;
           document.getElementById("Email Address3").innerHTML = localStorage.getItem("input3"); //print

        var input4 =  document.getElementById("userInput4").value;
        localStorage.input4 = input4;
           document.getElementById("Age3").innerHTML = localStorage.getItem("input4"); //print

        var input5 =  document.getElementById("userInput5").value;
        localStorage.input5 = input5;
           document.getElementById("Password3").innerHTML = localStorage.getItem("input5"); //print
        break; 
      }
    }