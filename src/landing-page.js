//get content element from html
const contentEl = document.getElementById("content");

//create left column div
let leftColumnEl = document.createElement("div");
leftColumnEl.classList.add("left-column");

//add logo to left column
const logoEl = document.createElement("img");
logoEl.setAttribute("id", "logo");
logoEl.src = "./logo.png";
leftColumnEl.appendChild(logoEl);

//list of buttons/tabs to be displayed in the left column
let tabsList = ["BEERS", "FOOD & DRINKS", "KUDIX CLUB", "BREWERY TOURS", "BLOG", "PETS @ TOIT"];

//add list of buttons/tabs to left column
const tabsEl = document.createElement("ul");
tabsEl.classList.add("tabs");

//loop to display tabs list array
tabsList.forEach(tab => {
    let buttonEl = document.createElement("button");
    let buttonText = document.createTextNode(tab);
    buttonEl.append(buttonText);

    let listEl = document.createElement("li");
    listEl.appendChild(buttonEl);

    tabsEl.appendChild(listEl);
});

//append list to left column
leftColumnEl.appendChild(tabsEl);

//add footer link
const footerEl = document.createElement("a");
footerEl.href = "https://github.com/madhansm";
footerEl.setAttribute("id", "footer");
const footerText = document.createTextNode("\251github.com/madhansm")
footerEl.append(footerText);
leftColumnEl.appendChild(footerEl);

//append left column to  content
contentEl.appendChild(leftColumnEl);


//end of left column

//right column starts here
let rightColumnEl = document.createElement("div");
rightColumnEl.classList.add("right-column");

//h1
const h1El = document.createElement("h1");
h1El.innerHTML = "We are Toit. <br> You should be too…";
console.log(h1El);
rightColumnEl.appendChild(h1El);

//right column description-text
let descriptionArray = [
    "Toit is a brew pub, brewing a revolutionary culture. <br>We started out as a sweet little Bengaluru brewing culture with the promise of some bodacious brews, fabulous foods and a supreme brew-pub experience.",
    "And that's exactly what we've brought to Mumbai & now to Pune!",
    "You can find us doing our thing on 100ft road Indiranagar in Bengaluru, in Lower Parel in Mumbai, and KalyaniNagar in Pune.. passing on our passion for beer to others.",
    "Come by. Try everything twice. Learn, love, linger, stagger, slur, whatever. This is a revolution, and we've got beer."
]

descriptionArray.forEach(description => {
    let paraEl = document.createElement("p");
    paraEl.innerHTML = description;
    rightColumnEl.appendChild(paraEl);
});

const seeBeersEl = document.createElement("button");
seeBeersEl.setAttribute("id", "beers-btn");
seeBeersEl.innerHTML = "SEE OUR BEERS";
rightColumnEl.appendChild(seeBeersEl);
console.log(rightColumnEl);


//append right column to  content
contentEl.appendChild(rightColumnEl);


console.log("landing page executed");