
window.addEventListener("load", function(){
  const lists = document.getElementById("lists")
    lists.addEventListener("mouseover", function(){
      console.log("乗りました！")
    const lists = document.getElementById('lists')
    lists.addEventListener("mouseout", function(){
      console.log('外れました！')
    })
    lists.addEventListener('click',function(){
      console.log('クリックされました！');
    })
  });
});

