function changeColor(){
    let div = document.getElementById("child");
    let currentColor = div.style.background;
    if(currentColor == "white")
    {
        div.style.background = "black";
    }
    else if(currentColor == "black")
    {
        div.style.background = "red";
    }
    else
    {
        div.style.background = "white";
    }
}