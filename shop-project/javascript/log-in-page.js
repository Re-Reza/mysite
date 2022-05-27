var registerOption = document.getElementById("register-option");
// console.log(registerOption);
var logInPage = document.querySelector(".log-in-container");
// var b =document.querySelector("body");
// console.log(b);
// var a = window.getComputedStyle(b,).color;
// console.log(a);
// var test = document.querySelector(".log-in-page-info-submit a");
registerOption.addEventListener("click",showLogeInPage);
function showLogeInPage()
{
    // console.log(test);
    // a="block";
    //  window.change;
    // window.getComputedStyle(b,':after').display="block";
    // document.querySelector("#bd::-webkit-after").style.display="block";
    document.getElementById("log-in-page").classList.add("show-log-in-page-animate")
    logInPage.style.display="block";
}

/*------------------input validation---------------------*/
var submitButton =document.querySelector(".log-in-page-info-submit input");
var userName = document.getElementById("user-name");
var password = document.getElementById("password");
var close = document.querySelector(".close-log-in-page");
submitButton.addEventListener("click", function(clicked){
    if(userName.value=="" || password.value.length<4)
        clicked.preventDefault();
});
close.addEventListener("click",function()
{
    logInPage.style.display="none";
});
setInterval(inputValidation,5);
function inputValidation(){
    if(userName.value=="" || password.value.length<4)
    {
        submitButton.classList.add("log-in-page-info-button-not-ready");
    }
    else{
        submitButton.classList.remove("log-in-page-info-button-not-ready")
        submitButton.classList.add("log-in-page-info-button-ready")
    }
}
