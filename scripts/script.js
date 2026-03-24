// Pop-in on scroll animation
function initPopIn() {
	const popBlocks = document.querySelectorAll('.animate-pop-in');
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.2 });
	popBlocks.forEach(block => observer.observe(block));
}

function initHeaderMenu() {
	const hamburguer = document.getElementById('hamburger-menu');
	const navMenu = document.getElementById('nav-menu');
	const header = document.getElementById('header');
	if (!hamburguer || !navMenu || !header) return;

	hamburguer.addEventListener('click', () => {
		hamburguer.classList.toggle('open');
		navMenu.classList.toggle('open');
		const isOpen = hamburguer.classList.contains('open');
		hamburguer.setAttribute('aria-expanded', String(isOpen));
		document.body.classList.toggle('no-scroll', isOpen);
	});

	// Close menu on link click (mobile-friendly)
	const links = navMenu.querySelectorAll('a');
	links.forEach(link => {
		link.addEventListener('click', () => {
			hamburguer.classList.remove('open');
			navMenu.classList.remove('open');
			hamburguer.setAttribute('aria-expanded', 'false');
			document.body.classList.remove('no-scroll');
		});
	});

	window.addEventListener('scroll', () => {
		if (window.scrollY > 40) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	});
}

function initContactForm() {
	const contactForm = document.getElementById('contact-form');
	if (!contactForm) return;

	const successMessage = document.getElementById('form-success-message');
	const errorMessage = document.getElementById('form-error-message');
	const submitButton = document.getElementById('contact-form-submit');
	const defaultButtonLabel = submitButton ? submitButton.textContent : '';

	contactForm.addEventListener('submit', async (event) => {
		event.preventDefault();

		if (successMessage) {
			successMessage.classList.add('hidden');
		}

		if (errorMessage) {
			errorMessage.classList.add('hidden');
		}

		if (submitButton) {
			submitButton.disabled = true;
			submitButton.textContent = 'Bericht wordt verstuurd...';
			submitButton.classList.add('opacity-70', 'cursor-not-allowed');
		}

		try {
			const formData = new FormData(contactForm);
			const response = await fetch('https://formsubmit.co/ajax/info@foodandjoy.nl', {
				method: 'POST',
				body: formData,
				headers: {
					Accept: 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error('Form submission failed');
			}

			contactForm.reset();
			if (successMessage) {
				successMessage.classList.remove('hidden');
			}
		} catch (error) {
			if (errorMessage) {
				errorMessage.classList.remove('hidden');
			}
		} finally {
			if (submitButton) {
				submitButton.disabled = false;
				submitButton.textContent = defaultButtonLabel;
				submitButton.classList.remove('opacity-70', 'cursor-not-allowed');
			}
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
	initPopIn();
	initHeaderMenu();
	initContactForm();
});

