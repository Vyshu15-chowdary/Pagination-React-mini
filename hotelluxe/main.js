const menuBtn = document.getElementById("menu-btn");
const navLinks= document.getElementById("nav-links");
const menubtnIcon = document.querySelector("i");

menuBtn.addEventListener("click",(e) =>{
    navLinks.classList.toggle("open");

    const isopen = navLinks.classList.contains("open");
    menubtnIcon.setAttribute("class",isopen? "ri-close-line": "ri-menu-fill");
});

  navLinks.addEventListener("click",(e) =>{

    navLinks.classList.remove("open");
    menubtnIcon.setAttribute("class","ri-menu-fill");

 });

 const scrollrevealoption = {

    distance : "50px",
    origin: "bottom",
    duration:1000,
 };

 //header container
  scrollreveal().reveal(".header_container .section_subheader",{
    ...scrollrevealoption,
  });

  scrollreveal().reveal(".header_container h1",{
    ...scrollrevealoption,
    delay: 500,
  });
  scrollreveal().reveal(".header_container .btn",{
    ...scrollrevealoption,
    delay: 1000,
  });
  //room container

  scrollrevealoption().reveal(".room_card",{
    ...scrollrevealoption,
    interval:500,
  });
  //feature container
  scrollrevealoption().reveal(".feature_card",{

    ...scrollrevealoption,
    interval:500,
  });
  //news container
   scrollrevealoption().reveal(".news_card",{
    ...scrollrevealoption,
    interval:500,
   });

