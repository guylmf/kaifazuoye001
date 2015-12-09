 window.onload=function(){
    var pic=document.getElementById('crossbanenr').getElementsByTagName('li'),
        index=1,
        timer=null;

      // 定义并调用自动播放函数
    timer = setInterval(autoPlay, 4000);

     
    function autoPlay () {
      if (++index >= pic.length) index = 0;
      changePic(index);
    }

      // 定义图片切换函数
    function changePic (curIndex) {
      for (var i = 0; i < pic.length; ++i) {
        pic[i].style.display = "none";
       
      }
      pic[curIndex].style.display = "block";
     
    }

   };