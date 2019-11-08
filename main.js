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

var pakket1Specs = ['Extra beveiliging tegen diefstal', 'Bescherming tegen het weer', 'Goedgekeurd door verzekering']
var pakket2Specs = ['Extra beveiliging tegen diefstal', 'Bescherming tegen het weer', 'Goedgekeurd door verzekering', 'Ankerpunt aan de muur']
var pakket3Specs = ['Extra beveiliging tegen diefstal', 'Bescherming tegen het weer', 'Goedgekeurd door verzekering', 'Ankerpunt aan de muur', '24/7 Camera toezicht']
var params = window.location.search;
params = params.replace("?", "");

var paragraph = document.getElementById("page-title");

// paragraph.textContent += params;

if (params === 'pakket1') {
    var pakket1Ul = document.getElementById("specs-list");
    var price_months = document.getElementById('price')
    price_months.textContent += pakket1Price;
    console.log(price_months);

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
    var price_months = document.getElementById('price')
    price_months.textContent += pakket2Price;
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
    var price_months = document.getElementById('price')
    price_months.textContent += pakket3Price;

    pakket3Specs.forEach(function(p) {
        console.log(p);
        var li = document.createElement('li');
        li.setAttribute('class', 'item');
        pakket1Ul.appendChild(li);
        li.innerHTML = li.innerHTML + p;
    });
}


function priceSelector() {
    var months = document.getElementById("priceSelector").value
    var priceValue = '';
    if (params === 'pakket1') {
        var oldPrice = pakket1Price;
        priceValue = pakket1Price * months
        var newPrice = parseInt(priceValue) + parseInt(oldPrice);
        console.log(newPrice);
        price_months.innerHTML = newPrice;
    }

    if (params === 'pakket2') {
        var oldPrice = pakket2Price;
        priceValue = pakket2Price * months
        var newPrice = parseInt(priceValue) + parseInt(oldPrice);
        console.log(newPrice);
        price_months.innerHTML = newPrice;
    }

    if (params === 'pakket3') {
        var oldPrice = pakket3Price;
        priceValue = pakket3Price * months
        var newPrice = parseInt(priceValue) + parseInt(oldPrice);
        console.log(newPrice);
        price_months.innerHTML = newPrice;
    }
}

function handleClick(myRadio) {
    alert('New value: ' + myRadio.value);
}

$(".benefit--row").click(function() {
    var content = $(this).next();
    $(content).toggle();
    $(content).next().toggle();
    return false;
});

function showBenefit() {
    const contactEl = document.getElementById("benefit1");
    document.getElementById('benefit1-content').classList.toggle("show");
}
// Geholpen door Zenno Buinsma