  
  window.onload = function(){
  	var aUl = document.getElementById('albumWrap');
  	var allLi = aUl.getElementsByTagName('li');
  	for(var i=0; i<allLi.length; i++){
  		allLi[i].onmouseover = function(){
  			this.getElementsByTagName('a')[1].style.display = 'block';
  		}
  		allLi[i].onmouseout = function(){
  			this.getElementsByTagName('a')[1].style.display = 'none';
  		}
  }

  	var topNav = document.getElementsByClassName('topNav')[0];
  	var navs = topNav.getElementsByTagName('li');
  	for(var i=0; i<navs.length; i++){
  		navs[i].onmouseover = function(){
  			topNav.getElementsByClassName('current')[0].className = '';
  			this.className = 'current';
  		}
  		navs[i].onmouseout = function(){
  			topNav.getElementsByClassName('current')[0].className = '';
  			navs[2].className = 'current';
  		}
      
  	}

  var pic=document.getElementById('crossbanenr').getElementsByTagName('li'),
        index=1,
        timer=null;

    timer = setInterval(autoPlay, 4000);

     
    function autoPlay () {
      if (++index >= pic.length) index = 0;
      changePic(index);
    }

 
    function changePic (curIndex) {
      for (var i = 0; i < pic.length; ++i) {
        pic[i].style.display = "none";
       
      }
      pic[curIndex].style.display = "block";
     
    }
  }