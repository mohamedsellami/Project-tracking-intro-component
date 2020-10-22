const button = document.querySelector(".switcher");
const navContainer = document.querySelector(".mobile-nav .nav-container");

button.addEventListener("click", openAndClose);
function openAndClose(){
    if(button.children[0].classList.value === "hamburger"){
        button.innerHTML = `
        <img class="x" src="./images/icon-close.svg" alt="icon-close">
        `;
        navContainer.style.display = "block";
        setTimeout(()=>{
            navContainer.style.transform = "translateY(0)"
        }, 1)
    }else{
        button.innerHTML = `
        <img class="hamburger" src="./images/icon-hamburger.svg" alt="icon-hamburger">
        `;
        navContainer.style.transform = "translateY(-80px)"
        setTimeout(()=>{
            navContainer.style.display = "none";
        }, 200)
    }
}