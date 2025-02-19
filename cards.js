

        //    Добавление товара в корзину

// const center = document.querySelector(`.center`);

// function render() {
//     //    let totalprice = 0;
//     //    let totalcart = 0;
    
//     for (const id in carts) {
//        const newcart = document.createElement('div');
//        newcart.setAttribute('class', 'card');
//        newcart.innerHTML = `
//        <div id="${product[id].id}"class="cart">  
//        <div class="divscal">
//        <img data-img="${id}" src="${product[id].img}" class="imges">
//        </div>
//        <p class="ptitle">${product[id].title}</p>
//        <p class="price">${product[id].price} $</p>
//        <button data-id="${id}" class="btadd">+</button>
//        `
//        center.append(newcart);

//     }
// }
// render();


            //   Добавление товара в корзину

const products = document.querySelector(`.products`);
const btgrid = document.querySelector(`.grid`);          
const cardgrids = document.querySelector(`.cardgrids`);
const btmod = document.querySelector(`.btmod`);
const darkmod = document.querySelector(`.darkmod`);
const container = document.querySelector(`.container`);
const cartset = document.querySelectorAll('.card');
const cartStoreg = JSON.parse(localStorage.getItem(`cardd`)) || [];
const pcouns = document.querySelector('.pcouns');
const popup = document.querySelector('.popup');
pcouns.value = cartStoreg.length;

cartset.forEach((elem) => {
// console.dir(elem);
        const imge = elem.childNodes[1].childNodes[1].attributes.src.value;
        const title = elem.childNodes[5].innerHTML;
        const price = elem.childNodes[7].innerHTML;
        const idcart = elem.id;
        const btadd = elem.childNodes[9];
//  console.log(price);
 btadd.addEventListener(`click`, () => {
  
    let number = parseInt(price.replace(/\s/g, ""), 10);
    const cartStoreg = localStorage.getItem(`cardd`) || "[]";
    const cardd = JSON.parse(cartStoreg);
    const car = {imge, title, number, idcart};
    const existingCardIndex = cardd.findIndex((item) => item.idcart === idcart);
    if (existingCardIndex !== -1) {
        alert(`You already have this product in your cart!`)
        cardd[existingCardIndex].number += number;
      // Увеличиваем количество
    } else {
      // Добавляем новую карточку
        cardd.push(car);
    }

    localStorage.setItem(`cardd`, JSON.stringify(cardd));
    location.reload();
})
}   
);
 
                        // Тёмная тема

function darkmods() {
    const darkMod = localStorage.getItem('darkm') == 'true';
    const darksmodspan = localStorage.getItem('dark') == 'true';
    const darksbg = localStorage.getItem('bgdark') == 'true';

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
    darkmod.classList.toggle('active', localStorage.getItem('bgdark') == 'true');
    btmod.classList.toggle('darksModbt', localStorage.getItem('dark') == 'true');
    container.classList.toggle('darksMod', localStorage.getItem('darkm') == 'true');
};


function gridsColum() {
     const widthp = localStorage.getItem('widthspr') == 'true';
     const cartcolum = localStorage.getItem(`gridscolum`) == `true`;


    localStorage.setItem('widthspr', !widthp);
    products.classList.toggle('producwidth', !widthp);
    localStorage.setItem('gridscolum', !cartcolum);
    cardgrids.classList.toggle('columgrids', !cartcolum);
};   

btgrid.addEventListener('click', function() {
     gridsColum();
});

document.addEventListener(`DOMContantLoade`, loadsPage());

function loadsPage() {
    products.classList.toggle('producwidth', localStorage.getItem('widthspr') == 'true');
    cardgrids.classList.toggle('columgrids', localStorage.getItem('gridscolum') == 'true');
};
     

