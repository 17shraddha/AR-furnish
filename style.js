//alert("somethings is wronggs");
/*function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}*/
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

function myFun(){
    let plus = document.querySelector(".plus");
    let textBox = document.querySelector(".text-box ");
    plus.onclick = ()=>{
        textBox.classList.toggle("active");
        plus.classList.toggle("img_active")
    }
}
myFun()

function myVideo(){
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");
    links.onclick = (ed)=>{
        ed.preventDefault();
        overs.style.display = "block"
    }
    exit.onclick = ()=>{
        overs.style.display = "none"
    }
    player.onclick = ()=>{
        if(videos.paused){
            videos.play();
            player.src = "assests/pause.png"
        }else{
            videos.pause();
            player.src = "assests/play.png"
        }
    }
}
myVideo();

function toTop(){
    let top = document.querySelector(".top");
    window.onscroll = ()=>{
        if(window.scrollY > 100 || document.documentElement.scrollTop > 100){
            top.style.display = "block"
        }else{
            top.style.display = "none"
        }
    }

    top.onclick = ()=>{
        scrollTo(0,0)
    }

}
toTop();
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

camera.position.z = 10; // Adjust the z-coordinate of the camera

