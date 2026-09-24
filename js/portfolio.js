let projToggles = document.querySelectorAll("h2");

let projOneContent = document.getElementById("project-one-content");
let projTwoContent = document.getElementById("project-two-content");
let projThreeContent = document.getElementById("project-three-content");

let projOneVisible = true;
let projTwoVisible = true;
let projThreeVisible = true;

projToggles[0].onclick = toggleProjOne;
projToggles[1].onclick = toggleProjTwo;
projToggles[2].onclick = toggleProjThree;

function toggleProjOne() {

    if (projOneVisible) {
        projOneContent.style.display = "none";
    } else {
        projOneContent.style.display = "block";
    }

    projOneVisible = !projOneVisible;

}

function toggleProjTwo() {

    if (projTwoVisible) {
        projTwoContent.style.display = "none";
    } else {
        projTwoContent.style.display = "block";
    }

    projTwoVisible = !projTwoVisible;

}

function toggleProjThree() {

    if (projThreeVisible) {
        projThreeContent.style.display = "none";
    } else {
        projThreeContent.style.display = "block";
    }

    projThreeVisible = !projThreeVisible;

}