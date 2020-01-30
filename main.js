function showContact() {
    const contactEl = document.getElementById("contact");
    contactEl.classList.add("show");
    document.getElementById('appearContactBtn').classList.add('hide');
    document.getElementById('appearContactBtn').classList.remove('show');
    window.scrollBy(0, 1000);
}

function scrollToPrices() {
    const yOffset = -160;
    const element = document.getElementById('prices');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });

}

function scrollToBenefits() {
    const yOffset = -160;
    const element = document.getElementById('benefit');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}

function scrollToContact() {
    const yOffset = -160;
    const element = document.getElementById('contact');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}

var pakket1Price = 10;
var pakket2Price = 30;
var pakket3Price = 60;

var pakket1Specs = ['Extra beveiliging tegen diefstal', 'Bescherming tegen het weer', 'Goedgekeurd door verzekering'];
var pakket2Specs = ['Extra beveiliging tegen diefstal', 'Bescherming tegen het weer', 'Goedgekeurd door verzekering', 'Ankerpunt aan de muur'];
var pakket3Specs = ['Extra beveiliging tegen diefstal', 'Bescherming tegen het weer', 'Goedgekeurd door verzekering', 'Ankerpunt aan de muur', '24/7 Camera toezicht'];
var params = window.location.search;
params = params.replace("?", "");

var paragraph = document.getElementById("page-title");

if (params === 'pakket1') {
    var pakket1Ul = document.getElementById("specs-list");
    var price_months = document.getElementById('price');
    price_months.textContent += pakket1Price;
    console.log(price_months);
    document.getElementById("label1").classList.add("label-active");
    document.getElementById("label2").classList.add("label-inactive");
    document.getElementById("label3").classList.add("label-inactive");
    

    pakket1Specs.forEach(function(p) {
        console.log(p);
        var li = document.createElement('li');
        li.setAttribute('class', 'item');

        pakket1Ul.appendChild(li);

        li.innerHTML = li.innerHTML + p;
    });

}

if (params === 'pakket2') {
    var pakket1Ul = document.getElementById("specs-list");
    var price_months = document.getElementById('price');
    price_months.textContent += pakket2Price;
    document.getElementById("label1").classList.add("label-inactive");
    document.getElementById("label2").classList.add("label-active");
    document.getElementById("label3").classList.add("label-inactive");
    pakket2Specs.forEach(function(p) {
        console.log(p);
        var li = document.createElement('li');
        li.setAttribute('class', 'item');

        pakket1Ul.appendChild(li);

        li.innerHTML = li.innerHTML + p;
    });
}

if (params === 'pakket3') {
    var pakket1Ul = document.getElementById("specs-list");
    var price_months = document.getElementById('price');
    price_months.textContent += pakket3Price;
    document.getElementById("label1").classList.add("label-inactive");
    document.getElementById("label2").classList.add("label-inactive");
    document.getElementById("label3").classList.add("label-active");

    pakket3Specs.forEach(function(p) {
        console.log(p);
        var li = document.createElement('li');
        li.setAttribute('class', 'item');
        pakket1Ul.appendChild(li);
        li.innerHTML = li.innerHTML + p;
    });
}

0
});

function showBenefit() {
    const contactEl = document.getElementById("benefit1");
    document.getElementById('benefit1-content').classList.toggle("show");
}
// Geholpen door Zenno Buinsma