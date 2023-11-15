var menu = document.querySelector(".menu-bar");
var close = document.querySelector(".close-bar");
var nav = document.querySelector(".resp-nav");


menu.addEventListener("click", function(){
 nav.style.right ="0%",
 menu.style.display = "none"
})

close.addEventListener("click", function(){
    nav.style.right = "-100%";
    menu.style.display = "block"
})
