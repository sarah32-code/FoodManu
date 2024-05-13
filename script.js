"use strict";

let menu = {
    "Drinks": ["Water", "Tea", "Pop", "Sprite"],
    "Entrees": ["Hamburger", "Grilled Cheese", "Tater Chicken", "Vegglea Chicken", "Steak", "Potatoes", "Fried Shrimp w Coleslaw Plate"],
    "Desserts": ["Cheesecake", "Chocolate Cake"]
};

window.onload = function () {
    loadDrinks();
    loadEntrees();
    loadDesserts();
};

function loadDrinks() {
    let drinksCategory = document.getElementById("drinks");
    drinksCategory.innerHTML = "";

    for (let i = 0; i < menu.Drinks.length; i++) {
        let option = document.createElement("option");
        option.text = menu.Drinks[i];
        drinksCategory.appendChild(option);
    }
}

function loadEntrees() {
    let entreesCategory = document.getElementById("entrees");
    entreesCategory.innerHTML = "";

    for (let i = 0; i < menu.Entrees.length; i++) {
        let option = document.createElement("option");
        option.text = menu.Entrees[i];
        entreesCategory.appendChild(option);
    }
}

function loadDesserts() {
    let dessertsCategory = document.getElementById("desserts");
    dessertsCategory.innerHTML = "";

    for (let i = 0; i < menu.Desserts.length; i++) {
        let option = document.createElement("option");
        option.text = menu.Desserts[i];
        dessertsCategory.appendChild(option);
    }
}
