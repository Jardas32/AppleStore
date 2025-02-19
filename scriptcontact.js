
const btgrid = document.querySelector(`.btgrid`);
const products = document.querySelector(`.products`);
const btmod = document.querySelector(`.btmod`);
const darkmod = document.querySelector(`.darkmod`);
const container = document.querySelector(`.container`);
const cartset = document.querySelectorAll('.cart');
const cartStoreg = JSON.parse(localStorage.getItem(`cardd`)) || [];
const pcouns = document.querySelector('.pcouns');
pcouns.value = cartStoreg.length;


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


                //    Animations

let Callback = function(entirest, observer) {
            entirest.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('animation');
                }
            });
}

let observer = new IntersectionObserver(Callback);

let targets = document.querySelectorAll(`.anim`);
targets.forEach(targe =>  {
     observer.observe(targe); 
}); 





