let openm = document.getElementById("navbar-menu");

let openn = document.getElementById("nav-about");

openm.addEventListener("click", function(){
 if(openn.classList.contains("open")){
    openn.classList.remove("open");
    
 }
 else{
    openn.classList.add("open")
 }
    
});