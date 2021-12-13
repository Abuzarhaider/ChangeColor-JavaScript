function changeColor(){
    let div = document.getElementById("child");
    let currentColor = document.getElementById("child").style.background;
    if(currentColor == "white")
    {
        document.getElementById("child").style.background = "black";
    }
    else if(currentColor == "black")
    {
        document.getElementById("child").style.background = "red";
    }
    else
    {
        document.getElementById("child").style.background = "white";
    }
}