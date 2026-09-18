// i learned about loader scripts before i took this class, that's how i got this idea
let navbarContainer = document.getElementById("navbar-container");
let footerContainer = document.getElementById("footer-container");

function loadNavbar() {

    // TODO: find a way to load this from navbar.htlm
    let navbarContent = `
<nav>

    <div id="left-container">
        <a href="index.html"><img id="logo" src="images/logo.png" alt="home icon"></a>
    </div>

    <div id="right-container">
        <a href="resume.html">Resume</a>
        <a href="portfolio.html">Portfolio</a>
    </div>

</nav>
    `;

    navbarContainer.innerHTML = navbarContent;

}

function loadFooter() {

    let footerContent = `
<footer>

    <div id="left-container">
        <p>&copy; Danilo O'Blenis, 2026</p>
    </div>

    <div id="right-container">
        <a href="https://www.linkedin.com/in/oblenis/" target="_blank">LinkedIn</a>
        <a href="https://rose-hulman.joinhandshake.com/profiles/danilo" target="_blank">Handshake</a>
    </div>

</footer>
    `

    footerContainer.innerHTML = footerContent;

}

loadNavbar();
loadFooter();

// change the logo when you hover
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