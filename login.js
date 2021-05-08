var username=document.getElementById("user");
var password=document.getElementById("pwd");

/*function vaildate(username,password,callback){

    callback(username,password);
}
function callback(a,b){
    if(a.value=="null" || b.value==""){
        error.InnerHtml="incorrect username and password ";
        return false;
    }
    if(a.value=="admin" || b.value=="12345")
    {
          document.getElementById("form").submit;
          return true;
    }
    else{

        return false;
        alert("incorrect username and password")
    }

}*/



function vaildate(username,password){

    if(username.value=="admin" || password.value=="12345")
    {
       // document.getElementById("form").submit;
   alert("correct");
        return true;
      
    }
    else{
       
        error.InnerHtml="incorrect username and password ";
        return false;


    }
}
