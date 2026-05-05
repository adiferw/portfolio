// Theme toggle: toggles .dark-mode on <body> and persists choice in localStorage
(function(){
	const toggleBtn = document.getElementById('theme-toggle');
	if (!toggleBtn) return;
	const img = toggleBtn.querySelector('img');
	const SUN_SRC = 'assets/images/light-dark/light-mode.png';
	const MOON_SRC = 'assets/images/light-dark/night-mode.png';

	function applyTheme(theme){
		if(theme === 'dark'){
			document.body.classList.add('dark-mode');
			if(img) img.src = SUN_SRC; // show light sun in dark mode
			localStorage.setItem('theme','dark');
		} else {
			document.body.classList.remove('dark-mode');
			if(img) img.src = MOON_SRC; // show dark moon in light mode
			localStorage.setItem('theme','light');
		}
	}

	const saved = localStorage.getItem('theme');
	const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	applyTheme(saved || (prefersDark ? 'dark' : 'light'));

	toggleBtn.addEventListener('click', ()=>{
		const isDark = document.body.classList.contains('dark-mode');
		applyTheme(isDark ? 'light' : 'dark');
	});
	// Mobile nav toggle
	const navToggle = document.getElementById('nav-toggle');
	const nav = document.querySelector('nav');
	if(navToggle && nav){
		navToggle.addEventListener('click', ()=>{
			const expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', String(!expanded));
			nav.classList.toggle('open');
		});
		// close mobile menu when a nav link is clicked
		nav.querySelectorAll('a').forEach(a=>{
			a.addEventListener('click', ()=>{
				if(nav.classList.contains('open')){
					nav.classList.remove('open');
					navToggle.setAttribute('aria-expanded','false');
				}
			});
		});
	}
})();
