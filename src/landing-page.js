import logo from'./logo.png';

//get content element from html
const contentEl = document.getElementById("content");

//create menu div
let menuEl = document.createElement("div");
menuEl.classList.add("menu");

//add logo to menu
const logoEl = document.createElement("img");
logoEl.setAttribute("id", "logo");
logoEl.src = logo;
menuEl.appendChild(logoEl);

//list of buttons/tabs to be displayed in the menu
let tabsList = ["BEERS", "FOOD & DRINKS", "KUDIX CLUB", "BREWERY TOURS", "BLOG", "PETS @ TOIT"];

//add list of buttons/tabs to menu
const tabsEl = document.createElement("ul");
tabsEl.classList.add("tabs");

//loop to display tabs list array
let tabsElementList = []; //to export for tab display purposes

tabsList.forEach(tab => {
    let buttonEl = document.createElement("button");

    tabsElementList.push(buttonEl);

    let buttonText = document.createTextNode(tab);
    buttonEl.append(buttonText);
    let listEl = document.createElement("li");
    listEl.appendChild(buttonEl);

    tabsEl.appendChild(listEl);
});

//append list to menu
menuEl.appendChild(tabsEl);

//add footer link
const footerEl = document.createElement("a");
footerEl.href = "https://github.com/madhansm";
footerEl.setAttribute("id", "footer");
const footerText = document.createTextNode("github.com/madhansm")
footerEl.append(footerText);

menuEl.appendChild(footerEl);

//append menu to  content
contentEl.appendChild(menuEl);

console.log("landing page executed");

//export content div to index.js
export {contentEl,tabsElementList};