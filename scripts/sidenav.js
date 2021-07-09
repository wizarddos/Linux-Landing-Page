let el = document.getElementById("header");
function openNav() {
    if(window.innerWidth <= 695){
        el.style.width = "250px";
        document.getElementById("header").style.fontSize = "x-large";
        let inner = el.innerHTML;
        el.innerHTML = "<a href=\"javascript:void(0)\" class=\"closebtn\" id = \"close\" onclick=\"closeNav()\">&times;</a>"+inner;
    }

  }
  
  function closeNav() {
    let close = document.getElementById('close');
    document.getElementById("header").style.width = "0";
    if(window.innerWidth <= 695){
        document.getElementById("header").style.fontSize = "0";
    }else{
        document.getElementById("header").style.fontSize = "medium";
    }
    el.removeChild(close);
  } 

  window.onresize = ()=>{
    if(window.innerWidth <= 695){
        document.getElementById("header").style.fontSize = "0";
        document.getElementById("header").style.width = "0%";
    }else{
        document.getElementById("header").style.width = "100%";
        document.getElementById("header").style.fontSize = "medium";
    }

  }