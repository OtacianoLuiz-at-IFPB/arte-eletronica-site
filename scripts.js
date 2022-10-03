document.getElementById('lightButton').addEventListener("click", changeLightmode);
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