
  	function showContact() {
  		const contactEl = document.getElementById("contact");
  		contactEl.classList.add("show");
  		document.getElementById('appearContactBtn').classList.add('hide');
  		window.scrollBy(0, 1000); // Scroll 100px to the right


  	}
	function scrollToPrices() {
		const yOffset = -130; 
		const element = document.getElementById('prices');
		const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({top: y, behavior: 'smooth'});

	}

	function scrollToBenefits() {
		const yOffset = -130; 
		const element = document.getElementById('benefit');
		const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({top: y, behavior: 'smooth'});
	}

	function scrollToContact() {
		const yOffset = -130; 
		const element = document.getElementById('contact');
		const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({top: y, behavior: 'smooth'});
	}