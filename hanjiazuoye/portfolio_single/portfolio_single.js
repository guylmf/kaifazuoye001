
  // 展示下拉菜单
    function showDiv(){
     var showDown =  document.getElementById("top_bar_a")
     
      var showButt = document.getElementById("showButton");
      if (showButt.style.display == "block") {
        showButt.style.display = "none";
      }
      else {
        showButt.style.display = "block";
      }
      showButt.onmouseleave = function leave(){
    
        if (showButt.style.display == "none") {
          showButt.style.display = "block";
      }else {
        showButt.style.display = "none";
      }
    } 
    }

// 图片轮播
        

        var prev=document.getElementById("prev"),
          next=document.getElementById("next"),
          imglist=document.getElementById("imglist").getElementsByTagName("div"),
          dot=document.getElementById("slidot").getElementsByTagName("li"),
          n=imglist.length,
          index=0,
          fade=false;
       
        var setOpacity=function(obj,opa){
          if(obj.filters){obj.style.filter="alpha(opacity:"+opa+")";}
          else{obj.style.opacity=opa/100;}
        }
        var fadeIn=function(obj){
          fade=true;
          obj.style.display="block";  
          var opa=0;
          (function func(){
            if(opa<100){opa+=10;setOpacity(obj,opa);setTimeout(func,20)}
            else{fade=false;}
          })();
        }
        var fadeOut=function(obj){
          fade=true;
          var opa=100;
          (function func(){
            if(opa>0){opa-=10;setOpacity(obj,opa);setTimeout(func,30)}
            else{obj.style.display="none";}
          })();
        }       
        
        var hasClass=function(obj,cls){
          return obj.className.match(new RegExp('(^|\\s)' + cls + '(\\s|$)'))
          }
        var addClass=function(obj,cls){
          if(!hasClass(obj,cls)){
            if(obj.className.length==0){obj.className=cls;}
            else{obj.className+=" "+cls;}
          }
        }
        var rvClass=function(obj,cls){
          if(hasClass(obj,cls)){
            var argu=new RegExp('(^|\\s)' + cls + '(\\s|$)');
            obj.className=obj.className.replace(argu,"");
          }
        }
        
        function lightdot(){
          for (var i=0;i<n;i++){
            if(hasClass(dot[i],"on")){rvClass(dot[i],"on");break;}            
          }
          addClass(dot[index],"on");
        }
       
        next.onclick=function(){
          if(fade){return;}
          else{
          fadeOut(imglist[index]);
          index++;
          if(index==n)index=0;
          fadeIn(imglist[index])
          lightdot();
          };
        }
        
        prev.onclick=function(){
          if(fade){return;}
          else{
          fadeOut(imglist[index]);
          if(index==0){index=n;}
          index--;
          fadeIn(imglist[index]);
          lightdot();
          }
        }
       
        for(var i=0;i<n;i++){
          dot[i].order=i;
          dot[i].onclick=function(){
          if(this.order==index){return}
          else{
            fadeOut(imglist[index]);
            index=this.order;
            fadeIn(imglist[index]);
            lightdot();}
          }
        }
       
        function play(){auto=setTimeout(function(){next.onclick();play();},3000)};
        function stop(){clearTimeout(auto)};
        play();
        container.onmouseover=stop;
        container.onmouseout=play;