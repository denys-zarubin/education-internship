const menuBarNav = document.getElementsByClassName("navigation-bar")[0]
const subMenu = document.getElementsByClassName("sub-navigation-list")[0]


function changeView({target}){
    target.style.display = "none"
    subMenu.style.display = "block"
    console.log(target)
}


menuBarNav.addEventListener("click", changeView)

