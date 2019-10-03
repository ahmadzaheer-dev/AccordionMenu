// Number of sub Menus
let count = 4;

function displayNone(){
    for(let i = 0; i < count; i++) {
        document.querySelector('.sub_menu_' + i).style.maxHeight = "0";
        document.querySelector('.closed_icon_' + i).classList.remove("hide_icon");
        document.querySelector('.open_icon_' + i).classList.add("hide_icon");
    }
}
displayNone();

function displayMenu(index){
    // Displaying all the sub menus to none
    displayNone();
    document.querySelector('.sub_menu_' + index).style.maxHeight = "15em";
    document.querySelector('.closed_icon_' + index).classList.add("hide_icon");
    document.querySelector('.open_icon_' + index).classList.remove("hide_icon");
}