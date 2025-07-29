var screen=document.getElementById("screen");
 
function btnClick(value)
{
    screen.value+=value;
}

function clrScreen()
{
    screen.value=""
}

function eqClick()
{
    var res=eval(screen.value);
    screen.value=res;
}