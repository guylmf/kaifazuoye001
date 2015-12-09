

function onmouse(){    
   if(document.getElementById("albumWrap").getElementsByTagname("a").style.display=="none"){
      document.getElementById("albumWrap").getElementsByClassname("alcover").style.opacity=="0.7";
   }
   else if(document.getElementById("albumWrap").getElementsByTagname("a").style.display=="block"){
      document.getElementById("albumWrap").getElementsByTagname("a").style.opacity=="0.4";
   }
}