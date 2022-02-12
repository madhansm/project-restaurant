//landing tab background
const backgroundEl = document.createElement("div");
backgroundEl.classList.add("landing-tab-background");

//landing tab starts here
let landingTabEl = document.createElement("div");
landingTabEl.classList.add("landing-tab");

//h1
const h1El = document.createElement("h1");
h1El.innerHTML = "We are Toit. <br> You should be too…";
landingTabEl.appendChild(h1El);

//landing tab description-text
let descriptionArray = [
    "Toit is a brew pub, brewing a revolutionary culture. <br>We started out as a sweet little Bengaluru brewing culture with the promise of some bodacious brews, fabulous foods and a supreme brew-pub experience.",
    "And that's exactly what we've brought to Mumbai & now to Pune!",
    "You can find us doing our thing on 100ft road Indiranagar in Bengaluru, in Lower Parel in Mumbai, and KalyaniNagar in Pune.. passing on our passion for beer to others.",
    "Come by. Try everything twice. Learn, love, linger, stagger, slur, whatever. This is a revolution, and we've got beer."
]

descriptionArray.forEach(description => {
    let paraEl = document.createElement("p");
    paraEl.innerHTML = description;
    landingTabEl.appendChild(paraEl);
});

const seeBeersEl = document.createElement("button");
seeBeersEl.setAttribute("id", "beers-btn");
seeBeersEl.innerHTML = "SEE OUR BEERS";

landingTabEl.appendChild(seeBeersEl);

backgroundEl.appendChild(landingTabEl)

export default backgroundEl;