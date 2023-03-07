function skiftFarven(farve) {
    document.querySelector(".skifterFarve").style.backgroundColor = farve;
    document.querySelector(".skifterFarve").style.color = "white";
};

// skiftFarven("green");

document.querySelector(".link1").addEventListener("click", function(){
    skiftFarven("indianred")
});
document.querySelector(".link2").addEventListener("click", function(){
    skiftFarven("lightblue")
});
document.querySelector(".link3").addEventListener("click", function(){
    skiftFarven("pink")
});
document.querySelector(".link4").addEventListener("click", function(){
    skiftFarven("plum")
});