let logo = document.getElementById("logo");
let logoHover = false;

function changeLogoOnHover() {
    if (logoHover) {
        // setAttribute(), courtesy of Mozilla Developer Network (MDN)
        logo.setAttribute("src", "images/logo.png");
        logoHover = false;
    } else {
        logo.setAttribute("src", "images/logodark.png");
        logoHover = true;
    }
}

// onmouseeneter and onmouseleave, courtesy of MDN
logo.onmouseenter = changeLogoOnHover; 
logo.onmouseleave = changeLogoOnHover;