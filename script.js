window.addEventListener("load", function(){
  const pullDownButton = document.getElementById("lists")
  const pulldownParents = document.getElementById("pull-down")

    pullDownButton.addEventListener("mouseover", function(){
      this.setAttribute("style", "background-color:blue;")
      console.log("乗った時は青色")
    });
    pullDownButton.addEventListener('click',function(){
      if (pulldownParents.getAttribute("style") =="display:block;"){
        pulldownParents.removeAttribute("style", "display:block;")
        console.log("非表示")
      } else {
      pulldownParents.setAttribute("style", "display:block;")
        console.log("表示")
      }
    });

    pullDownButton.addEventListener("mouseout", function(){
      this.setAttribute("style", "background-color:red;")
      console.log('外れた時は赤色')
    });
});

