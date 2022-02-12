import './style.css';

import {contentEl, tabsElementList} from './landing-page.js';
import landingTabEl from './landing-tab.js';
import beersTabEl from './beers-tab.js';
import foodEl from './food-drinks.js';
import kudixEl from './kudix-club.js';

//landing page tab as deafult
let tabToBeDisplayed = landingTabEl;

contentEl.appendChild(tabToBeDisplayed);

//link logo to home page
const logo = document.getElementById('logo');
logo.addEventListener("click", () => {
    contentEl.removeChild(tabToBeDisplayed);
    tabToBeDisplayed = landingTabEl;
    contentEl.appendChild(tabToBeDisplayed);
});

//link to see our beers btn
let beersBtn = document.getElementById("beers-btn");
beersBtn.addEventListener("click", ()=>{
    contentEl.removeChild(tabToBeDisplayed);
    tabToBeDisplayed = beersTabEl;
    contentEl.appendChild(tabToBeDisplayed);
})

//tab to display
let pageArray = [beersTabEl, foodEl, kudixEl];

for (let index = 0; index < tabsElementList.length; index++) {
    const tab = tabsElementList[index];
    tab.addEventListener("click", ()=> {
        contentEl.removeChild(tabToBeDisplayed);
        tabToBeDisplayed = pageArray[index];
        contentEl.appendChild(tabToBeDisplayed);
    })
}