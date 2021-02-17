const username = document.getElementById("username1");
const password = document.getElementById("password1");

function validate()
{
  
    if(username.value.trim()=="")
    {
      username1.style.border = "solid 3px red";
      error.innerHTML="Blank Username";
      error.style.color= "red";
      setTimeout(function(){ 
        error.innerHTML = "";
        username1.style.border = "";
    }, 3000);
      return false;
    }

    else if(password.value.trim()=="")
    {
      password1.style.border = "solid 3px red";
      error2.innerHTML="Blank Password";
      error2.style.color= "red";
      setTimeout(function(){ 
        error2.innerHTML = "";
        password1.style.border = "";
    }, 3000);
      return false;
    }

    else 
         
  {
    function reject(){
      console.log("rejected");
      verify.innerHTML="Invalid Username or Password";
      verify.style.color= "red";
  }
  
  function approved(){
    console.log("approved");
    document.write("Redirecting....."); 
    setTimeout(function(){window.location = "todopage.html";}, 500); 
  }
  function check(a,b,done){
    if(x=="admin" && y=="12345"){
     
      done();
      }
    
      reject();
  }
  
  var x = username.value;
  var y = password.value;
  check(x,y,approved);
  

  }


  }
  
