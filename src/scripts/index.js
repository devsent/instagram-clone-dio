let slideIndex = 0;
carousel();
onInputChange();

function carousel() {
    let i;
    let x = document.getElementsByClassName("slide-img");

    for (i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
        x[i].style.transition = "1.5s ease-in-out";
        x[i].style.opacity = "0";
    }
    slideIndex++;

    if (slideIndex > x.length) { slideIndex = 1 };
    x[slideIndex - 1].style.visibility = "visible";
    x[slideIndex - 1].style.opacity = "100";
    setTimeout(carousel, 5000);
}


function enableButton() {
    const btn = document.getElementById("login-btn");
    btn.disabled = false;
}

function disableButton() {
    const btn = document.getElementById("login-btn");
    btn.disabled = true;
}

function onInputChange() {
    const input = document.querySelector('input');

    input.addEventListener('input', (e) => {
        if (e.target.value.length > 5) return enableButton();
        if (e.target.value.length < 5) return disableButton();
    })
}