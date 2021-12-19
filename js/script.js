window.onscroll=()=>{
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove('active');
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    loginForm.classList.remove("active")



}

let searchBtn=document.querySelector("#search-btn");
let searchBar=document.querySelector(".search-bar-container");

searchBtn.addEventListener("click",()=>{
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle('active');
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    loginForm.classList.remove("active")


})

let formBtn=document.querySelector("#login-btn");
let loginForm=document.querySelector(".login-form-container");
let formClose=document.querySelector("#form-close")

formBtn.addEventListener("click",()=>{
    loginForm.classList.add("active");
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove('active');
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
})
formClose.addEventListener("click",()=>{
    loginForm.classList.remove("active")
})


let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");

menu.addEventListener("click",()=>{
     menu.classList.toggle("fa-times");
     navbar.classList.toggle("active");
     searchBtn.classList.remove("fa-times");
     searchBar.classList.remove('active');
     loginForm.classList.remove("active")
})


const videoBtn=document.querySelectorAll(".home__vid-btn");
videoBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        document.querySelector('.home__controls .home__vid-btn_active').classList.remove("home__vid-btn_active");
        btn.classList.add("home__vid-btn_active");
        let src=btn.getAttribute("data-src");
        document.querySelector(".home__video_play").src=src
    })
})