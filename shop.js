function myHeader(){
    let header = document.getElementById("header");
    let lol = document.getElementById("lamp");
    window.addEventListener("scroll" , function(){
        if(window.scrollY > 0){
            header.classList.add("active");
            lol.src = "assests/logo1.png";
        }else{
            header.classList.remove("active");
            lol.src = "assests/logo1.png";
        }
        
    })
}
myHeader();
function myBars(){
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function(){
        if(nav.style.right == "0%"){
            nav.style.right = "-50%";
            bars.src = "assests/menu.png"
        }else{
            nav.style.right = "0%";
            bars.src = "assests/x.png"
        }
        nav.classList.toggle("new")
    }
    
    
}
myBars()

