let actualMode = localStorage.getItem("mode");


function loadMode() {

    if (!actualMode) {
        actualMode = 'ligth';
        setToLightMode();
    }
    else if (actualMode === 'dark') {
        setToDarkMode();
    }
    else{
        setToLightMode();
    }
}


function setToDarkMode() {
    const toDarkModeBtn = document.getElementById("toDarkMode");
    const toLigthModeBtn = document.getElementById("toLigthMode");
    const header = document.getElementById("header");
    const content = document.getElementById("content");

    toDarkModeBtn.classList.add("hidden");
    toLigthModeBtn.classList.remove("hidden");

    header.classList.add("dark");
    content.classList.add("dark");
    localStorage.setItem("mode", 'dark');
    
}

function setToLightMode() {

    const toDarkModeBtn = document.getElementById("toDarkMode");
    const toLigthModeBtn = document.getElementById("toLigthMode");
    const header = document.getElementById("header");
    const content = document.getElementById("content");


    toLigthModeBtn.classList.add("hidden");
    toDarkModeBtn.classList.remove("hidden");

    header.classList.remove("dark");
    content.classList.remove("dark");
   
    localStorage.setItem("mode", 'ligth');
    
}

function programarModeBtn() {
    
    const toDarkModeBtn = document.getElementById("toDarkMode");
    const toLigthModeBtn = document.getElementById("toLigthMode");
    
    toDarkModeBtn.addEventListener("click", () => {

        setToDarkMode();

    })
    toLigthModeBtn.addEventListener("click", () => {

        setToLightMode();

    })
}