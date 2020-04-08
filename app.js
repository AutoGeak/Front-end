if(document.querySelector('.page-home')){
// Scroll stuff
const priceButton = document.querySelector('#price-btn')
const benefitButton = document.querySelector('#benefit-btn')
const contactButton = document.querySelector('#contact-btn')


priceButton.addEventListener('click',function(){
	scrollToSection('prices')
})
benefitButton.addEventListener('click',function(){
	scrollToSection('benefit')
})
contactButton.addEventListener('click',function(){
	scrollToSection('appearContactBtn')
})

function scrollToSection( id ){
	const yOffset = document.querySelector('section > header').clientHeight
	const section = document.querySelector('#' + id)
	const y = section.getBoundingClientRect().top
	window.scrollTo({
		top: y - yOffset,
		behavior: 'smooth'
	})
}

// Voordelen

//Hier maak ik de constante genaamd dealitems aan en geef ik dezelfde waarde als de benefit--row-container class vanuit mijn index.html pagina vervolgens zet ik deze in een list zodat ik deze kan doorlopen met een for loop.
const dealItems = document.querySelectorAll('.benefit--row-container')

// Hier gebruik ik een for loop om de 5 elementen in mij lijst een click function mee tegeven en deze op hide te zetten. 
for (var i = 0 ; i < dealItems.length; i++) {
	//Hier haal ik het item op waar de loop nu bij is
	var item = dealItems[i]
	//Hier maak ik een Eventlistner aan die iets moet triggeren bij een click
	item.addEventListener('click',function(){
		//Dit is het gene wat getriggerd moet worden in dit geval moet de class juist weergeven of verborgen worden
		this.classList.toggle('hide')
	})
}

// contact button

const contactFormButton = document.querySelector('#appearContactBtn')
const contactForm = document.querySelector('#contact')

contactFormButton.addEventListener('click',function(){
	this.classList.toggle('hide')
	contactForm.classList.toggle('show')
})
}

if(document.querySelector('.page-prices')){
	const packgeBtn = document.querySelector('#label1')
	const packgeBtnA = document.querySelector('#label2')
	const packgeBtnB = document.querySelector('#label3')
	const packageList =  document.querySelector('ol')
	const pricingLabel = document.querySelector('#price span')

	packgeBtn.addEventListener('click',function(){
		packageList.className = 'package-1'
		pricingLabel.innerHTML = 50
	})
	packgeBtnA.addEventListener('click',function(){
		packageList.className = 'package-2'
		pricingLabel.innerHTML = 45
	})
	packgeBtnB.addEventListener('click',function(){
		packageList.className = ''
		pricingLabel.innerHTML = 40
	})
}
// Geholpen door Zenno Bruinsma
