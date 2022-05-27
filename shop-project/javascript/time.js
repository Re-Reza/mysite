showCrrentTime();
setInterval(showCrrentTime, 1000);

function showCrrentTime()
{
    var hour = document.getElementsByClassName("hour");
    var minute = document.getElementsByClassName("minute");
    var second = document.getElementsByClassName("second");

    var date = new Date();
    for(var i=0; i<second.length; i++)
    {
        hour[i].innerHTML = date.getHours();
        minute[i].innerHTML = date.getMinutes()+" : ";
        second[i].innerHTML = date.getSeconds()+" : ";
    }
}