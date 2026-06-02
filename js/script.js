let bottom=document.getElementById("themeBtn");

bottom.onclick=function(){
    let element=document.body;
   element.classList.toggle("themeBtn");
}

let submitBtn=document.getElementById("submitBtn");
submitBtn.onclick=function(){  
    let name=document.body;
   name.classList.toggle("submitBtn");
}

