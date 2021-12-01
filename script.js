
addEventListener("contextmenu",function(event){
   event.preventDefault();
   var ctxMenu = document.getElementById("ctxMenu");
   ctxMenu.style.display = "block";
   ctxMenu.style.left = (event.pageX - 0)+"px";
   ctxMenu.style.top = (event.pageY - 0)+"px";
},false);

addEventListener("click",function(event){
   var ctxMenu = document.getElementById("ctxMenu");
   ctxMenu.style.display = "";
   ctxMenu.style.left = "";
   ctxMenu.style.top = "";
  },false);

let genderval=" ";
   //To get gender values from radio button
   function inputradio(gen) {
   genderval=gen;
}  

function inputexp(m) {
   if(m<1) {
      document.getElementById("L").innerHTML=" ";
   }

   if(m<3 && m>=1) {
      document.getElementById("L").innerHTML="You are not eligible";
   }

   if(m>=3 && m<6) {         
      document.getElementById("L").innerHTML="Intermediate";
   }

   if(m>=6) {
      document.getElementById("L").innerHTML="You are PRO";
   }
}

function buttonfunction() {
   //alert("Your details has been submitted");
   let techno="";
   let name1=document.getElementById("name").value; //To get name
   let mail1=document.getElementById("mail").value; //To get mail

   //To get technologies from checkbox
   if(document.getElementById("html").checked){
      techno = document.getElementById("html").value;
   }

   if(document.getElementById("css").checked){
      if(techno!=="")
      techno = techno+", "+document.getElementById("css").value;
      else
      techno = document.getElementById("css").value;
   }

   if(document.getElementById("javascrpit").checked){
      if(techno!=="")
      techno = techno+", "+document.getElementById("javascrpit").value;
      else
      techno =document.getElementById("javascrpit").value;
   }

   //To get experience number
   let exp = document.getElementById("experience").value;
   if(exp=="")
      {
         exp=0;
      }
   alert("Name: "+name1+"\nEmail: "+mail1+"\nGender: "+genderval+"\nTechnologies: "+techno+"\nExperience: "+exp+" years");
}
         
function inputfunction() {
   let name = document.getElementById("name").value;
   let result = name.includes(" ");
   if(result){
       alert("Space not allowed on name");
       document.getElementById("name").value=name.replace(" ","");
       }
}


function toolIn(elm) {
   let x=document.getElementById(elm);
   x.style.visibility="visible";
   x.style.opacity="1";
}


function toolOut(elm) {
   let x=document.getElementById(elm);
   x.style.visibility="hidden";
   x.style.opacity="0";
}

         