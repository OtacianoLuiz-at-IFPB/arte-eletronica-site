document.getElementById('lightButton').addEventListener("click", changeLightmode);
document.getElementById('showNav').addEventListener("click", changeNav);

let light = "night";
let a = getComputedStyle(html).getPropertyValue("--default-color");
let b = getComputedStyle(html).getPropertyValue("--default-background-color");
let lightmode = "night";
let notlightmode = "day";
function changeLightmode(){
    [a,b] = [b,a];
    document.documentElement.style.setProperty("--default-color", a);
    document.documentElement.style.setProperty("--default-background-color", b);
    [lightmode,notlightmode] = [notlightmode,lightmode];
    document.getElementById("lightButton").innerHTML = lightmode;
}

function changeNav(){
    var lateralbar = document.getElementsByTagName("aside")[0];
    if (lateralbar.style.display === "none") {
        lateralbar.style.display = "block";
        document.getElementById("showNav").innerHTML = "<";
    } else {
        lateralbar.style.display = "none"
        document.getElementById("showNav").innerHTML = ">"
    }
}