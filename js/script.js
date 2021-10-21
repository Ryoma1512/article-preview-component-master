if (innerWidth <= 768){
    function showShareBox(){
        document.getElementById("profile").style.display = "none";        
        document.getElementById("share").style.display = "grid";
    }

    function hiddenShowBox(){
        document.getElementById("share").style.display = "none";
        document.getElementById("profile").style.display = "grid";
    }

    
};
if (innerWidth >= 769) {
    function showShareBox(){
        document.getElementById("profile").style.display = "grid"; 
        document.getElementById("share").style.display = "grid";       
    }

    function hiddenShowBox(){
        document.getElementById("profile").style.display = "grid";
        document.getElementById("share").style.display = "none";
    }
};
