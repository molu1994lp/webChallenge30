function nav(){
    var toggle = document.getElementById('toggleMenu');
    var nav = document.getElementById('navBar');
    
    if(toggle.className === "nav"){
        toggle.className += " responsive";
        nav.className += " responsive";
    
    }
    else {
        toggle.className = "nav";
        nav.className = "navBar";
    }
}

