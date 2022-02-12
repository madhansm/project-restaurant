import imgDarkKnight from './beer-images/beer-dark-knight.jpg';
import imgColonial from './beer-images/beer-colonial.jpg';
import imgRed from './beer-images/beer-red.jpg';
import imgWeiss from './beer-images/beer-weiss.jpg';
import imgTintin from './beer-images/beer-tintin.jpg';
import imgBlonde from './beer-images/beer-blonde.jpg';


//background
const backgroundEl = document.createElement("div");
backgroundEl.classList.add("beers-background");

//beer prices
let beerPrices = "Full Pint (500ml) -Rs.255 | Half Pint (250ml) -Rs. 255";
let priceEl = document.createElement("div");
priceEl.classList.add("price-list");
priceEl.append(beerPrices);

backgroundEl.appendChild(priceEl);


//beers list
const beersTabEl = document.createElement("div")
beersTabEl.classList.add("beers-tab");

let beerList = [];

//beer obj constructor
function constructBeerMenu(name, image, description) {
    const nameEl = document.createElement("div");
    nameEl.classList.add('beer-name');
    nameEl.append(name);

    const imageEl = document.createElement("img");
    imageEl.classList.add("beer-image");
    imageEl.src = image;

    const descriptionEl = document.createElement("div");
    descriptionEl.classList.add("beer-description");
    descriptionEl.append(description);
    
    return {
        nameEl, imageEl, descriptionEl
    }
}

//add beer list to array
beerList.push(constructBeerMenu ("DARK KNIGHT", imgDarkKnight, "A very dark, full-bodied, roasty, malty ale"));
beerList.push(constructBeerMenu("COLONIAL", imgColonial, "A bitter, highly hopped, English style ale"));
beerList.push(constructBeerMenu("RED", imgRed, "A full bodied, Irish red ale"));
beerList.push(constructBeerMenu("WEISS", imgWeiss, "A full bodied, refreshing, Bavarian"));
beerList.push(constructBeerMenu("TINTIN", imgTintin, "A refreshing, Belgian-style fruity ale"));
beerList.push(constructBeerMenu("BLONDE", imgBlonde, "A light, crisp and refreshing ale"));

//push beer list to DOM
beerList.forEach(beer => {
    
    const beerItemEl = document.createElement("div");
    beerItemEl.classList.add("beer-item")
    beerItemEl.appendChild(beer.imageEl);
    
    beerItemEl.appendChild(beer.nameEl);
    beerItemEl.appendChild(beer.descriptionEl)

    beersTabEl.appendChild(beerItemEl);
});

//push all to DOM
backgroundEl.appendChild(beersTabEl);

console.log("beers script executed");

export default backgroundEl;