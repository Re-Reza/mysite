var menuIcon = document.querySelector(".shopping-drop-down-menu");
var menuList = document.querySelector(".head-right-drop-down-menu-list");
var icon = document.getElementById("menu-icon");
var showed ="no";
menuIcon.addEventListener("mouseover",showHideMenu);

function showHideMenu()
{
    icon.classList.toggle("rotate-icon");
    if(showed == "no")
    {
        menuList.classList.remove("hide-animate");
        menuList.classList.add("show-animate");
        showed="yes";
    }
    else
    {
        menuList.classList.add("hide-animate");
        setTimeout(function(){
            menuList.classList.remove("show-animate");
        },600)
        showed="no";
    }
}
