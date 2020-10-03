
document.getElementById("openDrop").onclick = function() {
    const x = document.querySelector('.dropdown').style.display;
    if(x == 'none') { document.getElementById('imgDrop').src = "assets/img/Shape2.png"; document.querySelector(".dropdown").style.display = "block"; }
    else { document.getElementById('imgDrop').src = "assets/img/Shape.png"; document.querySelector(".dropdown").style.display = "none"; }
}