const korz = document.querySelector('.korzina');
const cartstoreg = JSON.parse(localStorage.getItem(`cardd`)) || [];
const titlekorz = document.querySelector('.titlekorz');
const cartStoreg = JSON.parse(localStorage.getItem(`cardd`)) || [];
const pcouns = document.querySelector('.pcouns');
const btgrid = document.querySelector(`.btgrid`);
const cardgrids = document.querySelector(`.cardgrids`);
const products = document.querySelector(`.products`);
const btmod = document.querySelector(`.btmod`);
const darkmod = document.querySelector(`.darkmod`);
const container = document.querySelector(`.container`);
const columtry = document.querySelector('.columtry');
const centers = document.querySelector(`.centers`);
const px = document.querySelector(`.px`);
pcouns.value = cartStoreg.length;


if(cartstoreg <= 0) {
    titlekorz.innerHTML = 'Your cart is empty';
}

function rendercart () {
     korz.innerHTML = ``;
    if (cartstoreg) {
        cartstoreg.forEach((el, index) => {
            const {imge, title, number, idcart} = el;
            const korzCart = document.createElement('div');
            korzCart.setAttribute('class', 'korzCart');
            korzCart.innerHTML = `
            <div id="${idcart}" card-count="0" class="cards">  
            <div class="divscal">
            <img src="${imge}" class="imges">
            </div>
            <p class="title">${title}</p>
            <p class="price">${number} $</p>
            <button card-count="${index}" data-id="0"  class="btc">X</button>
            `
        korz.append(korzCart);
        })
    } 
   
};
rendercart();

const btclosed = document.querySelector(`.btc`);

document.onclick = (event) => {
    const cardPosition = event.target.getAttribute("card-count");
     console.log(cartstoreg);
    if (event.target.classList.contains(`btc`) && cardPosition !== null) {
        cartstoreg.splice(cardPosition, 1);
       console.log(cartstoreg)
        localStorage.setItem(`cardd`, JSON.stringify(cartstoreg));
        rendercart();
        location.reload();
     
    }
};


            //    Thenks


const thenks = document.querySelector('.thenks');
const closedthenks = document.querySelector('.btclosed')

document.addEventListener('click', event => {

    if (event.target.classList.contains('submit')) {
        event.preventDefault();
        thenks.classList.add('openThenks')
    }
});
 
document.addEventListener(`click`, event => {
    if(event.target.classList.contains('px')) {
        thenks.classList.remove('openThenks')
    }
});



                     //    DarkMod

function darkmods() {
    const darkMod = localStorage.getItem('darkm') == 'true';
    const darksmodspan = localStorage.getItem('dark') == 'true';
    const darksbg = localStorage.getItem('bgdark') == 'true';
    const bgtrans = localStorage.getItem(`centertrans`) == `true`;

    localStorage.setItem(`centertrans`, !bgtrans);
    centers.classList.toggle('backtransparent', !bgtrans);
    localStorage.setItem('bgdark', !darksbg);
    darkmod.classList.toggle('active', !darksbg);
    localStorage.setItem('dark', !darksmodspan);
    btmod.classList.toggle('darksModbt', !darksmodspan);
    localStorage.setItem('darkm', !darkMod);
    container.classList.toggle('darksMod', !darkMod);
};   

darkmod.addEventListener(`click`, function() {
    darkmods();
});

document.addEventListener(`DOMContantLoaded`, loadPage());

function loadPage() {
    centers.classList.toggle('backtransparent', localStorage.getItem('centertrans') == 'true');
    darkmod.classList.toggle('active', localStorage.getItem('bgdark') == 'true');
    btmod.classList.toggle('darksModbt', localStorage.getItem('dark') == 'true');
    container.classList.toggle('darksMod', localStorage.getItem('darkm') == 'true');
};

