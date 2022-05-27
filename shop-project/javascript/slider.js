var pictures = ["image/mac.jpg","image/iphone13pro max.jpg","image/s20fe.jpg"];
var slider = document.querySelector(".slider");
var circles = document.querySelectorAll(".circle-icon-slider");
var counter=0; //

(function ()
{
    for(var i=0; i<circles.length; i++)
    {
        circles[i].addEventListener("click", function()
        {
            changeSlideBycircle(this);
        });
    }
    slider.src=pictures[0];
    counter++;
    setInterval(changeSlide, 3000);
    function changeSlide()
    {
        for(var i=0; i<circles.length; i++)
        {
            circles[i].classList.remove("selected-circle");
        }
        if(counter>2)
        {
            counter=0;
        }
        slider.src=pictures[counter];
        var tempCircle = circles[counter];
        tempCircle.classList.add("selected-circle");
        tempCircle.number=counter;
        slider.classList.add("slide-animation");

        setTimeout(function(){
            slider.classList.remove("slide-animation");
            counter++;
        }, 2900);
    }
    function changeSlideBycircle(clickedCircle)
    {
        for(var i=0; i<circles.length; i++)
        {
            circles[i].number=i;
        } 
        if(!(clickedCircle.number==counter))
        {
            var temp=clickedCircle.number;
            // console.log("yes");
            console.log(clickedCircle.number);
            counter=temp;
            changeSlide();
        }
    }
})();

// var logo = document.querySelector(".logo");
// var shadow = document.querySelector(".navigation-logo-shadow");
// logo.addEventListener("mouseover",function(){
//     shadow.classList.add("logo-shadow-animate");
// });
// logo.addEventListener("mouseout", function(){
//     shadow.classList.remove("logo-shadow-animate")
// }) //make shadow for logo 
