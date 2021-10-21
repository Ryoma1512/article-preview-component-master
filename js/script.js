
if (innerWidth <= 768){
    function showShareBox(){
        document.getElementById("share").style.display = "grid";
        document.getElementById("profile").style.display = "none";        
    }

    function hiddenShowBox(){
        document.getElementById("share").style.display = "none";
        document.getElementById("profile").style.display = "grid";
    }

    
}
else{
    function showShareBox(){
        document.getElementById("share").style.display = "grid";
        document.getElementById("profile").style.display = "grid";        
    }

    function hiddenShowBox(){
        document.getElementById("share").style.display = "none";
        document.getElementById("profile").style.display = "grid";
    }
}
