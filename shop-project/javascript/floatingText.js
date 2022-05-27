var elements = document.querySelectorAll(".js-control");
var count=0;
var timer = setInterval(showElment, 1000);

function showElment()
{
    if(count>2)
    {
        for(var i=0; i<elements.length; i++)
        {
            elements[i].classList.add("shake-element");
            if(i<=2)
            {
                elements[i].style.left="0";
            }
            else{
                elements[i].style.right="0";
            }
        }
        clearInterval(timer);
    }
    elements[count].classList.add("move-right-animate");
    elements[count+3].classList.add("move-left-animate");
    count++;
}
