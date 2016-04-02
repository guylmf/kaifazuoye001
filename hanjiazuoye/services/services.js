
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
