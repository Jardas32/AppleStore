const carts = {
    "1" : 3,
    "2" : 2,
    "3" : 1,
    "4" : 4,
    "5" : 1,
    "6" : 1
};

const product = {
 "1" : {
    id: 1,
    img: 'https://inventstore.in/wp-content/uploads/2023/05/macbook-air-m1-space-grey.png',
    title: `MacBook`,
    price: 1699, 
    sale: 1299,
    button: '+',
},
"2" : {
    id: 2,
    img: 'https://pilulkacz.vshcdn.net/zoh4eiLi/IMG/86400/JenNq5zsfVsD7hI5yK9FJtKTnylH1LO9g8dyAB7qSkg/trim:0:ffffff,ff00ff/aHR0cHM6Ly9waWx1bGthLnMzLWNlbnRyYWwudnNob3N0aW5nLmNsb3VkL3BpbHVsa2EtY3ovZmlsZXMvaW1hZ2VzLzIwMjQtMTAvbWRfZTY5ZDU1ZDU4ZDg0MzU3ODljMjZkZjA3MTQ1N2VjODAucG5n.png',
    title: `Apple Watch`,
    price: 319, 
    sale: 279,
    button: '+',
},
"3" : {
    id: 3,
    img: 'https://help.apple.com/assets/66BB9A842FACACD88101EA82/66BB9A9039AEE352BC09069A/cs_CZ/fbac8523b0d81e806024f9d46cb3b976.png',
    title: `Mac Pro`,
    price: 2260, 
    sale: 1899,
    button: '+',
},
"4" : {
    id: 4,
    img: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111979_ipad-pro-12-2018.png',
    title: `iPad `,
    price: 779, 
    sale: 540,
    button: '+',
},
"5" : {
    id: 5,
    img: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png',
    title: `iPhone 15 Pro Max`,
    price: 1222,
    sale: 959,
    button: '+', 
},
"6" : {
    id: 6,
    img: 'https://help.apple.com/assets/673D1566902AEA8557045FB2/673D1574A739A4528A02AF54/cs_CZ/44f12072f9e693c3e200e13c0da7411f.png',
    title: `Apple AirPods`,
    price: 499,
    sale: 290,
    button: '+', 
}
};

// const container = document.querySelector(`.container`);

// function render() {
//        let totalprice = 0;
//        let totalcart = 0;
//        let out = `<table class="tab">`
//        out += `<tr>
//        <td></td>
//        <td colspan="2">Title</td>
//        <td>Price</td>
//        <td></td>
//        </tr>`
//     for (const id in carts) {
//        out += `<tr>`;
//        out += `<td><img class="imges" src="${product[id].img}"></td>`;
//        out += `<td><p class="ptitle">${product[id].title}</p></td>`;
//        out += `<td><button data-id="${id}" class="btminus">-</button> ${carts[id]} <button data-id="${id}" class="btplus">+</button></td>`;
//        out += `<td>${product[id].price*carts[id]} $</td>`;
//        out += `<td><button data-id="${id}" class="btadd">${product[id].button}</button></td>`;
//        out += `<td><button data-id="${id}" class="btdelet">X</button></td>`;
//        out += `</tr>`;
//        totalprice += carts[id]*product[id].price;
//        totalcart += carts[id];
//     }
//        out += `<p class="ptotalcart">${totalcart}</p>`;
//        out += `<tr>
//        <td colspan="3">Total :</td>
//        <td>${totalprice} $</td>
//        </tr>`;
//        out += `</table>`
//        container.innerHTML = out;
// }
// render();

// document.addEventListener(`click`, event => {
//     if(event.target.classList.contains('btplus')){
//        functionPlus(event.target.dataset.id);
//     }
//     if(event.target.classList.contains('btminus')) {
//         functionMinus(event.target.dataset.id);
//     }
//     if(event.target.classList.contains('btdelet')) {
//         functionDelete(event.target.dataset.id);
//     }
// })

// function functionPlus(id) {
//     carts[id]++;
//     render();
// }

// function functionMinus(id) {
//     carts[id]--;
//     if(carts[id] === 0) {
//         functionDelete(id);
//     }
//     render();
// }

// function functionDelete(id) {
//    delete carts[id];
//    render();
// }

              

const center = document.querySelector(`.center`);

function render() {
    //    let totalprice = 0;
    //    let totalcart = 0;
    
    for (const id in carts) {
       const newcart = document.createElement('div');
       newcart.setAttribute('class', 'card');
       newcart.innerHTML = `
       <div id="${product[id].id}"class="cart">  
       <div class="divscal">
       <img data-img="${id}" src="${product[id].img}" class="imges">
       </div>
       <p class="ptitle">${product[id].title}</p>
       <p class="price">${product[id].price} $</p>
       <button data-id="${id}" class="btadd">+</button>
       `
       center.append(newcart);

    }
}
render();


const btgrid = document.querySelector(`.btgrid`);
const cardgrids = document.querySelector(`.cardgrids`);
const products = document.querySelector(`.products`);
const btmod = document.querySelector(`.btmod`);
const darkmod = document.querySelector(`.darkmod`);
const container = document.querySelector(`.container`);
const columtry = document.querySelector('.columtry');
const cartset = document.querySelectorAll('.cart');
const cartStoreg = JSON.parse(localStorage.getItem(`cardd`)) || [];
const card = document.querySelector('.card');
const pcouns = document.querySelector('.pcouns');
const popup = document.querySelector('.popup');
pcouns.value = cartStoreg.length;


cartset.forEach((elem) => {
// console.dir(elem);
        const imge = elem.childNodes[1].childNodes[1].attributes.src.textContent;
        const title = elem.childNodes[3].innerHTML;
        const price = elem.childNodes[5].innerHTML;
        const idcart = elem.id;
        const btadd = elem.childNodes[7];
//  console.log(imge);
 btadd.addEventListener(`click`, () => {
  
    let number = parseInt(price.replace(/\s/g, ""), 10);
    const cartStoreg = localStorage.getItem(`cardd`) || "[]";
    const cardd = JSON.parse(cartStoreg);
    const car = {imge, title, number, idcart};
    const existingCardIndex = cardd.findIndex((item) => item.idcart === idcart);
    if (existingCardIndex !== -1) {
        popup.classList.add('openpop');
        cardd[existingCardIndex].number += number;
      // Увеличиваем количество
    } else {
      // Добавляем новую карточку
      cardd.push(car);
    }
    document.querySelector('.clospop').addEventListener(`click`, () => {
        popup.classList.remove('openpop')
    })
    localStorage.setItem(`cardd`, JSON.stringify(cardd));
    // location.reload();
     
})
}   
);

                    //    Darkmod

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

